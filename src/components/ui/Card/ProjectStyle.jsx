import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import Technology from "../Badge/Technology";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useSquircle } from "@/lib/squircle/useSquircle";
import { useSupabaseData } from "@/contexts/SupabaseDataContext";
import { LinkSimpleHorizontalBreakIcon } from "@phosphor-icons/react/dist/ssr";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { AiOutlineExpand } from "react-icons/ai";

// Smooth corner helper using CSS masks (progressive enhancement)
const maskWith = (r) => css`
    @supports (mask: radial-gradient(25px at 50% 50%, #000 98%, #0000)) or (-webkit-mask: radial-gradient(25px at 50% 50%, #000 98%, #0000)) {
        --r: ${r};
        -webkit-mask:
            radial-gradient(var(--r) at 100% 0, #0000 98%, #000) top right,
            radial-gradient(var(--r) at 0 0, #0000 98%, #000) top left,
            radial-gradient(var(--r) at 100% 100%, #0000 98%, #000) bottom right,
            radial-gradient(var(--r) at 0 100%, #0000 98%, #000) bottom left,
            linear-gradient(#000 0 0) center/100% calc(100% - var(--r)*2) no-repeat,
            linear-gradient(#000 0 0) center/ calc(100% - var(--r)*2) 100% no-repeat;
        mask:
            radial-gradient(var(--r) at 100% 0, #0000 98%, #000) top right,
            radial-gradient(var(--r) at 0 0, #0000 98%, #000) top left,
            radial-gradient(var(--r) at 100% 100%, #0000 98%, #000) bottom right,
            radial-gradient(var(--r) at 0 100%, #0000 98%, #000) bottom left,
            linear-gradient(#000 0 0) center/100% calc(100% - var(--r)*2) no-repeat,
            linear-gradient(#000 0 0) center/ calc(100% - var(--r)*2) 100% no-repeat;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
    }
`;

const Card = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 6px;
    gap: 12px;
    cursor: pointer;
    position: relative;
    

`

const Image = styled.div`
    width: 100%;
    height: 340px;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    z-index: 0;
    border-radius: 22px;

    @media (max-width: 768px){
        height: 260px;
        border-radius: 8px 22px 8px 8px;
    }

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 0;
    }
`

const Infos = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;

    & .info-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        font-size: 26px;
        color: ${(props) => props.theme.colors.white[300]};
        width: auto;
        font-weight: 200;
        letter-spacing: -0.4px;

        @media (max-width: 768px){
            font-size: 20px;
        }
    }
`

const Stack = styled.ol`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

const Buttons = styled.div`
    top: 8px;
    right: 8px;
    z-index: 2;
    position: absolute;

    & .restrict {
        cursor: not-allowed;
        opacity: 0.4;
        background-color: transparent!important;
        color: ${(props) => props.theme.colors.gray[500]}!important;
        border: none!important;
        font-weight: 300!important;
    }

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        @media (max-width: 768px){
            gap: 4px;
        }

        & > button {
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: -0.6px;

            @media (max-width: 768px){
                font-size: 14px;
            }

            &:nth-child(1){
                background-color: #ffffff40;
                border: 1px solid #ffffff40;
                backdrop-filter: blur(8px);
                color: ${(props) => props.theme.colors.white[100]};
                border-radius: 99px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12px;

                & svg {
                    width: 14px;
                }
            }
        }
    }

    & > button {
        padding: 8px;
        border-radius: 8px;
        ${props => props.$smooth && maskWith('8px')};
        ${props => props.$clipBtn && css`clip-path: ${props.$clipBtn};`}
        color: ${(props) => props.theme.colors.gray[100]};

        @media (max-width: 768px){
            padding: 6px;
        }

        & svg {
            width: 20px;
            height: 20px;
        }
    }
`


export default function ProjectStyle({
    image,
    title,
    tecnologias = [],
    urlPage = '',
    popupBg,
    popupBorder,
    popupColor,
    slug,
    smoothCorners = true,
    cornerRadius = 6,
    cornerSmoothing = 3,
    openInNewTab = true
}) {
    // Figma-like squircles for strong smoothing
    const cardSquircle = useSquircle({ radius: cornerRadius, smoothness: cornerSmoothing });
    const imageSquircle = useSquircle({ radius: cornerRadius, smoothness: cornerSmoothing });
    const buttonSquircle = useSquircle({ radius: 2, smoothness: cornerSmoothing });
    const { techIcons: techIconsContext = {} } = useSupabaseData();
    const techIconMap = useMemo(() => techIconsContext ?? {}, [techIconsContext]);


    const openTarget = (target) => {
        if (!target) return;
        if (typeof target === 'string') {
            try {
                if (openInNewTab) {
                    window.open(target, '_blank', 'noopener,noreferrer');
                } else {
                    window.open(target, '_self');
                }
            } catch (e) {
                console.error('Falha ao abrir URL:', e);
            }
        } else if (typeof target === 'function') {
            try { target(); } catch (e) { console.error(e); }
        }
    };

    return (
        <>
            <Card $smooth={smoothCorners} $clip={cardSquircle.path} ref={cardSquircle.ref} onClick={() => window.location.href = `/projetos/${slug}`}>
                <Image $smooth={smoothCorners} $clip={imageSquircle.path} ref={imageSquircle.ref} $popupBg={popupBg} $popupBorder={popupBorder} $popupColor={popupColor}>
                    <img src={image} alt={title} />
                    <Buttons $smooth={smoothCorners} $clipBtn={buttonSquircle.path}>
                        <div ref={buttonSquircle.ref}>
                            {
                                urlPage === ''
                                    ? <button onClick={() => alert('Essa página é privada!')} className="restrict">Bloqueado</button>
                                    : <button onClick={() => openTarget(urlPage)}><AiOutlineExpand /></button>
                            }
                        </div>
                    </Buttons>
                </Image>
                <Infos>
                    <div className="info-content">
                        <p>{title}</p>
                    </div>
                    <Stack>
                        {tecnologias.slice(0, 5).map((tec, idx) => {
                            const key = typeof tec === 'string' ? tec.toLowerCase() : `tech-${idx}`;
                            const icon = techIconMap[key];

                            return (
                                <li key={`${key}-${idx}`} style={{ display: 'inline-block' }}>
                                    {icon ? (
                                        <img
                                            src={icon.src}
                                            alt={icon.alt}
                                            title={icon.title}
                                            width={20}
                                            height={20}
                                            loading="lazy"
                                        />
                                    ) : (
                                        tec
                                    )}
                                </li>
                            );
                        })}
                    </Stack>
                </Infos>
            </Card>
        </>
    )
}