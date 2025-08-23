import React from "react";
import styled from "styled-components";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between!important;
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ffffff20;
    gap: 10px;
    padding: 5px 0 5px 0;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        @media (max-width: 768px) {
            gap: 10px;
        }

        & img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
            border: 1px solid red;

            @media (max-width: 768px) {
                width: 50px;
                height: 50px;
            }       
        }

        & h4 {
            font-size: 16px;

            @media (max-width: 768px) {
                font-size: 14px;
            }
        }
    }

    & button {
        font-size: 30px;
        opacity: 0.5;
        cursor: pointer;
        color: #fff;

        @media (max-width: 768px) {
            font-size: 24px;
        }
    }
`;

const StackSpan = styled.span`
    background-color: ${({ $color }) => $color || '#000'}15;
    color: ${({ $color }) => $color || '#000'};
    border: 1px solid ${({ $color }) => $color || '#000'}10;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.2s;

    @media (max-width: 768px) {
        font-size: 12px;
        white-space: nowrap;
    }
`;

export default function RecentProjectCard({ project, stack, color, image, alt }) {
    return (
        <>
            <Content>
                <div>
                    <img src={image} alt={alt} loading="lazy"/>
                    <h4>{project}</h4>
                </div>
                <div>
                    <StackSpan $color={color}>{stack}</StackSpan>
                    <button>
                        <BsArrowUpRightCircle />
                    </button>
                </div>
            </Content>
        </>
    )
}