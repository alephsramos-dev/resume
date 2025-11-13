import ProjectStyle from "@/components/ui/Card/ProjectStyle";
import Title from "@/components/ui/texts/Title";
import React, { useMemo } from "react";
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
`

export default function Portfolio() {
    const { projects: projectsData = [], loading } = useSupabaseData();
    const isLoading = loading?.projects;

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
                            <Swiper
                                spaceBetween={16}
                                slidesPerView={1}
                                modules={[Navigation]}
                                navigation={{
                                    clickable: true,
                                    nextEl: '.portfolio-button-next',
                                    prevEl: '.portfolio-button-prev',
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 3,
                                    },
                                }}
                                style={{ width: '100%' }}
                            >
                                {filteredProjects.map((project) => (
                                    <SwiperSlide key={project.slug ?? project.id ?? project.title}>
                                        <ProjectStyle
                                            {...project}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Content>
                    );
                })}
            </Container>
        </>
    )
}