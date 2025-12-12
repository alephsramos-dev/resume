import ProjectStyle from "@/components/ui/Card/ProjectStyle";
import Title from "@/components/ui/texts/Title";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSupabaseData } from "@/contexts/SupabaseDataContext";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 2;
    overflow: hidden;
    gap: 32px;
    padding: 5% 0;

    @media (max-width: 768px){
        gap: 0px;
        padding: 10% 0;
    }
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    max-width: 1420px; /* menor container geral */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 28px;
    position: relative;
    overflow: hidden;
    z-index: 1;

    @media (max-width: 768px){
        padding: 2.5% 5%;
    }
`;
const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .title {
        font-size: 32px;
        color: ${(props) => props.theme.colors.white[300]};
    }
`;

const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(12px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 16px;

    @media (min-width: 769px){
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
    }
`;

const CardItem = styled.div`
    animation: ${fadeUp} 0.4s ease forwards;
    opacity: 0;
`;

const Sentinel = styled.div`
    width: 100%;
    height: 1px;
`;

export default function Portfolio() {
    const { projects: projectsData = [], loading } = useSupabaseData();
    const isLoading = loading?.projects;
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
    const [visibleCount, setVisibleCount] = useState(0);
    const sentinelRef = useRef(null);

    const PAGE_SIZE_MOBILE = 4;
    const PAGE_SIZE_DESKTOP = 6;

    const sortedProjects = useMemo(() => {
        return (projectsData ?? [])
            .slice()
            .sort((a, b) => new Date(b.project_date || b.date || 0) - new Date(a.project_date || a.date || 0));
    }, [projectsData]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize, { passive: true });
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const initial = isMobile ? PAGE_SIZE_MOBILE : PAGE_SIZE_DESKTOP;
        setVisibleCount((prev) => (prev === 0 ? initial : prev));
    }, [isMobile]);

    useEffect(() => {
        if (!sentinelRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCount((prev) => {
                            const pageSize = isMobile ? PAGE_SIZE_MOBILE : PAGE_SIZE_DESKTOP;
                            const next = prev + pageSize;
                            return Math.min(next, sortedProjects.length);
                        });
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px 0px 200px 0px',
                threshold: 0.1,
            }
        );

        observer.observe(sentinelRef.current);

        return () => observer.disconnect();
    }, [isMobile, sortedProjects.length]);

    return (
        <>
            <Container>
                {!isLoading && (
                    <Content data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
                        <Grid>
                            {sortedProjects.slice(0, visibleCount).map((project, index) => (
                                <CardItem key={project.slug ?? project.id ?? project.title ?? index} style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}>
                                    <ProjectStyle {...project} />
                                </CardItem>
                            ))}
                        </Grid>
                        <Sentinel ref={sentinelRef} />
                    </Content>
                )}
            </Container>
        </>
    )
}