import React from "react";
import styled from "styled-components";

const Content = styled.button`
    width: auto;
    height: auto;
    padding: 7.5px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }) => color || "transparent"}20;
    border: 1px solid ${({ color }) => color || "transparent"}20;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) { 
        padding: 5px;
        background-color: ${({ color }) => color || "transparent"}40;
        border: 1px solid ${({ color }) => color || "transparent"}40;
        border-radius: 5px;
    }

    &:hover {
        transform: scale(0.95);
        box-shadow: 0 0 10px ${({ color }) => color || "transparent"}70;
        border-color: transparent;
    }

    &:active {
        transform: scale(0.9);
        background-color: ${({ color }) => color || "transparent"}15;
        box-shadow: 0 0 20px ${({ color }) => color || "transparent"}50;
        border-color: transparent;
    }

    & svg {
        width: 20px;
        height: 20px;
        color: ${({ color }) => color || "#ffffff"};

        @media (max-width: 768px) {
            width: 18px;
            height: 18px;
        }
    }
`

export default function IconHeader({
    icon: Icone,
    color,
    onClick,
    ...props
}) {
    return (
        <Content
            color={color}
            onClick={onClick}
            type="button"
            {...props}
        >
            {Icone && <Icone />}
        </Content>
    )
}