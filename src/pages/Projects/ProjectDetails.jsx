import styled from "styled-components";
import ProjectDetailsHero from "./Details/Hero";
import { useParams } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 26px;
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

    @media (max-width: 768px){
        padding: 5%;
    }
`;

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
                </Content>
            </Container>
        </>
    )
}