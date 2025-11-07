import styled from "styled-components";
import projects from "@/database/ProjectData";
import React, { useMemo } from "react";
import Stack from "@/components/ui/Badge/Stack";
import Bg from '@assets/patterns/bg.jpg'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    position: relative;
    gap: 46px;

    @media (max-width: 768px){
        flex-direction: column;
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

    @media (max-width: 768px){
        width: 100%;    
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
        color: ${(props) => props.theme.colors.white[200]};
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    & img {
        width: 100%;
        height: auto;
        border-radius: 12px;
        margin: 8px 0 12px 0;
        display: block;
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
    }
    
    & ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
        width: 100%;

        @media (max-width: 768px){
            width: 100%;
        }

        & > li {
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

            &:last-child {
                box-shadow: none;
            }

            & strong {
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

    const currentProject = useMemo(() => {
        return projects.find(project => project.slug === slug);
    }, [slug]);

    return (
        <>
            <Container>
                <Texts>
                    <aside>
                        <h2>Sobre o projeto <strong>/ {currentProject.title || "-"}</strong></h2>
                    </aside>
                    <AboutContent dangerouslySetInnerHTML={{ __html: currentProject.fullDescription }} />
                </Texts>
                <Infos>
                    <ul>
                        <li><strong>Tipo de projeto</strong> {currentProject.siteType || "-"}</li>
                        <li><strong>Data / Duração</strong> {currentProject.date || "-"} / {currentProject.duration || "-"}h</li>
                        <li><strong>Tecnologias</strong>
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