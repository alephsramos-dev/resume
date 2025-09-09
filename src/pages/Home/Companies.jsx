import Description from "@/components/ui/texts/Description";
import React, { useMemo } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
// import "swiper/css/free-mode"; // (Opcional se quiser estilos adicionais)

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    position: relative;
    z-index: 2;
    overflow: hidden;
`;

const Content = styled.section`
    width: 100%;
    padding: 2.5% 2.5%;
    max-width: 1420px; /* menor container geral */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 0px;
    position: relative;
    z-index: 1;

    & > div:first-child { /* bloco do titulo */
        width: 25%;
        min-width: 200px;
        display: flex;
        align-items: flex-start;
    }

    @media (max-width: 1024px){
        gap: 24px;
    }
    @media (max-width: 900px){
        flex-direction: row;
        gap: 0px;
        & > div:first-child { width: 20%; }
    }
    @media (max-width: 768px){
        padding: 1% 5%;
    }
`;

const CarouselWrapper = styled.div`
    position: relative;
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    --fade-width: 150px;
    @media (max-width: 768px){
        --fade-width: 100px;
    }

    &::before, &::after {
        content: "";
        position: absolute;
        top: 0;
        width: var(--fade-width);
        height: 100%;
        z-index: 3;
        pointer-events: none;
    }
    &::before { left: 0; background: linear-gradient(90deg,#000 0%,rgba(0,0,0,0) 100%); }
    &::after { right: 0; background: linear-gradient(-90deg,#000 0%,rgba(0,0,0,0) 100%); }
`;

// Ajustes globais específicos do Swiper dentro deste escopo
const CarouselStyles = styled.div`
    width: 100%;
    --logo-size: 100px; /* tamanho fixo solicitado */
    .swiper { width: 100%; }
    .swiper-wrapper { transition-timing-function: linear !important; }
    .swiper-slide {
        width: var(--logo-size) !important; /* slides tamanho fixo */
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo-item {
        width: var(--logo-size);
        object-fit: contain;
        padding: 15px;
        height: 100px;
        filter: grayscale(1) brightness(.85);
        opacity: .9;
        transition: filter .25s, opacity .25s, transform .25s;
        user-select: none;
        pointer-events: none; /* apenas visual */
    }
    .swiper-slide-active .logo-item { pointer-events: auto; }
    @media (max-width: 600px){
        --logo-size: 70px;
    }
`;

export default function EmpresasQueConfiaram() {
    // Carrega todos os SVGs da pasta logos automaticamente (Vite glob)
    const logos = useMemo(() => {
        const modules = import.meta.glob("@/assets/logos/*.svg", { eager: true, import: 'default' });
        // Object.values preserva ordem alfabética das chaves do objeto resultante
        return Object.values(modules);
    }, []);
        // Duplicamos manualmente se for necessário reforçar densidade (Swiper loop cuida, mas ajuda a suavizar)
        const extended = logos.length < 10 ? logos.concat(logos) : logos;

        return (
            <Container>
                <Content>
                    <div>
                        <Description
                            descricao="Com a confiança das maiores marcas do mundo"
                            color="#d1d1d1"
                        />
                    </div>
                    <CarouselWrapper aria-label="Logos de empresas que confiaram">
                        <CarouselStyles>
                                <Swiper
                                    modules={[Autoplay, FreeMode]}
                                    loop
                                    freeMode={{ enabled: true, momentum: true }}
                                    allowTouchMove={true}
                                    speed={2500} /* menor valor => movimento mais rápido */
                                    autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
                                    slidesPerView={"auto"}
                                    spaceBetween={10}
                                    loopAdditionalSlides={extended.length}
                                    watchSlidesProgress
                                >
                                {extended.map((src, i) => (
                                    <SwiperSlide key={i} aria-label={`Logo ${i + 1}`}>
                                        <img className="logo-item" src={src} alt={`Logo ${i + 1}`} loading="lazy" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </CarouselStyles>
                    </CarouselWrapper>
                </Content>
            </Container>
        );
}