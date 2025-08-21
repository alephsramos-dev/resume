import Badge from "@/components/ui/Badge";
import BeneficioCard from "@/components/ui/cards/BeneficioCard";
import Description from "@/components/ui/Description";
import Title from "@/components/ui/Title";
import React from "react";
import { MdStarPurple500 } from "react-icons/md";
import { TbMichelinStar } from "react-icons/tb";
import { FiZap } from "react-icons/fi";
import styled from "styled-components";

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
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        padding: 5% 2.5%;
    }
`;

const Texts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    flex-direction: row;

    @media (max-width: 768px){
        flex-direction: column;
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

const BeneficiosContent = styled.div`
    width: 100%;
`;

const CardsGrid = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: flex-start;
       border-right: 1px solid #ffffff20; /* borda lateral direita */
       /* A partir do 5º card (segunda linha em desktop 4-col) adiciona linha superior */
       @media (min-width: 1101px) {
           & > *:nth-child(n+5) {
               border-top: 1px solid #ffffff20;
           }
       }
    /* Mobile: controlar linhas apenas entre os cards (primeiro sem top, ultimo sem bottom) */
    @media (max-width: 640px) {
        & > * {
            border-top: 1px solid #ffffff20; /* linha separadora */
            border-bottom: 1px solid #ffffff20; /* cria continuidade vertical */
        }
        & > *:first-child { border-top: none; }
        & > *:last-child { border-bottom: none; }
    }

       @media (max-width: 768px) {
           & > *:nth-child(n+5) {
               display: none;
           }
       }
`;

// Lista de benefícios (exemplo). Você pode mover isto para um arquivo de dados.
const beneficiosData = [
    {
        icon: FiZap,
        title: 'Velocidade Extrema',
        description: 'Sites que carregam em milissegundos para reter visitantes e impulsionar SEO.'
    },
    {
        icon: TbMichelinStar,
        title: 'Qualidade Premium',
        description: 'Código limpo, escalável e revisado com foco em longevidade e manutenção.'
    },
    {
        icon: MdStarPurple500,
        title: 'Conversão Otimizada',
        description: 'Arquitetura pensada para transformar tráfego em leads e vendas.'
    },
    {
        icon: FiZap,
        title: 'Segurança e Estabilidade',
        description: 'Boas práticas, monitoramento e proteção contra falhas comuns.'
    },
    {
        icon: TbMichelinStar,
        title: 'Escalabilidade',
        description: 'Estrutura pronta para crescer sem reescrever tudo do zero.'
    },
    {
        icon: MdStarPurple500,
        title: 'SEO Técnico',
        description: 'Estratégias e implementação para melhor indexação e ranking.'
    },
    {
        icon: FiZap,
        title: 'Automação & Performance',
        description: 'Pipelines, otimização de bundling, imagens e cache inteligente.'
    },
    {
        icon: TbMichelinStar,
        title: 'Suporte Pró ativo',
        description: 'Acompanhamento contínuo e melhorias iterativas pós-entrega.'
    },
];

export default function Beneficios() {
    return (
        <Container>
            <Content>
                <Texts>
                    <div>
                        <Badge
                            texto="Beneficios"
                            icon={<TbMichelinStar />}
                            txtcolor="#0066a0"
                            color="#0066a030"
                        />
                        <Title
                            titulo={<>Conheça os beneficios que você terá trabalhando comigo.</>}
                            color="#fff"
                        />
                    </div>
                    <div>
                        <Description
                            descricao="Resultados reais através de arquitetura sólida, foco em conversão e otimização contínua."
                            color="#dadada"
                        />
                    </div>
                </Texts>
                <BeneficiosContent>
                    <CardsGrid>
                        {beneficiosData.map((b) => (
                            <BeneficioCard
                                key={b.title}
                                icon={b.icon}
                                title={b.title}
                                description={b.description}
                            />
                        ))}
                    </CardsGrid>
                </BeneficiosContent>
            </Content>
        </Container>
    );
}