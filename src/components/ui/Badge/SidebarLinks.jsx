import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
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
    transition: all 0.2s ease;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    &:hover,
    &:active,
    &:focus {
        background-color: ${({ bgColor }) => bgColor || "transparent"};
        border: 1px solid ${({ bgColor }) => bgColor || "transparent"};

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
        color: ${(props) => props.theme.colors.white[300]};
        font-weight: 300;
        transition: all 0.2s ease-in-out;
    }

    & svg {
        color: ${(props) => props.theme.colors.gray[300]};
        transition: all 0.2s ease-in-out;
        font-size: 16px;
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
            <Content onClick={onClick} bgColor={bgColor} color={colorText} {...props}>
                <div>
                    {Icone && <Icone weight="bold" />}
                    <span>{textButton}</span>
                </div>
                <div>
                    <ArrowRightIcon className="Arrow" />
                </div>  
            </Content>
        </>
    )
}
