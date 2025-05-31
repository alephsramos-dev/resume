import React from "react";
import styled from "styled-components";

const Titulo = styled.h1`
    color: ${({ color }) => color || '#1d1d1d'};
    font-size: 46px;
    width: 100%;
    line-height: 100%;
    font-weight: 400;
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