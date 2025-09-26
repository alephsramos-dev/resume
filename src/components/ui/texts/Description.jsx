import React from "react";
import styled from "styled-components";

const Descricao = styled.p`
    color: ${({ color }) => color || '#1d1d1d'};
    font-family: 'Urbanist', sans-serif;
    font-size: ${({ fontSize }) => fontSize || '18px'};
    width: 80%;
    line-height: 1.3;
    font-weight: 200;

    @media (max-width: 768px) {
        font-size: 16px;
        width: 100%;
    }
`;

export default function Description({
    descricao,
    color,
    fontSize
}){
    return (
        <>
            <Descricao color={color} fontSize={fontSize}>{descricao}</Descricao>
        </>
    )
}