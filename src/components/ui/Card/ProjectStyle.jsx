import React from "react";
import styled, { css } from "styled-components";
import Technology from "../Badge/Technology";
import { FaGithub } from "react-icons/fa";
import { techIcons } from "@/db/TechIcons";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useSquircle } from "@/lib/squircle/useSquircle";

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
    border-radius: 12px;
    ${props => props.$smooth && maskWith('2px')};
    ${props => props.$clip && css`clip-path: ${props.$clip};`}
    background-color: ${(props) => props.theme.colors.black[100]};
    padding: 0;
    gap: 8px;
`

const Image = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 0;

    @media (max-width: 768px){
        height: 250px;
    }

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 0;
    }

    & span {
        top: 8px;
        left: 8px;
        position: absolute;
        padding: 6px 10px;
        border-radius: 8px;
        font-size: 14px;
        ${props => props.$smooth && maskWith('8px')};
        ${props => props.$clipBadge && css`clip-path: ${props.$clipBadge};`}
        font-weight: 400;
        background-color: ${props => props.$popupBg || '#2bba0060'};
        border: 1px solid ${props => props.$popupBorder || '#2bba0070'};
        color: ${props => props.$popupColor || '#fff'};
        backdrop-filter: blur(4px);

        @media (max-width: 768px){
            font-size: 12px;
            left: 8px;
            top: 8px;
        }
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
    padding: 12px 18px 0 18px;

    & .info-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        width: auto;
    }
`

const SiteType = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 8px;
    ${props => props.$smooth && maskWith('8px')};
    ${props => props.$clip && css`clip-path: ${props.$clip};`}
    background-color: ${props => props.$siteBg || '#b5000020'};
    border: 1px solid ${props => props.$siteBorder || '#b5000040'};
    color: ${props => props.$siteColor || '#b50000'};

    @media (max-width: 768px){
        display: none;
    }

    & p {
        font-size: 12px;
    }
`

const Company = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 100%;

    & div {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        ${props => props.$smooth && maskWith('8px')};
        ${props => props.$clip && css`clip-path: ${props.$clip};`}
        padding: 2px;

        & img {
            width: 22px;
            height: auto;
            object-fit: contain;
        }
    }

    & p {
        font-size: 14px;
        font-weight: 300;
        color: ${(props) => props.theme.colors.gray[400]};

        @media (max-width: 768px){
            font-size: 12px;
        }
    }
`

const Stack = styled.ol`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    gap: 12px;
    padding: 4px 18px;

    & h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 1.1;
        color: ${(props) => props.theme.colors.white[500]};
    }

    & p {
        font-size: 16px;
        font-weight: 300;
        line-height: 1.2;
        color: ${(props) => props.theme.colors.gray[100]};
    }

`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 18px 18px 18px;

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
            padding: 8px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            ${props => props.$smooth && maskWith('8px')};
            ${props => props.$clipBtn && css`clip-path: ${props.$clipBtn};`}
            cursor: pointer;

            @media (max-width: 768px){
                font-size: 14px;
            }

            &:nth-child(1){
                border: 1px solid #fff;
                color: #fff;
            }

            &:nth-child(2){
                border: 1px solid #fff;
                background-color: #fff;
                color: #000;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 500;
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
    popupContent,
    siteType,
    imageCompanyUrl,
    companyName,
    tecnologias = [],
    data,
    description,
    urlPage = '',
    githubUrl,
    popupBg,
    popupBorder,
    popupColor,
    siteBg,
    siteBorder,
    slug,
    siteColor,
    smoothCorners = true,
    cornerRadius = 6,
    cornerSmoothing = 3,
    openInNewTab = true
}) {
    // Figma-like squircles for strong smoothing
    const cardSquircle = useSquircle({ radius: cornerRadius, smoothness: cornerSmoothing });
    const imageSquircle = useSquircle({ radius: cornerRadius, smoothness: cornerSmoothing });
    const badgeSquircle = useSquircle({ radius: 2, smoothness: cornerSmoothing });
    const siteTypeSquircle = useSquircle({ radius: 2, smoothness: cornerSmoothing });
    const logoBoxSquircle = useSquircle({ radius: 2, smoothness: cornerSmoothing });
    const buttonSquircle = useSquircle({ radius: 2, smoothness: cornerSmoothing });

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
            <Card $smooth={smoothCorners} $clip={cardSquircle.path} ref={cardSquircle.ref}>
                <Image $smooth={smoothCorners} $clip={imageSquircle.path} ref={imageSquircle.ref} $popupBg={popupBg} $popupBorder={popupBorder} $popupColor={popupColor}>
                    <img src={image} alt={title} />
                    <span ref={badgeSquircle.ref} $clipBadge={badgeSquircle.path}>
                        {popupContent}
                    </span>
                </Image>
                <Infos>
                    <div className="info-content">
                        <SiteType $smooth={smoothCorners} $clip={siteTypeSquircle.path} ref={siteTypeSquircle.ref} $siteBg={siteBg} $siteBorder={siteBorder} $siteColor={siteColor}>
                            <p>{siteType}</p>
                        </SiteType>
                        <Company $smooth={smoothCorners}>
                            <div ref={logoBoxSquircle.ref} $clip={logoBoxSquircle.path}>
                                <img src={imageCompanyUrl} alt={companyName} />
                            </div>
                            <p>{companyName}</p>
                        </Company>
                    </div>
                    <Stack>
                        {tecnologias.slice(0, 3).map((tec, idx) => (
                            <li key={tec + idx} style={{display: 'inline-block'}}>
                                {techIcons[tec.toLowerCase()] || tec}
                            </li>
                        ))}
                    </Stack>
                </Infos>
                <Texts>
                    <span>{data}</span>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </Texts>
                <Buttons $smooth={smoothCorners} $clipBtn={buttonSquircle.path}>
                    <div ref={buttonSquircle.ref}>
                        <button onClick={() => window.location.href = `/projetos/${slug}`}>Detalhes</button>
                        {
                            urlPage === '' 
                            ? <button onClick={() => alert('Essa página é privada!')} className="restrict">Acesso restrito</button>
                            : <button onClick={() => openTarget(urlPage)}>Acessar<BsBoxArrowUpRight /></button>
                        }
                    </div>
                    <button onClick={() => openTarget(githubUrl)}>
                        <FaGithub />
                    </button>
                </Buttons>
            </Card>
        </>
    )
}