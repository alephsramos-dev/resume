import React from "react";
import styled from "styled-components";
import Background from '@assets/patterns/bg.jpg';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: relative;
    z-index: 2;
    overflow: hidden;
    height: 30vh;
    background: #000;
    position: relative;

    &::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(${Background});
        background-size: cover;
        background-position: center;    
        background-repeat: no-repeat;
        opacity: 0.6;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
`;

const Content = styled.section`
    width: 100%;
    height: 100%;
    max-width: 1420px; /* menor container geral */
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    gap: 22px;
    position: relative;
    z-index: 1;
    padding: 2.5% 0;

    @media (max-width: 768px){
        align-items: flex-end;
        justify-content: flex-end;
        padding: 7.5% 5%;
    }
`;

const Texts = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
    }

    & h1 {
        font-size: 62px;
        font-weight: 600;
        line-height: 100%;

        @media (max-width: 768px){
            font-size: 48px;
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
                    <Texts data-aos="fade-up" data-aos-duration="800" data-aos-offset="0">
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