-- Run this script in the Supabase SQL editor after uploading the assets.
-- Replace <PROJECT-REF> with your Supabase project reference before executing.

BEGIN;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

INSERT INTO storage.buckets (id, name, public)
VALUES ('assets', 'assets', TRUE)
ON CONFLICT (id) DO NOTHING;

DROP TABLE IF EXISTS public.tech_icons CASCADE;
DROP TABLE IF EXISTS public.benefits CASCADE;
DROP TABLE IF EXISTS public.assessments CASCADE;
DROP TABLE IF EXISTS public.stack_data CASCADE;
DROP TABLE IF EXISTS public.services CASCADE;
DROP TABLE IF EXISTS public.projects CASCADE;
DROP TABLE IF EXISTS public.companies CASCADE;

CREATE TABLE public.companies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    image_url TEXT
);

CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_id UUID REFERENCES public.companies(id),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image_url TEXT,
    popup_content TEXT,
    site_type TEXT,
    image_company_url TEXT,
    company_name TEXT,
    tecnologias TEXT[] NOT NULL,
    stack JSONB NOT NULL,
    project_date DATE,
    duration INTEGER,
    platform TEXT,
    country TEXT,
    description TEXT,
    url_page TEXT,
    full_description TEXT,
    github_url TEXT,
    popup_bg TEXT,
    popup_border TEXT,
    popup_color TEXT,
    site_bg TEXT,
    site_border TEXT,
    site_color TEXT
);

CREATE TABLE public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    image_url TEXT,
    name TEXT NOT NULL,
    description TEXT,
    width TEXT,
    color_border_expression TEXT
);

CREATE TABLE public.stack_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tech_name TEXT NOT NULL,
    tecnologias TEXT[] NOT NULL,
    color TEXT
);

CREATE TABLE public.assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    image_url TEXT,
    alt TEXT,
    name TEXT NOT NULL,
    role TEXT
);

CREATE TABLE public.benefits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    icon_name TEXT,
    title TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE public.tech_icons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    icon_key TEXT NOT NULL UNIQUE,
    src TEXT,
    alt TEXT,
    title TEXT,
    width INTEGER,
    height INTEGER
);

WITH base AS (
    SELECT 'https://<PROJECT-REF>.supabase.co/storage/v1/object/public/assets/'::TEXT AS url
)
INSERT INTO public.companies (slug, name, image_url) VALUES
('unity-company', 'Unity Company',        (SELECT url || 'companies/icon-unitycompany-white.svg'              FROM base)),
('steel-conecta', 'Steel Conecta',        (SELECT url || 'companies/icon-steelconecta-white.svg'              FROM base)),
('fast-sistemas-construtivos', 'Fast Sistemas', (SELECT url || 'companies/icon-fastsistemasconstrutivos-white.svg' FROM base)),
('pousada-le-ange', 'Pousada Le Ange',    (SELECT url || 'companies/icon-pousadaleange-white.svg'             FROM base)),
('fast-homes', 'Fast Homes',              (SELECT url || 'companies/icon-fasthomes-white.svg'                 FROM base)),
('nova-metalica', 'Nova Metálica',        (SELECT url || 'companies/icon-novametalica-white.svg'              FROM base)),
('fast-obras', 'Fast Obras',              (SELECT url || 'companies/icon-fastobras-white.svg'                 FROM base)),
('rio-flex', 'Rio Flex',                  (SELECT url || 'companies/icon-rioflex-white.svg'                   FROM base)),
('eu-yago-lopes', 'euYagoLopes',          (SELECT url || 'companies/icon-euyagolopes-white.svg'               FROM base)),
('kdea-construtora', 'K''dea Construtora',(SELECT url || 'companies/icon-kdea-white.svg'                      FROM base)),
('eco-frame', 'Eco Frame',                (SELECT url || 'companies/icon-ecoframe-white.svg'                  FROM base));

WITH base AS (
    SELECT 'https://<PROJECT-REF>.supabase.co/storage/v1/object/public/assets/'::TEXT AS url
)
INSERT INTO public.projects (
    company_id, slug, title, image_url, popup_content, site_type,
    image_company_url, company_name, tecnologias, stack, project_date,
    duration, platform, country, description, url_page, full_description,
    github_url, popup_bg, popup_border, popup_color, site_bg, site_border, site_color
) VALUES
(
    (SELECT id FROM public.companies WHERE slug = 'eu-yago-lopes'),
    'euyagolopes',
    'EuYagoLopes',
    (SELECT url || 'banners/landingpage-euyagolopes.png' FROM base),
    'Tendência',
    'Landing Page',
    (SELECT url || 'companies/icon-euyagolopes-white.svg' FROM base),
    'euYagoLopes',
    ARRAY['javascript','html5','css3','github','hostgator','figma'],
    '[{"techName":"Javascript","tecnologias":["Javascript"],"color":"#F7DF1E"},{"techName":"HTML5","tecnologias":["HTML5"],"color":"#E34F26"},{"techName":"CSS3","tecnologias":["CSS3"],"color":"#1572B6"},{"techName":"GitHub","tecnologias":["GitHub"],"color":"#fafbfc"},{"techName":"HostGator","tecnologias":["HostGator"],"color":"#229ad0"},{"techName":"Figma","tecnologias":["Figma"],"color":"#a259ff"}]'::JSONB,
    TO_DATE('16/05/2025','DD/MM/YYYY'),
    80,
    'Código',
    'Brasil',
    'Projetada para transmitir sensações de alto valor e profissionalismo, fortalecendo a credibilidade e a percepção do público-alvo.',
    'https://www.euyagolopes.com.br',
    (SELECT REPLACE($$
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
$$,'{{BASE}}', url) FROM base),
    'https://github.com/alephsramos-dev',
    '#ba000010',
    '#ba000020',
    '#ba0000',
    '#ba000020',
    '#ba000020',
    '#ba0000'
),
(
    (SELECT id FROM public.companies WHERE slug = 'kdea-construtora'),
    'kdea-construtora',
    'K''dea Construtora',
    (SELECT url || 'banners/landingpage-kdea.png' FROM base),
    NULL,
    'Landing Page',
    (SELECT url || 'companies/icon-kdea-white.svg' FROM base),
    'K''dea Construtora',
    ARRAY['javascript','html5','css3','github','figma'],
    '[{"techName":"Javascript","tecnologias":["Javascript"],"color":"#F7DF1E"},{"techName":"HTML5","tecnologias":["HTML5"],"color":"#E34F26"},{"techName":"CSS3","tecnologias":["CSS3"],"color":"#1572B6"},{"techName":"GitHub","tecnologias":["GitHub"],"color":"#fafbfc"},{"techName":"Figma","tecnologias":["Figma"],"color":"#a259ff"}]'::JSONB,
    TO_DATE('11/03/2025','DD/MM/YYYY'),
    60,
    'Código',
    'Brasil',
    'Desenvolvida para destacar os diferenciais da construtora, obras, serviços e projetos, transmitindo confiança e profissionalismo aos visitantes.',
    'https://www.kdea.com.br',
    (SELECT REPLACE($$
<p>Toda a sua estrutura tem como foco a construção a seco (Steel Frame e Drywall), destacando tecnologia, sustentabilidade e eficiência, com uma navegação moderna e visual que demonstra os projetos e a expertise da construtora.</p>

<img src="{{BASE}}portfolio/kdea/kdea-section-sobre.png" alt="kdea-construtora-section-sobre-nos" /> <span>K'dea Construtora | © Todos os direitos reservados | Acesso em: <a href="https://kdea.com.br/#sobre" target="_blank">https://kdea.com.br/#sobre</a></span>

<h3>Sobre Nós</h3> <p>Uma seção que detalha a especialização da construtora em construção a seco, apresentando a equipe e marcos importantes, como a participação em projetos de grande nome (Museu do Amanhã, hangar do Neymar Jr., etc.).</p>

<img src="{{BASE}}portfolio/kdea/kdea-section-projects.png" alt="kdea-construtora-section-projetos" /> <span>K'dea Construtora | © Todos os direitos reservados | Acesso em: <a href="https://kdea.com.br/#projetos" target="_blank">https://kdea.com.br/#projetos</a></span> <h3>Projetos</h3> <p>Uma galeria visual dedicada a mostrar os projetos recentes e de maior destaque realizados pela construtora, evidenciando a qualidade e a diversidade dos trabalhos com Steel Frame.</p>

<img src="{{BASE}}portfolio/kdea/kdea-section-revist.png" alt="kdea-construtora-section-revista" /> <span>K'dea Construtora | © Todos os direitos reservados | Acesso em: <a href="https://kdea.com.br/#revista" target="_blank">https://kdea.com.br/#revista</a></span> <h3>Revista K'dea</h3> <p>Uma seção de conteúdo próprio onde a empresa disponibiliza sua revista (K'dea 360), oferecendo insights, inspirações e detalhes sobre suas obras e o mercado da construção.</p>

<h3>Pontos positivos</h3>

<ul> <li>Foco em sustentabilidade e redução de desperdício</li> <li>Alta performance de isolamento acústico</li> <li>Redução de custos e tempo de obra (Construção a seco)</li> <li>Projetos com design inovador e funcional</li> <li>Equipe de arquitetos e construtores qualificados</li> <li>Planejamento e organização detalhados em todas as etapas</li> </ul>
$$,'{{BASE}}', url) FROM base),
    'https://github.com/alephsramos-dev',
    '#ffffff60',
    '#ffffff80',
    '#ffffff',
    '#ffcb2120',
    '#ffcb2120',
    '#ffcb21'
),
(
    (SELECT id FROM public.companies WHERE slug = 'fast-homes'),
    'chales-fast-homes',
    'Chalés Fast Homes',
    (SELECT url || 'banners/landingpage-fasthomes.png' FROM base),
    NULL,
    'Landing Page',
    (SELECT url || 'companies/icon-fasthomes-white.svg' FROM base),
    'Fast Homes',
    ARRAY['react','n8n','vite','emotion','javascript','vercel','figma'],
    '[{"techName":"Vite","tecnologias":["Vite"],"color":"#646CFF"},{"techName":"React","tecnologias":["React"],"color":"#61DAFB"},{"techName":"n8n","tecnologias":["n8n"],"color":"#EA4B71"},{"techName":"Javascript","tecnologias":["Javascript"],"color":"#F7DF1E"},{"techName":"HTML5","tecnologias":["HTML5"],"color":"#E34F26"},{"techName":"CSS3","tecnologias":["CSS3"],"color":"#1572B6"},{"techName":"Emotion","tecnologias":["Emotion"],"color":"#ff4785"},{"techName":"Vercel","tecnologias":["Vercel"],"color":"#ffffff"},{"techName":"Figma","tecnologias":["Figma"],"color":"#a259ff"}]'::JSONB,
    TO_DATE('21/09/2025','DD/MM/YYYY'),
    120,
    'Código',
    'Brasil',
    'Desenvolvida para destacar os chalés modulares, enfatizando a rapidez na construção, sustentabilidade e design inovador para atrair clientes interessados.',
    'https://www.chale.fasthomes.com.br',
    (SELECT REPLACE($$
<p>Toda a sua estrutura tem como foco a captação de investidores para chalés (como Airbnb), destacando o modelo de negócio, a rapidez da construção em Steel Frame e o alto potencial de lucratividade.</p>

<img src="{{BASE}}portfolio/chale-fasthomes/chale-fasthomes-section-airbnb.png" alt="fasthomes-chales-section-modelos" /> 
<span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://chale.fasthomes.com.br" target="_blank">https://chale.fasthomes.com.br</a></span> 
                        
<h3>Modelos</h3> 
<p>Apresenta os projetos estratégicos disponíveis (ex: Chalé Araucária e Chalé Buriti), detalhando as informações técnicas e internas de cada modelo para diferentes segmentos de investimento.</p>

<img src="{{BASE}}portfolio/chale-fasthomes/chale-fasthomes-section-grafic.png" alt="fasthomes-chales-section-diferenciais" /> 
<span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://chale.fasthomes.com.br" target="_blank">https://chale.fasthomes.com.br</a></span> 
<h3>Diferenciais (Metodologia)</h3> 
<p>Detalha o processo simplificado em etapas (Escolha, Planejamento, Execução), enfatizando a velocidade (4x mais rápido que o tradicional) e a transparência do processo construtivo.</p>

<img src="{{BASE}}portfolio/chale-fasthomes/chale-fasthomes-section-faq-form.png" alt="fasthomes-chales-section-faq" /> 
<span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://chale.fasthomes.com.br" target="_blank">https://chale.fasthomes.com.br</a></span> 
<h3>FAQ (Perguntas Frequentes)</h3> 
<p>Uma seção dedicada a quebrar objeções comuns de investidores, respondendo perguntas sobre financiamento, durabilidade do Steel Frame, prazos e isolamento termoacústico.</p>

<h3>Pontos positivos</h3>

<ul> <li>Foco claro em investimento e lucratividade (Airbnb, Booking)</li> <li>Construção 4x mais rápida que a alvenaria (prazo de 4 meses)</li> <li>Alta durabilidade e garantia estrutural de 10 anos</li> <li>Eficiência termoacústica superior (Certificação Rw 45dB)</li> <li>Processo simplificado e transparente para o cliente</li> <li>Facilidade de financiamento (aceito pela CAIXA e bancos)</li> </ul>
$$,'{{BASE}}', url) FROM base),
    'https://github.com/alephsramos-dev',
    '#ffffff60',
    '#ffffff80',
    '#ffffff',
    '#a8573120',
    '#a8573120',
    '#a85731'
),
(
    (SELECT id FROM public.companies WHERE slug = 'fast-sistemas-construtivos'),
    'pisos-vinilicos-fast',
    'Pisos Vinílicos Fast',
    (SELECT url || 'banners/landingpage-pisos-fastsistemasconstrutivos.png' FROM base),
    NULL,
    'Landing Page',
    (SELECT url || 'companies/icon-fastsistemasconstrutivos-white.svg' FROM base),
    'Fast Sistemas',
    ARRAY['javascript','html5','n8n','css3','github','figma'],
    '[{"techName":"Javascript","tecnologias":["Javascript"],"color":"#F7DF1E"},{"techName":"HTML5","tecnologias":["HTML5"],"color":"#E34F26"},{"techName":"CSS3","tecnologias":["CSS3"],"color":"#1572B6"},{"techName":"n8n","tecnologias":["n8n"],"color":"#EA4B71"},{"techName":"GitHub","tecnologias":["GitHub"],"color":"#fafbfc"},{"techName":"Figma","tecnologias":["Figma"],"color":"#a259ff"}]'::JSONB,
    TO_DATE('12/06/2025','DD/MM/YYYY'),
    40,
    'Código',
    'Brasil',
    'Feito para apresentar o novo lançamento de pisos vinílicos da Fast Sistemas Construtivos, destacando suas vantagens, aplicações e diferenciais no mercado de construção.',
    'https://www.pisos.fastsistemasconstrutivos.com.br',
    (SELECT REPLACE($$
<p>Toda a sua estrutura tem como foco a captação de leads (B2C e B2B) para pisos vinílicos da marca Biancogres, destacando a sofisticação, praticidade de instalação e o conforto termoacústico dos produtos.</p>

<img src="{{BASE}}portfolio/fast-pisos/fast-pisos-section-comparation.png" alt="fast-pisos-section-comparativo-vinilico-vs-tradicional" /> <span>Fast Pisos | © Todos os direitos reservados | Acesso em: <a href="https://pisos.fastsistemasconstrutivos.com.br" target="_blank">https://pisos.fastsistemasconstrutivos.com.br</a></span>

<h3>Piso Vinílico vs. Piso Tradicional</h3> <p>Uma seção comparativa que destaca as vantagens do vinílico (composição em PVC, instalação rápida e limpa, manutenção fácil) em relação aos pisos tradicionais, como cerâmicos e laminados.</p>

<img src="{{BASE}}portfolio/fast-pisos/fast-pisos-section-products.png" alt="fast-pisos-section-produtos-biancogres" /> <span>Fast Pisos | © Todos os direitos reservados | Acesso em: <a href="https://pisos.fastsistemasconstrutivos.com.br" target="_blank">https://pisos.fastsistemasconstrutivos.com.br</a></span> <h3>Nossos Produtos</h3> <p>Galeria visual dos tipos de pisos vinílicos disponíveis (Amadeirado, Mármore, Cimento Queimado, etc.), com um formulário para baixar o catálogo completo, capturando o lead do visitante.</p>

<img src="{{BASE}}portfolio/fast-pisos/fast-pisos-section-form.png" alt="fast-pisos-section-formulario-orcamento" /> <span>Fast Pisos | © Todos os direitos reservados | Acesso em: <a href="https://pisos.fastsistemasconstrutivos.com.br" target="_blank">https://pisos.fastsistemasconstrutivos.com.br</a></span> <h3>Orçamento</h3> <p>A principal seção de conversão do site, com formulários de contato estrategicamente posicionados para que o usuário solicite um orçamento de forma rápida e direta.</p>

<h3>Pontos positivos</h3>

<ul> <li>Foco claro na captação de leads qualificados para orçamento</li> <li>Design sofisticado e moderno (focado na marca Biancogres)</li> <li>Instalação rápida, limpa e sobre pisos existentes</li> <li>Produto com alto conforto térmico e acústico (redução de ruídos)</li> <li>Manutenção prática e alta resistência à umidade e arranhões</li> <li>Uso de automação (n8n) para integrar os formulários de orçamento direto ao CRM da empresa, agilizando o atendimento.</li> </ul>
$$,'{{BASE}}', url) FROM base),
    'https://github.com/alephsramos-dev',
    '#ffffff60',
    '#ffffff80',
    '#ffffff',
    '#a67f5620',
    '#a67f5620',
    '#a67f56'
),
(
    (SELECT id FROM public.companies WHERE slug = 'steel-conecta'),
    'steel-conecta',
    'Steel Conecta',
    (SELECT url || 'banners/landingpage-steelconecta.png' FROM base),
    'Novidade',
    'Landing Page',
    (SELECT url || 'companies/icon-steelconecta-white.svg' FROM base),
    'Steel Conecta',
    ARRAY['react','vite','n8n','emotion','javascript','vercel','figma'],
    '[{"techName":"React","tecnologias":["React"],"color":"#61DAFB"},{"techName":"Vite","tecnologias":["Vite"],"color":"#646CFF"},{"techName":"Emotion","tecnologias":["Emotion"],"color":"#ff4785"},{"techName":"Vercel","tecnologias":["Vercel"],"color":"#ffffff"},{"techName":"Javascript","tecnologias":["Javascript"],"color":"#F7DF1E"},{"techName":"n8n","tecnologias":["n8n"],"color":"#EA4B71"},{"techName":"Figma","tecnologias":["Figma"],"color":"#a259ff"}]'::JSONB,
    TO_DATE('28/10/2025','DD/MM/YYYY'),
    80,
    'Código',
    'Brasil',
    'Apresenta a nova plataforma de conexão entre fornecedores e clientes no setor de construção em Steel Frame, facilitando negócios e parcerias.',
    'https://www.steelconecta.com.br',
    (SELECT REPLACE($$
<p>Toda a sua estrutura tem como foco ser um ecossistema B2B para o mercado de Steel Frame, conectando profissionais e empresas a métodos, logística de materiais (Fast) e oportunidades de negócios (geração de leads).</p>

<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-services.png" alt="steel-conecta-section-serviços-ecossistema" /> <span>Steel Conecta | © Todos os direitos reservados | Acesso em: <a href="https://steelconecta.com.br" target="_blank">https://steelconecta.com.br</a></span>

<h3>Serviços do Ecossistema</h3> <p>Uma seção que detalha os pilares da plataforma: "Aprenda a projetar", "Planejamento", "Fornecemos materiais" e "Receba leads qualificados", mostrando a solução completa para profissionais do setor.</p>

<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-companys.png" alt="steel-conecta-section-parceiros-fast-unity" /> <span>Steel Conecta | © Todos os direitos reservados | Acesso em: <a href="https://steelconecta.com.br" target="_blank">https://steelconecta.com.br</a></span> <h3>Parcerias de Alto Nível</h3> <p>Apresenta as empresas que compõem o ecossistema (Fast Sistemas Construtivos, Fast Homes, Unity Company, Nova Metálica), detalhando o papel de cada uma na entrega de materiais, projetos e marketing.</p>

<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-01.png" alt="steel-conecta-section-formulario-e-faq" /> 
<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-02.png" alt="steel-conecta-section-formulario-e-faq" /> 
<img src="{{BASE}}portfolio/steelconecta/steelconecta-section-form.png" alt="steel-conecta-section-formulario-e-faq" /> 
                        
<span>Steel Conecta | © Todos os direitos reservados | Acesso em: <a href="https://steelconecta.com.br" target="_blank">https://steelconecta.com.br</a></span> <h3>Inscrição</h3> <p>A principal área de conversão, combinando um formulário de inscrição ("Participar da Steel Conecta")</p>

<h3>Pontos positivos</h3>

<ul> <li>Ecossistema B2B completo (método, materiais e leads)</li> <li>Foco claro na geração de leads qualificados para os parceiros</li> <li>Integração com marcas fortes do setor (Fast, Nova Metálica)</li> <li>Fornecimento de materiais com preços exclusivos de fábrica</li> <li>Uso de automação (n8n) para integrar os formulários de inscrição direto ao CRM da empresa, agilizando a qualificação dos leads.</li> </ul>
$$,'{{BASE}}', url) FROM base),
    'https://github.com/alephsramos-dev',
    '#ffffff60',
    '#ffffff80',
    '#ffffff',
    '#1d537d20',
    '#1d537d20',
    '#1d537d'
),
(
    (SELECT id FROM public.companies WHERE slug = 'pousada-le-ange'),
    'lp-pousada-le-ange',
    'LP Pousada Le Ange',
    (SELECT url || 'banners/landingpage-leange.png' FROM base),
    NULL,
    'Landing Page',
    (SELECT url || 'companies/icon-pousadaleange-white.svg' FROM base),
    'Pousada Le Ange',
    ARRAY['javascript','html5','css3','github','figma'],
    '[{"techName":"Javascript","tecnologias":["Javascript"],"color":"#F7DF1E"},{"techName":"HTML5","tecnologias":["HTML5"],"color":"#E34F26"},{"techName":"CSS3","tecnologias":["CSS3"],"color":"#1572B6"},{"techName":"GitHub","tecnologias":["GitHub"],"color":"#fafbfc"},{"techName":"Figma","tecnologias":["Figma"],"color":"#a259ff"}]'::JSONB,
    TO_DATE('03/06/2025','DD/MM/YYYY'),
    40,
    'Código',
    'Brasil',
    'Desenvolvida para promover a Pousada Le Ange, destacando suas acomodações, localização privilegiada e serviços exclusivos para atrair turistas e viajantes.',
    'https://www.mp.pousadaleange.com.br',
    (SELECT REPLACE($$
<p>Toda a sua estrutura tem como foco a captação de leads e reservas diretas, destacando o luxo, as experiências exclusivas e a alta gastronomia da pousada para um público de alto padrão.</p>

<img src="{{BASE}}portfolio/lp-leange/lp-leange-section-hospedagem.png" alt="pousada-le-ange-section-acomodacoes" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://mp.pousadaleange.com.br/#acomodacoes" target="_blank">https://mp.pousadaleange.com.br/#acomodacoes</a></span>

<h3>Acomodações</h3> <p>Uma galeria visual de alto impacto que apresenta as suítes e bangalôs, detalhando o luxo, conforto e vistas que cada um oferece para atrair e converter reservas de alto valor.</p>

<img src="{{BASE}}portfolio/lp-leange/lp-leange-section-exp.png" alt="pousada-le-ange-section-experiencias-e-gastronomia" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://mp.pousadaleange.com.br/#experiencias" target="_blank">https://mp.pousadaleange.com.br/#experiencias</a></span> <h3>Experiências e Gastronomia</h3> <p>Destaca os serviços exclusivos, como jantares românticos, passeios, spa ou a culinária do restaurante, posicionando a pousada como um destino completo e não apenas uma hospedagem.</p>

<img src="{{BASE}}portfolio/lp-leange/lp-leange-section-unidades.png" alt="pousada-le-ange-section-unidades-mp-e-mar" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span> <h3>Unidades (MP e MAR)</h3> <p>Uma seção clara que distingue as duas unidades (Morro de São Paulo e MAR), permitindo ao visitante navegar para a experiência específica que ele procura, seja em MP ou na praia.</p>

<h3>Pontos positivos</h3>

<ul> <li>Foco claro em reservas diretas e captação de leads de luxo</li> <li>Design visualmente imersivo com fotos e vídeos de alta qualidade</li> <li>Destaque para experiências exclusivas (gastronomia, passeios, spa)</li> <li>Navegação clara e distinta entre as duas unidades (Morro de São Paulo e MAR)</li> <li>Seções de "Acomodações" bem detalhadas para impulsionar a decisão de reserva</li> <li>Múltiplos pontos de CTA (Call to Action) focados em "Reservar Agora"</li> </ul>
$$,'{{BASE}}', url) FROM base),
    'https://github.com/alephsramos-dev',
    '#ffffff60',
    '#ffffff80',
    '#ffffff',
    '#1d537d20',
    '#1d537d20',
    '#1d537d'
),
(
    (SELECT id FROM public.companies WHERE slug = 'nova-metalica'),
    'nova-metalica',
    'Nova Metálica',
    (SELECT url || 'banners/institucional-novametalica.png' FROM base),
    'Fábrica',
    'Institucional',
    (SELECT url || 'companies/icon-novametalica-white.svg' FROM base),
    'Nova Metálica',
    ARRAY['react','vite','firebase','n8n','emotion','vercel','figma'],
    '[{"techName":"React","tecnologias":["React"],"color":"#61DAFB"},{"techName":"Vite","tecnologias":["Vite"],"color":"#646CFF"},{"techName":"Firebase","tecnologias":["Firebase"],"color":"#FFCA28"},{"techName":"n8n","tecnologias":["n8n"],"color":"#EA4B71"},{"techName":"Emotion","tecnologias":["Emotion"],"color":"#ff4785"},{"techName":"Vercel","tecnologias":["Vercel"],"color":"#ffffff"},{"techName":"Figma","tecnologias":["Figma"],"color":"#a259ff"}]'::JSONB,
    TO_DATE('20/04/2025','DD/MM/YYYY'),
    280,
    'Código',
    'Brasil',
    'Uma fábrica de estruturas metálicas especializada em Steel Frame, oferecendo soluções completas para construção rápida, sustentável e eficiente.',
    'https://www.novametalica.com.br',
    (SELECT REPLACE($$
<p>Toda a sua estrutura é projetada para se posicionar como a principal autoridade e fábrica B2B de perfis para construção a seco no Rio de Janeiro. O site não vende apenas produtos; ele vende confiança, tecnologia e parceria para construtoras, engenheiros e profissionais do setor. O foco é claro: captar leads B2B qualificados, oferecendo soluções de engenharia (como o sistema FRAMECAD) e garantindo a procedência do material (aço 100% nacional).</p>

<img src="{{BASE}}portfolio/nova-metalica/novametalica-section-sobre.png" alt="nova-metalica-section-institucional-sobre-missao-visao" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#sobre" target="_blank">https://novametalica.com.br/#sobre</a></span>

<h3>Institucional e Proposta de Valor</h3> <p>Mais do que um simples "Sobre Nós", o site dedica uma seção robusta para estabelecer sua credibilidade como a "primeira fábrica de perfis para Steel Frame e Drywall do Rio de Janeiro". Detalha Missão, Visão e Valores (Inovação, Qualidade, Sustentabilidade), gerando uma forte sensação de confiança e solidez para parceiros B2B.</p>

<img src="{{BASE}}portfolio/nova-metalica/novametalica-section-products.png" alt="nova-metalica-section-produtos-steel-frame-drywall-stick-engenheirado" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#produtos" target="_blank">https://novametalica.com.br/#produtos</a></span> <h3>Soluções Construtivas (Produtos)</h3> <p>O núcleo comercial do site. É claramente segmentado entre Steel Frame e Drywall. O site vai além de listar "guias e montantes"; ele diferencia suas duas principais ofertas: Perfis Stick (padrão, para corte em obra) e Perfis Engenheirados (customizados de fábrica com projeto), atendendo a diferentes níveis de complexidade de obra.</p>

<img src="{{BASE}}portfolio/nova-metalica/novametalica-section-diferenciais.png" alt="nova-metalica-section-diferenciais-tecnologia-framecad-aco-nacional" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#diferenciais" target="_blank">https://novametalica.com.br/#diferenciais</a></span> <h3>Diferenciais Tecnológicos (O "Porquê")</h3> <p>Esta é a principal seção de autoridade. A empresa justifica seu valor destacando: 1) Tecnologia de Ponta (máquinas FRAMECAD e Metalso) que garantem precisão e menor taxa de aço; 2) Qualidade do Material (uso exclusivo de "aço 100% nacional" e "normatizado", citando parceiros como a CSN); e 3) Serviços de Engenharia (oferece o serviço de cálculo estrutural, um imenso valor agregado).</p>

<img src="{{BASE}}portfolio/nova-metalica/novametalica-section-form.png" alt="nova-metalica-section-formulario-orcamento-b2b" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#orcamento" target="_blank">https://novametalica.com.br/#orcamento</a></span> <h3>Captação de Leads (Orçamento)</h3> <p>A conclusão lógica de toda a jornada do usuário. O site não possui um "carrinho" de compras, mas sim múltiplos CTAs ("Solicitar Orçamento") que levam a um formulário B2B detalhado. O objetivo não é vender online, mas capturar projetos e iniciar uma negociação comercial qualificada.</p>

<h3>Pontos positivos</h3>

<ul> <li>Posicionamento B2B impecável: A linguagem, o design e as ofertas são 100% focados em construtoras, engenheiros e arquitetos.</li> <li>Forte Geração de Autoridade: O site não diz apenas "somos bons", ele <i>prova</i> com "Tecnologia FRAMECAD", "Aço 100% Nacional" e "Perfis Normatizados".</li> <li>Diferenciação de Serviço: Oferecer "Cálculo Estrutural" e "Perfis Engenheirados" eleva a empresa de "fábrica" para "parceira de engenharia".</li> <li>Jornada do Usuário Clara: O site educa (Sobre/Diferenciais), apresenta a solução (Produtos) e converte (Orçamento).</li> <li>Otimizado para Captação de Leads: Múltiplos CTAs claros e um formulário B2B focado em projetos, não em produtos avulsos.</li> <li>Automação (Back-end): Uso de automação, como n8n, para integrar os formulários de orçamento diretamente ao CRM, garantindo um atendimento B2B rápido e eficiente.</li> </ul>
$$,'{{BASE}}', url) FROM base),
    'https://github.com/alephsramos-dev',
    '#ffffff60',
    '#ffffff80',
    '#ffffff',
    '#189dd620',
    '#189dd620',
    '#189dd6'
),
(
    (SELECT id FROM public.companies WHERE slug = 'fast-homes'),
    'fast-homes',
    'Fast Homes',
    (SELECT url || 'banners/institucional-fasthomes.png' FROM base),
    'Inovador',
    'Institucional',
    (SELECT url || 'companies/icon-fasthomes-white.svg' FROM base),
    'Fast Homes',
    ARRAY['react','vite','supabase','n8n','emotion','vercel','figma'],
    '[{"techName":"React","tecnologias":["React"],"color":"#61DAFB"},{"techName":"Vite","tecnologias":["Vite"],"color":"#646CFF"},{"techName":"Supabase","tecnologias":["Supabase"],"color":"#3ECF8E"},{"techName":"n8n","tecnologias":["n8n"],"color":"#EA4B71"},{"techName":"Emotion","tecnologias":["Emotion"],"color":"#ff4785"},{"techName":"Vercel","tecnologias":["Vercel"],"color":"#ffffff"},{"techName":"Figma","tecnologias":["Figma"],"color":"#a259ff"}]'::JSONB,
    TO_DATE('12/07/2025','DD/MM/YYYY'),
    420,
    'Código',
    'Brasil',
    'Casas modulares em Steel Frame, oferecendo soluções rápidas, sustentáveis e personalizadas para construção residencial de alta qualidade.',
    'https://www.fasthomes.com.br',
    (SELECT REPLACE($$
<p>Toda a sua estrutura tem como foco se posicionar como um ecossistema completo da construção em Steel Frame. O portal atua como um hub central que se ramifica para atender três públicos principais: o Cliente Final (B2C) que sonha com a casa própria, o Arquiteto/Engenheiro (B2B) que busca um parceiro de execução, e o Investidor (B2B) que procura novos negócios (como o funil dos chalés).</p>

<img src="{{BASE}}portfolio/fasthomes/fasthomes-section-catalog.png" alt="fasthomes-section-catalogo-b2c-modelos-prontos" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/catalogo" target="_blank">https://fasthomes.com.br/catalogo</a></span>

<h3>Catálogo B2C (Modelos Prontos)</h3> <p>Esta é a principal vitrine para o cliente final. Uma galeria completa com filtros (área, quartos, pavimentos) que apresenta os modelos de casas prontas (Acácia, Cajueiro, Araucária). O objetivo é converter o sonho do cliente B2C em um lead qualificado, facilitando a visualização do produto final.</p>

<img src="{{BASE}}portfolio/fasthomes/fasthomes-section-projects.png" alt="fasthomes-section-seu-projeto-b2b-arquitetos" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/seu-projeto" target="_blank">https://fasthomes.com.br/seu-projeto</a></span> <h3>Seu Projeto (Funil B2B - Arquitetos)</h3> <p>Uma seção dedicada a arquitetos, engenheiros e clientes que já possuem um projeto personalizado. A Fast Homes não se limita aos seus modelos e se posiciona como a parceira tecnológica (em Steel Frame) para "dar vida" ao projeto do profissional, captando um lead B2B de execução.</p>

<img src="{{BASE}}portfolio/fasthomes/fasthomes-section-parcerias.png" alt="fasthomes-section-sobre-nos-e-parcerias-de-autoridade" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/sobre-nos" target="_blank">https://fasthomes.com.br/sobre-nos</a></span> <h3>Sobre Nós e Parcerias (Autoridade)</h3> <p>A seção de geração de confiança. Explica a metodologia (rapidez, sustentabilidade, tecnologia) e, o mais importante, ancora a marca em seus parceiros estratégicos de peso (como Nova Metálica, Saint-Gobain e Fast Sistemas Construtivos), transmitindo credibilidade e solidez de ecossistema.</p>

<img src="{{BASE}}portfolio/fasthomes/fasthomes-section-form.png" alt="fasthomes-section-formulario-segmentado-b2c-b2b-investidor" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/contato" target="_blank">https://fasthomes.com.br/contato</a></span> <h3>Hub de Conversão (Formulário Segmentado)</h3> <p>A ferramenta de conversão do site é um formulário inteligente que segmenta o lead no momento da entrada. Ao perguntar "Escolha a opção que melhor te representa", ele divide o fluxo de atendimento entre "Cliente Final", "Arquiteto/Engenheiro" e "Construtor/Investidor", otimizando todo o processo comercial.</p>

<h3>Pontos positivos</h3>

<ul> <li>Ecossistema Completo: É um portal que integra múltiplos funis de negócio (B2C, B2B, Investidores) em um só lugar.</li> <li>Segmentação Clara de Público: O site direciona cada tipo de visitante para uma jornada específica, otimizando a conversão.</li> <li>Jornada B2C Intuitiva: O catálogo com filtros facilita a escolha do cliente final.</li> <li>Posicionamento B2B: A página "Seu Projeto" respeita e atrai arquitetos e engenheiros como parceiros.</li> <li>Forte Geração de Autoridade: O uso das logomarcas dos parceiros (Nova Metálica, Saint-Gobain) gera confiança imediata.</li> <li>Estratégia Multicanal: O formulário captura leads de "Investidores", que são então direcionados para funis específicos (como o site chale.fasthomes.com.br).</li> </ul>
$$,'{{BASE}}', url) FROM base),
    'https://github.com/alephsramos-dev',
    '#ffffff60',
    '#ffffff80',
    '#ffffff',
    '#909e4f20',
    '#909e4f20',
    '#909e4f'
),
(
    (SELECT id FROM public.companies WHERE slug = 'pousada-le-ange'),
    'pousada-le-ange',
    'Pousada Le Ange',
    (SELECT url || 'banners/institucional-leange.png' FROM base),
    'Em alta',
    'Institucional',
    (SELECT url || 'companies/icon-pousadaleange-white.svg' FROM base),
    'Pousada Le Ange',
    ARRAY['react','vite','firebase','emotion','vercel','figma'],
    '[{"techName":"React","tecnologias":["React"],"color":"#61DAFB"},{"techName":"Vite","tecnologias":["Vite"],"color":"#646CFF"},{"techName":"Firebase","tecnologias":["Firebase"],"color":"#FFCA28"},{"techName":"n8n","tecnologias":["n8n"],"color":"#EA4B71"},{"techName":"Emotion","tecnologias":["Emotion"],"color":"#ff4785"},{"techName":"Vercel","tecnologias":["Vercel"],"color":"#ffffff"},{"techName":"Figma","tecnologias":["Figma"],"color":"#a259ff"}]'::JSONB,
    TO_DATE('09/11/2024','DD/MM/YYYY'),
    460,
    'Código',
    'Brasil',
    'Pousada de alto padrão, localizada em Miguel Pereira-RJ, e Buzios-RJ, oferecendo conforto, lazer e experiências exclusivas para hóspedes e seus pets.',
    'https://www.fasthomes.com.br',
    (SELECT REPLACE($$
<p>Toda a sua estrutura tem como foco se posicionar como um portal de luxo "Pet Lover". O site funciona como um hub que apresenta as duas unidades (Serra e Mar), mas seu objetivo principal é vender um conceito: uma experiência de alto padrão onde o pet tem total liberdade e é o convidado de honra, não apenas um "aceito".</p>

<img src="{{BASE}}portfolio/leange/pousadaleange-section-unidades.png" alt="pousada-le-ange-hub-section-unidades-serra-e-mar" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span>

<h3>Hub de Unidades (Serra e Mar)</h3> <p>A seção principal do site, que divide a jornada do usuário. Apresenta as "2 unidades, 2 cenários incomparáveis": a Le Ange Serra (Miguel Pereira RJ), focada na Mata Atlântica e sossego, e a Le Ange Mar (Búzios RJ), focada na experiência de praia (a 150m da Praia Rasa).</p>

<img src="{{BASE}}portfolio/leange/pousadaleange-section-pet.png" alt="pousada-le-ange-hub-section-diferencial-pet-lovers" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span> 

<img src="{{BASE}}portfolio/leange/pousadaleange-section-policy.png" alt="pousada-le-ange-hub-section-diferencial-pet-lovers" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span> 
                    
<h3>Diferencial (Mais que Pet Friendly)</h3> <p>O coração do site. Uma seção inteira dedicada a provar o conceito "Pet Lovers", detalhando que não há restrição de porte, não há taxas extras para o pet, e eles têm acesso total (incluindo piscinas com tratamento de ozônio). Também estabelece regras claras (não aceita menores de 13 anos) para garantir um ambiente focado.</p>
                    
<img src="{{BASE}}portfolio/leange/pousadaleange-section-acomodacoes.png" alt="pousada-le-ange-hub-section-acomodacoes-e-experiencias" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span>
<img src="{{BASE}}portfolio/leange/pousadaleange-section-pacotes.png" alt="pousada-le-ange-hub-section-acomodacoes-e-experiencias" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span>
                    
<h3>Acomodações e Experiências</h3> <p>Uma galeria unificada que exibe as "suítes mais procuradas" de ambas as unidades, reforçando o padrão de luxo da marca. Detalha também as experiências (gastronomia inclusa, adega, spa, hot tub, agility para pets) que consolidam a pousada como um destino completo.</p>

<h3>Pontos positivos</h3>

<ul> <li>Posicionamento de marca extremamente claro: O foco "100% Pet Lover" é o principal argumento de venda e está em toda a comunicação.</li> <li>Função de "Hub" bem executada: O site consegue vender a marca "Le Ange" e, ao mesmo tempo, direcionar o cliente para a unidade que mais lhe agrada (Serra ou Mar).</li> <li>Quebra de Objeções: As regras claras (pets socializados, sem menores de 13 anos) qualificam o público e evitam frustrações.</li> <li>Forte Apelo Visual: O site usa fotos de alta qualidade que mesclam luxo (bangalôs, banheiras) com o lifestyle pet (cães na piscina, na cama).</li> <li>Foco na Reserva Direta: Múltiplos CTAs ("Fazer reserva!", "Central de Reservas") para capturar o cliente sem intermediários.</li> </ul>
$$,'{{BASE}}', url) FROM base),
    'https://github.com/alephsramos-dev',
    '#ffffff60',
    '#ffffff80',
    '#ffffff',
    '#60b1eb20',
    '#60b1eb20',
    '#60b1eb'
);

WITH base AS (
    SELECT 'https://<PROJECT-REF>.supabase.co/storage/v1/object/public/assets/'::TEXT AS url
)
INSERT INTO public.services (slug, image_url, name, description, width, color_border_expression) VALUES
('criacao-de-sites', (SELECT url || 'services/website.webp'        FROM base), 'Criação de Sites', 'Mais do que um site, uma experiência digital exclusiva. Cada detalhe é planejado para refletir a excelência da sua marca.', 'calc(33.33% - 10px)', 'rgba(props.theme.colors.mint[''basic''], 0.2)'),
('automacao',        (SELECT url || 'services/automation.webp'     FROM base), 'Automação', 'Automação de processos para aumentar a eficiência e reduzir erros.', 'calc(33.33% - 10px)', 'rgba(props.theme.colors.purple[''basic''], 0.2)'),
('trafego-pago',     (SELECT url || 'services/trafego-pago.webp'    FROM base), 'Tráfego Pago', 'Gestão de campanhas publicitárias para maximizar resultados.', 'calc(33.33% - 10px)', 'rgba(props.theme.colors.orange[''basic''], 0.2)'),
('design-grafico',   (SELECT url || 'services/design-grafic.webp'   FROM base), 'Design Gráfico', 'Criação de identidades visuais impactantes e materiais gráficos de alta qualidade.', 'calc(33.33% - 10px)', 'rgba(props.theme.colors.blue[''basic''], 0.2)'),
('copywriter',       (SELECT url || 'services/copywriter.webp'      FROM base), 'Copywriter', 'Criação de textos persuasivos focados em conversão.', 'calc(33.33% - 10px)', 'rgba(props.theme.colors.indigo[''basic''], 0.2)');

INSERT INTO public.stack_data (tech_name, tecnologias, color) VALUES
('React', ARRAY['React'], '#61DAFB'),
('Javascript', ARRAY['Javascript'], '#F7DF1E'),
('HTML5', ARRAY['HTML'], '#E34F26'),
('Figma', ARRAY['Figma'], '#a259ff'),
('N8N', ARRAY['N8N'], '#EA4B71'),
('CSS3', ARRAY['CSS'], '#1572B6'),
('Supabase', ARRAY['Supabase'], '#3ECF8E'),
('Vite', ARRAY['Vite'], '#646CFF'),
('Firebase', ARRAY['Firebase'], '#FFCA28'),
('Styled Components', ARRAY['Sass'], '#CC6699'),
('Emotion', ARRAY['Emotion'], '#FF4785'),
('Github', ARRAY['Github'], '#fafbfc'),
('Hostgator', ARRAY['Hostgator'], '#229ad0'),
('HTML5', ARRAY['HTML5'], '#E34F26'),
('CSS3', ARRAY['CSS3'], '#1572B6'),
('N8N', ARRAY['N8N'], '#EA4B71');

INSERT INTO public.assessments (image_url, alt, name, role) VALUES
('https://images.unsplash.com/photo-1695927621677-ec96e048dce2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735', 'Photo of John Smith', 'Jonathan Silva', 'CTO at TechCorp'),
('https://images.unsplash.com/photo-1722329434628-5cc2d041ff09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687', 'Photo of Maria Silva', 'Maria Silva', 'UI/UX Designer'),
('https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880', 'Photo of Luis Gomez', 'Luis Gomez', 'Product Manager'),
('https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688', 'Photo of Larissa Costa', 'Larissa Costa', 'Construtora Civil'),
('https://images.unsplash.com/photo-1707676602290-acfdedc6b41d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687', 'Photo of Bruno Fernandes', 'Bruno Fernandes', 'CEO at InnovateX');

INSERT INTO public.benefits (icon_name, title, description) VALUES
('GaugeIcon', 'Velocidade Extrema', 'Sites que carregam em milissegundos para reter visitantes e impulsionar SEO.'),
('SketchLogoIcon', 'Qualidade Premium', 'Código limpo, escalável e revisado com foco em longevidade e manutenção.'),
('UserFocusIcon', 'Conversão Otimizada', 'Arquitetura pensada para transformar tráfego em leads e vendas.'),
('ShieldStarIcon', 'Segurança e Estabilidade', 'Boas práticas, monitoramento e proteção contra falhas comuns.'),
('TrendUpIcon', 'Escalabilidade', 'Estrutura pronta para crescer sem reescrever tudo do zero.'),
('BrowsersIcon', 'SEO Técnico', 'Estratégias e implementação para melhor indexação e ranking.'),
('GitMergeIcon', 'Automação & Performance', 'Pipelines, otimização de bundling, imagens e cache inteligente.'),
('HeadsetIcon', 'Suporte Pró ativo', 'Acompanhamento contínuo e melhorias iterativas pós-entrega.');

WITH base AS (
    SELECT 'https://<PROJECT-REF>.supabase.co/storage/v1/object/public/assets/'::TEXT AS url
)
INSERT INTO public.tech_icons (icon_key, src, alt, title, width, height) VALUES
('react',      (SELECT url || 'icons/reactjs.svg'      FROM base), 'React',      'React',      25, 25),
('supabase',   (SELECT url || 'icons/supabase.svg'     FROM base), 'Supabase',   'Supabase',   25, 25),
('n8n',        (SELECT url || 'icons/n8n.svg'          FROM base), 'n8n',        'n8n',        25, 25),
('javascript', (SELECT url || 'icons/javascript.svg'   FROM base), 'JavaScript', 'JavaScript', 25, 25),
('html',       (SELECT url || 'icons/html.svg'         FROM base), 'HTML5',      'HTML5',      25, 25),
('css',        (SELECT url || 'icons/css.svg'          FROM base), 'CSS3',       'CSS3',       25, 25),
('typescript', (SELECT url || 'icons/typescript.svg'   FROM base), 'TypeScript', 'Typescript', 25, 25),
('vite',       (SELECT url || 'icons/vite.svg'         FROM base), 'Vite',       'Vite',       25, 25),
('nextjs',     (SELECT url || 'icons/nextjs.svg'       FROM base), 'Next.js',    NULL,         25, 25),
('redux',      (SELECT url || 'icons/redux.svg'        FROM base), 'Redux',      NULL,         25, 25),
('nodejs',     (SELECT url || 'icons/nodejs.svg'       FROM base), 'Node.js',    NULL,         25, 25),
('jest',       (SELECT url || 'icons/jest.svg'         FROM base), 'Jest',       NULL,         25, 25),
('mongodb',    (SELECT url || 'icons/mongodb.svg'      FROM base), 'MongoDB',    NULL,         25, 25),
('express',    (SELECT url || 'icons/express.svg'      FROM base), 'Express',    NULL,         25, 25),
('sass',       (SELECT url || 'icons/sass.svg'         FROM base), 'Sass',       NULL,         25, 25),
('figma',      (SELECT url || 'icons/figma.svg'        FROM base), 'Figma',      NULL,         25, 25),
('git',        (SELECT url || 'icons/git.svg'          FROM base), 'Git',        NULL,         25, 25),
('github',     (SELECT url || 'icons/github.svg'       FROM base), 'GitHub',     NULL,         25, 25),
('vercel',     (SELECT url || 'icons/vercel.svg'       FROM base), 'Vercel',     NULL,         25, 25),
('firebase',   (SELECT url || 'icons/firebase.svg'     FROM base), 'Firebase',   NULL,         25, 25),
('html5',      (SELECT url || 'icons/html5.svg'        FROM base), 'HTML5',      NULL,         25, 25),
('css3',       (SELECT url || 'icons/css3.svg'         FROM base), 'CSS3',       NULL,         25, 25),
('emotion',    (SELECT url || 'icons/sass.svg'         FROM base), 'Emotion',    NULL,         25, 25),
('hostgator',  (SELECT url || 'icons/hostgator.svg'    FROM base), 'HostGator',  NULL,         25, 25);

COMMIT;