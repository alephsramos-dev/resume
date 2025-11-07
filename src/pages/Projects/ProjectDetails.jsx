import styled from "styled-components";
import ProjectDetailsHero from "./Details/Hero";
import { useParams } from "react-router-dom";
import Title from "@/components/ui/texts/Title";

import Bg from "@/assets/patterns/bg.jpg";
import ProjectDetailsAbout from "./Details/About";
import ProjectDetailsExplore from "./Details/Explore";
import ProjectDetailsCallToAction from "./Details/CallToAction";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 26px;
    background-color: #000;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 90vh;
        background: url(${Bg}) no-repeat bottom;
        background-size: cover;
        opacity: 0.4;
        border-bottom: 1px solid #ffffff40;

        @media (max-width: 768px){
            max-height: 60vh;
            opacity: 0.2;
        }
    }
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    padding: 2.5% 2.5% 5% 2.5%;
    max-width: 1420px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 36px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px){
        padding: 5% 5% 10% 5%;
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

export default function ProjectDetails() {

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
                            <ProjectDetailsCallToAction 
                                slug={slug}
                            />
                                <ProjectDetailsExplore 
                                    slug={slug}
                                />
                </Content>
            </Container>
        </>
    )
}