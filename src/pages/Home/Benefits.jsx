import Badge from "@/components/ui/Badge/Badge";
import BeneficioCard from "@/components/ui/Card/Benefits";
import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import {
    GaugeIcon,
    SketchLogoIcon,
    UserFocusIcon,
    ShieldStarIcon,
    TrendUpIcon,
    BrowsersIcon,
    GitMergeIcon,
    HeadsetIcon,
    SealCheckIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useSupabaseData } from "@/contexts/SupabaseDataContext";

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

            @media (max-width: 768px){
                font-size: 26px;
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
const ICON_MAP = {
    GaugeIcon,
    SketchLogoIcon,
    UserFocusIcon,
    ShieldStarIcon,
    TrendUpIcon,
    BrowsersIcon,
    GitMergeIcon,
    HeadsetIcon,
};

export default function Benefits() {
    const { benefits: benefitsData = [], loading } = useSupabaseData();
    const isLoading = loading?.benefits;
    const resolvedBenefits = (benefitsData ?? []).map((item) => ({
        ...item,
        Icon: ICON_MAP[item.iconName] ?? GaugeIcon,
    }));

    return (
        <Container>
            <Content>
                <Texts data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
                    <div className="title">
                        <Badge
                            children="Beneficios"
                            icon={<SealCheckIcon weight="fill" />}
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
                <BeneficiosContent data-aos="fade-up" data-aos-duration="800" data-aos-offset="0" data-aos-delay="100">
                    <CardsGrid>
                        {!isLoading && resolvedBenefits.map((benefit) => (
                            <BeneficioCard
                                key={benefit.id ?? benefit.title}
                                icon={benefit.Icon}
                                title={benefit.title}
                                description={benefit.description}
                            />
                        ))}
                    </CardsGrid>
                </BeneficiosContent>
            </Content>
        </Container>
    );
}