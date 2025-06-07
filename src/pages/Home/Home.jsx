import RecentProjectCard from "@/components/ui/cards/RecentProjectCard";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/Title";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: #000000;
    color: #fff;
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
    padding: 0% 2.5% 2.5% 2.5%;
    max-width: 1420px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    border: 1px solid #ffffff10;

    @media (max-width: 768px){
        gap: 30px;
        padding: 0 2.5% 5% 2.5%;
        flex-direction: column-reverse;
    }
`

const Texts = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
    }

    & h1 {
        font-size: 46px;

        @media (max-width: 768px) {
            font-size: 28px;
            text-align: center;
        }
    }

    & > main {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 20px;

        @media (max-width: 768px) {
            align-items: center;
        }

        & > div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;

            @media (max-width: 768px) {
                flex-direction: column;
                gap: 10px;
            }

            & h2 {
                font-size: 18px;
                font-weight: 400;
                font-family: 'Urbanist', sans-serif;

                @media (max-width: 768px) {
                    font-size: 14px;
                }   
            }

            & span {
                font-size: 14px;
                padding: 5px 10px;
                border-radius: 10px;
                background-color: #e3a30015;
                border: 2px solid #e3a30010;
                color: #e3a300;
                font-weight: 400;

                @media (max-width: 768px) {
                    border-radius: 7.5px;
                    border-width: 1px;
                }
            }
        }

        & > aside {
            width: 100%;
        }
    }
`

const Banner = styled.div`
    width: 50%;
    height: 100%;
    min-height: 100dvh;
    position: relative;
    background-color: #fff;
    border-radius: 0 0 50px 250px;

    @media (max-width: 768px) {
        height: 300px;
        width: 100%;
        min-height: auto;
        border-radius: 0 0 50px 50px;
    }
`

export default function Home() {
    return (
        <>
            <Container>
                <Background />
                <Content>
                    <Texts>
                        <Title 
                            titulo="Você tem menos de 3 segundos para causar uma boa impressão online"
                            color="#fff"
                        />
                        <main>
                            <div>
                                <h2>Projetos recentes</h2>
                                <span>Aleph Desenvolvedor Web</span>
                            </div>
                            <aside>
                                <RecentProjectCard 
                                    image="@/assets/banners-project/banner-fast.png"
                                    alt=""
                                    project="Nova Metálica"
                                    stack="React"
                                    color="#61dafb"
                                />
                                <RecentProjectCard 
                                    image="@/assets/banners-project/banner-fast.png"
                                    alt=""
                                    project="EuYagoLopes"
                                    stack="JavaScript"
                                    color="#f0db4f"
                                />
                                <RecentProjectCard 
                                    image="@/assets/banners-project/banner-fast.png"
                                    alt=""
                                    project="Kdea Construtora"
                                    stack="CSS3"
                                    color="#264de4"
                                />
                                <RecentProjectCard 
                                    image="@/assets/banners-project/banner-fast.png"
                                    alt=""
                                    project="Le Ange"
                                    stack="Styled Components"
                                    color="#db7093"
                                />
                            </aside>
                            
                        </main>
                    </Texts>
                    <Banner>
                        <img src="" alt="" loading="" />
                    </Banner>

                </Content>

            </Container>
        </>
    )
}