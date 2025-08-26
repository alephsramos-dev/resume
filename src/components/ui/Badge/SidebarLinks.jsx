import React from "react";
import { GoArrowRight } from "react-icons/go";
import styled from "styled-components";

const Content = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 7.5px;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    &:hover,
    &:active,
    &:focus {
        background-color: ${({ colorBg }) => colorBg || "transparent"}40;
        border: 1px solid ${({ colorBg }) => colorBg || "transparent"}40;

        & span {
            color: ${({ color }) => color || "#ffffff"};
            font-weight: 400;
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
        font-size: 14px;
        color: #fff;
        font-weight: 300;
        transition: all 0.2s ease-in-out;
    }

    & svg {
        color: #fff;
        transition: all 0.2s ease-in-out;
        font-size: 15px;
    }

    & .Arrow {
        font-size: 16px!important;
        margin-left: 15px;
    }
`

export default function SidebarLinks({
    textButton,
    bgColor,
    colorText,
    icon: Icone,
    onClick,
    ...props
}) {
    return (
        <>
            <Content onClick={onClick} colorBg={bgColor} color={colorText} {...props}>
                <div>
                    {Icone && <Icone />}
                    <span>{textButton}</span>
                </div>
                <div>
                    <GoArrowRight className="Arrow" />
                </div>  
            </Content>
        </>
    )
}
