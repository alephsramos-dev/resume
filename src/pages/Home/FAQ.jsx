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
import { sendToSheet } from "@/lib/sendToSheet";

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
    const [sending, setSending] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [feedback, setFeedback] = React.useState(null);
    const faqs = [
        {
            q: "Quanto custa para desenvolver um site profissional?",
            a: "O investimento varia conforme complexidade, integrações e volume de conteúdo. Após entender seus objetivos, apresento uma proposta personalizada com escopo e etapas claras.",
        },
        {
            q: "Qual é o prazo médio de desenvolvimento?",
            a: "Projetos institucionais simples levam em torno de 2–4 semanas. Projetos mais completos (blog, automações, integrações) podem levar 4–6 semanas ou mais.",
        },
        {
            q: "Como é o processo de criação?",
            a: "Dividimos em: briefing, arquitetura e UX, layout/UI, desenvolvimento funcional, otimização (SEO e performance), revisão, publicação e monitoramento inicial.",
        },
        {
            q: "Você cuida da hospedagem e domínio?",
            a: "Posso orientar na escolha (performance e custo) ou configurar para você. Também integro CDN, SSL e e-mails profissionais quando necessário.",
        },
        {
            q: "Quais integrações posso ter no site?",
            a: "Integro WhatsApp, Instagram, Google Analytics/Tag Manager, Google Ads, Pixel Meta, CRM, formulários avançados e automações de leads.",
        },
        {
            q: "Qual a diferença entre um site institucional e uma landing page?",
            a: "Landing page é focada em uma única oferta/conversão. Site institucional apresenta a empresa de forma completa com várias seções e páginas.",
        },
        {
            q: "Vou poder atualizar o conteúdo depois?",
            a: "Se precisar de autonomia, podemos usar CMS ou criar áreas editáveis. Caso prefira, faço atualizações via plano de manutenção.",
        },
        {
            q: "Existe manutenção após a entrega?",
            a: "Sim. Ofereço planos com monitoramento, melhorias contínuas, ajustes de performance, segurança e novos componentes conforme crescimento.",
        },
    ];

    const handleToggle = (index, next) => {
        setOpenIndex((current) => (next ? index : current === index ? null : current));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message?.trim() || sending) return;
        setSending(true);
        setFeedback(null);

        const payload = {
            type: "faq",
            source: "FAQ Form",
            message: message.trim(),
            utm: (() => {
                const p = new URLSearchParams(window.location.search);
                const obj = {};
                p.forEach((v, k) => {
                    const key = k.toLowerCase();
                    if (key.startsWith("utm_") || ["gclid", "msclkid", "fbclid"].includes(key)) obj[k] = v;
                });
                return obj;
            })(),
            page: typeof window !== "undefined" ? {
                url: window.location.href,
                title: document.title,
                referrer: document.referrer || undefined
            } : undefined
        };

        console.log('[FAQ] Enviando para Sheets...', payload);
        const result = await sendToSheet(payload);
        console.log('[FAQ] Resultado:', result);

        if (result.ok) {
            setFeedback({ type: "success", text: "Mensagem enviada! Vou te responder em breve." });
            setMessage("");
        } else {
            setFeedback({ type: "error", text: "Não foi possível enviar agora. Tente novamente." });
        }
        setSending(false);
    };

    return (
        <>
            <Container>
                <Content>
                    <Texts data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
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
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="message">Mensagem:
                                    <input
                                        type="text"
                                        id="message"
                                        placeholder="Digite sua dúvida  "
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        disabled={sending}
                                    />
                                </label>
                                <button type="submit" disabled={sending}>{sending ? "Enviando..." : "Enviar"}</button>
                            </form>
                            {feedback ? (
                                <small style={{
                                    color: feedback.type === 'success' ? '#3bd671' : '#ff6b6b'
                                }}>
                                    {feedback.text}
                                </small>
                            ) : null}
                        </div>
                    </Texts>
                    <Doubts data-aos="fade-up" data-aos-duration="800" data-aos-offset="0" data-aos-delay="100">
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