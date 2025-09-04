import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChatNowButton from '@/components/ui/Button/Chat';
import BlurText from "@/components/ui/texts/BlurText";
import { IoStarSharp } from "react-icons/io5";

const Container = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.pureBlack};
    color: ${({ theme }) => theme.colors.pureWhite};
    position: relative;
    z-index: 2;
    overflow: hidden;
`;

const BG = styled.div`
    position: absolute;
    width: 100%;
    right: 0;
    top: 0;
    height: 100%;
    z-index: 0;
    pointer-events: none;

    @media (max-width: 768px) {
        height: 100%;
    }
`;

const Content = styled.section`
    width: 100%;
    padding: 5% 2.5% 4% 2.5%;
    max-width: 1420px;
    min-height: 100dvh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    gap: 30px;
    border-bottom: none;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        gap: 20px;
        height: 100%;
        padding: 10% 5% 10% 5%;
        justify-content: flex-end;
        flex-direction: column;
    }

    & div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }

    & h1.hero-title {
        font-size: 42px;
        font-weight: 400;
        width: 50%;
        max-width: 1200px;
        margin: 0;
        text-align: left;
        line-height: 1.1;
        color: ${({ theme }) => theme.colors.white};
        letter-spacing: -0.5px;
        position: relative;
        white-space: normal;
        word-break: normal;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;

        @media (max-width: 768px){
            width: 95%;
            font-weight: 400;
        }
        /* iOS suavização */
        @supports (-webkit-touch-callout: none) { font-weight: 400; }
        .glow {
            position: relative;
            display: inline;
            color: var(---color-white);
            /* Começa mais fraco; anima para intensificar suavemente */
            text-shadow:
                0 0 1px rgba(255,255,255,0.2),
                0 0 3px rgba(170,160,255,0.15),
                0 0 6px rgba(120,90,255,0.05);
            animation: glowIn 1.9s cubic-bezier(.16,.72,.26,1) forwards;
        }
        .glow::after { content: none; }
        @keyframes glowIn {
            0% {
                text-shadow:
                    0 0 1px rgba(255,255,255,0.25),
                    0 0 2px rgba(170,160,255,0.08),
                    0 0 4px rgba(120,90,255,0.08);
                opacity: .94;
            }
            55% {
                text-shadow:
                    0 0 2px rgba(255,255,255,0.25),
                    0 0 6px rgba(185,175,255,0.12),
                    0 0 12px rgba(120,90,255,0.08),
                    0 0 18px rgba(100,70,255,0.02);
            }
            100% {
                text-shadow:
                    0 0 2px rgba(255,255,255,0.6),
                    0 0 6px rgba(190,180,255,0.20),
                    0 0 16px rgba(120,90,255,0.18),
                    0 0 28px rgba(90,60,255,0.08);
                opacity: 1;
            }
        }
    }

    & p {
        font-size: 18px;
        width: 35%;
        text-align: left;
        line-height: 1.3;
        color: ${({ theme }) => theme.colors.grey.dark};
        font-weight: 200;

        @media (max-width: 768px) {
            font-size: 18px;
            width: 90%;
        }
    }

    & aside {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;

        @media (max-width: 768px) {
            gap: 20px;
            flex-direction: column;
            align-items: flex-start;
        }
    }

    /* Removido gradientShift; glow é estático */
`;

const Avaliacao = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 15px;
    width: auto;

    & div {
        display: flex;
        width: auto;
        flex-direction: row;
        align-items: center;
        gap: 0;
        position: relative;
        justify-content: center;

        & ol {
            display: flex;
            flex-direction: row;
            position: relative;

            & li {
                position: relative;

                & div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 3px;
                    position: absolute;
                    top: -55px; /* posiciona acima do avatar */
                    left: 50%;
                    transform: translate(-50%, 0) scale(.4);
                    transform-origin: center bottom;
                    width: max-content;
                    padding: 6px 10px 8px;
                    background: rgba(0,0,0,0.35);
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                    border: 1px solid rgba(255,255,255,0.15);
                    border-radius: 5px;
                    box-shadow: 0 4px 18px -4px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,0.04) inset;
                    opacity: 0;
                    pointer-events: none;
                    transition: transform .38s cubic-bezier(.16,.84,.34,1), opacity .3s ease;
                    will-change: transform, opacity;

                    & span {
                        font-size: 14px;
                        font-weight: 300;
                        white-space: nowrap;
                    }

                    & p {
                        font-size: 11px;
                        font-weight: 500;
                        white-space: nowrap;
                        opacity: 0.5;
                        width: auto;
                    }
                }

                
                &:nth-child(2){
                    margin-left: -20px;
                }

                &:nth-child(3){
                    margin-left: -20px;
                }

                &:nth-child(4){
                    margin-left: -20px;
                }

                &:nth-child(5){
                    margin-left: -20px;
                }

                & img {
                border-radius: 50%;
                position: relative;
                border: 2px solid #d1d1d1;
                transition: all .2s ease-in-out;

                &:hover {
                    transform: translateY(-5px) rotate(-15deg);
                    }
                }

                /* Hover do item mostra o card de dados */
                &:hover > div {
                    transform: translate(-50%, -6px) scale(1);
                    opacity: 1;
                }
            }
        }
    }

    & aside {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;

        @media (max-width: 768px) {
            gap: 5px;
        }

        & > span {
            font-weight: 500;
            font-size: 16px;

            @media (max-width: 768px) {
                font-size: 15px;
            }
        }   

        & div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            & ol {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;

                & li {
                    position: relative;
                    color: #d1d1d1;

                    &:nth-child(2){
                        margin-left: -1px;
                    }

                    &:nth-child(3){
                        margin-left: -1px;
                    }

                    &:nth-child(4){
                        margin-left: -1px;
                    }

                    &:nth-child(5){
                        margin-left: -1px;
                    }
                }
            }

            & span {
                font-size: 12px;
                font-weight: 300;
                color: #828282;

                @media (max-width: 768px) {
                    font-size: 13px;
                }
            }
        } 
    }
`

export default function Home() {
    const [hue, setHue] = useState(0);
    const bgRef = React.useRef(null);
    const targetPos = React.useRef({ x: 50, y: 50 });
    const currentPos = React.useRef({ x: 50, y: 50 });
    const marqueeRef = React.useRef(null);
    const prefersReduced = React.useRef(false);

    useEffect(() => {
        prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }, []);

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReduced) {
            const duration = 120000;
            const start = performance.now();
            let rafHue;
            const loopHue = (now) => {
                const elapsed = (now - start) % duration;
                const progress = elapsed / duration;
                const h = ((1 - Math.cos(progress * Math.PI * 2)) / 2) * 360;
                setHue(h);
                rafHue = requestAnimationFrame(loopHue);
            };
            rafHue = requestAnimationFrame(loopHue);
            return () => cancelAnimationFrame(rafHue);
        } else {
            setHue(0);
        }
    }, []);

    // Loop de suavização (lerp) da luz
    useEffect(() => {
        let raf;
        const ease = 0.07; // mais suave (segue mais lentamente)
        const tick = () => {
            const cx = currentPos.current.x + (targetPos.current.x - currentPos.current.x) * ease;
            const cy = currentPos.current.y + (targetPos.current.y - currentPos.current.y) * ease;
            currentPos.current.x = cx;
            currentPos.current.y = cy;
            if (bgRef.current) {
                bgRef.current.style.setProperty('--mx', cx + '%');
                bgRef.current.style.setProperty('--my', cy + '%');
            }
            raf = requestAnimationFrame(tick);
        };
        // Desativa no mobile / touch
        const isTouch = matchMedia('(hover: none)').matches || window.innerWidth < 769;
        if (!isTouch) tick();
        return () => cancelAnimationFrame(raf);
    }, []);

    const handleMouseMove = (e) => {
        if (!bgRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        targetPos.current.x = ((e.clientX - rect.left) / rect.width) * 100;
        targetPos.current.y = ((e.clientY - rect.top) / rect.height) * 100;
        marqueeRef.current?.highlightAt(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => {
        marqueeRef.current?.clearHighlight();
    };

    return (
        <>
            <Container onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                {/* <BG ref={bgRef}>
                    <DarkVeil 
                        noiseIntensity={0.10}   
                        speed={2}
                        hueShift={35}
                    />
                </BG> */}
                <Content>
                    <Avaliacao>
                        <div>
                            <ol>
                                <li>
                                    <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=120&h=120&fit=crop&crop=faces&auto=format&dpr=1" alt="Perfil 1" width={50} height={50} />
                                    <div>
                                        <span>Gabriel Ferreira</span>
                                        <p>Fundador | GP Way</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&h=120&fit=crop&crop=faces&auto=format&dpr=1" alt="Perfil 2" width={50} height={50} />
                                    <div>
                                        <span>Maria Silva</span>
                                        <p>CEO | Empresa XYZ</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=120&h=120&fit=crop&crop=faces&auto=format&dpr=1" alt="Perfil 3" width={50} height={50} />
                                    <div>
                                        <span>João Pereira</span>
                                        <p>CTO | Empresa ABC</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&h=120&fit=crop&crop=faces&auto=format&dpr=1" alt="Perfil 4" width={50} height={50} />
                                    <div>
                                        <span>Fernanda Lima</span>
                                        <p>CMO | Empresa DEF</p>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=faces&auto=format&dpr=1" alt="Perfil 5" width={50} height={50} />
                                    <div>
                                        <span>Lucas Santos</span>
                                        <p>Analista | Empresa GHI</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <aside>
                            <span>117 clientes satisfeitos</span>
                            <div>
                                <ol>
                                    <li><IoStarSharp /></li>
                                    <li><IoStarSharp /></li>
                                    <li><IoStarSharp /></li>
                                    <li><IoStarSharp /></li>
                                    <li><IoStarSharp /></li>
                                </ol>
                                <span>4.92 Avaliação</span>
                            </div>
                        </aside>
                    </Avaliacao>
                    <div style={{ width: '100%' }}>
                        <BlurText
                            as="h1"
                            className="hero-title"
                            text="Desenvolvimento Web de alta performance"
                            animateBy="words"
                            delay={90}
                            direction="top"
                            stepDuration={0.55}
                            fullWidth={false}
                            collapseToPlain={true}
                        />
                        <p>Desenvolvimento de sites com foco em três pilares: velocidade, segurança e resultados de negócio.</p>
                    </div>
                    <aside>
                        <ChatNowButton />
                    </aside>
                </Content>
            </Container>
        </>
    )
}