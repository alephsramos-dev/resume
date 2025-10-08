import styled from "styled-components";
// import { useMemo } from "react";
// import projects from "@/database/ProjectData";
import Title from "@/components/ui/texts/Title";

const Container = styled.div`
    border: 1px solid red;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    position: relative;
    padding: 20px;
    border: 1px solid #ffffff20;
    background-color: #ffffff10;
    border-radius: 22px;

    @media (max-width: 768px){
        flex-direction: row;
        gap: 18px;
        padding: 16px;
        border-radius: 18px;
    }

    & h1 {
        @media (max-width: 768px){
            font-size: 20px;
            width: auto;
        }
    }

    & button {
        padding: 12px 24px;
        background-color: #fff;
        color: #000;
        font-weight: 500;
        border: none;
        border-radius: 14px;
        cursor: pointer;

        @media (max-width: 768px){
            padding: 10px 16px;
        }
    }
`

export default function ProjectDetailsCallToAction() {

    // const currentProject = useMemo(() => {
    //     return projects.find(project => project.slug === slug);
    // }, [slug]);

    return (
        <>
            <Container>
                <Title 
                    titulo="Crie o seu projeto!"
                    color="#fff"
                    fontSize="24px"
                />
                <button>
                    Clique aqui!
                </button>
            </Container>
        </>
    )
}