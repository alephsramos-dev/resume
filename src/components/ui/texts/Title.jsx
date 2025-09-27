import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    color: ${({ color }) => color || '#1d1d1d'};
    font-size: ${({ fontSize }) => fontSize || '36px'};
    width: auto;
    font-family: 'Urbanist', sans-serif;
    line-height: 1.1;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 26px;
    }
`;

export default function Title({
    titulo,
    color,
    fontSize
}){
    return (
        <>
            <Titulo fontSize={fontSize} color={color}>{titulo}</Titulo>
        </>
    )
}