import React from "react";
import styled, { keyframes, css } from "styled-components";
import SidebarLinks from "@/components/ui/SidebarLinks";
import { BiNetworkChart } from "react-icons/bi";
import { SiOpenproject } from "react-icons/si";
import { RiStackLine } from "react-icons/ri";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
`;
const fadeOut = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(40px); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 950;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  transition: opacity .25s ease;
`;

const Content = styled.div`
    width: auto;
    height: auto;
    position: fixed;
    top: 80px;
    right: 1.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #1d1d1b95;
    backdrop-filter: blur(4px); 
    border-radius: 10px;
    padding: 10px 10px;
    color: #ffffff;
    z-index: 1000;
    animation: ${({ open }) => open
      ? css`${fadeIn} 0.4s cubic-bezier(.68,-0.55,.27,1.55) forwards`
      : css`${fadeOut} 0.3s ease forwards`};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};

    @media (max-width: 768px) {
        right: 5%;
    }

    & > span {
        padding: 5px 10px;
        width: 100%;
        text-align: center;
        font-size: 10px;
        opacity: 0.7;
        font-weight: 200;
    }
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ffffff40;
    margin: 10px 0;
`;

const Links = styled.nav`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;

    & h4 {
        font-size: 12px;
        font-weight: 200;
        opacity: 0.8;
        font-family: 'Urbanist', sans-serif;
        padding: 5px;
    }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1100;
  transition: transform 0.2s;
  &:hover { transform: scale(1.2) rotate(10deg); }
`;

export default function Sidebar({ open, onClose }) {
    React.useEffect(() => {
      if (!open) return;
      const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }, [open, onClose]);

    const handleOptionClick = React.useCallback(() => {
      onClose();
    }, [onClose]);

    return (
      <>
        <Backdrop open={open} onClick={onClose} />
        <Content open={open}>
            {/* Optional close button if desired */}
            {/* <CloseButton onClick={onClose}><IoMdClose /></CloseButton> */}
            <Links onClickCapture={handleOptionClick}>
                <h4>Nos conheça</h4>
                <SidebarLinks 
                    icon={BiNetworkChart}
                    nomeDoLink="Serviços"
                    color="#00bcd4"
                    colorBg="#006c7a"
                />
                <SidebarLinks 
                    icon={SiOpenproject}
                    nomeDoLink="Projetos"
                    color="#13ba00"
                    colorBg="#0c7400"
                />
                <SidebarLinks 
                    icon={RiStackLine}
                    nomeDoLink="Stacks"
                    color="#d102e4"
                    colorBg="#5a0084"
                />
                <Line />
                <h4>Para você</h4>
                <SidebarLinks 
                    icon={IoPhonePortraitOutline}
                    nomeDoLink="Criar um site"
                    color="#d90000"
                    colorBg="#790404"
                />
                <Line />
                <h4>Fale conosco</h4>
                <SidebarLinks 
                    icon={IoIosContact}
                    nomeDoLink="Contato"
                    color="#e08300"
                    colorBg="#8b5202"
                />
            </Links>
            <Line />
            <span>Desenvolvido por Aleph</span>
        </Content>
      </>
    );
}