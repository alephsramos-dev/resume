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
import BlurText from "@/components/ui/texts/BlurText";


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

    background: rgba(0,0,0,0.55);

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          radial-gradient(260px 140px at var(--mx,50%) var(--my,50%),
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.04) 38%,
            rgba(0,0,0,0.18) 55%,
            rgba(0,0,0,0.42) 70%,
            rgba(0,0,0,0.75) 100%),
          rgba(0,0,0,0.65);
        background-blend-mode: normal;
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
        /* Apenas escuro uniforme sem foco de luz */
        &::before { display: none; }
        &::after {
            background: rgba(0,0,0,0.80);
        }
    }
`;

const Content = styled.section`
    width: 100%;
    padding: 5% 2.5% 0% 2.5%;
    max-width: 1420px;
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    border-bottom: none;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        gap: 30px;
        height: 100%;
        padding: 10% 2.5% 5% 2.5%;
        flex-direction: column;
    }

    & h1 { 
        font-size: 70px;
        color: #f1f1f1;
        width: 85%;
        text-align: center;
        font-family: 'Urbanist', sans-serif;
        font-weight: 300;

        .hero-blur-title { font: inherit; line-height: 1.05; }
        .hero-blur-title b {
            font-family: "Source Serif 4", serif;
            font-weight: 600;
            letter-spacing: -5px;
            font-style: italic;
            font-size: 80px;
            /* Gradiente animado */
            background: linear-gradient(120deg,#ffffff 0%,#ffb347 15%,#ff6ec4 35%,#7873f5 55%,#4ADEFF 75%,#ffffff 100%);
            background-size: 300% 300%;
            background-clip: text; /* padrão */
            -webkit-background-clip: text; /* Safari/Chrome */
            color: transparent;
            animation: gradientShift 16s ease-in-out infinite;
            filter: drop-shadow(0 0 4px rgba(255,255,255,0.15));

            @media (max-width: 768px) {
                font-size: 50px;
            }
        }

        @media (max-width: 768px) {
            font-size: 40px;
            width: 75%;
            text-align: left;
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
            flex-direction: column;
        }
    }

    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    @media (prefers-reduced-motion: reduce) {
        & h1 b { animation: none; background-position: 50% 50%; }
    }
`;

const BtnConhecer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    & svg {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        margin-top: 4px;
        opacity: 0.8;
    }
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

            & svg {
                width: 8px;
                fill: #00ff00;
                animation: statusPulse 1.8s ease-in-out infinite;
                will-change: transform, filter;
            }
        }
    }

    @keyframes statusPulse {
        0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0,255,0,0.3)); opacity: .95; }
        50% { transform: scale(1.1); filter: drop-shadow(0 0 6px rgba(0,255,0,0.5)); opacity: 1; }
    }

    @media (prefers-reduced-motion: reduce) {
        & div span svg { animation: none; }
    }
`

export default function Home() {
    const [hue, setHue] = useState(0);
    const bgRef = React.useRef(null);
    const targetPos = React.useRef({ x: 50, y: 50 });
    const currentPos = React.useRef({ x: 50, y: 50 });
    const marqueeRef = React.useRef(null);

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
                    <h1>
                        <BlurText
                            as="span"
                            animateBy="words"
                            delay={80}
                            className="hero-blur-title"
                            direction="top"
                        >
                            Seu site criado pelo <b>melhor</b><br />Desenvolvedor Web
                        </BlurText>
                    </h1>
                    <aside>
                        <BtnConverse>
                            <img src="public/icon-aleph-desenvolvedor-web.png" alt="" />
                            <div>
                                <h4>Converse comigo agora</h4>
                                <span>
                                    <FaCircle />
                                    Online agora
                                </span>
                            </div>
                        </BtnConverse>
                        <BtnConhecer>
                            <ShinyText text="Conhecer mais" disabled={false} speed={3} />
                        </BtnConhecer>
                    </aside>
                </Content>
            </Container>
        </>
    )
}