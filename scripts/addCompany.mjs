#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import * as readline from 'node:readline';

const REQUIRED_ENV = ['VITE_SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'];
const ENV_FILES = ['.env.local', '.env'];

function parseEnv(content) {
    const lines = content.split(/\r?\n/);

    for (const line of lines) {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith('#')) {
            continue;
        }

        const eqIndex = trimmed.indexOf('=');

        if (eqIndex === -1) {
            continue;
        }

        const key = trimmed.slice(0, eqIndex).trim();
        const rawValue = trimmed.slice(eqIndex + 1).trim();
        const value = rawValue.replace(/^"|"$/g, '').replace(/^'|'$/g, '');

        if (!(key in process.env)) {
            process.env[key] = value;
        }
    }
}

async function loadEnvFiles() {
    for (const file of ENV_FILES) {
        const filePath = resolve(process.cwd(), file);

        try {
            const content = await readFile(filePath, 'utf8');
            parseEnv(content);
        } catch (error) {
            if (error.code !== 'ENOENT') {
                console.warn(`[env] Unable to read ${file}: ${error.message}`);
            }
        }
    }
}

function ensureEnv() {
    const missing = REQUIRED_ENV.filter((name) => !process.env[name] || !process.env[name].trim());

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
}

function question(rl, query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

function slugify(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

async function getCompanies(client) {
    const { data, error } = await client.from('companies').select('slug, name');
    if (error) throw new Error(`Failed to fetch companies: ${error.message}`);
    return data;
}

async function main() {
    try {
        await loadEnvFiles();
        ensureEnv();

        const url = process.env.VITE_SUPABASE_URL;
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
        const storageBase = `${url.replace(/\/+$/, '')}/storage/v1/object/public/assets`;

        const client = createClient(url, serviceKey, {
            auth: {
                persistSession: false,
            },
        });

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        console.log('\n🏢 Adicionar Nova Empresa ao Supabase\n');
        console.log('═'.repeat(50));

        // Mostrar empresas existentes
        const companies = await getCompanies(client);
        console.log('\n📋 Empresas existentes:');
        companies.forEach((company, index) => {
            console.log(`   ${index + 1}. ${company.name} (${company.slug})`);
        });

        console.log('\n📝 Nova Empresa:\n');

        const name = await question(rl, 'Nome da empresa: ');

        // Sugerir slug baseado no nome
        const suggestedSlug = slugify(name);
        console.log(`\n💡 Slug sugerido: ${suggestedSlug}`);
        const useSlug = await question(rl, 'Usar este slug? (s/n): ');

        let slug;
        if (useSlug.toLowerCase() === 's') {
            slug = suggestedSlug;
        } else {
            slug = await question(rl, 'Digite o slug manualmente: ');
        }

        // Verificar se slug já existe
        const slugExists = companies.some(c => c.slug === slug);
        if (slugExists) {
            console.log('\n❌ Erro: Este slug já existe!');
            rl.close();
            return;
        }

        console.log('\n🖼️  Logo da Empresa:\n');
        console.log(`💡 O arquivo deve estar em: public/assets/companies/icon-${slug}-white.svg`);
        console.log(`💡 Ou você pode especificar o nome do arquivo manualmente`);

        const useDefaultIcon = await question(rl, `\nUsar icon-${slug}-white.svg? (s/n): `);

        let iconName;
        if (useDefaultIcon.toLowerCase() === 's') {
            iconName = `icon-${slug}-white.svg`;
        } else {
            iconName = await question(rl, 'Nome do arquivo do ícone: ');
        }

        const imageUrl = `${storageBase}/companies/${iconName}`;

        // Montar o objeto da empresa
        const company = {
            slug,
            name,
            image_url: imageUrl,
        };

        console.log('\n\n═'.repeat(50));
        console.log('📦 Empresa a ser inserida:\n');
        console.log(JSON.stringify(company, null, 2));
        console.log('\n═'.repeat(50));

        const confirm = await question(rl, '\n✅ Confirma a inserção? (s/n): ');

        if (confirm.toLowerCase() === 's') {
            const { error } = await client.from('companies').insert([company]);

            if (error) {
                throw new Error(`Failed to insert company: ${error.message}`);
            }

            console.log('\n✅ Empresa adicionada com sucesso!');
            console.log(`\n💡 Agora você pode usar "${name}" ao adicionar projetos!\n`);
        } else {
            console.log('\n❌ Operação cancelada.\n');
        }

        rl.close();
    } catch (error) {
        console.error('\n❌ Erro:', error.message);
        process.exitCode = 1;
    }
}

main();
