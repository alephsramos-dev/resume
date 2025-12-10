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

async function getCompanies(client) {
    const { data, error } = await client.from('companies').select('slug, name');
    if (error) throw new Error(`Failed to fetch companies: ${error.message}`);
    return data;
}

function formatDate(dateStr) {
    // Converte DD/MM/YYYY para YYYY-MM-DD
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
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

        console.log('\n🚀 Adicionar Novo Projeto ao Supabase\n');
        console.log('═'.repeat(50));

        // Buscar empresas disponíveis
        const companies = await getCompanies(client);
        console.log('\n📋 Empresas disponíveis:');
        companies.forEach((company, index) => {
            console.log(`   ${index + 1}. ${company.name} (${company.slug})`);
        });

        // Coletar informações básicas
        console.log('\n📝 Informações Básicas:\n');

        const companyIndex = await question(rl, 'Número da empresa: ');
        const selectedCompany = companies[parseInt(companyIndex) - 1];

        if (!selectedCompany) {
            throw new Error('Empresa inválida selecionada');
        }

        const slug = await question(rl, 'Slug do projeto (ex: meu-projeto): ');
        const title = await question(rl, 'Título do projeto: ');
        const siteType = await question(rl, 'Tipo do site (Landing Page/Institucional): ');

        console.log('\n🖼️  Imagens e URLs:\n');
        const imageName = await question(rl, 'Nome do arquivo de banner (ex: banner-projeto.png): ');
        const imageUrl = `${storageBase}/banners/${imageName}`;
        const imageCompanyUrl = `${storageBase}/companies/${selectedCompany.slug === 'unity-company' ? 'icon-unitycompany-white.svg' : `icon-${selectedCompany.slug}-white.svg`}`;

        const urlPage = await question(rl, 'URL do site: ');
        const githubUrl = await question(rl, 'URL do GitHub (opcional, Enter para pular): ') || 'https://github.com/alephsramos-dev';

        console.log('\n🎨 Visual e Estilo:\n');
        const popupContent = await question(rl, 'Texto do popup (Tendência/Novidade/Fábrica/etc, Enter para pular): ') || null;

        // Cores padrão se não quiser customizar
        const useDefaultColors = await question(rl, 'Usar cores padrão? (s/n): ');
        let popupBg, popupBorder, popupColor, siteBg, siteBorder, siteColor;

        if (useDefaultColors.toLowerCase() === 's') {
            popupBg = '#ffffff60';
            popupBorder = '#ffffff80';
            popupColor = '#ffffff';
            siteBg = '#ffffff20';
            siteBorder = '#ffffff20';
            siteColor = '#ffffff';
        } else {
            console.log('\n🎨 Cores do Popup:');
            popupBg = await question(rl, 'Background (ex: #ffffff60): ');
            popupBorder = await question(rl, 'Border (ex: #ffffff80): ');
            popupColor = await question(rl, 'Color (ex: #ffffff): ');
            console.log('\n🎨 Cores do Site:');
            siteBg = await question(rl, 'Background (ex: #ffffff20): ');
            siteBorder = await question(rl, 'Border (ex: #ffffff20): ');
            siteColor = await question(rl, 'Color (ex: #ffffff): ');
        }

        console.log('\n📅 Detalhes do Projeto:\n');
        const projectDate = await question(rl, 'Data do projeto (DD/MM/YYYY): ');
        const duration = await question(rl, 'Duração em horas (ex: 120): ');
        const platform = await question(rl, 'Plataforma (ex: Código): ');
        const country = await question(rl, 'País (ex: Brasil): ');

        console.log('\n📝 Descrição:\n');
        const description = await question(rl, 'Descrição curta (uma linha): ');

        console.log('\n💻 Tecnologias:\n');
        console.log('Digite as tecnologias separadas por vírgula');
        console.log('Exemplos: react, javascript, html5, css3, firebase, supabase, vite, figma, n8n, vercel');
        const tecnologiasInput = await question(rl, 'Tecnologias: ');
        const tecnologias = tecnologiasInput.split(',').map(t => t.trim().toLowerCase());

        console.log('\n🔧 Stack (mesmas tecnologias com detalhes):\n');
        const stack = [];

        const techColors = {
            react: '#61DAFB',
            javascript: '#F7DF1E',
            html5: '#E34F26',
            html: '#E34F26',
            css3: '#1572B6',
            css: '#1572B6',
            firebase: '#FFCA28',
            supabase: '#3ECF8E',
            vite: '#646CFF',
            figma: '#a259ff',
            n8n: '#EA4B71',
            vercel: '#ffffff',
            github: '#fafbfc',
            emotion: '#ff4785',
            hostgator: '#229ad0',
        };

        for (const tech of tecnologias) {
            const techName = tech.charAt(0).toUpperCase() + tech.slice(1);
            const color = techColors[tech.toLowerCase()] || '#ffffff';
            stack.push({
                techName: techName,
                tecnologias: [techName],
                color: color
            });
        }

        console.log('\n📄 Descrição Completa:\n');
        console.log('Cole a descrição completa HTML (termine com uma linha vazia):');

        let fullDescriptionLines = [];
        let emptyLineCount = 0;

        const readMultiline = () => {
            return new Promise((resolve) => {
                const onLine = (line) => {
                    if (line.trim() === '') {
                        emptyLineCount++;
                        if (emptyLineCount >= 2) {
                            rl.off('line', onLine);
                            resolve();
                        }
                    } else {
                        emptyLineCount = 0;
                        fullDescriptionLines.push(line);
                    }
                };
                rl.on('line', onLine);
            });
        };

        await readMultiline();
        const fullDescription = fullDescriptionLines.join('\n').replace(/{{BASE}}/g, `${storageBase}/`);

        // Buscar company_id
        const { data: companyData, error: companyError } = await client
            .from('companies')
            .select('id')
            .eq('slug', selectedCompany.slug)
            .single();

        if (companyError) {
            throw new Error(`Failed to find company: ${companyError.message}`);
        }

        // Montar o objeto do projeto
        const project = {
            slug,
            company_id: companyData.id,
            title,
            image_url: imageUrl,
            popup_content: popupContent,
            site_type: siteType,
            image_company_url: imageCompanyUrl,
            company_name: selectedCompany.name,
            tecnologias,
            stack,
            project_date: formatDate(projectDate),
            duration: parseInt(duration),
            platform,
            country,
            description,
            url_page: urlPage,
            full_description: fullDescription,
            github_url: githubUrl,
            popup_bg: popupBg,
            popup_border: popupBorder,
            popup_color: popupColor,
            site_bg: siteBg,
            site_border: siteBorder,
            site_color: siteColor,
        };

        console.log('\n\n═'.repeat(50));
        console.log('📦 Projeto a ser inserido:\n');
        console.log(JSON.stringify(project, null, 2));
        console.log('\n═'.repeat(50));

        const confirm = await question(rl, '\n✅ Confirma a inserção? (s/n): ');

        if (confirm.toLowerCase() === 's') {
            const { error } = await client.from('projects').insert([project]);

            if (error) {
                throw new Error(`Failed to insert project: ${error.message}`);
            }

            console.log('\n✅ Projeto adicionado com sucesso!\n');
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
