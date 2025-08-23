import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff70;
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  border-radius: 40px;
  cursor: pointer;
  padding: 4px 15px 4px 4px;
  transition: all .2s ease-in-out;
  position: relative;
  overflow: hidden;

  & img, & div h4, & div span { opacity: 0; transform: translateY(6px); transition: opacity .7s ease, transform .7s ease; will-change: opacity, transform; }
  &.animate img { opacity: 1; transform: translateY(0); transition-delay: 0s; }
  &.animate div h4 { opacity: 1; transform: translateY(0); transition-delay: .12s; }
  &.animate div span { opacity: 1; transform: translateY(0); transition-delay: .24s; }

  &:hover {
    transform: scale(0.98);
    border: 1px solid #ffffff60;
    background-color: #ffffff15;
    box-shadow: 0 0 30px rgba(255,255,255,0.1);
    backdrop-filter: blur(5px);
  }

  & img {
    width: 40px;
    padding: 7px;
    border-radius: 50%;
    background-color: #fff;
  }

  & div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    gap: 5px!important;
    padding: 0 10px;

    & h4 { font-size: 14px; font-weight: 400; font-family: 'Urbanist', sans-serif; }
    & span { display: flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 200; font-family: 'Urbanist', sans-serif; white-space: nowrap; }
    & span svg { width: 8px; fill: #00ff00; animation: statusPulse 1.8s ease-in-out infinite; will-change: transform, filter; }
  }

  @keyframes statusPulse { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(0,255,0,0.3)); opacity: .95; } 50% { transform: scale(1.1); filter: drop-shadow(0 0 6px rgba(0,255,0,0.5)); opacity: 1; } }
  @keyframes blink { 0%, 50% { opacity: .75; } 50.01%, 100% { opacity: 0; } }

  @media (prefers-reduced-motion: reduce) {
    & div span svg { animation: none; }
    & img, & div h4, & div span { opacity: 1 !important; transform: none !important; transition: none !important; }
  }
`;

export default function ChatNowButton({ imgSrc = '/icon-black-aleph-desenvolvedor-web.svg', title = 'Converse comigo agora', statusText = 'Online agora', onClick }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const to = setTimeout(() => setAnimate(true), 250);
    return () => clearTimeout(to);
  }, []);

  return (
    <StyledButton className={animate ? 'animate' : ''} onClick={onClick}>
      <img src={imgSrc} alt="" loading="eager" decoding="async" />
      <div>
        <h4>{title}</h4>
        <span><FaCircle /> {statusText}</span>
      </div>
    </StyledButton>
  );
}
