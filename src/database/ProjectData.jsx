import Kdea from '@assets/banners/landingpage-kdea.png'
import EuYagoLopes from '@assets/banners/landingpage-euyagolopes.png'
import ChaleFastHomes from '@assets/banners/landingpage-fasthomes.png'
import PisosVinilicos from '@assets/banners/landingpage-pisos-fastsistemasconstrutivos.png'
import SteelConecta from '@assets/banners/landingpage-steelconecta.png'
import LpLeange from '@assets/banners/landingpage-leange.png'
import NovaMetalica from '@assets/banners/institucional-novametalica.png'
import FastHomes from '@assets/banners/institucional-fasthomes.png'
import PousadaLeAnge from '@assets/banners/institucional-leange.png'

import { PasteEuYagoLopes } from '@assets/portfolio/euyagolopes/index';
import { PasteKdea } from '@assets/portfolio/kdea/index';
import { PasteChaleFastHomes} from '@assets/portfolio/chale-fasthomes/index';
import { PasteFastPisos } from '@assets/portfolio/fast-pisos/index';
import { PasteSteelConecta } from '@assets/portfolio/steelconecta/index';
import { PasteLpLeAnge } from '@assets/portfolio/lp-leange/index';
import { PasteNovaMetalica } from '@assets/portfolio/nova-metalica/index';
import { PasteFastHomes } from '@assets/portfolio/fasthomes/index';
import { PastePousadaLeAnge } from '@assets/portfolio/leange/index';

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
    {
        image: NovaMetalica,
        title: "Nova Metálica",
        slug: "nova-metalica",
        popupContent: "Fábrica",
        siteType: "Institucional",
        imageCompanyUrl: companies['nova-metalica'].image,
        companyName: companies['nova-metalica'].name,
        tecnologias: ["react", "vite", "firebase", "n8n", "emotion", "vercel", "figma"],
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
                "techName": "Firebase",
                "tecnologias": ["Firebase"],
                "color": "#FFCA28"
            },
            {
                "techName": "n8n",
                "tecnologias": ["n8n"],
                "color": "#EA4B71"
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
        date: "20/04/2025",
        duration: 280,
        plataform: "Código",
        country: "Brasil",
        description: "Uma fábrica de estruturas metálicas especializada em Steel Frame, oferecendo soluções completas para construção rápida, sustentável e eficiente.",
        urlPage: "https://www.novametalica.com.br",
        fullDescription: `
                       <p> Toda a sua estrutura é projetada para se posicionar como a principal autoridade e fábrica B2B de perfis para construção a seco no Rio de Janeiro. O site não vende apenas produtos; ele vende confiança, tecnologia e parceria para construtoras, engenheiros e profissionais do setor. O foco é claro: captar leads B2B qualificados, oferecendo soluções de engenharia (como o sistema FRAMECAD) e garantindo a procedência do material (aço 100% nacional). </p>

                        <img src="${PasteNovaMetalica.novaMetalicaSectionSobre}" alt="nova-metalica-section-institucional-sobre-missao-visao" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#sobre" target="_blank">https://novametalica.com.br/#sobre</a></span>

                        <h3>Institucional e Proposta de Valor</h3> <p> Mais do que um simples "Sobre Nós", o site dedica uma seção robusta para estabelecer sua credibilidade como a "primeira fábrica de perfis para Steel Frame e Drywall do Rio de Janeiro". Detalha Missão, Visão e Valores (Inovação, Qualidade, Sustentabilidade), gerando uma forte sensação de confiança e solidez para parceiros B2B. </p>

                        <img src="${PasteNovaMetalica.novaMetalicaSectionProducts}" alt="nova-metalica-section-produtos-steel-frame-drywall-stick-engenheirado" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#produtos" target="_blank">https://novametalica.com.br/#produtos</a></span> <h3>Soluções Construtivas (Produtos)</h3> <p> O núcleo comercial do site. É claramente segmentado entre Steel Frame e Drywall. O site vai além de listar "guias e montantes"; ele diferencia suas duas principais ofertas: Perfis Stick (padrão, para corte em obra) e Perfis Engenheirados (customizados de fábrica com projeto), atendendo a diferentes níveis de complexidade de obra. </p>

                        <img src="${PasteNovaMetalica.novaMetalicaSectionDiferenciais}" alt="nova-metalica-section-diferenciais-tecnologia-framecad-aco-nacional" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#diferenciais" target="_blank">https://novametalica.com.br/#diferenciais</a></span> <h3>Diferenciais Tecnológicos (O "Porquê")</h3> <p> Esta é a principal seção de autoridade. A empresa justifica seu valor destacando: 1) Tecnologia de Ponta (máquinas FRAMECAD e Metalso) que garantem precisão e menor taxa de aço; 2) Qualidade do Material (uso exclusivo de "aço 100% nacional" e "normatizado", citando parceiros como a CSN); e 3) Serviços de Engenharia (oferece o serviço de cálculo estrutural, um imenso valor agregado). </p>

                        <img src="${PasteNovaMetalica.novaMetalicaSectionForm}" alt="nova-metalica-section-formulario-orcamento-b2b" /> <span>Nova Metálica | © Todos os direitos reservados | Acesso em: <a href="https://novametalica.com.br/#orcamento" target="_blank">https://novametalica.com.br/#orcamento</a></span> <h3>Captação de Leads (Orçamento)</h3> <p> A conclusão lógica de toda a jornada do usuário. O site não possui um "carrinho" de compras, mas sim múltiplos CTAs ("Solicitar Orçamento") que levam a um formulário B2B detalhado. O objetivo não é vender online, mas capturar projetos e iniciar uma negociação comercial qualificada. </p>

                        <h3>Pontos positivos</h3>

                        <ul> <li>Posicionamento B2B impecável: A linguagem, o design e as ofertas são 100% focados em construtoras, engenheiros e arquitetos.</li> <li>Forte Geração de Autoridade: O site não diz apenas "somos bons", ele <i>prova</i> com "Tecnologia FRAMECAD", "Aço 100% Nacional" e "Perfis Normatizados".</li> <li>Diferenciação de Serviço: Oferecer "Cálculo Estrutural" e "Perfis Engenheirados" eleva a empresa de "fábrica" para "parceira de engenharia".</li> <li>Jornada do Usuário Clara: O site educa (Sobre/Diferenciais), apresenta a solução (Produtos) e converte (Orçamento).</li> <li>Otimizado para Captação de Leads: Múltiplos CTAs claros e um formulário B2B focado em projetos, não em produtos avulsos.</li> <li>Automação (Back-end): (Como mencionado em outros projetos) Uso de automação, como n8n, para integrar os formulários de orçamento diretamente ao CRM, garantindo um atendimento B2B rápido e eficiente.</li> </ul>
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        popupBg: "#ffffff60",
        popupBorder: "#ffffff80",
        popupColor: "#ffffff",
        siteBg: "#189dd620",
        siteBorder: "#189dd620",
        siteColor: "#189dd6",
    },
    {
        image: FastHomes,
        title: "Fast Homes",
        slug: "fast-homes",
        popupContent: "Inovador",
        siteType: "Institucional",
        imageCompanyUrl: companies['fast-homes'].image,
        companyName: companies['fast-homes'].name,
        tecnologias: ["react", "vite", "supabase", "n8n", "emotion", "vercel", "figma"],
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
                "techName": "Supabase",
                "tecnologias": ["Supabase"],
                "color": "#3ECF8E"
            },
            {
                "techName": "n8n",
                "tecnologias": ["n8n"],
                "color": "#EA4B71"
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
        date: "12/07/2025",
        duration: 420,
        plataform: "Código",
        country: "Brasil",
        description: "Casas modulares em Steel Frame, oferecendo soluções rápidas, sustentáveis e personalizadas para construção residencial de alta qualidade.",
        urlPage: "https://www.fasthomes.com.br",
        fullDescription: `
                    <p> Toda a sua estrutura tem como foco se posicionar como um ecossistema completo da construção em Steel Frame. O portal atua como um hub central que se ramifica para atender três públicos principais: o Cliente Final (B2C) que sonha com a casa própria, o Arquiteto/Engenheiro (B2B) que busca um parceiro de execução, e o Investidor (B2B) que procura novos negócios (como o funil dos chalés). </p>

                    <img src="${PasteFastHomes.FastHomesSectionCatalog}" alt="fasthomes-section-catalogo-b2c-modelos-prontos" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/catalogo" target="_blank">https://fasthomes.com.br/catalogo</a></span>

                    <h3>Catálogo B2C (Modelos Prontos)</h3> <p> Esta é a principal vitrine para o cliente final. Uma galeria completa com filtros (área, quartos, pavimentos) que apresenta os modelos de casas prontas (Acácia, Cajueiro, Araucária). O objetivo é converter o sonho do cliente B2C em um lead qualificado, facilitando a visualização do produto final. </p>

                    <img src="${PasteFastHomes.FastHomesSectionProjects}" alt="fasthomes-section-seu-projeto-b2b-arquitetos" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/seu-projeto" target="_blank">https://fasthomes.com.br/seu-projeto</a></span> <h3>Seu Projeto (Funil B2B - Arquitetos)</h3> <p> Uma seção dedicada a arquitetos, engenheiros e clientes que já possuem um projeto personalizado. A Fast Homes não se limita aos seus modelos e se posiciona como a parceira tecnológica (em Steel Frame) para "dar vida" ao projeto do profissional, captando um lead B2B de execução. </p>

                    <img src="${PasteFastHomes.FastHomesSectionParceiros}" alt="fasthomes-section-sobre-nos-e-parcerias-de-autoridade" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/sobre-nos" target="_blank">https://fasthomes.com.br/sobre-nos</a></span> <h3>Sobre Nós e Parcerias (Autoridade)</h3> <p> A seção de geração de confiança. Explica a metodologia (rapidez, sustentabilidade, tecnologia) e, o mais importante, ancora a marca em seus parceiros estratégicos de peso (como Nova Metálica, Saint-Gobain e Fast Sistemas Construtivos), transmitindo credibilidade e solidez de ecossistema. </p>

                    <img src="${PasteFastHomes.FastHomesSectionForm}" alt="fasthomes-section-formulario-segmentado-b2c-b2b-investidor" /> <span>Fast Homes | © Todos os direitos reservados | Acesso em: <a href="https://fasthomes.com.br/contato" target="_blank">https://fasthomes.com.br/contato</a></span> <h3>Hub de Conversão (Formulário Segmentado)</h3> <p> A ferramenta de conversão do site é um formulário inteligente que segmenta o lead no momento da entrada. Ao perguntar "Escolha a opção que melhor te representa", ele divide o fluxo de atendimento entre "Cliente Final", "Arquiteto/Engenheiro" e "Construtor/Investidor", otimizando todo o processo comercial. </p>

                    <h3>Pontos positivos</h3>

                    <ul> <li>Ecossistema Completo: É um portal que integra múltiplos funis de negócio (B2C, B2B, Investidores) em um só lugar.</li> <li>Segmentação Clara de Público: O site direciona cada tipo de visitante para uma jornada específica, otimizando a conversão.</li> <li>Jornada B2C Intuitiva: O catálogo com filtros facilita a escolha do cliente final.</li> <li>Posicionamento B2B: A página "Seu Projeto" respeita e atrai arquitetos e engenheiros como parceiros.</li> <li>Forte Geração de Autoridade: O uso das logomarcas dos parceiros (Nova Metálica, Saint-Gobain) gera confiança imediata.</li> <li>Estratégia Multicanal: O formulário captura leads de "Investidores", que são então direcionados para funis específicos (como o site chale.fasthomes.com.br).</li> </ul>
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        popupBg: "#ffffff60",
        popupBorder: "#ffffff80",
        popupColor: "#ffffff",
        siteBg: "#909e4f20",
        siteBorder: "#909e4f20",
        siteColor: "#909e4f",
    },
    {
        image: PousadaLeAnge,
        title: "Pousada Le Ange",
        slug: "pousada-le-ange",
        popupContent: "Em alta",
        siteType: "Institucional",
        imageCompanyUrl: companies['pousada-le-ange'].image,
        companyName: companies['pousada-le-ange'].name,
        tecnologias: ["react", "vite", "firebase", "emotion", "vercel", "figma"],
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
                "techName": "Firebase",
                "tecnologias": ["Firebase"],
                "color": "#FFCA28"
            },
            {
                "techName": "n8n",
                "tecnologias": ["n8n"],
                "color": "#EA4B71"
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
        date: "09/11/2024",
        duration: 460,
        plataform: "Código",
        country: "Brasil",
        description: "Pousada de alto padrão, localizada em Miguel Pereira-RJ, e Buzios-RJ, oferecendo conforto, lazer e experiências exclusivas para hóspedes e seus pets.",
        urlPage: "https://www.fasthomes.com.br",
        fullDescription: `
                    <p> Toda a sua estrutura tem como foco se posicionar como um portal de luxo "Pet Lover". O site funciona como um hub que apresenta as duas unidades (Serra e Mar), mas seu objetivo principal é vender um conceito: uma experiência de alto padrão onde o pet tem total liberdade e é o convidado de honra, não apenas um "aceito". </p>

                    <img src="${PastePousadaLeAnge.leangeSectionUnidades}" alt="pousada-le-ange-hub-section-unidades-serra-e-mar" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span>

                    <h3>Hub de Unidades (Serra e Mar)</h3> <p> A seção principal do site, que divide a jornada do usuário. Apresenta as "2 unidades, 2 cenários incomparáveis": a Le Ange Serra (Miguel Pereira RJ), focada na Mata Atlântica e sossego, e a Le Ange Mar (Búzios RJ), focada na experiência de praia (a 150m da Praia Rasa). </p>

                    <img src="${PastePousadaLeAnge.leangeSectionPet}" alt="pousada-le-ange-hub-section-diferencial-pet-lovers" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span> 

                    <img src="${PastePousadaLeAnge.leangeSectionPolicy}" alt="pousada-le-ange-hub-section-diferencial-pet-lovers" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span> 
                    
                    <h3>Diferencial (Mais que Pet Friendly)</h3> <p> O coração do site. Uma seção inteira dedicada a provar o conceito "Pet Lovers", detalhando que não há restrição de porte, não há taxas extras para o pet, e eles têm acesso total (incluindo piscinas com tratamento de ozônio). Também estabelece regras claras (não aceita menores de 13 anos) para garantir um ambiente focado. </p>
                    
                    <img src="${PastePousadaLeAnge.leangeSectionAcomodacao}" alt="pousada-le-ange-hub-section-acomodacoes-e-experiencias" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span>
                    <img src="${PastePousadaLeAnge.leangeSectionPacotes}" alt="pousada-le-ange-hub-section-acomodacoes-e-experiencias" /> <span>Pousada Le Ange | © Todos os direitos reservados | Acesso em: <a href="https://pousadaleange.com.br" target="_blank">https://pousadaleange.com.br</a></span>
                    
                    <h3>Acomodações e Experiências</h3> <p> Uma galeria unificada que exibe as "suítes mais procuradas" de ambas as unidades, reforçando o padrão de luxo da marca. Detalha também as experiências (gastronomia inclusa, adega, spa, hot tub, agility para pets) que consolidam a pousada como um destino completo. </p>

                    <h3>Pontos positivos</h3>

                    <ul> <li>Posicionamento de marca extremamente claro: O foco "100% Pet Lover" é o principal argumento de venda e está em toda a comunicação.</li> <li>Função de "Hub" bem executada: O site consegue vender a marca "Le Ange" e, ao mesmo tempo, direcionar o cliente para a unidade que mais lhe agrada (Serra ou Mar).</li> <li>Quebra de Objeções: As regras claras (pets socializados, sem menores de 13 anos) qualificam o público e evitam frustrações.</li> <li>Forte Apelo Visual: O site usa fotos de alta qualidade que mesclam luxo (bangalôs, banheiras) com o lifestyle pet (cães na piscina, na cama).</li> <li>Foco na Reserva Direta: Múltiplos CTAs ("Fazer reserva!", "Central de Reservas") para capturar o cliente sem intermediários.</li> </ul>
                `,
        githubUrl: "https://github.com/alephsramos-dev",
        popupBg: "#ffffff60",
        popupBorder: "#ffffff80",
        popupColor: "#ffffff",
        siteBg: "#60b1eb20",
        siteBorder: "#60b1eb20",
        siteColor: "#60b1eb",
    },
];

export default projects;