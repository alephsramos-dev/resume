import styled from "styled-components";
import { useMemo } from "react";
import projects from "@/database/ProjectData";
import ProjectStyle from "@/components/ui/Card/ProjectStyle";
import Title from "@/components/ui/texts/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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
    gap: 26px;
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 26px;
    position: relative;
    overflow: hidden;
    z-index: 1;
`;

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .title {
        font-size: 24px;
        color: ${(props) => props.theme.colors.white[200]};
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


export default function ProjectDetailsExplore({
    slug
}) {

    const currentProject = useMemo(() => {
        return projects.find(project => project.slug === slug)
    }, [slug]);

    const siteType = currentProject.siteType;

    return (
        <>
            <Container>
                <Content>
                    <Header>
                        <Title className="title">
                            Mais projetos de {currentProject.siteType}
                        </Title>
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
                        {projects.filter(project => project.siteType === siteType).map(project => (
                            <SwiperSlide key={project.title}>
                                <ProjectStyle
                                    {...project}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Content>
            </Container>    
        </>
    )
}