import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import styled from "styled-components";

import logoAleph from "/icon-black-aleph-desenvolvedor-web.svg";

import projects from "@/database/ProjectData";
import Stack from "@/components/ui/Badge/Stack";
import { useMemo, useState, useEffect } from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { AiOutlineExpand } from "react-icons/ai";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    position: relative;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 8px;
    }
`

const Fixed = styled.div`
    width: 100%;
    max-width: 1440px;
    font-size: 20px;
    font-weight: 600;
    position: sticky;
    left: 5%;
    top: 5%;
    z-index: 10;
    opacity: ${props => props.visible ? 1 : 0};
    transform: translateY(${props => props.visible ? '0' : '-16px'});
    transition: opacity 220ms ease, transform 220ms ease;
    pointer-events: ${props => props.visible ? 'auto' : 'none'};
`

const Main = styled.main`
    width: 100%;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 768px){
        min-height: auto; 
        padding: 25% 0% 10% 0;
        gap: 18px;
    }

`

const Texts = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;

    @media (max-width: 768px){
        align-items: flex-start;
        width: 100%;
    }

    & span {
        font-size: 14px;
        color: #ffffff60;
        font-weight: 300;
        text-align: center;
        width: 100%;

        @media (max-width: 768px){
            text-align: left;
        }

        & strong {
            font-weight: 400;
            color: #ffffff;
        }
    }

    & h1 {
        font-weight: 500;
        font-size: 54px;
        text-align: center;

        @media (max-width: 768px){
            font-size: 38px;
            text-align: left;
        }
    }

    @media (max-width: 768px){
        width: 100%;
    }
`

const Company = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    @media (max-width: 768px){
        width: 100%;
        justify-content: flex-start;    
        gap: 8px;
    }

    & img {
        width: 28px;
        height: 28px;
        border-radius: 10px;
        object-fit: contain;
        padding: 6px;
        object-position: center;
        background-color: #fff;

        @media (max-width: 768px){
            width: 26px;
            height: 26px;
            border-radius: 10px;
            padding: 4px;
        }
    }

    & span {
        font-size: 18px;
        font-weight: 400;
        color: #fff;

        @media (max-width: 768px){
            font-size: 16px;
        }
    }
`

const Image = styled.div`
    width: 100%;
    height: auto;
    position: relative;

    & img {
        width: 100%;
        height: 700px;
        object-fit: cover;
        object-position: center;
        border-radius: 0 0 16px 16px;
        border: 1px solid #ffffff60;
        border-top: none;

        @media (max-width: 768px){
            height: 400px;
            border-radius: 0 0 12px 12px;  
        }
    }
`

const Infos = styled.div`
    border: 1px solid #ffffff60;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 18px;
    border-radius: 16px 16px 0 0;

    @media (max-width: 768px){
        padding: 10px 12px;
        border-radius: 12px 12px 0 0;
    }

    & div {
        border: 1px solid #ffffff30;
        width: auto;
        display: flex;
        align-items: center;
        gap: 38px;
        padding: 8px 12px;
        border-radius: 8px;
        background-color: #ffffff15;

        @media (max-width: 768px){
            gap: 16px;
            padding: 6px 10px;
            border-radius: 6px;
        }

        & span {
            font-size: 16px;
            color: #ffffff;

            & strong {
                color: #ffffff60;
            }

            @media (max-width: 768px){
                font-size: 10px;
            }
        }

        & > button {
            font-size: 18px;
            color: #fff;

            @media (max-width: 768px){
                font-size: 12px;    
            }
        }
    }

    & button {
        font-size: 18px;
        color: #fff;
        cursor: pointer;

        @media (max-width: 768px){
            font-size: 14px;        
        }
    }
`

export default function ProjectDetailsHero({
    slug,
}) {

    const currentProject = useMemo(() => {
        return projects.find(project => project.slug === slug);
    }, [slug]);

    return (
        <>
            <Container>
                {/* <Fixed visible={fixedVisible}>
                    {currentProject.title}
                </Fixed> */}
                <Main>
                    <Company>
                        <img src={logoAleph} alt="logo-aleph-desenvolvedor-web" />
                        <span>by Aleph</span>
                    </Company>
                    <Texts>
                        <Title
                            titulo={currentProject.title}
                            color="#fff"
                        />
                        <span>{currentProject.data} / © Todos os direitos reservados / <strong>{currentProject.companyName}</strong></span>
                    </Texts>
                </Main>
                <Image>
                    <Infos>
                        <div>
                            <span><strong>/</strong> {currentProject.urlPage || "URL é privada"}</span>
                            <button onClick={() => window.open(currentProject.urlPage, '_blank', 'noopener,noreferrer')}>
                                <LuSquareArrowOutUpRight />
                            </button>
                        </div>
                        <button onClick={() => window.open(currentProject.image, '_blank', 'noopener,noreferrer')}>
                            <AiOutlineExpand />
                        </button>
                    </Infos>
                    <img src={currentProject.image} alt={currentProject.title} />
                </Image>
            </Container>
        </>
    )
}