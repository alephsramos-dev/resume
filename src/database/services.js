import dev from '@/assets/services/desenvolvedor-web-service.svg';
import automation from '@/assets/services/automation-service.svg';
import traffic from '@/assets/services/traffic-management-service.svg';
import design from '@/assets/services/design-service.svg';
import redator from '@/assets/services/redator-service.svg';

import { rgba } from 'polished';

const services = [
    {
        slug: "desenvolvimento-de-sites",
        image: dev,
        name: "Desenvolvimento de Sites",
        description: "Mais do que um site, uma experiência digital exclusiva. Cada detalhe é planejado para refletir a excelência da sua marca.",
        width: "calc(66.66% - 10px)",
        colorBorder: (props) => rgba(props.theme.colors.mint['basic'], 0.2)
    },
    {
        slug: "automacao",
        image: automation,
        name: "Automação",
        description: "Automação de processos para aumentar a eficiência e reduzir erros.",
        width: "calc(33.33% - 10px)",
        colorBorder: (props) => rgba(props.theme.colors.purple['basic'], 0.2)
    },
    {
        slug: "gestao-de-trafego",
        image: traffic,
        name: "Gestão de Tráfego",
        description: "Gestão de campanhas publicitárias para maximizar resultados.",
        width: "calc(33.33% - 10px)",
        colorBorder: (props) => rgba(props.theme.colors.orange['basic'], 0.2)
    },
    {
        slug: "design-grafico",
        image: design,
        name: "Design Gráfico",
        description: "Criação de identidades visuais impactantes e materiais gráficos de alta qualidade.",
        width: "calc(40% - 10px)",
        colorBorder: (props) => rgba(props.theme.colors.blue['basic'], 0.2)
    },
    {
        slug: "copywriting-redator",
        image: redator,
        name: "Copywriting (Redator)",
        description: "Criação de textos persuasivos focados em conversão.",
        width: "calc(26.66% - 10px)",
        colorBorder: (props) => rgba(props.theme.colors.indigo['basic'], 0.2)
    }
]

export default services;