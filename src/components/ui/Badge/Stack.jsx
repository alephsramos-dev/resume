import styled from "styled-components";
import { techIcons } from "@/db/TechIcons";

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
    return (
        <>
            <Container color={color}>
                {tecnologias.map((tec, idx) => (
                    <li key={tec + idx}>
                        {techIcons[tec.toLowerCase()] || tec}
                    </li>
                ))}
                <span>{techName}</span>
            </Container>
        </>
    )
}