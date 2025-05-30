import React from "react";
import { GrServices } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";
import styled from "styled-components";

const Content = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:active,
    &:focus {
        background-color: ${({ colorBg }) => colorBg || "transparent"}40;
        border: 1px solid ${({ colorBg }) => colorBg || "transparent"}40;

        & span {
            color: ${({ color }) => color || "#ffffff"};
            font-weight: 500;
        }

        & svg {
            color: ${({ color }) => color || "#ffffff"};
        }
    }

    &:active .Arrow,
    &:hover .Arrow,
    &:focus .Arrow {
        transform: rotate(-45deg);
    }

    & span {
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        transition: all 0.2s ease-in-out;
    }

    & svg {
        color: #fff;
        transition: all 0.2s ease-in-out;
        font-size: 15px;
    }

    & .Arrow {
        font-size: 18px!important;
        margin-left: 15px;
    }
`

export default function SidebarLinks({
    nomeDoLink,
    colorBg,
    color,
    icon: Icone,
    onClick,
    ...props
}) {
    return (
        <>
            <Content onClick={onClick} colorBg={colorBg} color={color} {...props}>
                {Icone && <Icone />}
                <span>{nomeDoLink}</span>
                <GoArrowRight className="Arrow" />
            </Content>
        </>
    )
}

// Uso:

{/* <SidebarLinks 
    icon={}
    nomeDoLink=""
    color="#"
    colorBg="#"
/> */}