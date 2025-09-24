import Badge from "@/components/ui/Badge/Badge";
import Stack from "@/components/ui/Badge/Stack";
import Description from "@/components/ui/texts/Description";
import Title from "@/components/ui/texts/Title";
import React from "react";
import styled from "styled-components";

import StackData from "@/database/StackData.json";

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
    height: 100%;
    padding: 2.5% 2.5% 0 2.5%;
    max-width: 1420px; /* menor container geral */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 22px;
    position: relative;
    z-index: 1;

    @media (max-width: 768px){
        padding: 25% 5% 0% 5%;
    }
`;

const Texts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }

    & h1 {
        font-size: 148px;
        letter-spacing: -5px;
        font-weight: 600;
        line-height: 100%;
        font-family: 'Urbanist', sans-serif;

        @media (max-width: 768px){
            font-size: 82px;
        }
    }
`

// const List = styled.ul`
//     width: 100%;
//     display: flex;
//     align-items: flex-start;
//     justify-content: flex-start;
//     flex-wrap: wrap;
//     gap: 8px;
// `

export default function Header() {
    return (
        <>
            <Container>
                <Content>
                    <Texts>
                        <h1>Portfólio</h1>
                    </Texts>
                    {/* <List>
                        {StackData.map((stack, index) => (
                            <Stack 
                                key={index}
                                tecnologias={stack.tecnologias}
                                techName={stack.techName}
                                color={stack.color}
                            />
                        ))}
                    </List> */}
                </Content>
            </Container>
        </>
    )
}