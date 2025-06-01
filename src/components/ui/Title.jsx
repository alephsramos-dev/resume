import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    color: ${({ color }) => color || '#1d1d1d'};
    font-size: 46px;
    width: 100%;
    line-height: 100%;
    font-weight: 500;

    b {
        background: linear-gradient(90deg, #d102e4, #5B51D8);
        background-size: 100% auto;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        font-size: 30px;
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