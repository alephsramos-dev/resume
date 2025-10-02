import Badge from "@/components/ui/Badge/Badge";
import BeneficioCard from "@/components/ui/Card/Benefits";
import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import React from "react";
import { TbMichelinStar } from "react-icons/tb";
import styled from "styled-components";

import benefits from "@/db/benefits.js";
import { rgba } from "polished";
import { Clover } from "@phosphor-icons/react/dist/ssr";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.black[0]};
    color: ${(props) => props.theme.colors.white[100]};
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
    justify-content: center;
    flex-direction: column;
    gap: 42px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        padding: 5%;
    }
`;

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

    & .title {
        width: 60%;

        @media (max-width: 768px){
            width: 100%;
        }

        & h1 {
            font-size: 32px;
            color: ${(props) => props.theme.colors.white[100]};
            font-weight: ${(props) => props.theme.fontWeights.normal};
            line-height: ${(props) => props.theme.lineHeights.heading};
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
        }
    }
`

const BeneficiosContent = styled.div`
    width: 100%;
`;

const CardsGrid = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
    border-right: 1px solid ${(props) => rgba(props.theme.colors.gray[100], 0.2)}; 

    @media (min-width: 1101px) {
        & > *:nth-child(n+5) {
            border-top: 1px solid ${(props) => rgba(props.theme.colors.gray[100], 0.2)};
        }
    }
   
    @media (max-width: 640px) {
        & > * {
            border-top: 1px solid ${(props) => rgba(props.theme.colors.gray[100], 0.2)}; 
            border-bottom: 1px solid ${(props) => rgba(props.theme.colors.gray[100], 0.2)}; 
        }

        & > *:first-child { 
            border-top: none; 
        }

        & > *:last-child { 
            border-bottom: none; 
        }
    }

       @media (max-width: 768px) {
           & > *:nth-child(n+5) {
               display: none;
           }
       }
`;


export default function Benefits() {
    return (
        <Container>
            <Content>
                <Texts>
                    <div className="title">
                        <Badge
                            children="Beneficios"
                            icon={<Clover weight="thin" />}
                            colorText="rgb(0, 136, 255)"
                            bgColor="rgba(92, 184, 255, 0.1)"
                        />
                        <Title
                            children="Conheça os beneficios que você terá trabalhando comigo"
                        />
                    </div>
                    <div className="description">
                        <Description
                            children="Resultados reais através de arquitetura sólida, foco em conversão e otimização contínua."
                        />
                    </div>
                </Texts>
                <BeneficiosContent>
                    <CardsGrid>
                        {benefits.map((i) => (
                            <BeneficioCard
                                key={i.title}
                                icon={i.icon}
                                title={i.title}
                                description={i.description}
                            />
                        ))}
                    </CardsGrid>
                </BeneficiosContent>
            </Content>
        </Container>
    );
}