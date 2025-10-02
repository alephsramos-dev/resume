import React from "react";
import styled from "styled-components";

const Content = styled.div`
    width: max-content;
    height: auto;
    padding: 8px 12px;
    border-radius: 12px;
    background-color: ${({ color }) => color || '#1d1d1d'};
    border: 1px solid ${({ color }) => color || '#1d1d1d'};
    color: ${({ txtcolor }) => txtcolor || '#fff'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    & span {
        font-size: 16px;
        font-weight: 400;   
    }

    & svg {
        color: ${({ txtcolor }) => txtcolor || '#fff'};
        font-size: 18px;
    }
`

export default function Badge({
    colorText,
    bgColor,
    children,
    icon
}) {
    return (
        <>
            <Content color={bgColor} txtcolor={colorText}>
                {icon}
                <span>{children}</span>
            </Content>
        </>
    )
}