#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'node:url';
import { dirname, extname, posix, relative, resolve } from 'node:path';
import { constants as fsConstants } from 'node:fs';
import { access, readFile, readdir } from 'node:fs/promises';

const REQUIRED_ENV = ['VITE_SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'];
const DEFAULT_BUCKET = process.env.SUPABASE_STORAGE_BUCKET ?? 'assets';
const ASSETS_ROOT = resolve(process.cwd(), 'src', 'assets');

const ENV_FILES = ['.env.local', '.env'];

function parseEnv(content) {
    const lines = content.split(/\r?\n/);

    lines.forEach((line) => {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith('#')) {
            return;
        }

        const eqIndex = trimmed.indexOf('=');

        if (eqIndex === -1) {
            return;
        }

        const key = trimmed.slice(0, eqIndex).trim();
        const rawValue = trimmed.slice(eqIndex + 1).trim();
        const value = rawValue.replace(/^"|"$/g, '').replace(/^'|'$/g, '');

        if (!(key in process.env)) {
            process.env[key] = value;
        }
    });
}

async function loadEnvFiles() {
    await Promise.all(ENV_FILES.map(async (file) => {
        const filePath = resolve(process.cwd(), file);

        try {
            const content = await readFile(filePath, 'utf8');
            parseEnv(content);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.warn(`[env] Unable to read ${file}: ${error.message}`);
            }
        }
    }));
}

async function ensureEnv() {
    const missing = REQUIRED_ENV.filter((name) => !process.env[name] || !process.env[name].trim());

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
}

function getMimeType(filePath) {
    const ext = extname(filePath).toLowerCase();

    switch (ext) {
        case '.jpg':
        case '.jpeg':
            return 'image/jpeg';
        case '.png':
            return 'image/png';
        case '.webp':
            return 'image/webp';
        case '.gif':
            return 'image/gif';
        case '.svg':
            return 'image/svg+xml';
        case '.avif':
            return 'image/avif';
        case '.mp4':
            return 'video/mp4';
        case '.json':
            return 'application/json';
        case '.webm':
            return 'video/webm';
        case '.mp3':
            return 'audio/mpeg';
        case '.woff':
            return 'font/woff';
        case '.woff2':
            return 'font/woff2';
        case '.ttf':
            return 'font/ttf';
        default:
            return 'application/octet-stream';
    }
}

async function gatherFiles(baseDir) {
    const entries = await readdir(baseDir, { withFileTypes: true });
    const files = [];

    await Promise.all(entries.map(async (entry) => {
        const entryPath = resolve(baseDir, entry.name);

        if (entry.isDirectory()) {
            const nested = await gatherFiles(entryPath);
            files.push(...nested);
            return;
        }

        if (!entry.isFile()) {
            return;
        }

        if (entry.name.startsWith('.')) {
            return;
        }

        files.push(entryPath);
    }));

    return files;
}

async function ensureBucket(client, bucket) {
    const { data: buckets, error } = await client.storage.listBuckets();

    if (error) {
        throw error;
    }

    const exists = buckets?.some((item) => item.name === bucket);

    if (!exists) {
        const { error: createError } = await client.storage.createBucket(bucket, {
            public: true,
            fileSizeLimit: '50mb',
        });

        if (createError) {
            throw createError;
        }

        console.log(`Created bucket "${bucket}" as public.`);
        return;
    }

    const { error: updateError } = await client.storage.updateBucket(bucket, {
        public: true,
    });

    if (updateError) {
        console.warn(`[storage] Unable to confirm bucket visibility for "${bucket}":`, updateError.message);
        return;
    }

    console.log(`Bucket "${bucket}" already exists.`);
}

function resolveUploadPath(filePath) {
    const relativePath = relative(ASSETS_ROOT, filePath);
    return posix.normalize(relativePath.split('\\').join('/'));
}

async function uploadFile(client, bucket, filePath) {
    const storagePath = resolveUploadPath(filePath);
    const buffer = await readFile(filePath);
    const contentType = getMimeType(filePath);

    const { error } = await client.storage
        .from(bucket)
        .upload(storagePath, buffer, {
            cacheControl: '31536000',
            contentType,
            upsert: true,
        });

    if (error) {
        throw new Error(`Failed to upload ${storagePath}: ${error.message}`);
    }

    return storagePath;
}

async function main() {
    try {
        await loadEnvFiles();
        await ensureEnv();

        try {
            await access(ASSETS_ROOT, fsConstants.R_OK);
        } catch (error) {
            throw new Error(`Assets directory not found or unreadable: ${ASSETS_ROOT}`);
        }

        const url = process.env.VITE_SUPABASE_URL;
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        const bucket = DEFAULT_BUCKET;

        const client = createClient(url, serviceKey, {
            auth: {
                persistSession: false,
            },
        });

        await ensureBucket(client, bucket);

        const files = await gatherFiles(ASSETS_ROOT);

        if (files.length === 0) {
            console.log('No files found under src/assets. Nothing to upload.');
            return;
        }

        console.log(`Uploading ${files.length} file(s) to storage bucket "${bucket}"...`);

        for (const filePath of files) {
            const storagePath = await uploadFile(client, bucket, filePath);
            console.log(`✔ Uploaded ${storagePath}`);
        }

        const publicBase = `${url.replace(/\/+$/, '')}/storage/v1/object/public/${bucket}`;
        console.log('\nUpload complete. Public base URL:');
        console.log(publicBase);
        console.log('\nExample full URL:');
        console.log(`${publicBase}/services/example.webp`);
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    main();
}
