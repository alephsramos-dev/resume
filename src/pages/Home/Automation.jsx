import { AnimatedBeamDemo } from "@/components/magicui/automation";
import Badge from "@/components/ui/Badge/Badge";
import Description from "@/components/ui/Texts/Description";
import Title from "@/components/ui/Texts/Title";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { TbMichelinStar } from "react-icons/tb";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f1f1;
    color: #000;
    position: relative;
    z-index: 2;
    overflow: hidden;
`;

const Content = styled.section`
    width: 100%;
    padding: 5% 2.5%;
    max-width: 1420px; /* menor container geral */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
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
    gap: 15px;
    flex-direction: column;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }

    & > div {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        height: 100%;

            & button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            color: #000000;
            border-radius: 2px;
            transition: all 0.3s ease-in-out;
            border: 1px solid #00000050;
            padding: 8px 12px;
            font-size: 16px;
            cursor: pointer;
            position: relative;
            z-index: 1;

            &::before{
                content: '';
                position: absolute;
                width: 0%;
                height: 100%;
                background: #000000;
                top: 0;
                z-index: -2;
                border-radius: 2px;
                left: 0;
                transition: all 0.3s ease-in-out;
            }

            &:hover {
                color: #fbfbfb;
            }
            
            &:hover::before{
                width: 100%;
            }
        }

        @media (max-width: 768px){
            width: 100%!important;
            align-items: flex-start!important;
            text-align: left;
        }
    }
`

export default function Automation() {
    return (
        <>
            <Container>
                <Content>
                    <Texts>
                        <div>
                            <Badge
                                texto="Beneficios"
                                icon={<TbMichelinStar />}
                                txtcolor="#0066a0"
                                color="#0066a030"
                            />
                            <Title
                                titulo={<>Automatize tudo hoje mesmo, e evite trabalho manual.</>}
                                color="#000"
                            />
                        </div>
                        <div>
                            <Description
                                descricao="Resultados reais através de arquitetura sólida, foco em conversão e otimização contínua."
                                color="#1d1d1b"
                            />
                            <button>
                                <span>Explorar a fundo</span>
                                <GoArrowUpRight />
                            </button>
                        </div>
                    </Texts>
                    <AnimatedBeamDemo />
                </Content>
            </Container>

            
        </>
    )
}