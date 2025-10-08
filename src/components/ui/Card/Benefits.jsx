import React from "react";
import styled from "styled-components";

import { FiZap } from "react-icons/fi";
import { rgba } from "polished";

const Card = styled.div`
    width: 25%;
    padding: 38px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-left: 1px solid ${(props) => rgba(props.theme.colors.gray[100], 0.2)};
    gap: 16px;
    position: relative;
    isolation: isolate;

    &::before {
        content: '';
        width: 2px;
        height: 30px;
        left: 0;
        top: 40%;
        position: absolute;
        background: ${(props) => rgba(props.theme.colors.gray[100], 0.4)};
        transition: width 1s cubic-bezier(.4,.2,.2,1);
    }

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        position: absolute;
        background: linear-gradient(45deg, #ffffff10, #ffffff00);
        transition: opacity .35s ease;
        pointer-events: none;
        z-index: -1;
    }

    &:hover::before { 
        width: 4px; 
        background: ${(props) => props.theme.colors.blue['basic']}; 
    }

    &:hover::after { 
        opacity: 1;
    }

    &:hover h2 { 
        transform: translateX(8px); 
    }

    &:hover p { 
        transform: translateY(4px);
    }

    & h2 {
        font-size: 26px;
        font-weight: ${(props) => props.theme.fontWeights.normal};
        transition: transform .25s cubic-bezier(.4,.2,.2,1);
        letter-spacing: -0.25px;
        line-height: ${(props) => props.theme.lineHeights.heading};
    }

    & p {
        font-size: 16px;
        font-weight: ${(props) => props.theme.fontWeights.light};
        color: ${(props) => props.theme.colors.gray[200]};
        line-height: ${(props) => props.theme.lineHeights.normal};
        transition: transform .25s cubic-bezier(.4,.2,.2,1);
    }

    @media (max-width: 1100px) { 
        width: 50%; 
    }

    @media (max-width: 640px) { 
        width: 100%; 
        padding: 28px 28px 36px; 
    }
`;

const IconWrapper = styled.div`
    font-size: 42px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.gray[100]};
    transition: transform .35s cubic-bezier(.4,.2,.2,1), color .5s ease;

    ${Card}:hover & {
        transform: translateY(-4px);
        color: ${(props) => props.theme.colors.blue['basic']};
    }
`;

export const BeneficioIcon = ({ as: IconComponent, ...rest }) => {
    return (
        <>
            <IconWrapper>
                <IconComponent {...rest} weight="thin"/>
            </IconWrapper>
        </>
    )
};

export default function BeneficioCard({
    icon,
    title,
    description,
    ...rest
}) {
    
    return (
        <Card {...rest}>
            <BeneficioIcon as={icon} />
            <h2>{title}</h2>
            <p>{description}</p>
        </Card>
    );
}
