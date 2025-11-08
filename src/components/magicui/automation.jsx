"use client";

import React, { forwardRef, useRef } from "react";
import styled from "styled-components";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

// Importando os ícones da pasta brands
import MetaIcon from "@/assets/brands/meta.svg?react";
import ChatGPTIcon from "@/assets/brands/chatgpt.svg?react";
import WhatsAppIcon from "@/assets/brands/whatsapp.svg?react";
import LinkedInIcon from "@/assets/brands/linkedin.svg?react";
import GmailIcon from "@/assets/brands/gmail.svg?react";
import ExcelIcon from "@/assets/brands/excel.svg?react";
import GoogleAdsIcon from "@/assets/brands/google-ads.svg?react";
import AlephIcon from "@/assets/brands/aleph.svg?react";

const StyledCircle = styled.div`
  z-index: 10;
  display: flex;
  width: 4rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  border: 1px solid;
  background-color: ${(props) => props.theme.colors.black[0]};
  padding: .85rem;
  box-shadow: 0 0 20px -12px rgba(0, 0, 0, 0.8);

  ${({ size }) => size === "16" && `
    width: 4rem;
    height: 4rem;
  `}

  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: auto;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  gap: 2.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Circle = forwardRef(({ size, children }, ref) => {
  return (
    <StyledCircle ref={ref} size={size}>
      {children}
    </StyledCircle>
  );
});

Circle.displayName = "Circle";

const Icons = {
  meta: () => <MetaIcon />,
  chatgpt: () => <ChatGPTIcon fill="#fff" />,
  whatsapp: () => <WhatsAppIcon fill="#fff" />,
  linkedin: () => <LinkedInIcon fill="#fff" />,
  gmail: () => <GmailIcon />,
  excel: () => <ExcelIcon />,
  googleAds: () => <GoogleAdsIcon />,
  aleph: () => <AlephIcon style={{ fill: '#fff', width: '100%', height: '100%' }} />
};


export function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  return (
    <Container ref={containerRef}>
      <InnerContainer>
        <Row>
          <Circle ref={div5Ref}>
            <Icons.excel />
          </Circle>
          <Circle ref={div1Ref}>
            <Icons.chatgpt />
          </Circle>
        </Row>
        <Row>
          <Circle ref={div2Ref}>
            <Icons.meta />
          </Circle>
          <Circle ref={div4Ref} size="26">
            <Icons.aleph />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.linkedin />
          </Circle>
        </Row>
        <Row>
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.gmail />
          </Circle>
        </Row>
      </InnerContainer>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-5}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={5}
        reverse
      />
    </Container>
  );
}