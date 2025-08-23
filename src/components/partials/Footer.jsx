import React from "react";
import styled from "styled-components";

const Content = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1D1D1D;
    padding: 20px;
    position: relative;
    gap: 20px;
    color: #fff;
    border-bottom: 0px solid transparent;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 5px;
        background: linear-gradient(90deg, #d102e4, #5B51D8, #25D366, #d102e4);
        background-size: 500% 100%;
        animation: borderMove 3s linear infinite;
        z-index: 2;
    }

    @keyframes borderMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }

    & img {
        width: 100px;
        height: auto;
        object-fit: contain;
    }

    & p {
        font-size: 12px;
        font-weight: 200;
        opacity: 0.7;
        font-family: 'Urbanist', sans-serif;
    }
`

export default function Footer() {
    return (
        <>
            <Content>
                <img src="/logo-aleph-desenvolvedor-web.svg" alt="" loading="lazy" title="Aleph Desenvolvedor Web" />
                <p>© 2024 - 2025 | Todos os direitos reservados </p>
            </Content>
        </>
    )
}