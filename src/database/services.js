import dev from '@/assets/services/website.webp';
import automation from '@/assets/services/automation.webp';
import traffic from '@/assets/services/trafego-pago.webp';
import design from '@/assets/services/design-grafic.webp';
import redator from '@/assets/services/copywriter.webp';

import { rgba } from 'polished';

const services = [
    {
        slug: "criacao-de-sites",
        image: dev,
        name: "Criação de Sites",
        description: "Mais do que um site, uma experiência digital exclusiva. Cada detalhe é planejado para refletir a excelência da sua marca.",
        width: "calc(33.33% - 10px)",
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
        slug: "trafego-pago",
        image: traffic,
        name: "Tráfego Pago",
        description: "Gestão de campanhas publicitárias para maximizar resultados.",
        width: "calc(33.33% - 10px)",
        colorBorder: (props) => rgba(props.theme.colors.orange['basic'], 0.2)
    },
    {
        slug: "design-grafico",
        image: design,
        name: "Design Gráfico",
        description: "Criação de identidades visuais impactantes e materiais gráficos de alta qualidade.",
        width: "calc(33.33% - 10px)",
        colorBorder: (props) => rgba(props.theme.colors.blue['basic'], 0.2)
    },
    {
        slug: "copywriter",
        image: redator,
        name: "Copywriter",
        description: "Criação de textos persuasivos focados em conversão.",
        width: "calc(33.33% - 10px)",
        colorBorder: (props) => rgba(props.theme.colors.indigo['basic'], 0.2)
    }
]

export default services;