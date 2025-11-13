#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

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

async function truncateTables(client) {
    const tables = [
        'tech_icons',
        'benefits',
        'assessments',
        'stack_data',
        'services',
        'projects',
        'companies',
    ];

    for (const table of tables) {
        const { error } = await client.from(table).delete().neq('id', '00000000-0000-0000-0000-000000000000');

        if (error) {
            throw new Error(`Failed to truncate ${table}: ${error.message}`);
        }
    }
}

function buildDatasets(storageBase) {
    const storageUrl = (path) => `${storageBase}/${path}`;
    const applyBase = (html) => html.replace(/{{BASE}}/g, `${storageBase}/`);

    const companies = [
        { slug: 'unity-company', name: 'Unity Company', image_url: storageUrl('companies/icon-unitycompany-white.svg') },
        { slug: 'steel-conecta', name: 'Steel Conecta', image_url: storageUrl('companies/icon-steelconecta-white.svg') },
        { slug: 'fast-sistemas-construtivos', name: 'Fast Sistemas', image_url: storageUrl('companies/icon-fastsistemasconstrutivos-white.svg') },
        { slug: 'pousada-le-ange', name: 'Pousada Le Ange', image_url: storageUrl('companies/icon-pousadaleange-white.svg') },
        { slug: 'fast-homes', name: 'Fast Homes', image_url: storageUrl('companies/icon-fasthomes-white.svg') },
        { slug: 'nova-metalica', name: 'Nova Metálica', image_url: storageUrl('companies/icon-novametalica-white.svg') },
        { slug: 'fast-obras', name: 'Fast Obras', image_url: storageUrl('companies/icon-fastobras-white.svg') },
        { slug: 'rio-flex', name: 'Rio Flex', image_url: storageUrl('companies/icon-rioflex-white.svg') },
        { slug: 'eu-yago-lopes', name: 'euYagoLopes', image_url: storageUrl('companies/icon-euyagolopes-white.svg') },
        { slug: 'kdea-construtora', name: "K'dea Construtora", image_url: storageUrl('companies/icon-kdea-white.svg') },
        { slug: 'eco-frame', name: 'Eco Frame', image_url: storageUrl('companies/icon-ecoframe-white.svg') },
    ];

    const projects = [
        {
            slug: 'euyagolopes',
            company_slug: 'eu-yago-lopes',
            title: 'EuYagoLopes',
            image_url: storageUrl('banners/landingpage-euyagolopes.png'),
            popup_content: 'Tendência',
            site_type: 'Landing Page',
            image_company_url: storageUrl('companies/icon-euyagolopes-white.svg'),
            company_name: 'euYagoLopes',
            tecnologias: ['javascript', 'html5', 'css3', 'github', 'hostgator', 'figma'],
            stack: [
                { techName: 'Javascript', tecnologias: ['Javascript'], color: '#F7DF1E' },
                { techName: 'HTML5', tecnologias: ['HTML5'], color: '#E34F26' },
                { techName: 'CSS3', tecnologias: ['CSS3'], color: '#1572B6' },
                { techName: 'GitHub', tecnologias: ['GitHub'], color: '#fafbfc' },
                { techName: 'HostGator', tecnologias: ['HostGator'], color: '#229ad0' },
                { techName: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
            ],
            project_date: '2025-05-16',
            duration: 80,
            platform: 'Código',
            country: 'Brasil',
            description: 'Projetada para transmitir sensações de alto valor e profissionalismo, fortalecendo a credibilidade e a percepção do público-alvo.',
            url_page: 'https://www.euyagolopes.com.br',
            full_description: applyBase(`
<p>
    Toda a sua estrutura tem como foco ser minimalista e funcional, com uma navegação intuitiva e moderna, juntando o apelo visual e a eficiência para converter visitantes em clientes.
</p>

<img src="{{BASE}}portfolio/euyagolopes/euyagolopes-section-depoimentos.png" alt="euyagolopes-by-aleph-ramos-section-depoimentos" />
<span>euYagoLopes | © Todos os direitos reservados | Acesso em: <a href="https://www.euyagolopes.com.br/#depoimentos" target="_blank">https://www.euyagolopes.com.br/#depoimentos</a></span>

<h3>Depoimentos</h3>
<p>
    Montada estrategicamente para exibir avaliações reais de clientes satisfeitos, aumentando a confiança dos visitantes e incentivando conversões.
</p>

<img src="{{BASE}}portfolio/euyagolopes/euyagolopes-section-portfolio.png" alt="euyagolopes-by-aleph-ramos-section-portfolio" />
<span>euYagoLopes | © Todos os direitos reservados | Acesso em: <a href="https://www.euyagolopes.com.br/#portfolio" target="_blank">https://www.euyagolopes.com.br/#portfolio</a></span>
<h3>Portfolio</h3>
<p>
    Uma seção dedicada para mostrar os melhores trabalhos e projetos realizados, destacando habilidades e experiências relevantes para potenciais clientes.
</p>

<img src="{{BASE}}portfolio/euyagolopes/euyagolopes-section-calendary.png" alt="euyagolopes-by-aleph-ramos-section-calendario" />
<span>euYagoLopes | © Todos os direitos reservados | Acesso em: <a href="https://www.euyagolopes.com.br/#eventos" target="_blank">https://www.euyagolopes.com.br/#eventos</a></span>
<h3>Calendario</h3>
<p>
    Um calendário com o cronograma das próximas palestras e eventos, facilitando o planejamento e a participação dos interessados.
</p>

<h3>Pontos positivos</h3>

<ul>
    <li>Aumento da taxa de conversão</li>
    <li>Exibição de depoimentos de clientes satisfeitos</li>
    <li>Aumento da credibilidade com relação ao Yago</li>
    <li>Facilidade de visualização dos eventos/palestras</li>
</ul>
      `),
            github_url: 'https://github.com/alephsramos-dev',
            popup_bg: '#ba000010',
            popup_border: '#ba000020',
            popup_color: '#ba0000',
            site_bg: '#ba000020',
            site_border: '#ba000020',
            site_color: '#ba0000',
        },
        {
            slug: 'kdea-construtora',
            company_slug: 'kdea-construtora',
            title: "K'dea Construtora",
            image_url: storageUrl('banners/landingpage-kdea.png'),
            popup_content: null,
            site_type: 'Landing Page',
            image_company_url: storageUrl('companies/icon-kdea-white.svg'),
            company_name: "K'dea Construtora",
            tecnologias: ['javascript', 'html5', 'css3', 'github', 'figma'],
            stack: [
                { techName: 'Javascript', tecnologias: ['Javascript'], color: '#F7DF1E' },
                { techName: 'HTML5', tecnologias: ['HTML5'], color: '#E34F26' },
                { techName: 'CSS3', tecnologias: ['CSS3'], color: '#1572B6' },
                { techName: 'GitHub', tecnologias: ['GitHub'], color: '#fafbfc' },
                { techName: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
            ],
            project_date: '2025-03-11',
            duration: 60,
            platform: 'Código',
            country: 'Brasil',
            description: 'Desenvolvida para destacar os diferenciais da construtora, obras, serviços e projetos, transmitindo confiança e profissionalismo aos visitantes.',
            url_page: 'https://www.kdea.com.br',
            full_description: applyBase(`
<p> Toda a sua estrutura tem como foco a construção a seco (Steel Frame e Drywall), destacando tecnologia, sustentabilidade e eficiência, com uma navegação moderna e visual que demonstra os projetos e a expertise da construtora. </p>

<img src="{{BASE}}portfolio/kdea/kdea-section-sobre.png" alt="kdea-construtora-section-sobre-nos" /> <span>K'dea Construtora | © Todos os direitos reservados | Acesso em: <a href="https://kdea.com.br/#sobre" target="_blank">https://kdea.com.br/#sobre</a></span>

<h3>Sobre Nós</h3> <p> Uma seção que detalha a especialização da construtora em construção a seco, apresentando a equipe e marcos importantes, como a participação em projetos de grande nome (Museu do Amanhã, hangar do Neymar Jr., etc.). </p>

<img src="{{BASE}}portfolio/kdea/kdea-section-projects.png" alt="kdea-construtora-section-projetos" /> <span>K'dea Construtora | © Todos os direitos reservados | Acesso em: <a href="https://kdea.com.br/#projetos" target="_blank">https://kdea.com.br/#projetos</a></span> <h3>Projetos</h3> <p> Uma galeria visual dedicada a mostrar os projetos recentes e de maior destaque realizados pela construtora, evidenciando a qualidade e a diversidade dos trabalhos com Steel Frame. </p>

<img src="{{BASE}}portfolio/kdea/kdea-section-revist.png" alt="kdea-construtora-section-revista" /> <span>K'dea Construtora | © Todos os direitos reservados | Acesso em: <a href="https://kdea.com.br/#revista" target="_blank">https://kdea.com.br/#revista</a></span> <h3>Revista K'dea</h3> <p> Uma seção de conteúdo próprio onde a empresa disponibiliza sua revista (K'dea 360), oferecendo insights, inspirações e detalhes sobre suas obras e o mercado da construção. </p>

<h3>Pontos positivos</h3>

<ul> <li>Foco em sustentabilidade e redução de desperdício</li> <li>Alta performance de isolamento acústico</li> <li>Redução de custos e tempo de obra (Construção a seco)</li> <li>Projetos com design inovador e funcional</li> <li>Equipe de arquitetos e construtores qualificados</li> <li>Planejamento e organização detalhados em todas as etapas</li> </ul>
      `),
            github_url: 'https://github.com/alephsramos-dev',
            popup_bg: '#ffffff60',
            popup_border: '#ffffff80',
            popup_color: '#ffffff',
            site_bg: '#ffcb2120',
            site_border: '#ffcb2120',
            site_color: '#ffcb21',
        },
        {
            slug: 'chales-fast-homes',
            company_slug: 'fast-homes',
            title: 'Chalés Fast Homes',
            image_url: storageUrl('banners/landingpage-fasthomes.png'),
            popup_content: null,
            site_type: 'Landing Page',
            image_company_url: storageUrl('companies/icon-fasthomes-white.svg'),
            company_name: 'Fast Homes',
            tecnologias: ['react', 'n8n', 'vite', 'emotion', 'javascript', 'vercel', 'figma'],
            stack: [
                { techName: 'Vite', tecnologias: ['Vite'], color: '#646CFF' },
                { techName: 'React', tecnologias: ['React'], color: '#61DAFB' },
                { techName: 'n8n', tecnologias: ['n8n'], color: '#EA4B71' },
                { techName: 'Javascript', tecnologias: ['Javascript'], color: '#F7DF1E' },
                { techName: 'HTML5', tecnologias: ['HTML5'], color: '#E34F26' },
                { techName: 'CSS3', tecnologias: ['CSS3'], color: '#1572B6' },
                { techName: 'Emotion', tecnologias: ['Emotion'], color: '#ff4785' },
                { techName: 'Vercel', tecnologias: ['Vercel'], color: '#ffffff' },
                { techName: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
            ],
            project_date: '2025-09-21',
            duration: 120,
            platform: 'Código',
            country: 'Brasil',
            description: 'Desenvolvida para destacar os chalés modulares, enfatizando a rapidez na construção, sustentabilidade e design inovador para atrair clientes interessados.',
            url_page: 'https://www.chale.fasthomes.com.br',
            full_description: applyBase(`
<p> Toda a sua estrutura tem como foco a captação de investidores para chalés (como Airbnb), destacando o modelo de negócio, a rapidez da construção em Steel Frame e o alto potencial de lucratividade. </p>

<img src="{{BASE}}portfolio/chale-fasthomes/chale-fasthomes-section-airbnb.png" alt="fasthomes-chales-section-modelos" /> 
<span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://chale.fasthomes.com.br" target="_blank">https://chale.fasthomes.com.br</a></span> 
                        
<h3>Modelos</h3> 
                        
<p> Apresenta os projetos estratégicos disponíveis (ex: Chalé Araucária e Chalé Buriti), detalhando as informações técnicas e internas de cada modelo para diferentes segmentos de investimento. </p>

<img src="{{BASE}}portfolio/chale-fasthomes/chale-fasthomes-section-grafic.png" alt="fasthomes-chales-section-diferenciais" /> 
<span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://chale.fasthomes.com.br" target="_blank">https://chale.fasthomes.com.br</a></span> 
<h3>Diferenciais (Metodologia)</h3> 
<p> Detalha o processo simplificado em etapas (Escolha, Planejamento, Execução), enfatizando a velocidade (4x mais rápido que o tradicional) e a transparência do processo construtivo. </p>

<img src="{{BASE}}portfolio/chale-fasthomes/chale-fasthomes-section-faq-form.png" alt="fasthomes-chales-section-faq" /> 
<span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://chale.fasthomes.com.br" target="_blank">https://chale.fasthomes.com.br</a></span> 
<h3>FAQ (Perguntas Frequentes)</h3> 
<p> Uma seção dedicada a quebrar objeções comuns de investidores, respondendo perguntas sobre financiamento, durabilidade do Steel Frame, prazos e isolamento termoacústico. </p>

<h3>Pontos positivos</h3>

<ul> <li>Foco claro em investimento e lucratividade (Airbnb, Booking)</li> <li>Construção 4x mais rápida que a alvenaria (prazo de 4 meses)</li> <li>Alta durabilidade e garantia estrutural de 10 anos</li> <li>Eficiência termoacústica superior (Certificação Rw 45dB)</li> <li>Processo simplificado e transparente para o cliente</li> <li>Facilidade de financiamento (aceito pela CAIXA e bancos)</li> </ul>
      `),
            github_url: 'https://github.com/alephsramos-dev',
            popup_bg: '#ffffff60',
            popup_border: '#ffffff80',
            popup_color: '#ffffff',
            site_bg: '#a8573120',
            site_border: '#a8573120',
            site_color: '#a85731',
        },
        {
            slug: 'pisos-vinilicos-fast',
            company_slug: 'fast-sistemas-construtivos',
            title: 'Pisos Vinílicos Fast',
            image_url: storageUrl('banners/landingpage-pisos-fastsistemasconstrutivos.png'),
            popup_content: null,
            site_type: 'Landing Page',
            image_company_url: storageUrl('companies/icon-fastsistemasconstrutivos-white.svg'),
            company_name: 'Fast Sistemas',
            tecnologias: ['javascript', 'html5', 'n8n', 'css3', 'github', 'figma'],
            stack: [
                { techName: 'Javascript', tecnologias: ['Javascript'], color: '#F7DF1E' },
                { techName: 'HTML5', tecnologias: ['HTML5'], color: '#E34F26' },
                { techName: 'CSS3', tecnologias: ['CSS3'], color: '#1572B6' },
                { techName: 'n8n', tecnologias: ['n8n'], color: '#EA4B71' },
                { techName: 'GitHub', tecnologias: ['GitHub'], color: '#fafbfc' },
                { techName: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
            ],
            project_date: '2025-06-12',
            duration: 40,
            platform: 'Código',
            country: 'Brasil',
            description: 'Feito para apresentar o novo lançamento de pisos vinílicos da Fast Sistemas Construtivos, destacando suas vantagens, aplicações e diferenciais no mercado de construção.',
            url_page: 'https://www.pisos.fastsistemasconstrutivos.com.br',
            full_description: applyBase(`
<p> Toda a sua estrutura tem como foco a captação de leads (B2C e B2B) para pisos vinílicos da marca Biancogres, destacando a sofisticação, praticidade de instalação e o conforto termoacústico dos produtos. </p>

<img src="{{BASE}}portfolio/fast-pisos/fast-pisos-section-comparation.png" alt="fast-pisos-section-comparativo-vinilico-vs-tradicional" /> <span>Fast Pisos | © Todos os direitos reservados | Acesso em: <a href="https://pisos.fastsistemasconstrutivos.com.br" target="_blank">https://pisos.fastsistemasconstrutivos.com.br</a></span>

<h3>Piso Vinílico vs. Piso Tradicional</h3> <p> Uma seção comparativa que destaca as vantagens do vinílico (composição em PVC, instalação rápida e limpa, manutenção fácil) em relação aos pisos tradicionais, como cerâmicos e laminados. </p>

<img src="{{BASE}}portfolio/fast-pisos/fast-pisos-section-products.png" alt="fast-pisos-section-produtos-biancogres" /> <span>Fast Pisos | © Todos os direitos reservados | Acesso em: <a href="https://pisos.fastsistemasconstrutivos.com.br" target="_blank">https://pisos.fastsistemasconstrutivos.com.br</a></span> <h3>Nossos Produtos</h3> <p> Galeria visual dos tipos de pisos vinílicos disponíveis (Amadeirado, Mármore, Cimento Queimado, etc.), com um formulário para baixar o catálogo completo, capturando o lead do visitante. </p>

<img src="{{BASE}}portfolio/fast-pisos/fast-pisos-section-form.png" alt="fast-pisos-section-formulario-orcamento" /> <span>Fast Pisos | © Todos os direitos reservados | Acesso em: <a href="https://pisos.fastsistemasconstrutivos.com.br" target="_blank">https://pisos.fastsistemasconstrutivos.com.br</a></span> <h3>Orçamento</h3> <p> A principal seção de conversão do site, com formulários de contato estrategicamente posicionados para que o usuário solicite um orçamento de forma rápida e direta. </p>

<h3>Pontos positivos</h3>

<ul> <li>Foco claro na captação de leads qualificados para orçamento</li> <li>Design sofisticado e moderno (focado na marca Biancogres)</li> <li>Instalação rápida, limpa e sobre pisos existentes</li> <li>Produto com alto conforto térmico e acústico (redução de ruídos)</li> <li>Manutenção prática e alta resistência à umidade e arranhões</li> <li>Uso de automação (n8n) para integrar os formulários de orçamento direto ao CRM da empresa, agilizando o atendimento.</li> </ul>
      `),
            github_url: 'https://github.com/alephsramos-dev',
            popup_bg: '#ffffff60',
            popup_border: '#ffffff80',
            popup_color: '#ffffff',
            site_bg: '#a67f5620',
            site_border: '#a67f5620',
            site_color: '#a67f56',
        },
        {
            slug: 'steel-conecta',
            company_slug: 'steel-conecta',
            title: 'Steel Conecta',
            image_url: storageUrl('banners/landingpage-steelconecta.png'),
            popup_content: 'Novidade',
            site_type: 'Landing Page',
            image_company_url: storageUrl('companies/icon-steelconecta-white.svg'),
            company_name: 'Steel Conecta',
            tecnologias: ['react', 'vite', 'n8n', 'emotion', 'javascript', 'vercel', 'figma'],
            stack: [
                { techName: 'React', tecnologias: ['React'], color: '#61DAFB' },
                { techName: 'Vite', tecnologias: ['Vite'], color: '#646CFF' },
                { techName: 'Emotion', tecnologias: ['Emotion'], color: '#ff4785' },
                { techName: 'Vercel', tecnologias: ['Vercel'], color: '#ffffff' },
                { techName: 'Javascript', tecnologias: ['Javascript'], color: '#F7DF1E' },
                { techName: 'n8n', tecnologias: ['n8n'], color: '#EA4B71' },
                { techName: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
            ],
            project_date: '2025-10-28',
            duration: 80,
            platform: 'Código',
            country: 'Brasil',
            description: 'Apresenta a nova plataforma de conexão entre fornecedores e clientes no setor de construção em Steel Frame, facilitando negócios e parcerias.',
            url_page: 'https://www.steelconecta.com.br',
            full_description: applyBase(`
<p> Toda a sua estrutura tem como foco ser um ecossistema B2B para o mercado de Steel Frame, conectando profissionais e empresas a métodos, logística de materiais (Fast) e oportunidades de negócios (geração de leads). </p>

<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-services.png" alt="steel-conecta-section-servicos-ecossistema" /> <span>Steel Conecta | © Todos os direitos reservados | Acesso em: <a href="https://steelconecta.com.br" target="_blank">https://steelconecta.com.br</a></span>

<h3>Serviços do Ecossistema</h3> <p> Uma seção que detalha os pilares da plataforma: "Aprenda a projetar", "Planejamento", "Fornecemos materiais" e "Receba leads qualificados", mostrando a solução completa para profissionais do setor. </p>

<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-companys.png" alt="steel-conecta-section-parceiros-fast-unity" /> <span>Steel Conecta | © Todos os direitos reservados | Acesso em: <a href="https://steelconecta.com.br" target="_blank">https://steelconecta.com.br</a></span> <h3>Parcerias de Alto Nível</h3> <p> Apresenta as empresas que compõem o ecossistema (Fast Sistemas Construtivos, Fast Homes, Unity Company, Nova Metálica), detalhando o papel de cada uma na entrega de materiais, projetos e marketing. </p>

<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-01.png" alt="steel-conecta-section-formulario-e-faq" /> 
<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-02.png" alt="steel-conecta-section-formulario-e-faq" /> 
<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-form.png" alt="steel-conecta-section-formulario-e-faq" /> 
                        
<span>Steel Conecta | © Todos os direitos reservados | Acesso em: <a href="https://steelconecta.com.br" target="_blank">https://steelconecta.com.br</a></span> <h3>Inscrição</h3> <p> A principal área de conversão, combinando um formulário de inscrição ("Participar da Steel Conecta")</p>

<h3>Pontos positivos</h3>

<ul> <li>Ecossistema B2B completo (método, materiais e leads)</li> <li>Foco claro na geração de leads qualificados para os parceiros</li> <li>Integração com marcas fortes do setor (Fast, Nova Metálica)</li> <li>Fornecimento de materiais com preços exclusivos de fábrica</li> <li>Uso de automação (n8n) para integrar os formulários de inscrição direto ao CRM da empresa, agilizando a qualificação dos leads.</li> </ul>
      `),
            github_url: 'https://github.com/alephsramos-dev',
            popup_bg: '#ffffff60',
            popup_border: '#ffffff80',
            popup_color: '#ffffff',
            site_bg: '#1d537d20',
            site_border: '#1d537d20',
            site_color: '#1d537d',
        },
        {
            slug: 'lp-pousada-le-ange',
            company_slug: 'pousada-le-ange',
            title: 'LP Pousada Le Ange',
            image_url: storageUrl('banners/landingpage-leange.png'),
            popup_content: null,
            site_type: 'Landing Page',
            image_company_url: storageUrl('companies/icon-pousadaleange-white.svg'),
            company_name: 'Pousada Le Ange',
            tecnologias: ['javascript', 'html5', 'css3', 'github', 'figma'],
            stack: [
                { techName: 'Javascript', tecnologias: ['Javascript'], color: '#F7DF1E' },
                { techName: 'HTML5', tecnologias: ['HTML5'], color: '#E34F26' },
                { techName: 'CSS3', tecnologias: ['CSS3'], color: '#1572B6' },
                { techName: 'GitHub', tecnologias: ['GitHub'], color: '#fafbfc' },
                { techName: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
            ],
            project_date: '2025-06-03',
            duration: 40,
            platform: 'Código',
            country: 'Brasil',
            description: 'Desenvolvida para promover a Pousada Le Ange, destacando suas acomodações, localização privilegiada e serviços exclusivos para atrair turistas e viajantes.',
            url_page: 'https://www.mp.pousadaleange.com.br',
            full_description: applyBase(`
<p> Toda a sua estrutura tem como foco a captação de leads e reservas diretas, destacando o luxo, as experiências exclusivas e a alta gastronomia da pousada para um público de alto padrão. </p>

<img src="{{BASE}}portfolio/lp-leange/lp-leange-section-hospedagem.png" alt="pousada-le-ange-section-acomodacoes" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://mp.pousadaleange.com.br/#acomodacoes" target="_blank">https://mp.pousadaleange.com.br/#acomodacoes</a></span>

<h3>Acomodações</h3> <p> Uma galeria visual de alto impacto que apresenta as suítes e bangalôs, detalhando o luxo, conforto e vistas que cada um oferece para atrair e converter reservas de alto valor. </p>

<img src="{{BASE}}portfolio/lp-leange/lp-leange-section-exp.png" alt="pousada-le-ange-section-experiencias-e-gastronomia" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://mp.pousadaleange.com.br/#experiencias" target="_blank">https://mp.pousadaleange.com.br/#experiencias</a></span> <h3>Experiências e Gastronomia</h3> <p> Destaca os serviços exclusivos, como jantares românticos, passeios, spa ou a culinária do restaurante, posicionando a pousada como um destino completo e não apenas uma hospedagem. </p>

<img src="{{BASE}}portfolio/lp-leange/lp-leange-section-unidades.png" alt="pousada-le-ange-section-unidades-mp-e-mar" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span> <h3>Unidades (MP e MAR)</h3> <p> Uma seção clara que distingue as duas unidades (Morro de São Paulo e MAR), permitindo ao visitante navegar para a experiência específica que ele procura, seja em MP ou na praia. </p>

<h3>Pontos positivos</h3>

<ul> <li>Foco claro em reservas diretas e captação de leads de luxo</li> <li>Design visualmente imersivo com fotos e vídeos de alta qualidade</li> <li>Destaque para experiências exclusivas (gastronomia, passeios, spa)</li> <li>Navegação clara e distinta entre as duas unidades (Morro de São Paulo e MAR)</li> <li>Seções de "Acomodações" bem detalhadas para impulsionar a decisão de reserva</li> <li>Múltiplos pontos de CTA (Call to Action) focados em "Reservar Agora"</li> </ul>
      `),
            github_url: 'https://github.com/alephsramos-dev',
            popup_bg: '#ffffff60',
            popup_border: '#ffffff80',
            popup_color: '#ffffff',
            site_bg: '#1d537d20',
            site_border: '#1d537d20',
            site_color: '#1d537d',
        },
        {
            slug: 'nova-metalica',
            company_slug: 'nova-metalica',
            title: 'Nova Metálica',
            image_url: storageUrl('banners/institucional-novametalica.png'),
            popup_content: 'Fábrica',
            site_type: 'Institucional',
            image_company_url: storageUrl('companies/icon-novametalica-white.svg'),
            company_name: 'Nova Metálica',
            tecnologias: ['react', 'vite', 'firebase', 'n8n', 'emotion', 'vercel', 'figma'],
            stack: [
                { techName: 'React', tecnologias: ['React'], color: '#61DAFB' },
                { techName: 'Vite', tecnologias: ['Vite'], color: '#646CFF' },
                { techName: 'Firebase', tecnologias: ['Firebase'], color: '#FFCA28' },
                { techName: 'n8n', tecnologias: ['n8n'], color: '#EA4B71' },
                { techName: 'Emotion', tecnologias: ['Emotion'], color: '#ff4785' },
                { techName: 'Vercel', tecnologias: ['Vercel'], color: '#ffffff' },
                { techName: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
            ],
            project_date: '2025-04-20',
            duration: 280,
            platform: 'Código',
            country: 'Brasil',
            description: 'Uma fábrica de estruturas metálicas especializada em Steel Frame, oferecendo soluções completas para construção rápida, sustentável e eficiente.',
            url_page: 'https://www.novametalica.com.br',
            full_description: applyBase(`
<p> Toda a sua estrutura é projetada para se posicionar como a principal autoridade e fábrica B2B de perfis para construção a seco no Rio de Janeiro. O site não vende apenas produtos; ele vende confiança, tecnologia e parceria para construtoras, engenheiros e profissionais do setor. O foco é claro: captar leads B2B qualificados, oferecendo soluções de engenharia (como o sistema FRAMECAD) e garantindo a procedência do material (aço 100% nacional). </p>

<img src="{{BASE}}portfolio/nova-metalica/novametalica-section-sobre.png" alt="nova-metalica-section-institucional-sobre-missao-visao" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#sobre" target="_blank">https://novametalica.com.br/#sobre</a></span>

<h3>Institucional e Proposta de Valor</h3> <p> Mais do que um simples "Sobre Nós", o site dedica uma seção robusta para estabelecer sua credibilidade como a "primeira fábrica de perfis para Steel Frame e Drywall do Rio de Janeiro". Detalha Missão, Visão e Valores (Inovação, Qualidade, Sustentabilidade), gerando uma forte sensação de confiança e solidez para parceiros B2B. </p>

<img src="{{BASE}}portfolio/nova-metalica/novametalica-section-products.png" alt="nova-metalica-section-produtos-steel-frame-drywall-stick-engenheirado" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#produtos" target="_blank">https://novametalica.com.br/#produtos</a></span> <h3>Soluções Construtivas (Produtos)</h3> <p> O núcleo comercial do site. É claramente segmentado entre Steel Frame e Drywall. O site vai além de listar "guias e montantes"; ele diferencia suas duas principais ofertas: Perfis Stick (padrão, para corte em obra) e Perfis Engenheirados (customizados de fábrica com projeto), atendendo a diferentes níveis de complexidade de obra. </p>

<img src="{{BASE}}portfolio/nova-metalica/novametalica-section-diferenciais.png" alt="nova-metalica-section-diferenciais-tecnologia-framecad-aco-nacional" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#diferenciais" target="_blank">https://novametalica.com.br/#diferenciais</a></span> <h3>Diferenciais Tecnológicos (O "Porquê")</h3> <p> Esta é a principal seção de autoridade. A empresa justifica seu valor destacando: 1) Tecnologia de Ponta (máquinas FRAMECAD e Metalso) que garantem precisão e menor taxa de aço; 2) Qualidade do Material (uso exclusivo de "aço 100% nacional" e "normatizado", citando parceiros como a CSN); e 3) Serviços de Engenharia (oferece o serviço de cálculo estrutural, um imenso valor agregado). </p>

<img src="{{BASE}}portfolio/nova-metalica/novametalica-section-form.png" alt="nova-metalica-section-formulario-orcamento-b2b" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#orcamento" target="_blank">https://novametalica.com.br/#orcamento</a></span> <h3>Captação de Leads (Orçamento)</h3> <p> A conclusão lógica de toda a jornada do usuário. O site não possui um "carrinho" de compras, mas sim múltiplos CTAs ("Solicitar Orçamento") que levam a um formulário B2B detalhado. O objetivo não é vender online, mas capturar projetos e iniciar uma negociação comercial qualificada. </p>

<h3>Pontos positivos</h3>

<ul> <li>Posicionamento B2B impecável: A linguagem, o design e as ofertas são 100% focados em construtoras, engenheiros e arquitetos.</li> <li>Forte Geração de Autoridade: O site não diz apenas "somos bons", ele <i>prova</i> com "Tecnologia FRAMECAD", "Aço 100% Nacional" e "Perfis Normatizados".</li> <li>Diferenciação de Serviço: Oferecer "Cálculo Estrutural" e "Perfis Engenheirados" eleva a empresa de "fábrica" para "parceira de engenharia".</li> <li>Jornada do Usuário Clara: O site educa (Sobre/Diferenciais), apresenta a solução (Produtos) e converte (Orçamento).</li> <li>Otimizado para Captação de Leads: Múltiplos CTAs claros e um formulário B2B focado em projetos, não em produtos avulsos.</li> <li>Automação (Back-end): Uso de automação, como n8n, para integrar os formulários de orçamento diretamente ao CRM, garantindo um atendimento B2B rápido e eficiente.</li> </ul>
      `),
            github_url: 'https://github.com/alephsramos-dev',
            popup_bg: '#ffffff60',
            popup_border: '#ffffff80',
            popup_color: '#ffffff',
            site_bg: '#189dd620',
            site_border: '#189dd620',
            site_color: '#189dd6',
        },
        {
            slug: 'fast-homes',
            company_slug: 'fast-homes',
            title: 'Fast Homes',
            image_url: storageUrl('banners/institucional-fasthomes.png'),
            popup_content: 'Inovador',
            site_type: 'Institucional',
            image_company_url: storageUrl('companies/icon-fasthomes-white.svg'),
            company_name: 'Fast Homes',
            tecnologias: ['react', 'vite', 'supabase', 'n8n', 'emotion', 'vercel', 'figma'],
            stack: [
                { techName: 'React', tecnologias: ['React'], color: '#61DAFB' },
                { techName: 'Vite', tecnologias: ['Vite'], color: '#646CFF' },
                { techName: 'Supabase', tecnologias: ['Supabase'], color: '#3ECF8E' },
                { techName: 'n8n', tecnologias: ['n8n'], color: '#EA4B71' },
                { techName: 'Emotion', tecnologias: ['Emotion'], color: '#ff4785' },
                { techName: 'Vercel', tecnologias: ['Vercel'], color: '#ffffff' },
                { techName: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
            ],
            project_date: '2025-07-12',
            duration: 420,
            platform: 'Código',
            country: 'Brasil',
            description: 'Casas modulares em Steel Frame, oferecendo soluções rápidas, sustentáveis e personalizadas para construção residencial de alta qualidade.',
            url_page: 'https://www.fasthomes.com.br',
            full_description: applyBase(`
<p> Toda a sua estrutura tem como foco se posicionar como um ecossistema completo da construção em Steel Frame. O portal atua como um hub central que se ramifica para atender três públicos principais: o Cliente Final (B2C) que sonha com a casa própria, o Arquiteto/Engenheiro (B2B) que busca um parceiro de execução, e o Investidor (B2B) que procura novos negócios (como o funil dos chalés). </p>

<img src="{{BASE}}portfolio/fasthomes/fasthomes-section-catalog.png" alt="fasthomes-section-catalogo-b2c-modelos-prontos" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/catalogo" target="_blank">https://fasthomes.com.br/catalogo</a></span>

<h3>Catálogo B2C (Modelos Prontos)</h3> <p> Esta é a principal vitrine para o cliente final. Uma galeria completa com filtros (área, quartos, pavimentos) que apresenta os modelos de casas prontas (Acácia, Cajueiro, Araucária). O objetivo é converter o sonho do cliente B2C em um lead qualificado, facilitando a visualização do produto final. </p>

<img src="{{BASE}}portfolio/fasthomes/fasthomes-section-projects.png" alt="fasthomes-section-seu-projeto-b2b-arquitetos" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/seu-projeto" target="_blank">https://fasthomes.com.br/seu-projeto</a></span> <h3>Seu Projeto (Funil B2B - Arquitetos)</h3> <p> Uma seção dedicada a arquitetos, engenheiros e clientes que já possuem um projeto personalizado. A Fast Homes não se limita aos seus modelos e se posiciona como a parceira tecnológica (em Steel Frame) para "dar vida" ao projeto do profissional, captando um lead B2B de execução. </p>

<img src="{{BASE}}portfolio/fasthomes/fasthomes-section-parcerias.png" alt="fasthomes-section-sobre-nos-e-parcerias-de-autoridade" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/sobre-nos" target="_blank">https://fasthomes.com.br/sobre-nos</a></span> <h3>Sobre Nós e Parcerias (Autoridade)</h3> <p> A seção de geração de confiança. Explica a metodologia (rapidez, sustentabilidade, tecnologia) e, o mais importante, ancora a marca em seus parceiros estratégicos de peso (como Nova Metálica, Saint-Gobain e Fast Sistemas Construtivos), transmitindo credibilidade e solidez de ecossistema. </p>

<img src="{{BASE}}portfolio/fasthomes/fasthomes-section-form.png" alt="fasthomes-section-formulario-segmentado-b2c-b2b-investidor" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/contato" target="_blank">https://fasthomes.com.br/contato</a></span> <h3>Hub de Conversão (Formulário Segmentado)</h3> <p> A ferramenta de conversão do site é um formulário inteligente que segmenta o lead no momento da entrada. Ao perguntar "Escolha a opção que melhor te representa", ele divide o fluxo de atendimento entre "Cliente Final", "Arquiteto/Engenheiro" e "Construtor/Investidor", otimizando todo o processo comercial. </p>

<h3>Pontos positivos</h3>

<ul> <li>Ecossistema Completo: É um portal que integra múltiplos funis de negócio (B2C, B2B, Investidores) em um só lugar.</li> <li>Segmentação Clara de Público: O site direciona cada tipo de visitante para uma jornada específica, otimizando a conversão.</li> <li>Jornada B2C Intuitiva: O catálogo com filtros facilita a escolha do cliente final.</li> <li>Posicionamento B2B: A página "Seu Projeto" respeita e atrai arquitetos e engenheiros como parceiros.</li> <li>Forte Geração de Autoridade: O uso das logomarcas dos parceiros (Nova Metálica, Saint-Gobain) gera confiança imediata.</li> <li>Estratégia Multicanal: O formulário captura leads de "Investidores", que são então direcionados para funis específicos (como o site chale.fasthomes.com.br).</li> </ul>
      `),
            github_url: 'https://github.com/alephsramos-dev',
            popup_bg: '#ffffff60',
            popup_border: '#ffffff80',
            popup_color: '#ffffff',
            site_bg: '#909e4f20',
            site_border: '#909e4f20',
            site_color: '#909e4f',
        },
        {
            slug: 'pousada-le-ange',
            company_slug: 'pousada-le-ange',
            title: 'Pousada Le Ange',
            image_url: storageUrl('banners/institucional-leange.png'),
            popup_content: 'Em alta',
            site_type: 'Institucional',
            image_company_url: storageUrl('companies/icon-pousadaleange-white.svg'),
            company_name: 'Pousada Le Ange',
            tecnologias: ['react', 'vite', 'firebase', 'emotion', 'vercel', 'figma'],
            stack: [
                { techName: 'React', tecnologias: ['React'], color: '#61DAFB' },
                { techName: 'Vite', tecnologias: ['Vite'], color: '#646CFF' },
                { techName: 'Firebase', tecnologias: ['Firebase'], color: '#FFCA28' },
                { techName: 'n8n', tecnologias: ['n8n'], color: '#EA4B71' },
                { techName: 'Emotion', tecnologias: ['Emotion'], color: '#ff4785' },
                { techName: 'Vercel', tecnologias: ['Vercel'], color: '#ffffff' },
                { techName: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
            ],
            project_date: '2024-11-09',
            duration: 460,
            platform: 'Código',
            country: 'Brasil',
            description: 'Pousada de alto padrão, localizada em Miguel Pereira-RJ, e Buzios-RJ, oferecendo conforto, lazer e experiências exclusivas para hóspedes e seus pets.',
            url_page: 'https://www.fasthomes.com.br',
            full_description: applyBase(`
<p> Toda a sua estrutura tem como foco se posicionar como um portal de luxo "Pet Lover". O site funciona como um hub que apresenta as duas unidades (Serra e Mar), mas seu objetivo principal é vender um conceito: uma experiência de alto padrão onde o pet tem total liberdade e é o convidado de honra, não apenas um "aceito". </p>

<img src="{{BASE}}portfolio/leange/pousadaleange-section-unidades.png" alt="pousada-le-ange-hub-section-unidades-serra-e-mar" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span>

<h3>Hub de Unidades (Serra e Mar)</h3> <p> A seção principal do site, que divide a jornada do usuário. Apresenta as "2 unidades, 2 cenários incomparáveis": a Le Ange Serra (Miguel Pereira RJ), focada na Mata Atlântica e sossego, e a Le Ange Mar (Búzios RJ), focada na experiência de praia (a 150m da Praia Rasa). </p>

<img src="{{BASE}}portfolio/leange/pousadaleange-section-pet.png" alt="pousada-le-ange-hub-section-diferencial-pet-lovers" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span> 

<img src="{{BASE}}portfolio/leange/pousadaleange-section-policy.png" alt="pousada-le-ange-hub-section-diferencial-pet-lovers" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span> 
                    
<h3>Diferencial (Mais que Pet Friendly)</h3> <p> O coração do site. Uma seção inteira dedicada a provar o conceito "Pet Lovers", detalhando que não há restrição de porte, não há taxas extras para o pet, e eles têm acesso total (incluindo piscinas com tratamento de ozônio). Também estabelece regras claras (não aceita menores de 13 anos) para garantir um ambiente focado. </p>
                    
<img src="{{BASE}}portfolio/leange/pousadaleange-section-acomodacoes.png" alt="pousada-le-ange-hub-section-acomodacoes-e-experiencias" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span>
<img src="{{BASE}}portfolio/leange/pousadaleange-section-pacotes.png" alt="pousada-le-ange-hub-section-acomodacoes-e-experiencias" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span>
                    
<h3>Acomodações e Experiências</h3> <p> Uma galeria unificada que exibe as "suítes mais procuradas" de ambas as unidades, reforçando o padrão de luxo da marca. Detalha também as experiências (gastronomia inclusa, adega, spa, hot tub, agility para pets) que consolidam a pousada como um destino completo. </p>

<h3>Pontos positivos</h3>

<ul> <li>Posicionamento de marca extremamente claro: O foco "100% Pet Lover" é o principal argumento de venda e está em toda a comunicação.</li> <li>Função de "Hub" bem executada: O site consegue vender a marca "Le Ange" e, ao mesmo tempo, direcionar o cliente para a unidade que mais lhe agrada (Serra ou Mar).</li> <li>Quebra de Objeções: As regras claras (pets socializados, sem menores de 13 anos) qualificam o público e evitam frustrações.</li> <li>Forte Apelo Visual: O site usa fotos de alta qualidade que mesclam luxo (bangalôs, banheiras) com o lifestyle pet (cães na piscina, na cama).</li> <li>Foco na Reserva Direta: Múltiplos CTAs ("Fazer reserva!", "Central de Reservas") para capturar o cliente sem intermediários.</li> </ul>
      `),
            github_url: 'https://github.com/alephsramos-dev',
            popup_bg: '#ffffff60',
            popup_border: '#ffffff80',
            popup_color: '#ffffff',
            site_bg: '#60b1eb20',
            site_border: '#60b1eb20',
            site_color: '#60b1eb',
        },
    ];

    const services = [
        {
            slug: 'criacao-de-sites',
            image_url: storageUrl('services/website.webp'),
            name: 'Criação de Sites',
            description: 'Mais do que um site, uma experiência digital exclusiva. Cada detalhe é planejado para refletir a excelência da sua marca.',
            width: 'calc(33.33% - 10px)',
            color_border_expression: "rgba(props.theme.colors.mint['basic'], 0.2)",
        },
        {
            slug: 'automacao',
            image_url: storageUrl('services/automation.webp'),
            name: 'Automação',
            description: 'Automação de processos para aumentar a eficiência e reduzir erros.',
            width: 'calc(33.33% - 10px)',
            color_border_expression: "rgba(props.theme.colors.purple['basic'], 0.2)",
        },
        {
            slug: 'trafego-pago',
            image_url: storageUrl('services/trafego-pago.webp'),
            name: 'Tráfego Pago',
            description: 'Gestão de campanhas publicitárias para maximizar resultados.',
            width: 'calc(33.33% - 10px)',
            color_border_expression: "rgba(props.theme.colors.orange['basic'], 0.2)",
        },
        {
            slug: 'design-grafico',
            image_url: storageUrl('services/design-grafic.webp'),
            name: 'Design Gráfico',
            description: 'Criação de identidades visuais impactantes e materiais gráficos de alta qualidade.',
            width: 'calc(33.33% - 10px)',
            color_border_expression: "rgba(props.theme.colors.blue['basic'], 0.2)",
        },
        {
            slug: 'copywriter',
            image_url: storageUrl('services/copywriter.webp'),
            name: 'Copywriter',
            description: 'Criação de textos persuasivos focados em conversão.',
            width: 'calc(33.33% - 10px)',
            color_border_expression: "rgba(props.theme.colors.indigo['basic'], 0.2)",
        },
    ];

    const stackData = [
        { tech_name: 'React', tecnologias: ['React'], color: '#61DAFB' },
        { tech_name: 'Javascript', tecnologias: ['Javascript'], color: '#F7DF1E' },
        { tech_name: 'HTML5', tecnologias: ['HTML'], color: '#E34F26' },
        { tech_name: 'Figma', tecnologias: ['Figma'], color: '#a259ff' },
        { tech_name: 'N8N', tecnologias: ['N8N'], color: '#EA4B71' },
        { tech_name: 'CSS3', tecnologias: ['CSS'], color: '#1572B6' },
        { tech_name: 'Supabase', tecnologias: ['Supabase'], color: '#3ECF8E' },
        { tech_name: 'Vite', tecnologias: ['Vite'], color: '#646CFF' },
        { tech_name: 'Firebase', tecnologias: ['Firebase'], color: '#FFCA28' },
        { tech_name: 'Styled Components', tecnologias: ['Sass'], color: '#CC6699' },
        { tech_name: 'Emotion', tecnologias: ['Emotion'], color: '#FF4785' },
        { tech_name: 'Github', tecnologias: ['Github'], color: '#fafbfc' },
        { tech_name: 'Hostgator', tecnologias: ['Hostgator'], color: '#229ad0' },
        { tech_name: 'HTML5', tecnologias: ['HTML5'], color: '#E34F26' },
        { tech_name: 'CSS3', tecnologias: ['CSS3'], color: '#1572B6' },
        { tech_name: 'N8N', tecnologias: ['N8N'], color: '#EA4B71' },
    ];

    const assessments = [
        {
            image_url: 'https://images.unsplash.com/photo-1695927621677-ec96e048dce2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735',
            alt: 'Photo of John Smith',
            name: 'Jonathan Silva',
            role: 'CTO at TechCorp',
        },
        {
            image_url: 'https://images.unsplash.com/photo-1722329434628-5cc2d041ff09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
            alt: 'Photo of Maria Silva',
            name: 'Maria Silva',
            role: 'UI/UX Designer',
        },
        {
            image_url: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
            alt: 'Photo of Luis Gomez',
            name: 'Luis Gomez',
            role: 'Product Manager',
        },
        {
            image_url: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
            alt: 'Photo of Larissa Costa',
            name: 'Larissa Costa',
            role: 'Construtora Civil',
        },
        {
            image_url: 'https://images.unsplash.com/photo-1707676602290-acfdedc6b41d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
            alt: 'Photo of Bruno Fernandes',
            name: 'Bruno Fernandes',
            role: 'CEO at InnovateX',
        },
    ];

    const benefits = [
        { icon_name: 'GaugeIcon', title: 'Velocidade Extrema', description: 'Sites que carregam em milissegundos para reter visitantes e impulsionar SEO.' },
        { icon_name: 'SketchLogoIcon', title: 'Qualidade Premium', description: 'Código limpo, escalável e revisado com foco em longevidade e manutenção.' },
        { icon_name: 'UserFocusIcon', title: 'Conversão Otimizada', description: 'Arquitetura pensada para transformar tráfego em leads e vendas.' },
        { icon_name: 'ShieldStarIcon', title: 'Segurança e Estabilidade', description: 'Boas práticas, monitoramento e proteção contra falhas comuns.' },
        { icon_name: 'TrendUpIcon', title: 'Escalabilidade', description: 'Estrutura pronta para crescer sem reescrever tudo do zero.' },
        { icon_name: 'BrowsersIcon', title: 'SEO Técnico', description: 'Estratégias e implementação para melhor indexação e ranking.' },
        { icon_name: 'GitMergeIcon', title: 'Automação & Performance', description: 'Pipelines, otimização de bundling, imagens e cache inteligente.' },
        { icon_name: 'HeadsetIcon', title: 'Suporte Pró ativo', description: 'Acompanhamento contínuo e melhorias iterativas pós-entrega.' },
    ];

    const techIcons = [
        { icon_key: 'react', src: storageUrl('icons/reactjs.svg'), alt: 'React', title: 'React', width: 25, height: 25 },
        { icon_key: 'supabase', src: storageUrl('icons/supabase.svg'), alt: 'Supabase', title: 'Supabase', width: 25, height: 25 },
        { icon_key: 'n8n', src: storageUrl('icons/n8n.svg'), alt: 'n8n', title: 'n8n', width: 25, height: 25 },
        { icon_key: 'javascript', src: storageUrl('icons/javascript.svg'), alt: 'JavaScript', title: 'JavaScript', width: 25, height: 25 },
        { icon_key: 'html', src: storageUrl('icons/html.svg'), alt: 'HTML5', title: 'HTML5', width: 25, height: 25 },
        { icon_key: 'css', src: storageUrl('icons/css.svg'), alt: 'CSS3', title: 'CSS3', width: 25, height: 25 },
        { icon_key: 'typescript', src: storageUrl('icons/typescript.svg'), alt: 'TypeScript', title: 'Typescript', width: 25, height: 25 },
        { icon_key: 'vite', src: storageUrl('icons/vite.svg'), alt: 'Vite', title: 'Vite', width: 25, height: 25 },
        { icon_key: 'nextjs', src: storageUrl('icons/nextjs.svg'), alt: 'Next.js', title: null, width: 25, height: 25 },
        { icon_key: 'redux', src: storageUrl('icons/redux.svg'), alt: 'Redux', title: null, width: 25, height: 25 },
        { icon_key: 'nodejs', src: storageUrl('icons/nodejs.svg'), alt: 'Node.js', title: null, width: 25, height: 25 },
        { icon_key: 'jest', src: storageUrl('icons/jest.svg'), alt: 'Jest', title: null, width: 25, height: 25 },
        { icon_key: 'mongodb', src: storageUrl('icons/mongodb.svg'), alt: 'MongoDB', title: null, width: 25, height: 25 },
        { icon_key: 'express', src: storageUrl('icons/express.svg'), alt: 'Express', title: null, width: 25, height: 25 },
        { icon_key: 'sass', src: storageUrl('icons/sass.svg'), alt: 'Sass', title: null, width: 25, height: 25 },
        { icon_key: 'figma', src: storageUrl('icons/figma.svg'), alt: 'Figma', title: null, width: 25, height: 25 },
        { icon_key: 'git', src: storageUrl('icons/git.svg'), alt: 'Git', title: null, width: 25, height: 25 },
        { icon_key: 'github', src: storageUrl('icons/github.svg'), alt: 'GitHub', title: null, width: 25, height: 25 },
        { icon_key: 'vercel', src: storageUrl('icons/vercel.svg'), alt: 'Vercel', title: null, width: 25, height: 25 },
        { icon_key: 'firebase', src: storageUrl('icons/firebase.svg'), alt: 'Firebase', title: null, width: 25, height: 25 },
        { icon_key: 'html5', src: storageUrl('icons/html5.svg'), alt: 'HTML5', title: null, width: 25, height: 25 },
        { icon_key: 'css3', src: storageUrl('icons/css3.svg'), alt: 'CSS3', title: null, width: 25, height: 25 },
        { icon_key: 'emotion', src: storageUrl('icons/sass.svg'), alt: 'Emotion', title: null, width: 25, height: 25 },
        { icon_key: 'hostgator', src: storageUrl('icons/hostgator.svg'), alt: 'HostGator', title: null, width: 25, height: 25 },
    ];

    return {
        companies,
        projects,
        services,
        stackData,
        assessments,
        benefits,
        techIcons,
    };
}

async function seedData(client, datasets) {
    const {
        companies,
        projects,
        services,
        stackData,
        assessments,
        benefits,
        techIcons,
    } = datasets;

    if (companies.length > 0) {
        const { error } = await client.from('companies').insert(companies);
        if (error) {
            throw new Error(`Failed to insert companies: ${error.message}`);
        }
    }

    const { data: companiesRows, error: companiesSelectError } = await client.from('companies').select('id, slug');
    if (companiesSelectError) {
        throw new Error(`Failed to fetch companies: ${companiesSelectError.message}`);
    }

    const companyIdBySlug = new Map(companiesRows.map((item) => [item.slug, item.id]));

    const projectsPayload = projects.map((project) => {
        const companyId = companyIdBySlug.get(project.company_slug);

        if (!companyId) {
            throw new Error(`Missing company id for slug ${project.company_slug}`);
        }

        const { company_slug, ...rest } = project;

        return {
            ...rest,
            company_id: companyId,
        };
    });

    if (projectsPayload.length > 0) {
        const { error } = await client.from('projects').insert(projectsPayload);
        if (error) {
            throw new Error(`Failed to insert projects: ${error.message}`);
        }
    }

    if (services.length > 0) {
        const { error } = await client.from('services').insert(services);
        if (error) {
            throw new Error(`Failed to insert services: ${error.message}`);
        }
    }

    if (stackData.length > 0) {
        const { error } = await client.from('stack_data').insert(stackData);
        if (error) {
            throw new Error(`Failed to insert stack data: ${error.message}`);
        }
    }

    if (assessments.length > 0) {
        const { error } = await client.from('assessments').insert(assessments);
        if (error) {
            throw new Error(`Failed to insert assessments: ${error.message}`);
        }
    }

    if (benefits.length > 0) {
        const { error } = await client.from('benefits').insert(benefits);
        if (error) {
            throw new Error(`Failed to insert benefits: ${error.message}`);
        }
    }

    if (techIcons.length > 0) {
        const { error } = await client.from('tech_icons').insert(techIcons);
        if (error) {
            throw new Error(`Failed to insert tech icons: ${error.message}`);
        }
    }
}

async function main() {
    try {
        await loadEnvFiles();
        ensureEnv();

        const url = process.env.VITE_SUPABASE_URL;
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        const client = createClient(url, serviceKey, {
            auth: {
                persistSession: false,
            },
        });

        const storageBase = `${url.replace(/\/+$/, '')}/storage/v1/object/public/assets`;

        console.log('Clearing existing Supabase tables...');
        await truncateTables(client);

        console.log('Seeding data...');
        const datasets = buildDatasets(storageBase);
        await seedData(client, datasets);

        console.log('Supabase data refreshed successfully.');
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}

main();
