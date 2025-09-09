import React from "react";
import styled from "styled-components";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 12px;
  border: none;
  border: 1px solid #ffffff20;
  border-bottom: none;
  background: transparent;
  color: #fff;
  cursor: pointer;
  text-align: left;

  & p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.2;
    margin: 0;

    @media (max-width: 768px){
        font-size: 16px;
    }
  }

  & span.icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ffffff50;
    padding: 8px;
    border-radius: 8px;
    transition: transform 220ms cubic-bezier(.2,.8,.2,1), opacity 200ms ease;
  }

  &:hover span.icon {
    transform: scale(1.03);
  }
`;

const Panel = styled.div`
  width: 100%;
  overflow: hidden;
  transition: grid-template-rows 260ms cubic-bezier(.2,.8,.2,1), opacity 220ms ease;
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
  opacity: ${({ $open }) => ($open ? 1 : 0.85)};
`;

const PanelInner = styled.div`
  min-height: 0; 
  padding: ${({ $open }) => ($open ? "12px 12px" : "0px")};
  border: 1px solid #ffffff20;
  border-bottom: none;
  position: relative;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: #01c3a9;
  }

  & span {
    display: block;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
    color: #ffffff90;

    @media (max-width: 768px){
        font-size: 14px;
    }
  }
`;

export default function AskItem({
  question,
  answer,
  defaultOpen = false,
  open: openProp,
  onToggle,
}) {
  const isControlled = openProp !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(Boolean(defaultOpen));
  const open = isControlled ? openProp : uncontrolledOpen;
  const buttonId = React.useId();
  const panelId = React.useId();

  const toggle = () => {
    const next = !open;
    onToggle?.(next);
    if (!isControlled) {
      setUncontrolledOpen(next);
    }
  };

  return (
    <Wrapper>
      <Header
        id={buttonId}
        aria-controls={panelId}
        aria-expanded={open}
        onClick={toggle}
      >
        <p>{question}</p>
        <span className="icon" aria-hidden>
          {open ? <HiOutlineMinus /> : <HiOutlinePlus />}
        </span>
      </Header>

      <Panel id={panelId} role="region" aria-labelledby={buttonId} $open={open}>
        <PanelInner $open={open}>
          {typeof answer === "string" ? <span>{answer}</span> : answer}
        </PanelInner>
      </Panel>
    </Wrapper>
  );
}
