import React from "react";
import styled from "styled-components";
import { FiZap } from "react-icons/fi";


const Card = styled.div`
    width: 25%;
    border-left: 1px solid #ffffff20;
    /* border-top control: só adicionada via grid para desktop linha 2+, mas no mobile todos */
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    position: relative;
    font-family: 'Urbanist', sans-serif;
    isolation: isolate;

    &::before {
        content: '';
        width: 2px;
        height: 30px;
        left: 0;
        top: 35%;
        position: absolute;
        background: #ffffff40;
        transition: width .25s cubic-bezier(.4,.2,.2,1);
    }

    &::after {
        content: '';
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: linear-gradient(45deg, #ffffff10, #ffffff00);
        filter: blur(14px);
        transition: opacity .35s ease;
        pointer-events: none;
        z-index: -1;
    }

    &:hover::before { width: 4px; background: #0066a0; }
    &:hover::after { opacity: 1; }
    &:hover h2 { transform: translateX(10px); }
    &:hover p { transform: translateY(4px); }

    & h2 {
        font-size: 26px;
        font-weight: 500;
        transition: transform .25s cubic-bezier(.4,.2,.2,1);
        letter-spacing: -0.25px;
    }

    & p {
        font-size: 18px;
        font-weight: 300;
        color: #ffffff80;
        line-height: 1.45;
        transition: transform .25s cubic-bezier(.4,.2,.2,1);
    }

    @media (max-width: 1100px) { width: 50%; }
    @media (max-width: 640px) { 
        width: 100%; 
        padding: 28px 28px 36px; 
        /* bordas verticais agora controladas pelo grid */
    }
`;

const IconWrapper = styled.div`
    font-size: 40px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    opacity: 0.95;
    transition: transform .35s cubic-bezier(.4,.2,.2,1), filter .35s ease;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,.35));
    ${Card}:hover & {
        transform: translateY(-4px);
        filter: drop-shadow(0 6px 16px rgba(0,0,0,.45));
    }
`;

// Ícone desacoplado para reutilização ou personalização global
export const BeneficioIcon = ({ as: Icon = FiZap, ...rest }) => {
    return <IconWrapper><Icon {...rest} /></IconWrapper>;
};

export default function BeneficioCard({
    icon: Icon = FiZap,
    title,
    text, // compatibilidade antiga
    description,
    descricao, // compatibilidade antiga
    children,
    ...rest
}) {
    const finalTitle = title || (text ? `${text}` : 'Velocidade Extrema');
    const finalDescription = description || descricao || 'Sites que carregam instantaneamente para reter visitantes e alcançar melhores posições no Google.';

    return (
        <Card {...rest}>
            <BeneficioIcon as={Icon} />
            <h2>{finalTitle}</h2>
            <p>{children || finalDescription}</p>
        </Card>
    );
}
