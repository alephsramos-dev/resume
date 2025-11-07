import styled from "styled-components";
// import { useMemo } from "react";
// import projects from "@/database/ProjectData";
import Title from "@/components/ui/texts/Title";

const Container = styled.div`
    border: 1px solid red;
    width: 85%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    padding: 12px 14px;
    border: 1px solid #ffffff10;
    background-color: #ffffff10;
    backdrop-filter: blur(8px);
    border-radius: 22px;
    position: fixed;
    left: 50%;
    bottom: 12px;
    transform: translateX(-50%);
    z-index: 9999;

    & .title {
        font-size: 24px;
        color: ${(props) => props.theme.colors.white[200]};

        @media (max-width: 768px){
            font-size: 18px;
        }
    }

    @media (max-width: 768px){
        flex-direction: row;
        gap: 18px;
        padding: 12px 14px;
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
                <Title className="title">
                    Crie o seu projeto!
                </Title>
                <button>
                    Clique aqui!
                </button>
            </Container>
        </>
    )
}