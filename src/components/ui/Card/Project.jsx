import React, { useMemo } from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { useSupabaseData } from "@/contexts/SupabaseDataContext";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 14px 4px;
    cursor: pointer;

    & img {
        width: 100%;
        height: 300px;
        border-radius: 12px;   
        object-fit: cover;
        object-position: center;
        margin-bottom: 18px;

        @media (max-width: 768px){
            height: 250px;    
        }
    }

    & hr {
        width: 100%;
        border-color: ${(props) => rgba(props.theme.colors.gray[300], 0.2)};
        border-radius: 12px;
    }

    & div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${(props) => props.theme.colors.white[100]};

        @media (max-width: 768px){
            flex-wrap: wrap;
            gap: 14px;
        }

        & h4 {
            font-size: 24px;
            font-weight: ${(props) => props.theme.fontWeights.normal};

            @media (max-width: 768px){
                font-size: 20px;
                margin-top: 14px;
            }
        }

        & span {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 300;
            letter-spacing: 1px;
            color: ${(props) => props.theme.colors.gray[100]};

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        & p {
            font-size: 12px;
            color: ${(props) => props.theme.colors.gray[100]};
            font-weight: 300;

            @media (max-width: 768px){
                margin-top: 10px;
            }
        }

        & ol {
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            height: auto;

            & li {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 25px;
                border-radius: 0;

                & img {
                    width: 24px!important;
                    padding: 2px;
                    height: 24px!important;
                    border-radius: 0;
                }

            }
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: 260px;        
    }
`;

export default function ProjectCard({
    image,
    imagePreview,
    imageFull,
    title,
    date,
    onClick,
    tecnologias = []
}) {
    const { techIcons = {} } = useSupabaseData();

    const iconMap = useMemo(() => techIcons ?? {}, [techIcons]);
    const displayImage = imagePreview ?? image ?? imageFull ?? '';
    const fallbackImage = imageFull ?? image ?? '';

    const handleImageError = (event) => {
        if (!fallbackImage) {
            return;
        }

        if (event.currentTarget.dataset.fallbackApplied === 'true') {
            return;
        }

        event.currentTarget.dataset.fallbackApplied = 'true';
        event.currentTarget.src = fallbackImage;
    };

    return (
        <>
            <Content
                onClick={onClick}
            >
                <ImageWrapper
                >
                    <img
                        src={displayImage}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        onError={handleImageError}
                        title={title}
                    />
                </ImageWrapper>
                <div>
                    <h4>{title}</h4>
                    <p>{date}</p>
                </div>
                <hr />
                <div>
                    <span>Tecnologias Usadas</span>
                    <ol>
                        {tecnologias.map((tec, idx) => {
                            const key = typeof tec === 'string' ? tec.toLowerCase() : `tech-${idx}`;
                            const icon = iconMap[key];

                            return (
                                <li key={`${key}-${idx}`} style={{ display: 'inline-block' }}>
                                    {icon ? (
                                        <img
                                            src={icon.src}
                                            alt={icon.alt}
                                            title={icon.title}
                                            width={icon.width ?? 24}
                                            height={icon.height ?? 24}
                                            loading="lazy"
                                            style={{ padding: 2 }}
                                        />
                                    ) : (
                                        tec
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </Content>
        </>
    )
}