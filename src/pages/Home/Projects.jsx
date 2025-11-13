import Badge from "@/components/ui/Badge/Badge";
import ProjectCard from "@/components/ui/Card/Project";
import Description from "@/components/ui/texts/Description.jsx";
import { useNavigate } from "react-router-dom";
import Title from "@/components/ui/texts/Title.jsx";
import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from "styled-components";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AsteriskIcon, FolderStarIcon, FoldersIcon } from "@phosphor-icons/react/dist/ssr";
import { useSupabaseData } from "@/contexts/SupabaseDataContext";

const Container = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.black[0]};
    position: relative;
`

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    z-index: -1;
`

const Content = styled.section`
    width: 100%;
    padding: 5% 2.5%;
    max-width: 1420px;
    gap: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        gap: 28px;
        padding: 10% 5%;
    }
`

const Texts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 14px;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }

    & > div {
        width: 50%;
        gap: 18px;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        @media (max-width: 768px){
            width: 100%!important;
            align-items: flex-start!important;
            text-align: left;
        }
    }

    & .titles {
        width: 60%;

        @media (max-width: 768px){
            width: 100%;
        }

        & h1 {
            font-size: 32px;
            width: 80%;
            color: ${(props) => props.theme.colors.white[100]};
            font-weight: ${(props) => props.theme.fontWeights.normal};
            line-height: ${(props) => props.theme.lineHeights.heading};

            @media (max-width: 768px){
                font-size: 26px;
                width: 100%;
            }
        }
    }

    & .description {
        width: 40%;
        align-items: flex-end;

        @media (max-width: 768px){
            width: 100%;
        }

        & p {
            font-size: 18px;
            color: ${(props) => props.theme.colors.gray[100]};
            font-weight: ${(props) => props.theme.light};
            line-height: ${(props) => props.theme.lineHeights.heading};

            @media (max-width: 768px){
                font-size: 16px;
            }
        }
    }
`

const Carrossel = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 12px;
    box-sizing: border-box;
`

const Navigation = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CustomArrow = styled.button`
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.gray[100]};
  color: ${(props) => props.theme.colors.gray[100]};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin: 0 4px;
  cursor: pointer;
  transition: background 0.2s;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
`;

const ProgressBar = styled.div`
  width: 25%;
  height: 4px;
  background: ${(props) => props.theme.colors.black[200]};
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px){
    width: 50%;
  }
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${(props) => props.theme.colors.green['contrast']}, ${(props) => props.theme.colors.green['light']});
  width: ${props => props.progress}%;
  transition: width 0.3s;
`;

const VerMais = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    &:hover svg{
        color: ${(props) => props.theme.colors.gray[100]};
    }

    &:hover span {
        color: ${(props) => props.theme.colors.gray[100]};
    } 

    & svg {
        width: 42px;
        height: 42px;
        color: ${(props) => props.theme.colors.gray[600]};
        margin-bottom: 12px;
        transition: all 0.2s ease-in-out;
    }

    & span {
        font-size: 18px;
        font-weight: 300;
        color: ${(props) => props.theme.colors.gray[600]};
        transition: all 0.2s ease-in-out;
    }
`

function parseDateBR(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') {
        return new Date(0);
    }

    const parts = dateStr.split('/');
    if (parts.length !== 3) {
        return new Date(0);
    }

    const [day, month, year] = parts.map(Number);
    if ([day, month, year].some((value) => Number.isNaN(value))) {
        return new Date(0);
    }

    return new Date(year, month - 1, day);
}

export default function Projects() {
    const [progress, setProgress] = useState(0);
    const splideRef = useRef(null);
    const navigate = useNavigate();
    const { projects: projectsData = [], loading } = useSupabaseData();
    const isLoading = loading?.projects;

    const sortedProjects = (projectsData ?? [])
        .slice()
        .sort((a, b) => parseDateBR(b.date) - parseDateBR(a.date))
        .slice(0, 8);

    const projects = sortedProjects.length > 0 ? [...sortedProjects, "custom-slide-9"] : sortedProjects;

    const handleSplideEvent = (splide) => {
        const totalSlides = projects.length;
        const perPage = splide.options.perPage || 1;
        const maxIndex = totalSlides - perPage;
        const index = Math.min(splide.index, maxIndex);
        const progress = totalSlides <= perPage ? 100 : ((index) / maxIndex) * 100;
        setProgress(progress);
    };

    const handlePrev = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('<');
        }
    };
    const handleNext = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('>');
        }
    };

    return (
        <>
            <Container>
                <Background></Background>
                <Content>
                    <Texts data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
                        <div className="titles">
                            <Badge
                                children="Projetos"
                                icon={<AsteriskIcon weight="fill" />}
                                colorText="rgb(52, 199, 89)"
                                bgColor="rgba(52, 199, 89, 0.1)"
                            />
                            <Title
                                children="Projetos utilizando as Tecnologias mais modernas"
                            />
                        </div>
                        <div className="description">
                            <Description
                                children="Aqui estão alguns dos meus projetos mais recentes, onde utilizei tecnologias modernas e avançadas."
                            />
                        </div>
                    </Texts>
                    <Carrossel data-aos="fade-up" data-aos-duration="800" data-aos-offset="0" data-aos-delay="100">
                        <Splide
                            ref={splideRef}
                            options={{
                                type: 'slide',
                                perPage: 3,
                                perMove: 1,
                                gap: '1rem',
                                pagination: false,
                                arrows: false,
                                drag: true,
                                width: '100%',
                                autoWidth: false,
                                breakpoints: {
                                    1200: {
                                        perPage: 2,
                                        gap: '1.5rem'
                                    },
                                    900: {
                                        perPage: 1,
                                        gap: '1rem'
                                    },
                                    600: {
                                        perPage: 1,
                                        gap: '0.5rem'
                                    },
                                },
                            }}
                            onMove={() => handleSplideEvent(splideRef.current.splide)}
                            onDragged={() => handleSplideEvent(splideRef.current.splide)}
                            aria-label="Projetos"
                        >
                            {!isLoading && projects.map((proj, idx) => (
                                proj === "custom-slide-9" ? (
                                    <SplideSlide key="custom-slide-9" style={{ width: '100%', minWidth: 0 }}>
                                        <VerMais style={{ width: '100%', minWidth: 0 }} onClick={() => navigate('/projetos')}>
                                            <FoldersIcon weight="thin" />
                                            <span>Ver todos os projetos</span>
                                        </VerMais>
                                    </SplideSlide>
                                ) : (
                                    <SplideSlide key={`${proj.slug ?? proj.title}-${idx}`} style={{ width: '100%', minWidth: 0 }}>
                                        <ProjectCard
                                            {...proj}
                                            onClick={() => navigate(`/projetos/${proj.slug}`)}
                                        />
                                    </SplideSlide>
                                )
                            ))}
                        </Splide>
                        <Navigation>
                            <div style={{ display: 'flex', justifyContent: 'center', width: 'auto', }}>
                                <CustomArrow onClick={handlePrev}><IoIosArrowBack /></CustomArrow>
                                <CustomArrow onClick={handleNext}><IoIosArrowForward /></CustomArrow>
                            </div>
                            <ProgressBar>
                                <ProgressFill progress={progress} />
                            </ProgressBar>
                        </Navigation>
                    </Carrossel>
                </Content>
            </Container>
        </>
    )
}