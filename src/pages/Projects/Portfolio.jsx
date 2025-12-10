import ProjectStyle from "@/components/ui/Card/ProjectStyle";
import Title from "@/components/ui/texts/Title";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
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
`

const Control = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    z-index: 2;
    cursor: pointer;

    & div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
        width: 35px;
        height: 35px;
        border-radius: 50px;
    }

    @media (min-width: 769px){
        display: none;
    }
`

const DesktopGrid = styled.div`
    width: 100%;
    display: none;

    @media (min-width: 769px){
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
    }
`;

const MobileCarousel = styled.div`
    width: 100%;

    @media (min-width: 769px){
        display: none;
    }
`;

const LoadMore = styled.button`
    margin-top: 12px;
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid ${(props) => props.theme.colors.gray[200]};
    background: transparent;
    color: ${(props) => props.theme.colors.white[300]};
    font-size: 14px;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: ${(props) => props.theme.colors.white[300]};
    }

    @media (max-width: 768px){
        width: 100%;
        text-align: center;
    }
`;

export default function Portfolio() {
    const { projects: projectsData = [], loading } = useSupabaseData();
    const isLoading = loading?.projects;
    const [visibleByType, setVisibleByType] = useState({});

    const PAGE_SIZE = 6;

    const siteTypes = useMemo(() => {
        const defaults = ["Landing Page", "E-commerce", "Institucional", "Aplicações"];
        const datasetTypes = Array.from(
            new Set(
                (projectsData ?? [])
                    .map((project) => project?.siteType)
                    .filter((type) => typeof type === 'string' && type.trim().length > 0)
            )
        );

        const merged = [...defaults];

        datasetTypes.forEach((type) => {
            if (!merged.includes(type)) {
                merged.push(type);
            }
        });

        return merged;
    }, [projectsData]);

    return (
        <>
            <Container>
                {!isLoading && siteTypes.map((type) => {
                    const filteredProjects = (projectsData ?? []).filter((project) => project.siteType === type);

                    const visibleCount = visibleByType[type] ?? PAGE_SIZE;
                    const visibleProjects = filteredProjects.slice(0, visibleCount);
                    const hasMore = visibleCount < filteredProjects.length;

                    if (filteredProjects.length === 0) {
                        return null;
                    }

                    return (
                        <Content key={type} data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
                            <Header>
                                <Title className="title">
                                    {type}
                                </Title>
                                <Control>
                                    <div className="portfolio-button-prev"><MdKeyboardArrowLeft /></div>
                                    <div className="portfolio-button-next"><MdKeyboardArrowRight /></div>
                                </Control>
                            </Header>
                            <MobileCarousel>
                                <Swiper
                                    spaceBetween={16}
                                    slidesPerView={1}
                                    modules={[Navigation]}
                                    navigation={{
                                        clickable: true,
                                        nextEl: '.portfolio-button-next',
                                        prevEl: '.portfolio-button-prev',
                                    }}
                                    style={{ width: '100%' }}
                                >
                                    {visibleProjects.map((project) => (
                                        <SwiperSlide key={project.slug ?? project.id ?? project.title}>
                                            <ProjectStyle
                                                {...project}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </MobileCarousel>
                            <DesktopGrid>
                                {visibleProjects.map((project) => (
                                    <ProjectStyle
                                        key={project.slug ?? project.id ?? project.title}
                                        {...project}
                                    />
                                ))}
                            </DesktopGrid>
                            {hasMore && (
                                <LoadMore
                                    onClick={() => {
                                        setVisibleByType((prev) => ({
                                            ...prev,
                                            [type]: Math.min(filteredProjects.length, (prev[type] ?? PAGE_SIZE) + PAGE_SIZE),
                                        }));
                                    }}
                                >
                                    Carregar mais
                                </LoadMore>
                            )}
                        </Content>
                    );
                })}
            </Container>
        </>
    )
}