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
    background: ${(props) => props.theme.colors.black[0]};
    color: #fff;
    position: relative;
    z-index: 2;
    overflow: hidden;
`;

const Content = styled.section`
    width: 100%;
    padding: 2.5%;
    max-width: 1420px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    z-index: 1;

    & > div:first-child {
        width: 20%;
        min-width: 200px;
        display: flex;
        align-items: flex-start;

        & p {
            color: ${(props) => props.theme.colors.gray[300]};
            font-size: 18px;

            @media (max-width: 768px){
                font-size: 16px;
            }
        }
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
        --fade-width: 60px;
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

    &::before { 
        left: 0; 
        background: linear-gradient(90deg,#000 0%,rgba(0,0,0,0) 100%);
    }

    &::after { right: 0; 
        background: linear-gradient(-90deg,#000 0%,rgba(0,0,0,0) 100%); 
    }
`;

// Ajustes globais específicos do Swiper dentro deste escopo
const CarouselStyles = styled.div`
    width: 100%;
    --logo-size: 80px;

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
        padding: 8px;
        height: 100px;
        filter: grayscale(100%);
        opacity: 1;
        transition: filter .25s, opacity .25s, transform .25s;
        user-select: none;
        pointer-events: none; /* apenas visual */
    }
    .swiper-slide-active .logo-item { pointer-events: auto; }
    @media (max-width: 600px){
        --logo-size: 60px;
    }
`;

export default function Companies() {
    const logos = useMemo(() => {
        const modules = import.meta.glob("@/assets/companies/*-white.svg", { eager: true, import: 'default' });
        return Object.values(modules);
    }, []);

    const extended = logos.length < 8 ? logos.concat(logos) : logos;

    return (
        <Container>
            <Content data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
                <div>
                    <Description
                        children="Com a confiança das maiores marcas do mundo"
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