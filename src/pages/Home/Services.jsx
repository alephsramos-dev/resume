import Badge from "@/components/ui/Badge/Badge";
import ServiceCard from "@/components/ui/Card/Service";
import Title from "@/components/ui/texts/Title";
import React from "react";
import styled from "styled-components";
import { MegaphoneIcon } from "@phosphor-icons/react/dist/ssr";

import services from '@/database/services';

const Container = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: #000;
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
    padding: 3.5% 2.5% 5% 2.5%;
    max-width: 1420px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

    @media (max-width: 768px){
        gap: 30px;
        padding: 10% 5%;
    }
`

const Texts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    flex-direction: row;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        align-items: center;
    }

    & > div {
        width: 50%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        height: 100%;

        @media (max-width: 768px){
            width: 100%!important;
            align-items: flex-start!important;
            text-align: left;
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

        &:nth-child(1){
            width: 60%;
        }

        &:nth-child(2){
            width: 40%;
            align-items: flex-end;
        }
    }
`

const Grid = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
`

export default function Services () {
    return (
        <>
            <Container>
                <Background></Background>
                <Content>
                     <Texts>
                        <div>
                            <Title
                                children="Bem-vindo à melhor maneira de criar o melhor pro seu negócio."
                            />
                        </div>
                        <div>
                            <Badge 
                                children="Serviços"
                                icon={<MegaphoneIcon weight="fill" />} 
                                bgColor="rgba(203, 48, 224, 0.1)" 
                                colorText="rgb(203, 48, 224)" 
                            />
                        </div>
                    </Texts>
                    <Grid>
                        {services.map((service, i) => (
                            <ServiceCard
                                key={i}
                                width={service.width}
                                image={service.image}
                                name={service.name}
                                description={service.description}
                                colorBorder={service.colorBorder}
                                onClick={() => {
                                    const page = service.slug;
                                    window.location.href = `/servicos/${page}`;
                                }}
                            />
                        ))}
                    </Grid>
                </Content>
            </Container>
        </>
    )
}