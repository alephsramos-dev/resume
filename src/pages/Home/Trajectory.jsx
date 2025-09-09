import Badge from "@/components/ui/Badge/Badge";
import Description from "@/components/ui/Texts/Description";
import Title from "@/components/ui/Texts/Title";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import React from "react";
import { TbLoader } from "react-icons/tb";
import styled from "styled-components";
import { TimelineList } from "@/sections/CompareSection/Timeline";
import { BiLogoWhatsapp } from "react-icons/bi";
import { CiCloud, CiPaperplane } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CompareSlider } from "@/sections/CompareSection/Compare";
import ChatNowButton from "@/components/ui/Button/Chat";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    position: relative;
    z-index: 2;
    overflow: hidden;
`;

const Content = styled.section`
    width: 100%;
    padding: 3% 2.5%;
    max-width: 1420px; /* menor container geral */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        padding: 5% 2.5%;
        gap: 30px;
        flex-direction: column;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    gap: 20px;

    @media (max-width: 768px){
        width: 100%;
    }

    & hr {
        width: 10%;
        opacity: 0;
        margin: 5px 0;
        left: 0;

        @media (max-width: 768px){
            width: 20%;
            margin: 0;
        }
    }
`

const Compare = styled.div`
    width: 50%;
    border: 1px solid #ffffff20;


    @media (max-width: 768px){
        width: 100%;
    }
`

export default function ComoFunciona() {
    return (
        <>
            <Container>
                <Content>
                    <Text>
                        <Badge
                            texto="Processos"
                            icon={<TbLoader />}
                            txtcolor="#ff6a00"
                            color="#ff6a0030"
                        />
                        <Title
                            titulo="Veja os processos para a criação do seu site de alta performance"
                            color="#fff"
                        />
                        <hr />
                        <TimelineList
                            items={[
                                {
                                    icon: BiLogoWhatsapp,
                                    title: "Conversa Inicial",
                                    description:
                                        "Teremos uma conversa para alinhar objetivos e como iremos construir seu site, prazo, ideias.",
                                    tag: "Briefing",
                                    tagColor: "#4FCE5D"
                                },
                                {
                                    icon: IoCodeSlashOutline,
                                    title: "Design e desenvolvimento",
                                    description: "Após aprovação, iniciamos o desenvolvimento completo do seu site, usando as tecnologias mais adequadas.",
                                    tag: "Build",
                                    tagColor: "#0bc7ca"
                                },
                                {
                                    icon: CiCloud,
                                    title: "Aprovação e lançamento",
                                    description: "Concluido o desenvolvimento, seu site estará disponivel para acessar no seu dominio 'https://seusite.com.br'",
                                    tag: "Deploy",
                                },
                            ]}
                        />
                    </Text>
                    <Compare>
                            <CompareSlider />
                    </Compare>
                </Content>
            </Container>
        </>
    )
}