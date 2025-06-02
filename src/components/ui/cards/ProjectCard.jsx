import React, { useState } from "react";
import styled from "styled-components";
import { techIcons } from "@/Data/techIcons";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0px;
    width: auto;
    height: auto;
    padding: 10px 5px;

    & img {
        width: 100%;
        height: 350px;
        border-radius: 10px;   
        object-fit: cover;
        object-position: center;
        margin-bottom: 25px;
    }

    & hr {
        width: 100%;
        border-color: #353535;
        border-radius: 10px;
    }

    & div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        padding: 0px 0;

        & h4 {
            font-size: 22px;
            font-weight: 500;
            margin: 0;
        }

        & span {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2px;
            color: #ffffff70;

            @media (max-width: 768px) {
                letter-spacing: 1px;
            }
        }

        & p {
            font-size: 12px;
            font-weight: 300;
        }

        & ol {
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            height: auto;

            & li {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 25px;

                & img {
                    width: 25px!important;
                    height: 25px!important;
                }

            }
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SaberMaisButton = styled.button`
    position: absolute;
    pointer-events: none;
    opacity: ${props => (props.visible ? 1 : 0)};
    left: ${props => props.x}px;
    top: ${props => props.y}px;
    transform: translate(-50%, -50%);
    background: #1d1d1d70;
    backdrop-filter: blur(5px);
    cursor: pointer;
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
    color: #fff;
    border: none;
    border-radius: 5px;
    white-space: nowrap;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: 400;
    transition: opacity 0.2s;
    z-index: 2;
`;

export default function ProjectCard({
    image,
    alt, 
    nome,
    data,
    tecnologias = [] // array de strings, ex: ['react', 'javascript', 'html']
}) {
    const [hover, setHover] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 300, y: 175 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <>
            <Content>
                <ImageWrapper
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    onMouseMove={handleMouseMove}
                >
                    <img src={image} alt={alt} loading="lazy" />
                    <SaberMaisButton
                        visible={hover}
                        x={mousePos.x}
                        y={mousePos.y}
                    >
                        Saber mais
                    </SaberMaisButton>
                </ImageWrapper>
                <div>
                    <h4>{nome}</h4>
                    <p>{data}</p>
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