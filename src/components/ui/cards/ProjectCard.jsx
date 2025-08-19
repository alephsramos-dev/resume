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
    padding: 15px 5px;
    font-family: 'Urbanist', sans-serif;    

    & img {
        width: 100%;
        height: 300px;
        border-radius: 15px;   
        object-fit: cover;
        object-position: center;
        margin-bottom: 35px;

        @media (max-width: 768px){
            height: 250px;    
        }
    }

    & hr {
        width: 100%;
        border-color: #35353570;
        border-radius: 10px;
    }

    & div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        padding: 0px 0;

        @media (max-width: 768px){
            flex-wrap: wrap;
            gap: 15px;
        }

        & h4 {
            font-size: 22px;
            font-weight: 400;
            margin: 0;

            @media (max-width: 768px){
                font-size: 20px;
                margin-top: 15px;
            }
        }

        & span {
            font-size: 12px;
            text-transform: uppercase;
            font-weight: 400;
            letter-spacing: 1px;
            color: #ffffff60;

            @media (max-width: 768px) {
                letter-spacing: 1px;
                width: 100%;
                font-size: 12px;
            }
        }

        & p {
            font-size: 14px;
            opacity: 0.7;
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
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        height: 250px;        
    }
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