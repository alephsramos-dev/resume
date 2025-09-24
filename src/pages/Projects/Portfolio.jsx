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
    background: #000000;
    position: relative;
    z-index: 2;
    overflow: hidden;
    gap: 26px;

    @media (max-width: 768px){
        padding: 0% 1%;
    }
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    padding: 2.5%;
    max-width: 1420px; /* menor container geral */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 26px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    background-color: #101010;
    border: 1px solid #ffffff15;
    border-radius: 28px;

    @media (max-width: 768px){
        padding: 5% 5% 2.5% 5%;
        border-radius: 18px;
    }
`;

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
                    <Content key={type}>
                        <Header>
                            <Title 
                                titulo={type}
                                color="#fff"
                                fontSize="28px"
                            />
                            <Control>
                                <div className="portfolio-button-prev"><MdKeyboardArrowLeft  /></div>
                                <div className="portfolio-button-next"><MdKeyboardArrowRight  /></div>
                            </Control>
                        </Header>
                        <Swiper
                            spaceBetween={12}
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