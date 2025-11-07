import LogoPousadaLeAnge from '@/assets/brands/pousada-le-ange.png';
import LogoFastSistemasConstrutivos from '@/assets/brands/pousada-le-ange.png';
import LogoUnityCompany from '@/assets/brands/pousada-le-ange.png';
import LogoNovaMetalica from '@/assets/brands/pousada-le-ange.png';
import LogoFastHomes from '@/assets/brands/pousada-le-ange.png';
import LogoKdea from '@/assets/brands/pousada-le-ange.png';
import SemLogo from '@/assets/brands/pousada-le-ange.png';
import Default from '@/assets/banners/default.jpg';

import Kdea from '@assets/banners/landingpage-kdea.png'
import EuYagoLopes from '@assets/banners/landingpage-euyagolopes.png'
import ChaleFastHomes from '@assets/banners/landingpage-fasthomes.png'
import PisosVinilicos from '@assets/banners/landingpage-pisos-fastsistemasconstrutivos.png'

import companies from '@/database/companys';

export const projects = [
    {
        image: EuYagoLopes,
        title: "Programa de Fidelidade",
        slug: "programa-de-fidelidade",
        popupContent: "Novidade",
        siteType: "Aplicações",
        imageCompanyUrl: companies[1].image,
        companyName: companies[1].name,
        tecnologias: ["react", "supabase", "n8n", "vite", "sass", "javascript"],
        stack: [
            {
                "techName": "React",
                "tecnologias": ["React"],
                "color": "#61DAFB"
            },
            {
                "techName": "Javascript",
                "tecnologias": ["Javascript"],
                "color": "#F7DF1E"
            }
        ],
        date: "22/09/2025",
        duration: 120,
        plataform: "Código",
        country: "Brasil",
        description: "Sistema de fidelidade para clientes da fast, sistema totalmente focado em ser automono, o próprio usuário consegue fazer tudo sem depender de ninguém.",
        urlPage: "https://fidelidade.fastsistemasconstrutivos.com.br",
        fullDescription: `
                        <p>
                            Um programa simples para recompensar quem compra com a Fast: a cada pedido, os pontos caem direto na sua conta e podem virar descontos reais ou brindes.
                            Tudo automático, sem burocracia e visível em um painel claro.
                        </p>

                        <img src="${EuYagoLopes}" alt="Programa de Fidelidade - Fast Sistemas Construtivos" />
                        <span>Programa de Fidelidade - Fast Sistemas Construtivos</span>

                        <p>
                            Você acompanha o saldo e o histórico, vê as recompensas disponíveis e resgata com poucos cliques — inclusive no checkout.
                            Quando existem campanhas ativas, avisamos com bônus de pontos e prazos para você aproveitar melhor.
                        </p>

                        <h3>Pontos positivos</h3>

                        <ul>
                            <li>Acúmulo automático por compra</li>
                            <li>Resgate rápido em descontos/brindes</li>
                            <li>Painel com saldo e extrato</li>
                        </ul>
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: Default,
        title: "Gerenciador de Agência",
        popupContent: "Útil",
        slug: "gerenciador-de-agencia",
        siteType: "Aplicações",
        imageCompanyUrl: LogoUnityCompany,
        companyName: "Unity Company",
        tecnologias: ["react", "javascript", "firebase", "vite", "sass"],
        stack: [
            {
                "techName": "React",
                "tecnologias": ["React"],
                "color": "#61DAFB"
            },
            {
                "techName": "Firebase",
                "tecnologias": ["Firebase"],
                "color": "#FFCA28"
            },
            {
                "techName": "Vite",
                "tecnologias": ["Vite"],
                "color": "#646CFF"
            },
            {
                "techName": "Sass",
                "tecnologias": ["Sass"],
                "color": "#CC6699"
            },
            {
                "techName": "Javascript",
                "tecnologias": ["Javascript"],
                "color": "#F7DF1E"
            }
        ],
        date: "11/02/2025",
        duration: 120,
        plataform: "Código",
        country: "Brasil",
        description: "Gerenciador completo para que o time de marketing consiga ter controle total sobre os projetos, clientes, finanças etc.",
        fullDescription: "<p>Uma ferramenta robusta e centralizada, projetada para dar à sua equipe <strong>controle total e visibilidade completa</strong> sobre todas as operações essenciais.</p><p>Com ele, você pode gerenciar de forma eficiente:</p><ul><li><strong>Projetos:</strong> Acompanhe o ciclo de vida de cada campanha, desde o briefing até a entrega final, com cronogramas, tarefas e responsáveis.</li><li><strong>Clientes:</strong> Mantenha um registro detalhado de todos os seus clientes, contratos, histórico de comunicação e projetos associados.</li><li><strong>Finanças:</strong> Controle orçamentos, despesas e faturamento de cada projeto, garantindo a saúde financeira do seu departamento.</li><li><strong>E muito mais:</strong> Gere relatórios, analise métricas de desempenho e otimize os fluxos de trabalho da sua equipe.</li></ul>",
        urlPage: "https://gerenciador.unitycompany.com.br",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: Default,
        title: "Sistema de Pré-vendas",
        popupContent: "Útil",
        slug: "sistema-de-pre-vendas",
        siteType: "Aplicações",
        imageCompanyUrl: LogoUnityCompany,
        companyName: "Unity Company",
        tecnologias: ["javascript", "html", "n8n", "css", "sass", "firebase"],
        date: "11/02/2025",
        description: "Gerenciador completo para que o time de marketing consiga ter controle total sobre os projetos, clientes, finanças etc.",
        urlPage: "",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: EuYagoLopes,
        title: "euYagoLopes",
        popupContent: "Tendência",
        slug: "euyagolopes",
        siteType: "Landing Page",
        imageCompanyUrl: SemLogo,
        companyName: "euYagoLopes",
        tecnologias: ["javascript", "html", "css"],
        date: "08/04/2025",
        description: "Landing page totalmente focada em conversão, apresentando de forma profissional e trazendo um aspecto de alto valor.",
        urlPage: "https://euyagolopes.com.br",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: Default,
        title: "Pousada Le Ange",
        popupContent: "Mais visto",
        slug: "pousada-le-ange",
        siteType: "Institucional",
        imageCompanyUrl: LogoPousadaLeAnge,
        companyName: "Pousada Le Ange",
        tecnologias: ["react", "firebase", "vite", "sass", "javascript"],
        date: "28/06/2024",
        description: "Uma página única focada em apresentar todas as qualidades das duas unidades da pousada.",
        urlPage: "https://pousadaleange.com.br",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: Default,
        title: "Nova Metálica",
        popupContent: "Fábrica",
        slug: "nova-metalica",
        siteType: "Institucional",
        imageCompanyUrl: LogoNovaMetalica,
        companyName: "Nova Metálica",
        tecnologias: ["react", "vite", "sass", "javascript"],
        date: "19/06/2025",
        description: "Apresentamos uma fábrica de steel frame e drywall, com foco em passar o valor por meio da construção sustentável.",
        urlPage: "https://novametalica.com.br",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: Kdea,
        title: "K'dea Construtora",
        slug: "kdea-construtora",
        popupContent: "Em alta",
        siteType: "Landing Page",
        imageCompanyUrl: LogoKdea,
        companyName: "K'dea Construtora",
        tecnologias: ["javascript", "html", "css"],
        date: "22/01/2025",
        description: "Um site de altissimo padrão, apresentando todas as obras feitas pela construtora de forma profissional e dinamica.",
        urlPage: "https://kdea.com.br",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: ChaleFastHomes,
        title: "Cháles para Airbnb",
        popupContent: "Em alta",
        slug: "chales-para-airbnb",
        siteType: "Landing Page",
        imageCompanyUrl: LogoFastHomes,
        companyName: "Fast Homes",
        tecnologias: ["react", "vite", "n8n", "sass", "javascript"],
        date: "23/09/2025",
        description: "Uma página focada em vender chalés, apresentando de forma estratégica o uso em locação no airbnb.",
        urlPage: "https://chale.fasthomes.com.br",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: PisosVinilicos,
        title: "Pisos Vinilicos",
        popupContent: "Auge",
        slug: "pisos-vinilicos",
        siteType: "Landing Page",
        imageCompanyUrl: LogoFastSistemasConstrutivos,
        companyName: "Fast Sistemas Construtivos",
        tecnologias: ["n8n", "javascript", "html", "css"],
        date: "20/11/2024",
        description: "Site com foco em apresentar de forma de alto padrão todas as casas pré fábricadas.",
        urlPage: "https://pisos.fastsistemasconstrutivos.com.br",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: Default,
        title: "Fast Homes",
        popupContent: "Tendência",
        siteType: "Institucional",
        slug: "fast-homes",
        imageCompanyUrl: LogoFastHomes,
        companyName: "Fast Homes",
        tecnologias: ["react", "n8n", "firebase", "vite", "sass", "javascript"],
        date: "24/04/2025",
        description: "Site com foco em apresentar de forma de alto padrão todas as casas pré fábricadas.",
        urlPage: "https://fasthomes.com.br",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },
    {
        image: Default,
        title: "Loja Fast",
        popupContent: "Novidade",
        siteType: "E-commerce",
        slug: "fast-homes",
        imageCompanyUrl: LogoFastHomes,
        companyName: "Fast Homes",
        tecnologias: ["react", "n8n", "firebase", "vite", "sass", "javascript"],
        date: "24/04/2025",
        description: "Site com foco em apresentar de forma de alto padrão todas as casas pré fábricadas.",
        urlPage: "https://fasthomes.com.br",
        githubUrl: "https://github.com/alephsramos-dev",
        onDetails: "",
        popupBg: "#ffffff",
        popupBorder: "#00000010",
        popupColor: "#000000",
        siteBg: "#ffffff",
        siteBorder: "#00000010",
        siteColor: "#000000",
    },

];

export default projects;


// {
//     image: "",
//
//  Default title: "",
//     popupContent: "",
//     siteType: "",
//     imageCompanyUrl: "",
//     companyName: "",
//     tecnologias: [],
//     date: "",
//     description: "",
//     urlPage: "",
//     githubUrl: "",
//     onDetails: "",
//     popupBg: "",
//     popupBorder: "",
//     popupColor: "",
//     siteBg: "",
//     siteBorder: "",
//     siteColor: "",

// }, 