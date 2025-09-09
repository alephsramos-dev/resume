import Badge from "@/components/ui/Badge/Badge";
import Service from "@/components/ui/Card/Service";
import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import React from "react";
import { IoFolderOpenOutline } from "react-icons/io5";
import styled from "styled-components";

import DevService from '@/assets/services/desenvolvedor-web-service.svg';
import AutomationService from '@/assets/services/automation-service.svg';
import TrafficManagementService from '@/assets/services/traffic-management-service.svg';
import DesignService from '@/assets/services/design-service.svg';
import RedatorService from '@/assets/services/redator-service.svg';

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
                                titulo="Bem-vindo à melhor maneira de criar o melhor pro seu negócio."
                                color="#fff"
                            />
                        </div>
                        <div>
                            <Badge 
                                text="Services"
                                icon={<IoFolderOpenOutline />} 
                                bgColor="#ffffff2f" 
                                colorText="#ffffff" 
                            />
                        </div>
                    </Texts>
                    <Grid>
                        <Service 
                            width="calc(66.66% - 10px)"
                            imageSrc={DevService}
                            nameService="Desenvolvimento de Sites"
                            descriptionService="Mais do que um site, uma experiência digital exclusiva. Cada detalhe é planejado para refletir a excelência da sua marca."
                        />
                        <Service 
                            width="calc(33.33% - 10px)"
                            imageSrc={AutomationService}
                            nameService="Automação"
                            descriptionService="Automação de processos para aumentar a eficiência e reduzir erros."
                        />
                        <Service 
                            width="calc(33.33% - 10px)"
                            imageSrc={TrafficManagementService}
                            nameService="Gestão de Tráfego"
                            descriptionService="Gestão de campanhas publicitárias para maximizar resultados."
                        />
                        <Service 
                            width="calc(40% - 10px)"
                            imageSrc={DesignService}
                            nameService="Design Gráfico"
                            descriptionService="Criação de identidades visuais impactantes e materiais gráficos de alta qualidade."
                        />
                        <Service 
                            width="calc(26.66% - 10px)"
                            imageSrc={RedatorService}
                            nameService="Copywriting (Redator)"
                            descriptionService="Criação de textos persuasivos focados em conversão."
                        />
                    </Grid>
                </Content>
            </Container>
        </>
    )
}