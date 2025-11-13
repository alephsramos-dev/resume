import styled from "styled-components";
import { useSupabaseData } from "@/contexts/SupabaseDataContext";

const Container = styled.ol`
    width: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    background-color: ${({ color }) => color ? `${color}20` : '#111'};
    border: 1px solid ${({ color }) => color ? `${color}30` : '#111'};
    color: ${({ color }) => color || '#fff'};
    padding: 4px 8px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;

    & li {
        width: 18px;
        height: 18px;

        & img {
            width: 18px!important;
            height: 18px!important;
        }
    }
`

export default function Stack({
    tecnologias = [],
    techName,
    color
}) {
    const { techIcons = {} } = useSupabaseData();
    const iconMap = techIcons ?? {};

    const renderTechIcon = (tec, idx) => {
        const key = typeof tec === 'string' ? tec.toLowerCase() : `tech-${idx}`;
        const icon = iconMap[key];

        if (!icon) {
            return tec;
        }

        return (
            <img
                src={icon.src}
                alt={icon.alt}
                title={icon.title}
                width={icon.width ?? 18}
                height={icon.height ?? 18}
                loading="lazy"
            />
        );
    };

    return (
        <>
            <Container color={color}>
                {tecnologias.map((tec, idx) => (
                    <li key={tec + idx}>
                        {renderTechIcon(tec, idx)}
                    </li>
                ))}
                <span>{techName}</span>
            </Container>
        </>
    )
}