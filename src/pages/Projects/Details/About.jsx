import styled from "styled-components";
import projects from "@/database/ProjectData";
import React, {useMemo} from "react";
import Stack from "@/components/ui/Badge/Stack";

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
    gap: 22px;
    width: 70%;

    @media (max-width: 768px){
        width: 100%;    
    }

    & > h2 {
        width: 100%;
        font-size: 24px;
        font-weight: 500;
        padding-bottom: 18px;
        box-shadow: inset 0 -0.2px 0 0 #ffffff;

        & strong {
            font-weight: 400;
            font-size: 14px;
            color: #ffffff90;
        }
    }


    & div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        font-size: 18px;

        & p {
            font-weight: 300;
            color: #ffffff95;

            & strong {
                color: #ffffff;
                font-weight: 500;
            }
        }

        & ul {
            display: contents;

            & li {
                list-style: disc;
                margin-left: 20px;
                font-weight: 300;
                color: #ffffff95;

                & strong {
                    font-weight: 500;
                    color: #ffffff;
                }
            }
        }
    }
`

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
    }, [slug, projects]);

    return (
        <>
           <Container>
                <Texts>
                    <h2>Sobre o projeto <strong>/ {currentProject.title || "-"}</strong></h2>
                    <div dangerouslySetInnerHTML={{ __html: currentProject.fullDescription }} />
                </Texts>
                <Infos>
                    <ul>
                        <li><strong>Tipo de projeto</strong> {currentProject.siteType || "-"}</li>
                        <li><strong>Data / Duração</strong> {currentProject.data || "-"} / {currentProject.duration || "-"}h</li>
                        <li><strong>Tecnologias</strong>
                            <ul>
                                {currentProject.stack.map((tech, i) => (
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