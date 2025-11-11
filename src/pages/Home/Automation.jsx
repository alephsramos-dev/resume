import { AnimatedBeamDemo } from "@/components/magicui/automation";
import Badge from "@/components/ui/Badge/Badge";
import ChatNowButton from "@/components/ui/Button/Chat";
import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import { TrophyIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { TbMichelinStar } from "react-icons/tb";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.black[0]};
    color: ${(props) => props.theme.colors.white[0]};
    position: relative;
    z-index: 2;
    overflow: hidden;
`;

const Content = styled.section`
    width: 100%;
    padding: 5% 2.5%;
    max-width: 1420px; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 52px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        padding: 10% 5%;
        flex-direction: column;
    }
`;

const Texts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 18px;
    flex-direction: column;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    & h1 {
        font-size: 32px;
        width: 80%;
        color: ${(props) => props.theme.colors.white[100]};
        font-weight: ${(props) => props.theme.fontWeights.normal};
        line-height: ${(props) => props.theme.lineHeights.heading};

        @media (max-width: 768px){
            font-size: 26px;
            width: 100%;
        }
    }

    & p {
        font-size: 18px;
        color: ${(props) => props.theme.colors.gray[100]};
        font-weight: ${(props) => props.theme.light};
        line-height: ${(props) => props.theme.lineHeights.heading};

        @media (max-width: 768px){
            font-size: 16px;
        }
    }
`

export default function Automation() {
    return (
        <>
            <Container>
                <Content>
                    <Texts data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
                        <Badge
                            children="Novidade"
                            icon={<TrophyIcon weight="fill"/>}
                            colorText="rgb(255, 204, 0)"
                            bgColor="rgb(255, 204, 0, 0.1)"
                        />
                        <Title
                            children="Automatize tudo hoje mesmo, e evite trabalho manual"
                        />
                        <Description
                            children="Resultados reais através de arquitetura sólida, foco em conversão e otimização contínua."
                        />
                        <ChatNowButton />
                    </Texts>
                    <AnimatedBeamDemo />
                </Content>
            </Container>

            
        </>
    )
}