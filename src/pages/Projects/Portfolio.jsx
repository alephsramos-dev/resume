import ProjectStyle from "@/components/ui/Card/ProjectStyle";
import Title from "@/components/ui/texts/Title";
import React from "react";
import styled from "styled-components";
import { projects } from "@/database/ProjectData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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
    const siteTypes = ["Landing Page", "E-commerce", "Institucional", "Aplicações"];

    return (
        <>
            <Container>
                {siteTypes.map(type => (
                    <Content key={type} data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
                        {
                            projects.filter(project => project.siteType === type).length === 0 ?
                                null :
                                <Header>
                                    <Title
                                        className="title"
                                    >
                                        {type}
                                    </Title>
                                    <Control>
                                        <div className="portfolio-button-prev"><MdKeyboardArrowLeft /></div>
                                        <div className="portfolio-button-next"><MdKeyboardArrowRight /></div>
                                    </Control>
                                </Header>
                        }
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
                            {projects.filter(project => project.siteType === type).map(project => (
                                <SwiperSlide key={project.title}>
                                    <ProjectStyle
                                        {...project}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Content>
                ))}
            </Container>
        </>
    )
}