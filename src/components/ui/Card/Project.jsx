import React from "react";
import styled from "styled-components";
import { techIcons } from "@/db/TechIcons";
import { rgba } from "polished";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 14px 4px;
    cursor: pointer;

    & img {
        width: 100%;
        height: 300px;
        border-radius: 12px;   
        object-fit: cover;
        object-position: center;
        margin-bottom: 18px;

        @media (max-width: 768px){
            height: 250px;    
        }
    }

    & hr {
        width: 100%;
        border-color: ${(props) => rgba(props.theme.colors.gray[300], 0.2)};
        border-radius: 12px;
    }

    & div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${(props) => props.theme.colors.white[100]};

        @media (max-width: 768px){
            flex-wrap: wrap;
            gap: 14px;
        }

        & h4 {
            font-size: 24px;
            font-weight: ${(props) => props.theme.fontWeights.normal};

            @media (max-width: 768px){
                font-size: 20px;
                margin-top: 14px;
            }
        }

        & span {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 300;
            letter-spacing: 1px;
            color: ${(props) => props.theme.colors.gray[100]};

            @media (max-width: 768px) {
                width: 100%;
            }
        }

        & p {
            font-size: 12px;
            color: ${(props) => props.theme.colors.gray[100]};
            font-weight: 300;

            @media (max-width: 768px){
                margin-top: 10px;
            }
        }

        & ol {
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            height: auto;

            & li {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 25px;
                border-radius: 0;

                & img {
                    width: 24px!important;
                    padding: 2px;
                    height: 24px!important;
                    border-radius: 0;
                }

            }
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: 260px;        
    }
`;

export default function ProjectCard({
    image,
    title,
    date,
    onClick,
    tecnologias = []
}) {

    return (
        <>
            <Content
                onClick={onClick}
            >
                <ImageWrapper
                >
                    <img src={image} alt={title} loading="lazy" title={title} />
                </ImageWrapper>
                <div>
                    <h4>{title}</h4>
                    <p>{date}</p>
                </div>
                <hr />
                <div>
                    <span>Tecnologias Usadas</span>
                    <ol>
                        {tecnologias.map((tec, idx) => (
                            <li key={tec + idx} style={{display: 'inline-block'}}>
                                {techIcons[tec.toLowerCase()] || tec}
                            </li>
                        ))}
                    </ol>
                </div>
            </Content>
        </>
    )
}