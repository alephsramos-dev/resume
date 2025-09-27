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
    gap: 26px;

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const Texts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
    width: 70%;

    @media (max-width: 768px){
        width: 100%;    
    }

    & > h2 {
        font-size: 16px;
        font-weight: 500;
    }

    & p {
        font-size: 32px;
        font-weight: 300;

        @media (max-width: 768px){
            font-size: 28px;
        }
    }
`

const Infos = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

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
                    <h2>Sobre o projeto</h2>
                    <p>{currentProject.description}</p>
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