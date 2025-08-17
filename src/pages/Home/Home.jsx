import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DarkVeil from "@/components/ui/background/DarkVeil";
import SplitText from "@/components/ui/texts/SplitText";
import ClashDisplayExtraLight from "@/fonts/ClashDisplay-Extralight.otf";
import ClashDisplayLight from "@/fonts/ClashDisplay-Light.otf";
import ClashDisplayRegular from "@/fonts/ClashDisplay-Regular.otf";
import ClashDisplayMedium from "@/fonts/ClashDisplay-Medium.otf";
import ClashDisplaySemiBold from "@/fonts/ClashDisplay-Semibold.otf";
import ClashDisplayBold from "@/fonts/ClashDisplay-Bold.otf";
import ShinyText from "@/components/ui/buttons/ButtonConhecerMais";
import { TfiArrowTopRight } from "react-icons/tfi";
import { FaCircle } from "react-icons/fa";
import GitHubFollowersButton from "@/components/ui/github/ButtonGithub";
import Beams from "@/components/ui/background/Beams";
import RippleGrid from "@/components/ui/background/Ripple";
import Silk from "@/components/ui/background/Slick";
import ThreeDMarquee from "@/components/ui/background/ThreeDMarquee";
// Removido BlurText para um título mais simples com efeito glow


const FontStyles = createGlobalStyle`
  @font-face { font-family: 'ClashDisplay'; src: url(${ClashDisplayExtraLight}) format('opentype'); font-weight: 200; font-style: normal; font-display: swap; }
  @font-face { font-family: 'ClashDisplay'; src: url(${ClashDisplayLight}) format('opentype'); font-weight: 300; font-style: normal; font-display: swap; }
  @font-face { font-family: 'ClashDisplay'; src: url(${ClashDisplayRegular}) format('opentype'); font-weight: 400; font-style: normal; font-display: swap; }
  @font-face { font-family: 'ClashDisplay'; src: url(${ClashDisplayMedium}) format('opentype'); font-weight: 500; font-style: normal; font-display: swap; }
  @font-face { font-family: 'ClashDisplay'; src: url(${ClashDisplaySemiBold}) format('opentype'); font-weight: 600; font-style: normal; font-display: swap; }
  @font-face { font-family: 'ClashDisplay'; src: url(${ClashDisplayBold}) format('opentype'); font-weight: 700; font-style: normal; font-display: swap; }
`;

const Container = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    position: relative;
    overflow: hidden;
`;

const BG = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    /* Desktop: escuro consistente até metade, direita realmente aberta */
    background: linear-gradient(to right,
        rgba(0,0,0,0.90) 0%,
        rgba(0,0,0,0.90) 20%,
        rgba(0,0,0,0.90) 34%,
        rgba(0,0,0,0.88) 44%,
        rgba(0,0,0,0.87) 50%,
        rgba(0,0,0,0.82) 53%,
        rgba(0,0,0,0.70) 56%,
        rgba(0,0,0,0.50) 59%,
        rgba(0,0,0,0.32) 62%,
        rgba(0,0,0,0.18) 66%,
        rgba(0,0,0,0.10) 70%,
        rgba(0,0,0,0.05) 75%,
        rgba(0,0,0,0.02) 82%,
        rgba(0,0,0,0.01) 100%
    );

        &::after {
                content: '';
                position: absolute;
                inset: 0;
                pointer-events: none;
                /* Overlay escuro com gradiente que alivia na direita para não matar a abertura */
                                background:
                                    radial-gradient(250px 130px at var(--mx,45%) var(--my,50%),
                                        rgba(0,0,0,0) 0%,
                                        rgba(0,0,0,0.06) 42%,
                                        rgba(0,0,0,0.24) 60%,
                                        rgba(0,0,0,0.48) 76%,
                                        rgba(0,0,0,0.72) 100%),
                                    linear-gradient(to right,
                                        rgba(0,0,0,0.65) 0%,
                                        rgba(0,0,0,0.65) 35%,
                                        rgba(0,0,0,0.60) 45%,
                                        rgba(0,0,0,0.58) 50%,
                                        rgba(0,0,0,0.50) 53%,
                                        rgba(0,0,0,0.38) 56%,
                                        rgba(0,0,0,0.22) 58%,
                                        rgba(0,0,0,0.12) 60%,
                                        rgba(0,0,0,0.06) 63%,
                                        rgba(0,0,0,0.03) 67%,
                                        rgba(0,0,0,0.015) 72%,
                                        rgba(0,0,0,0) 78%,
                                        rgba(0,0,0,0) 100%);
                                background-blend-mode: multiply, normal;
                transition: background 0.5s ease;
                mix-blend-mode: normal;
        }

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          radial-gradient(140px 80px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.10), rgba(255,255,255,0) 70%);
        mix-blend-mode: overlay;
        opacity: .35;
        transition: opacity .6s ease;
    }

    @media (hover: none), (max-width: 768px) {
        /* Mobile: faixa clara menor (topo) e rapidamente escurece para dar contraste ao texto */
        background: linear-gradient(to bottom,
            rgba(0,0,0,0.30) 0%,
            rgba(0,0,0,0.30) 4%,
            rgba(0,0,0,0.35) 9%,
            rgba(0,0,0,0.44) 16%,
            rgba(0,0,0,0.57) 28%,
            rgba(0,0,0,0.70) 48%,
            rgba(0,0,0,0.80) 70%,
            rgba(0,0,0,0.87) 100%
        );
        &::before { display: none; }
        &::after {
            background: radial-gradient(65% 50% at 50% 5%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.56) 78%, rgba(0,0,0,0.80) 100%),
                        linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.10) 28%, rgba(0,0,0,0.36) 56%, rgba(0,0,0,0.62) 84%, rgba(0,0,0,0.80) 100%);
        }
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
        padding: 10% 2.5% 15% 2.5%;
        justify-content: flex-end;
        flex-direction: column;
    }

    & h1.hero-title {
        font-size: clamp(2.2rem, 5vw + 1rem, 4.2rem);
        font-family: 'Urbanist', sans-serif;
        font-weight: 500;
        width: 50%;
        max-width: 1200px;
        margin: 0;
        text-align: left;
        line-height: 1;
        color: #fff;
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
            color: #fff;
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
        font-size: 20px;
        font-family: 'Urbanist', sans-serif;
        width: 45%;
        text-align: center;
        color: #f1f1f1cf;
        font-weight: 200;
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

const BtnConhecer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const BtnConverse = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #ffffff10;
    background-color: #ffffff05;
    backdrop-filter: blur(10px);
    border-radius: 40px;
    cursor: pointer;
    padding: 4px 15px 4px 4px;
    transition: all .2s ease-in-out;
    position: relative;

    & img, & div h4, & div span { opacity: 0; transform: translateY(6px); transition: opacity .7s ease, transform .7s ease; will-change: opacity, transform; }
    &.animate img { opacity: 1; transform: translateY(0); transition-delay: 0s; }
    &.animate div h4 { opacity: 1; transform: translateY(0); transition-delay: .12s; }
    &.animate div span { opacity: 1; transform: translateY(0); transition-delay: .24s; }

    &:hover {
        transform: scale(0.98);
        border: 2px solid #ffffff20;
        background-color: #ffffff15;
        box-shadow: 0 0 30px rgba(255,255,255,0.1);
        backdrop-filter: blur(5px);
    }

    & img {
        width: 40px;
        padding: 7px;
        border-radius: 50%;
        background-color: #fff;
    }

    & div {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        color: #fff;
        gap: 5px;
        padding: 0 10px;

        & h4 {
            font-size: 14px;
            font-weight: 400;
            font-family: 'Urbanist', sans-serif;
        }

        & span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            font-size: 12px;
            font-weight: 200;
            font-family: 'Urbanist', sans-serif;
            white-space: nowrap;

            & svg {
                width: 8px;
                fill: #00ff00;
                animation: statusPulse 1.8s ease-in-out infinite;
                will-change: transform, filter;
            }

            & .typing-wrapper { position: relative; display: inline-flex; align-items: center; }
            & .typing-text { display: inline-block; min-width: 8ch; }
            & .typing-cursor { width: 1px; background: #fff; margin-left: 2px; height: 1em; transform: translateY(1px); animation: blink 1.1s steps(2,end) infinite; opacity: .75; }
        }
    }

    @keyframes statusPulse {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0,255,0,0.3)); opacity: .95; }
        50% { transform: scale(1.1); filter: drop-shadow(0 0 6px rgba(0,255,0,0.5)); opacity: 1; }
    }

    @keyframes blink { 0%, 50% { opacity: .75; } 50.01%, 100% { opacity: 0; } }

    @media (prefers-reduced-motion: reduce) {
        & div span svg { animation: none; }
        & img, & div h4, & div span { opacity: 1 !important; transform: none !important; transition: none !important; }
    }
`

export default function Home() {
    const [hue, setHue] = useState(0);
    const bgRef = React.useRef(null);
    const targetPos = React.useRef({ x: 50, y: 50 });
    const currentPos = React.useRef({ x: 50, y: 50 });
    const marqueeRef = React.useRef(null);
    const [btnAnimate, setBtnAnimate] = useState(false);
    const prefersReduced = React.useRef(false);

    useEffect(() => {
        prefersReduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced.current) {
            setBtnAnimate(true);
            return;
        }
        // Delay start slightly for smooth entrance
        const to = setTimeout(() => setBtnAnimate(true), 250);
        return () => clearTimeout(to);
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
            <FontStyles />
            <Container onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <BG ref={bgRef}>
                    <ThreeDMarquee speedSeconds={80} synthetic ref={marqueeRef} />
                </BG>
                <Content>
                    <div>
                        <GitHubFollowersButton username="alephsramos-dev" />
                    </div>
                    <h1 className="hero-title">
                        <span className="glow" data-text="Desenvolvimento Web de alta performance">Desenvolvimento Web de alta performance</span>
                    </h1>
                    <aside>
                        <BtnConverse className={btnAnimate ? 'animate' : ''}>
                            {/* Em Vite, arquivos em /public devem ser referenciados com caminho absoluto começando por / */}
                            <img
                                src="/icon-aleph-desenvolvedor-web.png"
                                alt=""
                                decoding="async"
                                loading="eager"
                                onError={(e) => {
                                    // Fallback: tenta importar via dynamic import se falhar (caso movido para assets futuramente)
                                    try {
                                        import('@/assets/notebook-mockup.png').then(mod => { e.currentTarget.src = mod.default; });
                                    } catch {}
                                }}
                                style={{ display: 'block' }}
                            />
                            <div>
                                <h4>Converse comigo agora</h4>
                                <span>
                                    <FaCircle />
                                    Online agora
                                </span>
                            </div>
                        </BtnConverse>
                        {/* <BtnConhecer>
                            <ShinyText text="Conhecer mais" disabled={false} speed={3} />
                        </BtnConhecer> */}
                    </aside>
                </Content>
            </Container>
        </>
    )
}