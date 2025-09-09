import Badge from "@/components/ui/Badge/Badge";
import AskItem from "@/components/ui/Others/AskItem";
import Description from "@/components/ui/Texts/Description";
import Title from "@/components/ui/Texts/Title";
import React from "react";
import { TbMichelinStar } from "react-icons/tb";
import styled from "styled-components";

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
    padding: 5% 2.5%;
    max-width: 1420px; /* menor container geral */
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 100px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        padding: 5% 5%;
        gap: 40px;
        flex-direction: column;
    }
`;

const Texts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 20px;
    }

    & > div {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        height: 100%;

        @media (max-width: 768px){
            width: 100%!important;
            align-items: flex-start!important;
            text-align: left;
        }

        &:nth-child(1){
            width: 100%;
        }

        &:nth-child(2){
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 15px;
            border-radius: 8px;
            background-color: #f1f1f110;
            padding: 20px;

            @media (max-width: 768px){
                display: none;
            }

            & p {
                font-size: 20px;
                font-weight: 300;
                line-height: 1.2;

                @media (max-width: 768px){
                    font-size: 16px;
                }
            }

            & button {
                border: 1px solid #fff;
                border-radius: 4px;
                color: #000;
                background-color: #fff;
                padding: 8px 14px;
                cursor: pointer;
                font-weight: 500;
            }
        }
    }
`

const Doubts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0px;

    @media (max-width: 768px){
        width: 100%;
    }
`

export default function FAQ() {
    const [openIndex, setOpenIndex] = React.useState(0);
    const faqs = [
        {
            q: "Quais tecnologias você usa para desenvolver os sites?",
            a: "Trabalho principalmente com React, Vite e Styled-Components no front, e Integrações via APIs e Node quando necessário.",
        },
        {
            q: "O site é otimizado para SEO e performance?",
            a: "Sim. Implemento boas práticas de SEO técnico, otimização de imagens e bundle, além de métricas Core Web Vitals.",
        },
        {
            q: "Você faz integração com WhatsApp, Instagram e Google Ads?",
            a: "Sim, realizo integrações com plataformas de comunicação e automações para captação e qualificação de leads.",
        },
        {
            q: "Como funciona o suporte e manutenção após a publicação?",
            a: "Ofereço planos de manutenção com melhorias recorrentes, correções e monitoramento contínuo.",
        },
        {
            q: "Qual é o prazo médio para entrega de um projeto?",
            a: "Depende do escopo, mas geralmente de 2 a 6 semanas para um site institucional completo.",
        },
    ];

    const handleToggle = (index, next) => {
        setOpenIndex((current) => (next ? index : current === index ? null : current));
    };

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
                                titulo={<>Tire a sua dúvvida, veja as perguntas mais frequentes, mas pode fazer a sua também!</>}
                                color="#fff"
                            />
                        </div>
                        <div>
                            <p>Entre em contato diretamente comigo e tire sua dúvida agora mesmo!</p>
                            <button>Enviar mensagem</button>
                        </div>
                    </Texts>
                    <Doubts>
                        {faqs.map((item, idx) => (
                            <AskItem
                                key={idx}
                                question={item.q}
                                answer={item.a}
                                open={openIndex === idx}
                                onToggle={(next) => handleToggle(idx, next)}
                            />
                        ))}
                    </Doubts>
                </Content>
            </Container>
        </>
    )
}