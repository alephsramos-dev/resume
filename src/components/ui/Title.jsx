import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    color: ${({ color }) => color || '#1d1d1d'};
    font-size: 38px;
    width: 100%;
    line-height: 100%;
    font-weight: 500;

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