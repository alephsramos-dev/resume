import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import styled from "styled-components";

import logoAleph from "/icon-black-aleph-desenvolvedor-web.svg";

import projects from "@/database/ProjectData";
import Stack from "@/components/ui/Badge/Stack";
import { useMemo, useState, useEffect } from "react";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    position: relative;
    height: 400vh;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 8px;
    }
`

const Fixed = styled.div`
    width: 100%;
    max-width: 1440px;
    font-size: 20px;
    font-weight: 600;
    position: sticky;
    left: 5%;
    top: 5%;
    z-index: 10;
    opacity: ${props => props.visible ? 1 : 0};
    transform: translateY(${props => props.visible ? '0' : '-8px'});
    transition: opacity 120ms ease, transform 120ms ease;
    pointer-events: ${props => props.visible ? 'auto' : 'none'};
`

const Main = styled.main`
    width: 100%;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 768px){
        min-height: auto; 
        padding: 25% 0% 10% 0;
        gap: 18px;
    }

`

const Texts = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 768px){
        align-items: flex-start;
        width: 100%;
    }

    & span {
        font-size: 14px;
        color: #ffffff60;
        font-weight: 300;
        text-align: center;
        width: 100%;

        @media (max-width: 768px){
            text-align: left;
        }

        & strong {
            font-weight: 400;
            color: #ffffff;
        }
    }

    & h1 {
        font-weight: 500;
        font-size: 54px;
        text-align: center;

        @media (max-width: 768px){
            font-size: 38px;
            text-align: left;
        }
    }

    @media (max-width: 768px){
        width: 100%;
    }
`

const Company = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    @media (max-width: 768px){
        width: 100%;
        justify-content: flex-start;    
        gap: 8px;
    }

    & img {
        width: 28px;
        height: 28px;
        border-radius: 10px;
        object-fit: contain;
        padding: 6px;
        object-position: center;
        background-color: #fff;

        @media (max-width: 768px){
            width: 26px;
            height: 26px;
            border-radius: 10px;
            padding: 4px;
        }
    }

    & span {
        font-size: 18px;
        font-weight: 400;
        color: #fff;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }
`

const Image = styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    & span {
        position: absolute;
        top: 16px;
        right: 16px;
        font-size: 18px;
        color: #ffffff;
        font-weight: 400;
        text-align: center;
        background: #00000020;
        padding: 6px 12px;
        border-radius: 16px;
        backdrop-filter: blur(10px);
        z-index: 2;

        @media (max-width: 768px){
            font-size: 14px;    
        }
        
    }

    & img {
        width: 100%;
        height: 700px;
        object-fit: cover;
        border-radius: 36px;
        object-position: center;

        @media (max-width: 768px){
            height: auto;
            border-radius: 26px;
        }
    }
`


export default function ProjectDetailsHero({
    slug,
}) {

    const [fixedVisible, setFixedVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const onScroll = () => {
            // show when scrolled past 60% of the viewport height
            const show = window.scrollY >= 0.7 * window.innerHeight;
            setFixedVisible(show);
        };

        // initial check
        onScroll();

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const currentProject = useMemo(() => {
        return projects.find(project => project.slug === slug);
    }, [slug, projects]);

    return (
        <>
            <Container>
                <Fixed visible={fixedVisible}>
                    {currentProject.title}
                </Fixed>
                <Main>
                    <Company>
                        <img src={logoAleph} alt="logo-aleph-desenvolvedor-web" />
                        <span>by Aleph</span>
                    </Company>
                    <Texts>
                        <Title
                            titulo={currentProject.title}
                            color="#fff"
                        />
                        <span>{currentProject.data} / © Todos os direitos reservados / <strong>{currentProject.companyName}</strong></span>
                    </Texts>
                </Main>
                <Image>
                    <img src={currentProject.image} alt={currentProject.title} />
                    <span>{currentProject.siteType}</span>
                </Image>
            </Container>
        </>
    )
}