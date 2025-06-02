import Badge from "@/components/ui/Badge";
import ProjectCard from "@/components/ui/cards/ProjectCard";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/Title";
import React, { useRef, useState } from "react";
import { SiOpenproject } from "react-icons/si";
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from "styled-components";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BannerPousadaLeAnge from '@/assets/banners-project/banner-pousada-le-ange.jpg';
import { projects as allProjects } from './Data/projectData';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
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
    padding: 2.5%;
    max-width: 1420px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
`

const Texts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    flex-direction: row;

    & > div {
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        height: 100%;

        &:nth-child(1){
            width: 60%;
        }

        &:nth-child(2){
            width: 40%;
            align-items: flex-end;
        }
    }
`

const Carrossel = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;
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
  border: 1px solid #fff;
  color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin: 0 5px;
  cursor: pointer;
  transition: background 0.2s;

  & svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 30px;
  }
`;

const ProgressBar = styled.div`
  width: 15%;
  height: 6px;
  background: #222;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
`;
const ProgressFill = styled.div`
  height: 100%;
  background: #fff;
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
        color: #ffffff;
        scale: 1.1;
    }

    &:hover span {
        color: #ffffff;
        scale: 1.1;
    } 

    & svg {
        width: 50px;
        height: 50px;
        color: #ffffff50;
        margin-bottom: 20px;
        transition: all 0.2s ease-in-out;
    }

    & span {
        font-size: 20px;
        font-weight: 600;
        color: #ffffff50;
        transition: all 0.2s ease-in-out;
    }
`

export default function Projects() {
    const [progress, setProgress] = useState(0);
    const splideRef = useRef(null);
    // Ordena por data (mais recente primeiro) e pega os 5 últimos
    const sortedProjects = allProjects
        .slice()
        .sort((a, b) => new Date(b.data) - new Date(a.data))
        .slice(0, 5);
    // Adiciona o slide customizado
    const projects = [...sortedProjects, "custom-slide-6"];

    // Calcula o progresso corretamente baseado no número de slides visíveis e total de slides
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
                    <Texts>
                        <div>
                            <Badge 
                                texto="Projetos"
                                icon={<SiOpenproject />} 
                                txtcolor="#13ba00" 
                                color="#0c740030" 
                            />
                            <Title 
                                titulo={<>Projetos utilizando as <b>Tecnologias</b> mais modernas e avançadas</>}
                                color="#fff"
                            />
                        </div>
                        <div>
                            <Description 
                                descricao="Aqui estão alguns dos meus projetos mais recentes, onde utilizei tecnologias modernas e avançadas para criar soluções inovadoras e eficientes."
                                color="#dadada"
                            />
                        </div>
                    </Texts>
                    <Carrossel>
                        <Splide
                            ref={splideRef}
                            options={{
                                type: 'slide',
                                perPage: 2,
                                gap: '1rem',
                                pagination: false,
                                arrows: false,
                                drag: 'free',
                                width: '100%',
                                autoWidth: false,
                                breakpoints: {
                                    1200: { perPage: 2, gap: '1.5rem' },
                                    900: { perPage: 1, gap: '1rem' },
                                    600: { perPage: 1, gap: '0.5rem' },
                                }
                            }}
                            onMove={(_, newIndex) => handleSplideEvent(splideRef.current.splide)}
                            onDragged={() => handleSplideEvent(splideRef.current.splide)}
                            aria-label="Projetos"
                            >
                            {projects.map((proj, idx) => (
                                proj === "custom-slide-6" ? (
                                    <SplideSlide key="custom-slide-6" style={{ width: '100%', minWidth: 0 }}>
                                        <VerMais style={{ width: '100%', minWidth: 0 }}>
                                            <CiCirclePlus />
                                            <span>Ver todos os projetos</span>
                                        </VerMais>
                                    </SplideSlide>
                                ) : (
                                    <SplideSlide key={proj.nome + idx} style={{ width: '100%', minWidth: 0 }}>
                                        <ProjectCard {...proj} />
                                    </SplideSlide>
                                )
                            ))}
                        </Splide>
                        <Navigation>
                            <div style={{display: 'flex', justifyContent: 'center', width: 'auto',}}>
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