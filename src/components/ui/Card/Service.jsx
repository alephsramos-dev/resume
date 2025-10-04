import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import styled from "styled-components";
import Title from "../texts/Title";
import Description from "../texts/Description";
import { rgba } from "polished";

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    width: ${({ width }) => width || '100%'};
    height: 400px;
    overflow: hidden;
    position: relative;
    border-radius: 24px;
    border: 1px solid ${(props) => rgba(props.theme.colors.gray[100], 0.2)};
    margin: 4px;
    transition: all 0.3s ease;

    &:hover {
        border-color: ${({$colorBorder}) => $colorBorder || 'transparent'};
    }

    @media (max-width: 768px){
        width: 100%;
        height: 400px;
        margin: 4px 0;
    }

    &::before {
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        background: ${(props) => rgba(props.theme.colors.black[500], 0.1)};
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 1;
        transition: all 0.3s ease-in-out;
    }

    &:hover::before {
        opacity: 1;
    }
    
`

const ImageBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: ${(props) => props.theme.colors.black[0]};

    @media (max-width: 768px){
        height: 100%;
    }

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        background: linear-gradient(0deg, #000000 20%, transparent);

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
    gap: 18px;
    width: 100%;
    height: auto;
    padding: 22px;

    & h1 {
        font-size: 26px;
        font-weight: 400;
        line-height: 1.0;
        color: ${(props) => props.theme.colors.white[300]};
    }

    & p {
        font-size: 16px;
        width: 70%;
        line-height: 1.2;
        font-weight: 300;
        transition: all 0.3s ease-in-out;
        color: ${(props) => props.theme.colors.gray[100]};

        @media (max-width: 768px){
            width: 100%;
        }
    }

    & button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        color: ${(props) => props.theme.colors.white[100]};
        transition: all 0.3s ease-in-out;
        border: 1px solid ${(props) => props.theme.colors.gray[100]};
        padding: 6px 6px 6px 16px;
        font-size: 16px;
        border-radius: 48px;
        background: transparent;
        cursor: pointer;
        position: relative;
        z-index: 1;
        overflow: hidden;

        & svg {
            font-size: 18px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: ${(props) => props.theme.colors.white[300]};
            color: ${(props) => props.theme.colors.black[300]};
            transition: all 0.3s ease-in-out;
            transition-delay: 100ms;
            padding: 4px;
        }

        @media (max-width: 768px){
            opacity: 1;
            transform: translateY(0);
            margin-top: 10px;
        }

        &::before{
            content: '';
            position: absolute;
            width: 0%;
            height: 92%;
            background: ${(props) => props.theme.colors.white[100]};
            top: 4%;
            left: 1%;
            z-index: -2;
            border-radius: 48px;
            transition: all 0.3s ease-in-out;
        }

        &:hover {
            color: ${(props) => props.theme.colors.black[300]};
        }

        &:hover svg {
            background-color: ${(props) => props.theme.colors.black[100]};
            color: ${(props) => props.theme.colors.white[100]};
        }
        
        &:hover::before{
            width: 98%;
        }
    }
`

export default function ServiceCard({
    image,
    name,
    description,
    width,
    colorBorder
}) {
    return (
        <>
            <Container width={width} $colorBorder={colorBorder}> 
                <ImageBg>
                    <img src={image} alt={name} loading="lazy" />
                </ImageBg>
                <Texts>
                    <Title 
                        children={name}
                    />
                    <Description 
                        children={description}
                    />
                    <button>
                        <span>Explorar {name.toLowerCase()}</span>
                        <GoArrowUpRight />
                    </button>
                </Texts>
            </Container>
        </>
    )
}