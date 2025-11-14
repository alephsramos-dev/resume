import styled from "styled-components";
import ProjectDetailsHero from "./Details/Hero";
import { useParams } from "react-router-dom";
import Title from "@/components/ui/texts/Title";
import { Helmet } from 'react-helmet-async';
import { useSupabaseData } from "@/contexts/SupabaseDataContext";
import { useEffect, useMemo } from "react";

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
        opacity: 0.3;
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
    const { projects: projectsData = [], ensure = {} } = useSupabaseData();

    useEffect(() => {
        ensure?.projects?.();
    }, [ensure]);

    const project = useMemo(() => (
        (projectsData ?? []).find((item) => item.slug === slug)
    ), [projectsData, slug]);

    const baseOrigin = useMemo(() => {
        if (typeof window !== 'undefined' && window.location?.origin) {
            return window.location.origin;
        }

        return (import.meta.env.VITE_SITE_URL ?? 'https://alephramos.com.br');
    }, []);

    const normalizedOrigin = baseOrigin.replace(/\/$/, '');
    const canonical = `${normalizedOrigin}/projetos/${slug}`;
    const metaTitle = project ? `${project.title} | Projetos • Aleph Ramos` : 'Projetos • Aleph Ramos';
    const metaDescription = project?.description
        ?? 'Conheça os projetos desenvolvidos por Aleph Ramos com foco em performance, automação e conversão.';
    const metaImage = project?.imageFull ?? project?.imagePreview ?? null;

    return (
        <>
            <Helmet>
                <title>{metaTitle}</title>
                <link rel="canonical" href={canonical} />
                <meta name="description" content={metaDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={canonical} />
                <meta property="og:site_name" content="Aleph Ramos" />
                {metaImage ? <meta property="og:image" content={metaImage} /> : null}
                {metaImage ? <meta property="og:image:alt" content={project?.title ?? 'Projeto de Aleph Ramos'} /> : null}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                {metaImage ? <meta name="twitter:image" content={metaImage} /> : null}
            </Helmet>
            <Container>
                <Content>
                    <ProjectDetailsCallToAction
                        slug={slug}
                    />
                    <ProjectDetailsHero
                        slug={slug}
                    />
                    <ProjectDetailsAbout
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