import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { rgba } from 'polished';
import ChatNowButton from '@/components/ui/Button/Chat';

import { IoStarSharp } from "react-icons/io5";

import assessment from '@/db/assessment.json';

import Title from "@/components/ui/texts/Title";
import Description from "@/components/ui/texts/Description";

import bgBlur from '@/assets/patterns/bg-option-2.png';

// ${(props) => props.theme.colors

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

const BG = styled.div`
    position: absolute;
    width: 100%;
    right: -20%;
    top: 0%;
    height: 100%;   
    z-index: 0;
    pointer-events: none;
    background-image: url(${bgBlur});
    scale: 1;
    rotate: 90deg;
    opacity: 0.6;   
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
        height: 100%;
        right: 0;
        top: -15%;
        rotate: 30deg;
        opacity: 1;
        transform: scale(2.4);
    }
`;

const Content = styled.section`
    width: 100%;
    padding: 5% 2.5% 2.5% 2.5%;
    max-width: 1420px;
    min-height: 100dvh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    border-bottom: none;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        gap: 20px;
        height: 100%;
        padding: 10% 5%;
        justify-content: flex-end;
        flex-direction: column;
    }
`;

const Assessment = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 14px;

    & .avatars {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;

        & .list {
            display: flex;
            flex-direction: row;
            position: relative;

            & .item {
                position: relative;

                & .info {
                    position: absolute;
                    width: max-content;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    gap: 0px;
                    top: -60px;
                    left: 50%;
                    transform: translate(-50%, 0) scale(.4);
                    transform-origin: center bottom;
                    padding: 6px 8px;
                    background: ${(props) => rgba(props.theme.colors.black[100], 0.4)};
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                    box-shadow: ${(props) => props.theme.border.bottom} ${(props) => rgba(props.theme.colors.white[100], 1)};
                    opacity: 0;
                    pointer-events: none;
                    transition: transform .38s cubic-bezier(.16,.84,.34,1), opacity .3s ease;
                    will-change: transform, opacity;

                    & span {
                        color: ${(props) => props.theme.colors.white[100]};
                        font-size: 14px;
                        font-weight: ${({ theme }) => theme.fontWeights.medium};
                        white-space: nowrap;
                    }

                    & p {
                        color: ${(props) => props.theme.colors.gray[100]};
                        font-size: 10px;
                        font-weight: ${({ theme }) => theme.fontWeights.medium};
                        white-space: nowrap;
                        width: auto;
                    }
                }

                
                &:nth-child(n + 2):nth-child(-n + 5){
                    margin-left: -20px;
                }

                & img {
                border-radius: 50%;
                position: relative;
                border: 2px solid ${(props) => props.theme.colors.white[100]};
                transition: all .2s ease-in-out;
                filter: grayscale(40%);

                    &:hover {
                        transform: translateY(-4px) rotate(-10deg);
                    }
                }

                &:hover > .info {
                    transform: translate(-50%, -4px) scale(1);
                    opacity: 1;
                }
            }
        }
    }

    .summary {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 2px;

        @media (max-width: 768px) {
            gap: 4px;
        }

        & > span {
            font-weight: ${({ theme }) => theme.fontWeights.light};
            font-size: 16px;
            color: ${(props) => props.theme.colors.gray[300]};

            & strong {
                font-weight: ${({ theme }) => theme.fontWeights.medium};
                color: ${(props) => props.theme.colors.white[100]};
            }

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }   

        & .rating {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            gap: 6px;

            & .stars {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;

                & li {
                    position: relative;
                    color: ${(props) => props.theme.colors.yellow['basic']};
                    font-size: 14px;

                    &:nth-child(n + 2):nth-child(-n + 5){
                        margin-left: -1px;
                    }
                }
            }

            & span {
                font-size: 12px;
                font-weight: 300;
                color: ${(props) => props.theme.colors.gray[100]};
                line-height: 0;

                @media (max-width: 768px) {
                    font-size: 14px;
                }
            }
        } 
    }
`

const Texts = styled.div`
    display: flex;
    width: 60%;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 22px;

    @media (max-width: 768px) {
        width: 100%;
    }

    & .titles {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 12px;

        & h1 {
            font-size: 48px;
            color: ${(props) => props.theme.colors.white[100]};

            @media (max-width: 768px) {
                font-size: 32px;
            }
        }

        & p {
            font-size: 18px;
            width: 80%;
            color: ${(props) => props.theme.colors.gray[300]};

            @media (max-width: 768px) {
                font-size: 16px;
                width: 100%;
            }
        }
    }
`

export default function Home({
    clientsSatisfied = 119,
    averageRating = "4.9"
}) {

    return (
        <>
            <Container>
                <BG></BG>
                <Content>
                    <Assessment>
                        <div className="avatars">
                            <ol className="list">
                                {assessment.map((item, i) => (
                                    <li key={i} className="item">
                                        <img src={item.image} alt={item.alt} width={50} height={50} />
                                        <div className="info">
                                            <span>{item.name}</span>
                                            <p>{item.role}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <aside className="summary">
                            <span><strong>{clientsSatisfied}</strong> clientes satisfeitos</span>
                            <div className="rating">
                                <ol className="stars">
                                    <li><IoStarSharp /></li>
                                    <li><IoStarSharp /></li>
                                    <li><IoStarSharp /></li>
                                    <li><IoStarSharp /></li>
                                    <li><IoStarSharp /></li>
                                </ol>
                                <span>{averageRating} Avaliação</span>
                            </div>
                        </aside>
                    </Assessment>
                    <Texts>
                        <aside className="titles">
                            <Title 
                                children="Desenvolvimento Web de alta performance"
                            />
                            <Description 
                                children="Desenvolvimento de sites com foco em três pilares: velocidade, segurança e resultados de negócio."
                            />
                        </aside>
                        <ChatNowButton />
                    </Texts>
                </Content>
            </Container>
        </>
    )
}