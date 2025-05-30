import React from "react";
import styled from "styled-components";
import SidebarLinks from "@/components/ui/sidebarLinks";
import { IoIosGitMerge } from "react-icons/io";

const Content = styled.div`
    width: 100%;
    max-width: 300px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1D1D1D;
`

const Line = styled.div`

`

const Links = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export default function Sidebar() {
    return (
        <>
            <Content>
                <Links>
                    <h4>Nos conheça</h4>
                    <SidebarLinks 
                        icon={IoIosGitMerge}
                        nomeDoLink="Serviços"
                        color="#ffffff"
                        colorBg="#ffffff"
                    />
                    <SidebarLinks 
                        icon={IoIosGitMerge}
                        nomeDoLink="Projetos"
                        color="#ffffff"
                        colorBg="#ffffff"
                    />
                    <SidebarLinks 
                        icon={IoIosGitMerge}
                        nomeDoLink="Stacks"
                        color="#ffffff"
                        colorBg="#ffffff"
                    />
                    <Line></Line>
                    <h4>Para você</h4>
                    <SidebarLinks 
                        icon={IoIosGitMerge}
                        nomeDoLink="Criar um site"
                        color="#ffffff"
                        colorBg="#ffffff"
                    />
                    <SidebarLinks 
                        icon={IoIosGitMerge}
                        nomeDoLink="Criar um Design Gráfico"
                        color="#ffffff"
                        colorBg="#ffffff"
                    />
                    <Line></Line>
                    <h4>Fale conosco</h4>
                    <SidebarLinks 
                        icon={IoIosGitMerge}
                        nomeDoLink="Contato"
                        color="#ffffff"
                        colorBg="#ffffff"
                    />
                </Links>
                <Line></Line>
                <span>Desenvolvido por Aleph</span>
            </Content>
        </>
    )
}