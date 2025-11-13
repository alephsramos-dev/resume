import styled, { createGlobalStyle } from "styled-components";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Stack from "@/components/ui/Badge/Stack";
import Bg from '@assets/patterns/bg.jpg'
import mediumZoom from "medium-zoom";
import { rgba } from "polished";
import { useSupabaseData } from "@/contexts/SupabaseDataContext";

const ZoomOverrideStyles = createGlobalStyle`
    .medium-zoom-overlay {
        z-index: 9999 !important;
        background: rgba(0, 0, 0, 0.92) !important;
        backdrop-filter: blur(4px);
    }

    .medium-zoom-image--opened {
        z-index: 10000 !important;
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6);
        border-radius: 12px;
    }
`;

const FullscreenModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
    opacity: ${props => props.$isClosing ? 0 : 1};
    transition: opacity 0.25s ease;
`;

const FullscreenImage = styled.img`
    max-width: 90vh;
    max-height: 90vw;
    object-fit: contain;
    transform: rotate(90deg) scale(${props => props.$isClosing ? 0.9 : 1});
    opacity: ${props => props.$isClosing ? 0 : 1};
    transition: transform 0.25s ease, opacity 0.25s ease;
`;

const CloseButton = styled.button`
    position: absolute;
    bottom: 62px;
    left: 50%;
    transform: translateX(-50%);
    background: ${(props) => props.theme.colors.black[100]};
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    color: white;
    width: auto;
    padding: 6px 14px;
    border-radius: 18px;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    transition: all 0.2s ease;
    z-index: 10001;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateX(-50%) scale(1.1);
    }

    &:active {
        transform: translateX(-50%) scale(0.95);
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    position: relative;
    gap: 0px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        gap: 26px;
    }
`

const Texts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 16px;
    width: 70%;
    border-right: 1px solid #ffffff20;

    @media (max-width: 768px){
        width: 100%;    
        border-right: none;
    }

    & > aside {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 8px;
        box-shadow: inset 0 -0.2px 0 0 #ffffff80;

        & > h2 {
            width: 100%;
            font-size: 28px;
            font-weight: 400;
            color: ${(props) => props.theme.colors.white[100]};

            @media (max-width: 768px){
                font-size: 22px;
            }

            & strong {
                font-weight: 400;
                font-size: 12px;
                color: ${(props) => props.theme.colors.gray[100]};
            }
        }

    }
`

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    font-size: 18px;
    padding-right: 18px;

    @media (max-width: 768px){
        padding-right: 0px;
    }

    & h3 {
        font-size: 26px;
        margin-top: 8px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.white[100]};

        @media (max-width: 768px){
            font-size: 22px;
        }
    }

    & p {
        font-size: 18px;
        font-weight: 300;
        color: ${(props) => props.theme.colors.gray[400]};

        @media (max-width: 768px){
            font-size: 16px;
        }
    }

    & p strong,
    & li strong {
        color: ${(props) => props.theme.colors.gray[400]};
        font-weight: 400;
    }

    & ul,
    & ol {
        padding-left: 22px;
        margin: 0px 0 8px 0;
    }

    & ul li {
        list-style: disc;
        color: ${(props) => props.theme.colors.gray[400]};
        font-weight: 300;
        margin: 2px 0;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }

    & a {
        color: ${(props) => props.theme.colors.blue.contrast};
        text-decoration: underline;
        text-underline-offset: 3px;
        font-weight: 300;
    }

    & img {
        width: 100%;
        height: auto;
        border-radius: 12px;
        margin: 8px 0 12px 0;
        display: block;
        border: 1px solid #ffffff20;
        cursor: pointer;
        transition: opacity 0.2s ease;

        @media (max-width: 768px) {
            &:hover {
                opacity: 0.9;
            }
        }
    }

    & span {
        font-size: 12px;
        color: ${(props) => props.theme.colors.gray[100]};
        font-style: italic;
        margin-top: -12px;
    }
`;

const Infos = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: sticky;
    top: 100px;

    @media (max-width: 768px){
        width: 100%;    
        position: relative;
        top: 0;
    }
    
    & .list {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
        width: 100%;

        @media (max-width: 768px){
            width: 100%;
        }

        & .timing {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 16px;
            box-shadow: inset 0 -0.4px 0 0 #ffffff40;
            padding-bottom: 16px;

            @media (max-width: 768px){
                padding-left: 0;
            }

            & h2 {
                font-size: 16px;
                font-weight: 600;
                color: ${(props) => props.theme.colors.white[100]};
            }

            & p {
                font-size: 16px;
                font-weight: 300;
                color: ${(props) => props.theme.colors.gray[300]};
            }

            & .badge-hours {
                padding: 4px 12px;
                border-radius: 24px;
                font-size: 20px;
                background: ${(props) => rgba(props.theme.colors.blue.basic, 0.2)};
                border: 1px solid ${(props) => rgba(props.theme.colors.blue.basic, 0.3)};
                
                & h6 {
                    font-weight: 300!important;
                    color: ${(props) => props.theme.colors.blue.contrast}!important;
                }
            }
        }

        & .techs {
            font-size: 16px;
            font-weight: 300;
            color: #ffffff90;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            gap: 6px;
            width: 100%;
            padding-bottom: 16px;
            box-shadow: inset 0 -0.4px 0 0 #ffffff40;
            padding-left: 16px;

            @media (max-width: 768px){
                padding-left: 0;
            }

            &:last-child {
                box-shadow: none;
            }

            & > strong {
                color: #ffffff;
                font-size: 16px;
                font-weight: 600;
            }

            & ul {
                display: flex;
                align-items: flex-start;
                flex-direction: row;
                margin-top: 6px;
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 8px;
                
                & li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: row;
                    list-style: none;
                    margin: 0;
                    font-weight: 400;
                    padding-bottom: 2px;
                    width: auto;
                    box-shadow: none;
                }
            }
        }
    }
`

export default function ProjectDetailsAbout({ slug }) {
    const { projects: projectsData = [], loading } = useSupabaseData();
    const isLoading = loading?.projects;

    const currentProject = useMemo(() => {
        return (projectsData ?? []).find(project => project.slug === slug);
    }, [projectsData, slug]);
    const contentRef = useRef(null);
    const zoomRef = useRef(null);
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        if (!contentRef.current) {
            return undefined;
        }

        const images = contentRef.current.querySelectorAll('img');

        if (!images.length) {
            if (zoomRef.current) {
                zoomRef.current.detach();
                zoomRef.current = null;
            }
            return undefined;
        }

        // On mobile, add click handler to open fullscreen
        if (isMobile) {
            const handleImageClick = (imgSrc) => (e) => {
                e.preventDefault();
                e.stopPropagation();
                setFullscreenImage(imgSrc);
            };

            images.forEach((img) => {
                // Remove existing event listener if any
                img.onclick = null;
                // Add new event listener
                img.onclick = handleImageClick(img.src);
            });

            // Cleanup function
            return () => {
                images.forEach((img) => {
                    img.onclick = null;
                });
            };
        } else {
            // On desktop, use medium-zoom
            if (zoomRef.current) {
                zoomRef.current.detach();
            }

            zoomRef.current = mediumZoom(images, {
                background: '#000000d9',
                margin: 24,
            });

            return () => {
                if (zoomRef.current) {
                    zoomRef.current.detach();
                    zoomRef.current = null;
                }
            };
        }
    }, [currentProject, isMobile, fullscreenImage]);

    if (isLoading) {
        return null;
    }

    if (!currentProject) {
        return null;
    }

    const handleCloseFullscreen = () => {
        setIsClosing(true);
        setTimeout(() => {
            setFullscreenImage(null);
            setIsClosing(false);
        }, 250); // Match animation duration
    };

    return (
        <>
            <ZoomOverrideStyles />
            {fullscreenImage && (
                <FullscreenModal onClick={handleCloseFullscreen} $isClosing={isClosing}>
                    <CloseButton onClick={handleCloseFullscreen}>Fechar</CloseButton>
                    <FullscreenImage
                        src={fullscreenImage}
                        alt="Fullscreen"
                        onClick={(e) => e.stopPropagation()}
                        $isClosing={isClosing}
                    />
                </FullscreenModal>
            )}
            <Container data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
                <Texts>
                    <aside>
                        <h2>Sobre o projeto <strong>/ {currentProject.title || "-"}</strong></h2>
                    </aside>
                    <AboutContent
                        ref={contentRef}
                        dangerouslySetInnerHTML={{ __html: currentProject?.fullDescription || "" }}
                    />
                </Texts>
                <Infos>
                    <ul className="list">
                        <div className="timing">
                            <li>
                                <h2>Tipo de projeto</h2>
                                <p>{currentProject.siteType || "-"}</p>
                            </li>
                            <li className="badge-hours">
                                <h6>{currentProject.date || "-"} | {currentProject.duration || "-"}h</h6>
                            </li>
                        </div>
                        <li className="techs"><strong>Tecnologias</strong>
                            <ul>
                                {(currentProject.stack || []).map((tech, i) => (
                                    <Stack
                                        key={i}
                                        techName={tech.techName}
                                        tecnologias={tech.tecnologias}
                                        color={tech.color}
                                    />
                                ))}
                            </ul>
                        </li>
                    </ul>
                </Infos>
            </Container>
        </>
    )
}