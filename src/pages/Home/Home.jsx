import RecentProjectCard from "@/components/ui/cards/RecentProjectCard";
import Description from "@/components/ui/Description";
import BGnoise from "@/components/ui/patterns/BGnoise";
import Title from "@/components/ui/Title";
import React from "react";
import styled from "styled-components";
import bgHome from "@/assets/banner/bg-home.jpeg";
import ButtonLines from "@/components/ui/buttons/ButtonLines";
import ButtonMessage from "@/components/ui/buttons/ButtonMessage";
import BannerHome from '@/assets/banner/banner-home.png';

const Container = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
    position: relative;
`

const Banner = styled.div`
    width: 100%;
    position: absolute!important;
    z-index: -1;
    height: 100%;
    top: 0;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(0deg, #000 15%, #0000 80%);
        z-index: 1;
        pointer-events: none;
    }
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, #000 15%, #0000 80%);
        z-index: 1;
        pointer-events: none;
    }
    /* Lados esquerdo e direito */
    & span.banner-fade-left {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 80px;
        height: 100%;
        background: linear-gradient(90deg, #000 20%, #0000 100%);
        z-index: 2;
        pointer-events: none;
        display: block;
    }
    & span.banner-fade-right {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 80px;
        height: 100%;
        background: linear-gradient(270deg, #000 20%, #0000 100%);
        z-index: 2;
        pointer-events: none;
        display: block;
    }
    & img {
        object-fit: cover;
        object-position: center;
        opacity: 0.9;
    }
    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0 0 50px 50px;
        & span.banner-fade-left, & span.banner-fade-right {
            width: 30px;
        }
    }
`

const Content = styled.section`
    width: 100%;
    padding: 5% 2.5% 0% 2.5%;
    max-width: 1420px;
    min-height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    border: 1px solid #ffffff10;
    border-bottom: none;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        gap: 30px;
        height: 100%;
        padding: 0 2.5% 5% 2.5%;
        flex-direction: column-reverse;
    }
`

const Texts = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
    }

    & > span {
        border: 1px solid red;
        padding: 10px 15px;
        font-size: 16px;
        border-radius: 10px;
        font-family: 'Urbanist', sans-serif;
        background: #0188a330;
        border: 1px solid #0188a330;
        color: #0188a3;
        box-shadow: 0 0 50px rgba(1, 136, 163, 0.5);

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }

    & h1 {
        font-size: 46px;
        text-align: center;
        width: 70%;

        & b {
            color: transparent;
            font-weight: 500;
            background: linear-gradient(90deg, #00ffdd, #0188a3);
            -webkit-background-clip: text;
        }

        @media (max-width: 768px) {
            font-size: 28px;
            width: 100%;
            text-align: center;
        }
    }

    & p {
        text-align: center;
        width: 50%;
        opacity: 0.6;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`

const Carousel = styled.div`
    width: 95%;    
    height: 600px;
    position: relative;
    /* border-radius: 20px; */

    &::before {
        content: '';
        width: 5%;
        height: 10%;
        position: absolute;
        top: -2.5%;
        left: -1.25%;
        border: 1px solid #ffffff50;
        /* border-top-left-radius: 25px; */
        border-bottom: none;
        border-right: none;
    }
    &::after {
        content: '';
        width: 5%;
        height: 10%;
        position: absolute;
        bottom: -2.5%;
        left: -1.25%;
        border: 1px solid #ffffff50;
        border-top: none;
        /* border-bottom-left-radius: 25px; */
        border-right: none;
    }
    /* Canto superior direito */
    & .corner-top-right {
        content: '';
        width: 5%;
        height: 10%;
        position: absolute;
        top: -2.5%;
        right: -1.25%;
        border: 1px solid #ffffff50;
        border-bottom: none;
        border-left: none;
        /* border-top-right-radius: 25px; */
        pointer-events: none;
        z-index: 2;
    }
    /* Canto inferior direito */
    & .corner-bottom-right {
        content: '';
        width: 5%;
        height: 10%;
        position: absolute;
        bottom: -2.5%;
        right: -1.25%;
        border: 1px solid #ffffff50;
        border-top: none;
        border-left: none;
        /* border-bottom-right-radius: 25px; */
        pointer-events: none;
        z-index: 2;
    }

    & img {
        box-shadow: 0 0 20px rgba(1, 136, 163, 0.3);
        border: 1px solid #ffffff40;
        /* border-radius: 20px; */
        width: 100%;
        height: 100%;
        object-position: top;
        object-fit: cover;
    }
`

export default function Home() {
    return (
        <>
            <Container>
                <Content>
                    <Texts>
                        <span>Bem vindo ao meu portfólio_</span>
                        <h1>Você tem menos de <b>3 segundos</b> para se <b>impressionar</b>, então faça valer!</h1>
                        <Description 
                            descricao="Aqui você encontrará uma seleção dos meus projetos mais recentes, onde demonstro minhas habilidades e experiências em desenvolvimento web."
                            color="#fff"
                        />
                        <ButtonMessage />
                    </Texts>
                    <Banner>
                        <img src={bgHome} alt="" loading="lazy" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit'}} />
                        <span className="banner-fade-left" />
                        <span className="banner-fade-right" />
                    </Banner>
                    <Carousel>
                      <span className="corner-top-right" />
                      <span className="corner-bottom-right" />
                      <img src={BannerHome} alt="" />
                    </Carousel>
                </Content>
            </Container>
        </>
    )
}