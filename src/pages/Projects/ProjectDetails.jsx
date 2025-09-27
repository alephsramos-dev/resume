import styled from "styled-components";
import ProjectDetailsHero from "./Details/Hero";
import { useParams } from "react-router-dom";
import Title from "@/components/ui/texts/Title";

import Bg from "@/assets/patterns/bg-model-01.jpg";
import ProjectDetailsAbout from "./Details/About";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 26px;
    background-color: #000;
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    padding: 2.5%;
    max-width: 1420px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 26px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px){
        padding: 5%;
    }
`;

const Header = styled.header`
    width: 100%;
    height: auto;
    min-height: 90vh;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    & h1 {
        font-weight: 500;
    }
`

export default function ProjectDetails({
}) {

    const { slug } = useParams();

    return (
        <>
            <Container>
                <Content>
                    <ProjectDetailsHero 
                        slug={slug}
                    />
                        <ProjectDetailsAbout 
                            slug={slug}
                        />
                </Content>
            </Container>
        </>
    )
}