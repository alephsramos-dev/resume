import Badge from "@/components/ui/Badge/Badge";
import AskItem from "@/components/ui/Others/AskItem";
import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import { SealQuestionIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { TbMichelinStar } from "react-icons/tb";
import styled from "styled-components";
import { rgba } from "polished";

import iconAleph from "/icon-black-aleph-desenvolvedor-web.svg";

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
    align-items: stretch;
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
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

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

        @media (max-width: 768px){
            width: 100%!important;
            align-items: flex-start!important;
            text-align: left;
        }

        &:nth-child(1){
            width: 100%;

            & h1 {
                font-size: 32px;
                width: 100%;
                color: ${(props) => props.theme.colors.white[100]};
                font-weight: ${(props) => props.theme.fontWeights.normal};
                line-height: ${(props) => props.theme.lineHeights.heading};

                @media (max-width: 768px){
                    font-size: 26px;
                    width: 100%;
                }
            }
        }

        &:nth-child(2){
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 18px;
            padding: 22px;
            border-radius: 16px;
            border: 1px solid ${(props) => rgba(props.theme.colors.gray[100], 0.2)};

            @media (max-width: 768px){
                padding: 16px;
                border-radius: 0;
            }

            & .perfil {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                width: auto;
                gap: 10px;

                & div {
                    width: auto;
                    height: auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 6px;
                    border-radius: 12px;
                    background: ${(props) => props.theme.colors.white[300]};

                    & img {
                        width: 22px;
                        height: 22px;
                    }
                }

                & span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                    font-weight: 400;
                    color: ${(props) => props.theme.colors.white[100]};
                    line-height: 1;
                    gap: 4px;

                    & strong {
                        font-size: 10px;
                        font-weight: 400;
                        color: ${(props) => props.theme.colors.gray[100]};
                        line-height: 1;
                        position: relative;
                        top: 2.6px;
                        font-style: italic;
                    }
                }
            }

            & h2 {
                font-size: 22px;
                color: ${(props) => props.theme.colors.gray[300]};
                font-weight: ${(props) => props.theme.fontWeights.light};
                line-height: ${(props) => props.theme.lineHeights.heading};

                @media (max-width: 768px){
                    font-size: 16px;
                }
            }

            & form {
                width: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                gap: 18px;

                & label {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                    font-size: 14px;
                    font-weight: 400;
                    color: ${(props) => props.theme.colors.gray[300]};

                    & input {
                        width: 100%;
                        border: none;
                        border-bottom: 1px solid ${(props) => rgba(props.theme.colors.gray[100], 0.2)};
                        background: transparent;
                        color: ${(props) => props.theme.colors.white[100]};
                        font-size: 16px;
                        font-weight: 500;
                        height: fit-content;
                        resize: vertical;
                        padding: 8px 0px;

                        &::placeholder {
                            color: ${(props) => rgba(props.theme.colors.gray[300], 0.6)};
                            font-weight: 300;
                            font-size: 14px;
                        }

                        &:focus {
                            outline: none;
                            border-bottom: 1px solid ${(props) => props.theme.colors.pink['basic']};
                        }
                    }
                }

                & button {
                    border: 1px solid ${(props) => props.theme.colors.pink['basic']};
                    color: ${(props) => props.theme.colors.pink['basic']};
                    background-color: transparent;
                    border-radius: 12px;
                    padding: 8px 14px;
                    cursor: pointer;
                    font-weight: 400;
                }
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
                                children="FAQ"
                                icon={<SealQuestionIcon weight="fill" />}
                                colorText="rgb(255, 45, 85)"
                                bgColor="rgb(255, 45, 85, 0.1)"
                            />
                            <Title
                                children="Tire a sua dúvida, veja as perguntas mais frequentes"
                            />
                        </div>  
                        <div>
                            <aside className="perfil">
                                <div>
                                    <img src={iconAleph} alt="icon-aleph-desenvolvedor-web" />
                                </div>
                                <span>Aleph Developer <strong>atendimento</strong></span>
                            </aside>
                            <h2>Entre em contato diretamente comigo e tire sua dúvida agora mesmo!</h2>
                            <form>
                                <label htmlFor="message">Mensagem:
                                    <input type="text" id="message" placeholder="Digite sua dúvida  " required />
                                </label>
                                <button type="submit">Enviar</button>
                            </form> 
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