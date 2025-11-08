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

import { PasteEuYagoLopes } from '@assets/portfolio/euyagolopes/index';

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