import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import styled from "styled-components";

import projects from "@/database/ProjectData";
import Stack from "@/components/ui/Badge/Stack";
import { useMemo } from "react";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    gap: 16px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
    }
`

const Texts = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px){
        width: 100%;
    }
`

const Company = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    gap: 12px;

    & img {
        width: 38px;
        height: 38px;
        border-radius: 14px;
        object-fit: contain;
        padding: 4px;
        object-position: center;
        background-color: #fff;
    }

    & span {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }
`

const Infos = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;

    & li {
        font-size: 16px;
        font-weight: 400;
        color: #ffffff90;

        & strong {
            font-weight: 500;
            color: #fff;
        }

        & a {
            text-decoration: underline;
        }
    }
`

const Technologies = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 12px;

    & h4 {
        font-size: 20px;
        font-weight: 600;
    }

    & ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
    }
`

const Image = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        width: 100%;    
    }
    
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

export default function ProjectDetailsHero({
    slug
}) {

    const currentProject = useMemo(() => {
        return projects.find(project => project.slug === slug);
    }, [slug, projects]);

    return (
        <>
            <Container>
                <Texts>
                    <Company>
                        <img src={currentProject.imageCompanyUrl} alt={currentProject.companyName} />
                        <span>{currentProject.companyName}</span>
                    </Company>
                    <Title
                        titulo={currentProject.title}
                        color="#fff"
                        fontSize="42px"
                    />
                    <Description
                        descricao={currentProject.description}
                        color="#fff"
                    />
                    <Infos>
                        <li>
                            <strong>Plataforma:</strong> {currentProject.plataform}
                        </li>
                        <li>
                            <strong>Tipo:</strong> {currentProject.siteType}
                        </li>
                        <li>
                            <strong>País:</strong> {currentProject.country}
                        </li>
                        <li>
                            <strong>URL: </strong>
                            <a href={currentProject.urlPage}>
                                {currentProject.urlPage}
                            </a>
                        </li>
                        <li>
                            <strong>Data:</strong> {currentProject.data}
                        </li>
                        <li>
                            <strong>Duration:</strong> {currentProject.duration}h
                        </li>
                    </Infos>
                    <Technologies>
                        <h4>Tecnologias usadas:</h4>
                        <ul>
                            {currentProject.stack.map((project, i) => (
                                <Stack 
                                    key={i}
                                    tecnologias={project.tecnologias}
                                    techName={project.techName}
                                    color={project.color}
                                />
                            ))}
                        </ul>
                    </Technologies>
                </Texts>
                <Image>
                    <img src={currentProject.image} alt={currentProject.title} />
                </Image>
            </Container>
        </>
    )
}