import React from "react";
import styled from "styled-components";

const Content = styled.div`
    width: max-content;
    height: auto;
    padding: 7.5px 10px;
    border-radius: 5px;
    background-color: ${({ color }) => color || '#1d1d1d'};
    border: 1px solid ${({ color }) => color || '#1d1d1d'};
    color: ${({ txtcolor }) => txtcolor || '#fff'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & span {
        font-size: 16px;
        font-weight: 500;
        font-family: 'Urbanist', sans-serif;
    }

    & svg {
        color: ${({ txtcolor }) => txtcolor || '#fff'};
        font-size: 16px;
    }
`

export default function Badge({
    txtcolor,
    color,
    texto,
    icon
}) {
    return (
        <>
            <Content color={color} txtcolor={txtcolor}>
                {icon}
                <span>{texto}</span>
            </Content>
        </>
    )
}