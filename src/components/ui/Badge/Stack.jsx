import styled from "styled-components";
import { techIcons } from "@/db/TechIcons";

const Container = styled.li`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background-color: ${({ color }) => color ? `${color}20` : '#111'};
    border: 1px solid ${({ color }) => color ? `${color}30` : '#111'};
    color: ${({ color }) => color || '#fff'};
    padding: 4px 8px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
`

export default function Stack({
    tecnologias = [],
    techName,
    color
}) {
    return (
        <>
            <Container color={color}>
                {tecnologias.map((tec, idx) => (
                    <li key={tec + idx} style={{display: 'inline-block', scale: '0.8'}}>
                        {techIcons[tec.toLowerCase()] || tec}
                    </li>
                ))}
                <span>{techName}</span>
            </Container>
        </>
    )
}