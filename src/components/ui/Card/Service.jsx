import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: ${({ width }) => width || '100%'};
    height: 400px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 0 1px #f1f1f120;
    border-radius: 10px;
    margin: 5px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px){
        width: 100%;
        height: 400px;
        margin: 5px 0;
    }

    &::before {
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        background: rgba(0, 0, 0, 0.2);
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    &:hover {
        box-shadow: 0 0 0 1px #f1f1f150;
    }

    &:hover button {
        transform: scale(1) translateY(0);
        opacity: 1;
        margin-top: 10px;
    }

    &:hover::before {
        opacity: 1;
    }
    
`

const ImageBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #000;

    @media (max-width: 768px){
        height: 100%;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 65%;
        left: 0;
        bottom: 0;
        background: linear-gradient(0deg, #000, transparent);

        @media (max-width: 768px){
            height: 100%;
        }
    }

     &::after {
        content: '';
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        background: linear-gradient(0deg, #000, transparent);

        @media (max-width: 768px){
            display: block;
        }
    }

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

const Texts = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: auto;
    padding: 10px 25px 25px 25px;

    & h2 {
        font-size: 22px;
        font-weight: 400;
        line-height: 1.0;
    }

    & p {
        font-size: 16px;
        width: 70%;
        opacity: 0.6;
        line-height: 1.2;
        font-weight: 300;
        transition: all 0.3s ease-in-out;

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #f1f1f1;
        border-radius: 4px;
        margin-top: -25px;
        transition: all 0.3s ease-in-out;
        opacity: 0;
        border: 1px solid #f1f1f130;
        padding: 6px 10px;
        font-size: 16px;
        transform: translateY(100px);
        background: transparent;
        cursor: pointer;
        position: relative;
        z-index: 1;

        @media (max-width: 768px){
            opacity: 1;
            transform: translateY(0);
            margin-top: 10px;
        }

        &::before{
            content: '';
            position: absolute;
            width: 0%;
            height: 100%;
            background: #f1f1f1;
            top: 0;
            z-index: -2;
            border-radius: 4px;
            left: 0;
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            color: #000;
        }
        
        &:hover::before{
            width: 100%;
        }
    }
`

export default function Service ({
    imageSrc,
    nameService,
    descriptionService,
    width
}) {
    return (
        <>
            <Container width={width}>
                <ImageBg>
                    <img src={imageSrc} alt={nameService} loading="lazy" />
                </ImageBg>
                <Texts>
                    <h2>{nameService}</h2>
                    <p>{descriptionService}</p>
                    <button>
                        <span>Explorar a fundo</span>
                        <GoArrowUpRight />
                    </button>
                </Texts>
            </Container>
        </>
    )
}