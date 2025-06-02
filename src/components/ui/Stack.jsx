import React from "react";
import styled from "styled-components";

const Content = styled.div`
    width: max-content;
    height: auto;
    border-radius: 10px;
    background-color: #1d1d1d;
    border: 1px solid #262626;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 10px;
    position: relative;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #353535;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        transform: scale(0.95);
    }

    &:hover span {
        opacity: 1;
        transform: translate(-50%, -15px) scale(1);
        left: 50%;
        top: -5px;
        pointer-events: auto;
    }

    & span {
        opacity: 0;
        transform: translate(-50%, 0) scale(0);
        font-size: 12px;
        font-weight: 200;
        text-transform: uppercase;
        font-family: 'Urbanist', sans-serif;
        position: absolute;
        white-space: nowrap;
        left: 50%;
        top: 0px;
        transition: opacity 0.5s cubic-bezier(.68,-0.55,.27,1.55), transform 0.5s cubic-bezier(.68,-0.55,.27,1.55);
        color: #fff;
        background-color: var(--stack-span-bg, #1d1d1d);
        padding: 2.5px 8px;
        border-radius: 4px;
        box-shadow: 0 2px 8px #0002;
        pointer-events: none;
        z-index: 100;
    }

    & svg {
        width: 50px;
        height: 50px;

        @media (max-width: 768px) {
            width: 35px;
            height: 35px;
        }
    }
`;

export default function Stack({
    icon,
    color,
    name,
    aprender = true
}) {
    return (
        <>
            <Content
                name={name}
                style={{
                    '--stack-span-bg': color || '#1d1d1d',
                }}
            >
                {icon}
                <span>{aprender ? name : 'aprendendo'}</span>
            </Content>
        </>
    )
}