import React from "react";
import styled, { keyframes, css } from "styled-components";
import SidebarLinks from "@/components/ui/Badge/SidebarLinks";
import { AsteriskIcon, BoundingBoxIcon, BrowsersIcon, DevicesIcon, DevToLogoIcon, GitMergeIcon, MegaphoneIcon, MetaLogoIcon, TextAaIcon, TextboxIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";
import { rgba } from "polished";


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
  background: ${(props) => rgba(props.theme.colors.black[0], 0.4)};
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
    background-color: ${(props) => rgba(props.theme.colors.black[100], 0.5)};
    backdrop-filter: blur(8px); 
    border-radius: 16px;
    padding: 8px 12px;
    color: ${(props) => props.theme.colors.white[100]};
    z-index: 1000;
    animation: ${({ open }) => open
      ? css`${fadeIn} 0.4s cubic-bezier(.68,-0.55,.27,1.55) forwards`
      : css`${fadeOut} 0.3s ease forwards`};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};

    @media (max-width: 768px) {
        right: 5%;
    }

    & > span {
        padding: 4px 12px;
        color: ${(props) => props.theme.colors.gray[300]};
        width: 100%;
        text-align: center;
        font-size: 10px;
        font-weight: 400;
    }
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${(props) => rgba(props.theme.colors.gray[100], 0.1)};
    margin: 8px 0;
`;

const Links = styled.nav`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;

    & h4 {
        font-size: 12px;
        font-weight: 400;
        color: ${(props) => props.theme.colors.gray[100]};
        padding: 4px;
    }
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
            <Links onClickCapture={handleOptionClick}>
                <h4>Conheça</h4>
                <SidebarLinks 
                    icon={MegaphoneIcon}
                    textButton="Serviços"
                    colorText="rgb(203, 48, 224)"
                    bgColor="rgb(203, 48, 224, .1)"
                    onClick={() => window.location.href = '/services'}
                />
                <SidebarLinks 
                    icon={AsteriskIcon}
                    textButton="Projetos"
                    colorText="rgb(52, 199, 89)"
                    bgColor="rgb(52, 199, 89, .1)"
                    onClick={() => window.location.href = '/projetos'}
                />
                <Line />
                <h4>Serviços</h4>
                <SidebarLinks 
                    icon={DevicesIcon}
                    textButton="Criar um site"
                    colorText="rgb(0, 200, 179)"
                    bgColor="rgb(0, 200, 179, .1)"
                    onClick={() => window.location.href = '/servicos/criacao-de-sites'}
                />
                <SidebarLinks 
                    icon={GitMergeIcon}
                    textButton="Automação"
                    colorText="rgb(203, 48, 224)"
                    bgColor="rgb(203, 48, 224, .1)"
                    onClick={() => window.location.href = '/servicos/automacao'}
                />
                <SidebarLinks 
                    icon={BoundingBoxIcon}
                    textButton="Design"
                    colorText="rgb(0, 136, 255)"
                    bgColor="rgb(0, 136, 255, .1)"
                    onClick={() => window.location.href = '/servicos/design'}
                />
                <SidebarLinks 
                    icon={MetaLogoIcon}
                    textButton="Tráfego pago"
                    colorText="rgb(255, 141, 40)"
                    bgColor="rgb(255, 141, 40, .1)"
                    onClick={() => window.location.href = '/servicos/trafego-pago'}
                />
                <SidebarLinks 
                    icon={TextAaIcon}
                    textButton="Copywriter"
                    colorText="rgb(97, 85, 245)"
                    bgColor="rgb(97, 85, 245, .1)"
                    onClick={() => window.location.href = '/servicos/copywriter'}
                />
                <Line />
                <h4>Fale comigo</h4>
                <SidebarLinks 
                    icon={UserIcon}
                    textButton="Contato"
                    colorText="rgb(255, 204, 0)"
                    bgColor="rgb(255, 204, 0, .1)"
                />
            </Links>
            <Line />
            <span>Desenvolvido por Aleph</span>
        </Content>
      </>
    );
}