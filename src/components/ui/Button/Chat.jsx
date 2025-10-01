import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';
import { rgba } from 'polished';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => rgba(props.theme.colors.gray[300], 0.4)};
  background-color: ${(props) => rgba(props.theme.colors.gray[200], 0.1)};
  backdrop-filter: blur(4px);
  border-radius: 999px;
  cursor: pointer;
  padding: 4px 14px 4px 4px;
  transition: all .2s ease-in-out;
  position: relative;
  overflow: hidden;

  & img, 
  & div h4, 
  & div span { 
    opacity: 0; 
    transform: translateY(6px); 
    transition: opacity .7s ease, transform .7s ease; 
    will-change: opacity, transform; 
  }
  &.animate img { 
    opacity: 1; 
    transform: translateY(0); 
    transition-delay: 0s; 
  }
  &.animate div h4 { 
    opacity: 1; 
    transform: translateY(0); 
    transition-delay: .12s; 
  }
  &.animate div span { 
    opacity: 1; 
    transform: translateY(0);
    transition-delay: .24s; 
  }

  &:hover {
    border: 1px solid ${(props) => rgba(props.theme.colors.gray[300], 0.6)};
    background-color: ${(props) => rgba(props.theme.colors.gray[200], 0.2)};
    backdrop-filter: blur(4px);
  }

  & img {
    width: 40px;
    padding: 7px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.gray[500]};
  }

  & div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    color: ${(props) => props.theme.colors.white[100]};
    gap: 4px!important;
    padding: 0 8px;

    & h4 { 
      font-size: 14px; 
      font-weight: 400; 
    }

    & > span { 
      display: flex; 
      align-items: center; 
      gap: 5px; 
      font-size: 12px; 
      font-weight: 400;
      white-space: nowrap; 
      color: ${(props) => rgba(props.theme.colors.gray[100], 1)};
      
      & svg { 
        width: 8px; 
        fill: ${(props) => props.theme.colors.green['basic']}; 
        animation: statusPulse 2.2s ease-in-out infinite; 
        will-change: transform, filter; 
      }
    }

  }

  @keyframes statusPulse { 
    0%, 100% { 
      transform: scale(1); 
      filter: drop-shadow(0 0 0 rgba(0,255,0,0.4)); 
      opacity: .60;
    } 50% { 
      transform: scale(1.1); 
      filter: drop-shadow(0 0 6px rgba(0,255,0,0.4));
      opacity: 1;
    }
  }

  @keyframes blink { 
    0%, 50% { 
      opacity: .75; 
    } 50.01%, 100% { 
      opacity: 0;
    } 
  }

  @media (prefers-reduced-motion: reduce) {
    & div span svg { animation: none; }
    & img, & div h4, & div span { opacity: 1 !important; transform: none !important; transition: none !important; }
  }
`;

export default function ChatNowButton({ logoSrc = '/icon-black-aleph-desenvolvedor-web.svg', buttonText = 'Converse comigo agora', statusText = 'Online agora', onClick }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const to = setTimeout(() => setAnimate(true), 250);
    return () => clearTimeout(to);
  }, []);

  return (
    <StyledButton className={animate ? 'animate' : ''} onClick={onClick}>
      <img src={logoSrc} alt="" loading="eager" decoding="async" />
      <div>
        <h4>{buttonText}</h4>
        <span><FaCircle /> {statusText}</span>
      </div>
    </StyledButton>
  );
}
