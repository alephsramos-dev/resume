import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import BgProject from "@/components/ui/Patterns/BgProject";

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
        opacity: 1;
        z-index: 1;

        @media (max-width: 768px){
            opacity: 1;
        }
    }
`

export default function All() {
    return (
        <>
            <Container>
                <Bg>
                    {/* <BgProject 
                        speed={0.6}
                        hueShift={330}
                        noiseIntensity={0.1}
                        scanlineIntensity={0.05}
                        scanlineDensity={3}
                        warpAmount={2}
                    /> */}
                </Bg>
                <Header /> 
                    <Portfolio />
            </Container>
        </>
    )
}