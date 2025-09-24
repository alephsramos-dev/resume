import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import DarkVeil from "../../components/ui/Patterns/DarkVeil";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
`

const Bg = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;

    &::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #000000;
        opacity: 0.5;
        z-index: 1;

        @media (max-width: 768px){
            opacity: 0.6;
        }
    }
`

export default function All() {
    return (
        <>
            <Container>
                <Bg>
                    <DarkVeil
                        speed={0.6}
                        hueShift={330}
                        noiseIntensity={0.1}
                        warpAmount={2}
                    />
                </Bg>
                <Header /> 
                    <Portfolio />
            </Container>
        </>
    )
}