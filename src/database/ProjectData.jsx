import Kdea from '@assets/banners/landingpage-kdea.png'
import EuYagoLopes from '@assets/banners/landingpage-euyagolopes.png'
import ChaleFastHomes from '@assets/banners/landingpage-fasthomes.png'
import PisosVinilicos from '@assets/banners/landingpage-pisos-fastsistemasconstrutivos.png'
import SteelConecta from '@assets/banners/landingpage-steelconecta.png'
import LpLeange from '@assets/banners/landingpage-leange.png'


import { PasteEuYagoLopes } from '@assets/portfolio/euyagolopes/index';
import { PasteKdea } from '@assets/portfolio/kdea/index';
import { PasteChaleFastHomes} from '@assets/portfolio/chale-fasthomes/index';
import { PasteFastPisos } from '@assets/portfolio/fast-pisos/index';
import { PasteSteelConecta } from '@assets/portfolio/steelconecta/index';
import { PasteLpLeAnge } from '@assets/portfolio/lp-leange/index';

import companies from '@/database/companys';

export const projects = [
    {
        image: EuYagoLopes,
        title: "EuYagoLopes",
        slug: "euyagolopes",
        popupContent: "Tendência",
        siteType: "Landing Page",
        imageCompanyUrl: companies['eu-yago-lopes'].image,
        companyName: companies['eu-yago-lopes'].name,
        tecnologias: ["javascript", "html5", "css3", "github", "hostgator", "figma"],
        stack: [
            {
                "techName": "Javascript",
                "tecnologias": ["Javascript"],
                "color": "#F7DF1E"
            },
            {
                "techName": "HTML5",
                "tecnologias": ["HTML5"],
                "color": "#E34F26"
            },
            {
                "techName": "CSS3",
                "tecnologias": ["CSS3"],
                "color": "#1572B6"
            },
            {
                "techName": "GitHub",
                "tecnologias": ["GitHub"],
                "color": "#fafbfc"
            },
            {
                "techName": "HostGator",
                "tecnologias": ["HostGator"],
                "color": "#229ad0"
            },
            {
                "techName": "Figma",
                "tecnologias": ["Figma"],
                "color": "#a259ff"
            }
        ],
        date: "16/05/2025",
        duration: 80,
        plataform: "Código",
        country: "Brasil",
        description: "Projetada para transmitir sensações de alto valor e profissionalismo, fortalecendo a credibilidade e a percepção do público-alvo.",
        urlPage: "https://www.euyagolopes.com.br",
        fullDescription: `
                        <p>
                            Toda a sua estrutura tem como foco ser minimalista e funcional, com uma navegação intuitiva e moderna, juntando o apelo visual e a eficiência para converter visitantes em clientes.
                        </p>

                        <img src="${PasteEuYagoLopes.euyagolopesSectionDepoimentos}" alt="euyagolopes-by-aleph-ramos-section-depoimentos" />
                        <span>${companies['eu-yago-lopes'].name} | © Todos os direitos reservados | Acesso em: <a href="https://www.euyagolopes.com.br/#depoimentos" target="_blank">https://www.euyagolopes.com.br/#depoimentos</a></span>

                        <h3>Depoimentos</h3>
                        <p>
                            Montada estrategicamente para exibir avaliações reais de clientes satisfeitos, aumentando a confiança dos visitantes e incentivando conversões.
                        </p>

                        <img src="${PasteEuYagoLopes.euyagolopesSectionPortfolio}" alt="euyagolopes-by-aleph-ramos-section-portfolio" />
                        <span>${companies['eu-yago-lopes'].name} | © Todos os direitos reservados | Acesso em: <a href="https://www.euyagolopes.com.br/#portfolio" target="_blank">https://www.euyagolopes.com.br/#portfolio</a></span>
                        <h3>Portfolio</h3>
                        <p>
                            Uma seção dedicada para mostrar os melhores trabalhos e projetos realizados, destacando habilidades e experiências relevantes para potenciais clientes.
                        </p>

                        <img src="${PasteEuYagoLopes.euyagolopesSectionCalendary}" alt="euyagolopes-by-aleph-ramos-section-calendario" />
                        <span>${companies['eu-yago-lopes'].name} | © Todos os direitos reservados | Acesso em: <a href="https://www.euyagolopes.com.br/#eventos" target="_blank">https://www.euyagolopes.com.br/#eventos</a></span>
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
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        popupBg: "#ba000010",
        popupBorder: "#ba000020",
        popupColor: "#ba0000",
        siteBg: "#ba000020",
        siteBorder: "#ba000020",
        siteColor: "#ba0000",
    },
    {
        image: Kdea,
        title: "K'dea Construtora",
        slug: "kdea-construtora",
        popupContent: "",
        siteType: "Landing Page",
        imageCompanyUrl: companies['kdea-construtora'].image,
        companyName: companies['kdea-construtora'].name,
        tecnologias: ["javascript", "html5", "css3", "github", "figma"],
        stack: [
            {
                "techName": "Javascript",
                "tecnologias": ["Javascript"],
                "color": "#F7DF1E"
            },
            {
                "techName": "HTML5",
                "tecnologias": ["HTML5"],
                "color": "#E34F26"
            },
            {
                "techName": "CSS3",
                "tecnologias": ["CSS3"],
                "color": "#1572B6"
            },
            {
                "techName": "GitHub",
                "tecnologias": ["GitHub"],
                "color": "#fafbfc"
            },
            {
                "techName": "Figma",
                "tecnologias": ["Figma"],
                "color": "#a259ff"
            }
        ],
        date: "11/03/2025",
        duration: 60,
        plataform: "Código",
        country: "Brasil",
        description: "Desenvolvida para destacar os diferenciais da construtora, obras, serviços e projetos, transmitindo confiança e profissionalismo aos visitantes.",
        urlPage: "https://www.kdea.com.br",
        fullDescription: `
                        <p> Toda a sua estrutura tem como foco a construção a seco (Steel Frame e Drywall), destacando tecnologia, sustentabilidade e eficiência, com uma navegação moderna e visual que demonstra os projetos e a expertise da construtora. </p>

                        <img src=${PasteKdea.kdeaSectionSobre} alt="kdea-construtora-section-sobre-nos" /> <span>K'dea Construtora | © Todos os direitos reservados | Acesso em: <a href="https://kdea.com.br/#sobre" target="_blank">https://kdea.com.br/#sobre</a></span>

                        <h3>Sobre Nós</h3> <p> Uma seção que detalha a especialização da construtora em construção a seco, apresentando a equipe e marcos importantes, como a participação em projetos de grande nome (Museu do Amanhã, hangar do Neymar Jr., etc.). </p>

                        <img src=${PasteKdea.kdeaSectionProjects} alt="kdea-construtora-section-projetos" /> <span>K'dea Construtora | © Todos os direitos reservados | Acesso em: <a href="https://kdea.com.br/#projetos" target="_blank">https://kdea.com.br/#projetos</a></span> <h3>Projetos</h3> <p> Uma galeria visual dedicada a mostrar os projetos recentes e de maior destaque realizados pela construtora, evidenciando a qualidade e a diversidade dos trabalhos com Steel Frame. </p>

                        <img src=${PasteKdea.kdeaSectionRevist} alt="kdea-construtora-section-revista" /> <span>K'dea Construtora | © Todos os direitos reservados | Acesso em: <a href="https://kdea.com.br/#revista" target="_blank">https://kdea.com.br/#revista</a></span> <h3>Revista K'dea</h3> <p> Uma seção de conteúdo próprio onde a empresa disponibiliza sua revista (K'dea 360), oferecendo insights, inspirações e detalhes sobre suas obras e o mercado da construção. </p>

                        <h3>Pontos positivos</h3>

                        <ul> <li>Foco em sustentabilidade e redução de desperdício</li> <li>Alta performance de isolamento acústico</li> <li>Redução de custos e tempo de obra (Construção a seco)</li> <li>Projetos com design inovador e funcional</li> <li>Equipe de arquitetos e construtores qualificados</li> <li>Planejamento e organização detalhados em todas as etapas</li> </ul>
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        popupBg: "#ffffff60",
        popupBorder: "#ffffff80",
        popupColor: "#ffffff",
        siteBg: "#ffcb2120",
        siteBorder: "#ffcb2120",
        siteColor: "#ffcb21",
    },
    {
        image: ChaleFastHomes,
        title: "Chalés Fast Homes",
        slug: "chales-fast-homes",
        popupContent: "",
        siteType: "Landing Page",
        imageCompanyUrl: companies['fast-homes'].image,
        companyName: companies['fast-homes'].name,
        tecnologias: ["react", "n8n", "vite", "emotion", "javascript", "vercel", "figma"],
        stack: [
            {
                "techName": "Vite",
                "tecnologias": ["Vite"],
                "color": "#646CFF"
            },
            {
                "techName": "React",
                "tecnologias": ["React"],
                "color": "#61DAFB"
            },
            {
                "techName": "n8n",
                "tecnologias": ["n8n"],
                "color": "#EA4B71"
            },
            {
                "techName": "Javascript",
                "tecnologias": ["Javascript"],
                "color": "#F7DF1E"
            },
            {
                "techName": "HTML5",
                "tecnologias": ["HTML5"],
                "color": "#E34F26"
            },
            {
                "techName": "CSS3",
                "tecnologias": ["CSS3"],
                "color": "#1572B6"
            },
            {
                "techName": "Emotion",
                "tecnologias": ["Emotion"],
                "color": "#ff4785"
            },
            {
                "techName": "Vercel",
                "tecnologias": ["Vercel"],
                "color": "#ffffff"
            },
            {
                "techName": "Figma",
                "tecnologias": ["Figma"],
                "color": "#a259ff"
            }
        ],
        date: "21/09/2025",
        duration: 120,
        plataform: "Código",
        country: "Brasil",
        description: "Desenvolvida para destacar os chalés modulares, enfatizando a rapidez na construção, sustentabilidade e design inovador para atrair clientes interessados.",
        urlPage: "https://www.chale.fasthomes.com.br",
        fullDescription: `
                        <p> Toda a sua estrutura tem como foco a captação de investidores para chalés (como Airbnb), destacando o modelo de negócio, a rapidez da construção em Steel Frame e o alto potencial de lucratividade. </p>

                        <img src="${PasteChaleFastHomes.chaleFastHomesSectionAirbnb}" alt="fasthomes-chales-section-modelos" /> 
                        <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://chale.fasthomes.com.br" target="_blank">https://chale.fasthomes.com.br</a></span> 
                        
                        <h3>Modelos</h3> 
                        
                        <p> Apresenta os projetos estratégicos disponíveis (ex: Chalé Araucária e Chalé Buriti), detalhando as informações técnicas e internas de cada modelo para diferentes segmentos de investimento. </p>

                        <img src="${PasteChaleFastHomes.chaleFastHomesSectionGrafic}" alt="fasthomes-chales-section-diferenciais" /> 
                        <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://chale.fasthomes.com.br" target="_blank">https://chale.fasthomes.com.br</a></span> 
                        <h3>Diferenciais (Metodologia)</h3> 
                        <p> Detalha o processo simplificado em etapas (Escolha, Planejamento, Execução), enfatizando a velocidade (4x mais rápido que o tradicional) e a transparência do processo construtivo. </p>

                        <img src="${PasteChaleFastHomes.chaleFastHomesSectionFaqForm}" alt="fasthomes-chales-section-faq" /> 
                        <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://chale.fasthomes.com.br" target="_blank">https://chale.fasthomes.com.br</a></span> 
                        <h3>FAQ (Perguntas Frequentes)</h3> 
                        <p> Uma seção dedicada a quebrar objeções comuns de investidores, respondendo perguntas sobre financiamento, durabilidade do Steel Frame, prazos e isolamento termoacústico. </p>

                        <h3>Pontos positivos</h3>

                        <ul> <li>Foco claro em investimento e lucratividade (Airbnb, Booking)</li> <li>Construção 4x mais rápida que a alvenaria (prazo de 4 meses)</li> <li>Alta durabilidade e garantia estrutural de 10 anos</li> <li>Eficiência termoacústica superior (Certificação Rw 45dB)</li> <li>Processo simplificado e transparente para o cliente</li> <li>Facilidade de financiamento (aceito pela CAIXA e bancos)</li> </ul>
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        popupBg: "#ffffff60",
        popupBorder: "#ffffff80",
        popupColor: "#ffffff",
        siteBg: "#a8573120",
        siteBorder: "#a8573120",
        siteColor: "#a85731",
    },
    {
        image: PisosVinilicos,
        title: "Pisos Vinílicos Fast",
        slug: "pisos-vinilicos-fast",
        popupContent: "",
        siteType: "Landing Page",
        imageCompanyUrl: companies['fast-sistemas-construtivos'].image,
        companyName: companies['fast-sistemas-construtivos'].name,
        tecnologias: ["javascript", "html5", "n8n", "css3", "github", "figma"],
        stack: [
            {
                "techName": "Javascript",
                "tecnologias": ["Javascript"],
                "color": "#F7DF1E"
            },
            {
                "techName": "HTML5",
                "tecnologias": ["HTML5"],
                "color": "#E34F26"
            },
            {
                "techName": "CSS3",
                "tecnologias": ["CSS3"],
                "color": "#1572B6"
            },
            {
                "techName": "n8n",
                "tecnologias": ["n8n"],
                "color": "#EA4B71"
            },
            {
                "techName": "GitHub",
                "tecnologias": ["GitHub"],
                "color": "#fafbfc"
            },
            {
                "techName": "Figma",
                "tecnologias": ["Figma"],
                "color": "#a259ff"
            }
        ],
        date: "12/06/2025",
        duration: 40,
        plataform: "Código",
        country: "Brasil",
        description: "Feito para apresentar o novo lançamento de pisos vinílicos da Fast Sistemas Construtivos, destacando suas vantagens, aplicações e diferenciais no mercado de construção.",
        urlPage: "https://www.pisos.fastsistemasconstrutivos.com.br",
        fullDescription: `
                        <p> Toda a sua estrutura tem como foco a captação de leads (B2C e B2B) para pisos vinílicos da marca Biancogres, destacando a sofisticação, praticidade de instalação e o conforto termoacústico dos produtos. </p>

                        <img src="${PasteFastPisos.fastPisosSectionComparations}" alt="fast-pisos-section-comparativo-vinilico-vs-tradicional" /> <span>Fast Pisos | © Todos os direitos reservados | Acesso em: <a href="https://pisos.fastsistemasconstrutivos.com.br" target="_blank">https://pisos.fastsistemasconstrutivos.com.br</a></span>

                        <h3>Piso Vinílico vs. Piso Tradicional</h3> <p> Uma seção comparativa que destaca as vantagens do vinílico (composição em PVC, instalação rápida e limpa, manutenção fácil) em relação aos pisos tradicionais, como cerâmicos e laminados. </p>

                        <img src="${PasteFastPisos.fastPisosSectionProducts}" alt="fast-pisos-section-produtos-biancogres" /> <span>Fast Pisos | © Todos os direitos reservados | Acesso em: <a href="https://pisos.fastsistemasconstrutivos.com.br" target="_blank">https://pisos.fastsistemasconstrutivos.com.br</a></span> <h3>Nossos Produtos</h3> <p> Galeria visual dos tipos de pisos vinílicos disponíveis (Amadeirado, Mármore, Cimento Queimado, etc.), com um formulário para baixar o catálogo completo, capturando o lead do visitante. </p>

                        <img src="${PasteFastPisos.fastPisosSectionForm}" alt="fast-pisos-section-formulario-orcamento" /> <span>Fast Pisos | © Todos os direitos reservados | Acesso em: <a href="https://pisos.fastsistemasconstrutivos.com.br" target="_blank">https://pisos.fastsistemasconstrutivos.com.br</a></span> <h3>Orçamento</h3> <p> A principal seção de conversão do site, com formulários de contato estrategicamente posicionados para que o usuário solicite um orçamento de forma rápida e direta. </p>

                        <h3>Pontos positivos</h3>

                        <ul> <li>Foco claro na captação de leads qualificados para orçamento</li> <li>Design sofisticado e moderno (focado na marca Biancogres)</li> <li>Instalação rápida, limpa e sobre pisos existentes</li> <li>Produto com alto conforto térmico e acústico (redução de ruídos)</li> <li>Manutenção prática e alta resistência à umidade e arranhões</li> <li>Uso de automação (n8n) para integrar os formulários de orçamento direto ao CRM da empresa, agilizando o atendimento.</li> </ul>
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        popupBg: "#ffffff60",
        popupBorder: "#ffffff80",
        popupColor: "#ffffff",
        siteBg: "#a67f5620",
        siteBorder: "#a67f5620",
        siteColor: "#a67f56",
    },
    {
        image: SteelConecta,
        title: "Steel Conecta",
        slug: "steel-conecta",
        popupContent: "Novidade",
        siteType: "Landing Page",
        imageCompanyUrl: companies['steel-conecta'].image,
        companyName: companies['steel-conecta'].name,
        tecnologias: ["react", "vite", "n8n", "emotion", "javascript", "vercel", "figma"],
        stack: [
            {
                "techName": "React",
                "tecnologias": ["React"],
                "color": "#61DAFB"
            },
            {
                "techName": "Vite",
                "tecnologias": ["Vite"],
                "color": "#646CFF"
            },
            {
                "techName": "Emotion",
                "tecnologias": ["Emotion"],
                "color": "#ff4785"
            },
            {
                "techName": "Vercel",
                "tecnologias": ["Vercel"],
                "color": "#ffffff"
            },
            {
                "techName": "Javascript",
                "tecnologias": ["Javascript"],
                "color": "#F7DF1E"
            },
            {
                "techName": "n8n",
                "tecnologias": ["n8n"],
                "color": "#EA4B71"
            },
            {
                "techName": "Figma",
                "tecnologias": ["Figma"],
                "color": "#a259ff"
            }
        ],
        date: "28/10/2025",
        duration: 80,
        plataform: "Código",
        country: "Brasil",
        description: "Apresenta a nova plataforma de conexão entre fornecedores e clientes no setor de construção em Steel Frame, facilitando negócios e parcerias.",
        urlPage: "https://www.steelconecta.com.br",
        fullDescription: `
                        <p> Toda a sua estrutura tem como foco ser um ecossistema B2B para o mercado de Steel Frame, conectando profissionais e empresas a métodos, logística de materiais (Fast) e oportunidades de negócios (geração de leads). </p>

                        <img src="${PasteSteelConecta.steelconectaSectionServices}" alt="steel-conecta-section-servicos-ecossistema" /> <span>Steel Conecta | © Todos os direitos reservados | Acesso em: <a href="https://steelconecta.com.br" target="_blank">https://steelconecta.com.br</a></span>

                        <h3>Serviços do Ecossistema</h3> <p> Uma seção que detalha os pilares da plataforma: "Aprenda a projetar", "Planejamento", "Fornecemos materiais" e "Receba leads qualificados", mostrando a solução completa para profissionais do setor. </p>

                        <img src="${PasteSteelConecta.steelconectaSectionCompanys}" alt="steel-conecta-section-parceiros-fast-unity" /> <span>Steel Conecta | © Todos os direitos reservados | Acesso em: <a href="https://steelconecta.com.br" target="_blank">https://steelconecta.com.br</a></span> <h3>Parcerias de Alto Nível</h3> <p> Apresenta as empresas que compõem o ecossistema (Fast Sistemas Construtivos, Fast Homes, Unity Company, Nova Metálica), detalhando o papel de cada uma na entrega de materiais, projetos e marketing. </p>

                        <img src="${PasteSteelConecta.steelconectaSectionForm01}" alt="steel-conecta-section-formulario-e-faq" /> 
                        <img src="${PasteSteelConecta.steelconectaSectionForm02}" alt="steel-conecta-section-formulario-e-faq" /> 
                        <img src="${PasteSteelConecta.steelconectaSectionForm}" alt="steel-conecta-section-formulario-e-faq" /> 
                        
                        <span>Steel Conecta | © Todos os direitos reservados | Acesso em: <a href="https://steelconecta.com.br" target="_blank">https://steelconecta.com.br</a></span> <h3>Inscrição</h3> <p> A principal área de conversão, combinando um formulário de inscrição ("Participar da Steel Conecta")</p>

                        <h3>Pontos positivos</h3>

                        <ul> <li>Ecossistema B2B completo (método, materiais e leads)</li> <li>Foco claro na geração de leads qualificados para os parceiros</li> <li>Integração com marcas fortes do setor (Fast, Nova Metálica)</li> <li>Fornecimento de materiais com preços exclusivos de fábrica</li> <li>Uso de automação (n8n) para integrar os formulários de inscrição direto ao CRM da empresa, agilizando a qualificação dos leads.</li> </ul>
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        popupBg: "#ffffff60",
        popupBorder: "#ffffff80",
        popupColor: "#ffffff",
        siteBg: "#1d537d20",
        siteBorder: "#1d537d20",
        siteColor: "#1d537d",
    },
    {
        image: LpLeange,
        title: "LP Pousada Le Ange",
        slug: "lp-pousada-le-ange",
        popupContent: "",
        siteType: "Landing Page",
        imageCompanyUrl: companies['pousada-le-ange'].image,
        companyName: companies['pousada-le-ange'].name,
        tecnologias: ["javascript", "html5", "css3", "github", "figma"],
        stack: [
            {
                "techName": "Javascript",
                "tecnologias": ["Javascript"],
                "color": "#F7DF1E"
            },
            {
                "techName": "HTML5",
                "tecnologias": ["HTML5"],
                "color": "#E34F26"
            },
            {
                "techName": "CSS3",
                "tecnologias": ["CSS3"],
                "color": "#1572B6"
            },
            {
                "techName": "GitHub",
                "tecnologias": ["GitHub"],
                "color": "#fafbfc"
            },
            {
                "techName": "Figma",
                "tecnologias": ["Figma"],
                "color": "#a259ff"
            }
        ],
        date: "03/06/2025",
        duration: 40,
        plataform: "Código",
        country: "Brasil",
        description: "Desenvolvida para promover a Pousada Le Ange, destacando suas acomodações, localização privilegiada e serviços exclusivos para atrair turistas e viajantes.",
        urlPage: "https://www.mp.pousadaleange.com.br",
        fullDescription: `
                        <p> Toda a sua estrutura tem como foco a captação de leads e reservas diretas, destacando o luxo, as experiências exclusivas e a alta gastronomia da pousada para um público de alto padrão. </p>

                        <img src="${PasteLpLeAnge.lpLeAngeSectionHospedagem}" alt="pousada-le-ange-section-acomodacoes" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://mp.pousadaleange.com.br/#acomodacoes" target="_blank">https://mp.pousadaleange.com.br/#acomodacoes</a></span>

                        <h3>Acomodações</h3> <p> Uma galeria visual de alto impacto que apresenta as suítes e bangalôs, detalhando o luxo, conforto e vistas que cada um oferece para atrair e converter reservas de alto valor. </p>

                        <img src="${PasteLpLeAnge.lpLeAngeSectionExp}" alt="pousada-le-ange-section-experiencias-e-gastronomia" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://mp.pousadaleange.com.br/#experiencias" target="_blank">https://mp.pousadaleange.com.br/#experiencias</a></span> <h3>Experiências e Gastronomia</h3> <p> Destaca os serviços exclusivos, como jantares românticos, passeios, spa ou a culinária do restaurante, posicionando a pousada como um destino completo e não apenas uma hospedagem. </p>

                        <img src="${PasteLpLeAnge.lpLeAngeSectionUnidade}" alt="pousada-le-ange-section-unidades-mp-e-mar" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span> <h3>Unidades (MP e MAR)</h3> <p> Uma seção clara que distingue as duas unidades (Morro de São Paulo e MAR), permitindo ao visitante navegar para a experiência específica que ele procura, seja em MP ou na praia. </p>

                        <h3>Pontos positivos</h3>

                        <ul> <li>Foco claro em reservas diretas e captação de leads de luxo</li> <li>Design visualmente imersivo com fotos e vídeos de alta qualidade</li> <li>Destaque para experiências exclusivas (gastronomia, passeios, spa)</li> <li>Navegação clara e distinta entre as duas unidades (Morro de São Paulo e MAR)</li> <li>Seções de "Acomodações" bem detalhadas para impulsionar a decisão de reserva</li> <li>Múltiplos pontos de CTA (Call to Action) focados em "Reservar Agora"</li> </ul>
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        popupBg: "#ffffff60",
        popupBorder: "#ffffff80",
        popupColor: "#ffffff",
        siteBg: "#1d537d20",
        siteBorder: "#1d537d20",
        siteColor: "#1d537d",
    },
];

export default projects;