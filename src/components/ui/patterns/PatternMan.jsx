import React from "react";
import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
`

const Content = styled.div`
  /* Basic dimensions and centering */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: -5;

  /* Dark mode colors and gradient */
  background: #000; /* Fallback for browsers that don't support gradients */
  background: linear-gradient(
    135deg,
    #000000 25%,
    #0a0a0a 25%,
    #0a0a0a 50%,
    #000000 50%,
    #000000 75%,
    #0a0a0a 75%,
    #0a0a0a
  );
  background-size: 40px 40px;

  /* Animation */
  animation: ${move} 4s linear infinite;
`

export default function PatternMan() {
    return (
        <>
            <Content></Content>
        </>
    )

}