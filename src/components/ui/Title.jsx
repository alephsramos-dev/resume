import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    color: ${({ color }) => color || '#1d1d1d'};
    font-size: 38px;
    width: 100%;
    font-family: 'Urbanist', sans-serif;
    line-height: 100%;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 26px;
    }
`;

export default function Title({
    titulo,
    color
}){
    return (
        <>
            <Titulo color={color}>{titulo}</Titulo>
        </>
    )
}