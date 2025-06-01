import React from "react";
import styled from "styled-components";

const Descricao = styled.h1`
    color: ${({ color }) => color || '#1d1d1d'};
    font-size: 20px;
    font-family: 'Urbanist', sans-serif;
    width: 100%;
    line-height: 100%;
    font-weight: 200;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export default function Description({
    descricao,
    color
}){
    return (
        <>
            <Descricao color={color}>{descricao}</Descricao>
        </>
    )
}