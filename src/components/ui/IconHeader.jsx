import React from "react";
import styled from "styled-components";

const Content = styled.button`
    width: auto;
    height: auto;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }) => color || "transparent"}10;
    border: 1px solid ${({ color }) => color || "transparent"}10;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(0.95);
        box-shadow: 0 0 20px ${({ color }) => color || "transparent"}50;
        border-color: transparent;
    }

    &:active {
        transform: scale(0.9);
        background-color: ${({ color }) => color || "transparent"}15;
        box-shadow: 0 0 20px ${({ color }) => color || "transparent"}50;
        border-color: transparent;
    }

    & svg {
        width: 25px;
        height: 25px;
        color: ${({ color }) => color || "#353535"};
    }
`

export default function IconHeader({
    icon: Icone,
    color,
    onClick,
    ...props
}) {
    return (
        <Content
            color={color}
            onClick={onClick}
            type="button"
            {...props}
        >
            {Icone && <Icone />}
        </Content>
    )
}

// Usos:

{/* 
    <IconHeader
    icon={FaInstagram}
    color="#5B51D8"
    onClick={() => window.open("https://www.instagram.com/alephsramos", "_blank")}
    />    
*/}

{/* 
    <IconHeader
    icon={FaWhatsapp}
    color="#25D366"
    onClick={() => window.open("https://wa.me/5524981411940", "_blank")}
    />    
*/}

{/* 
    <IconHeader
    icon={FaGithub}
    color="#8F9193"
    onClick={() => window.open("https://github.com/alephsramos-dev", "_blank")}
    /> 
*/}

{/* 
    <IconHeader
    icon={FaLinkedinIn}
    color="#0e76a8"
    onClick={() => window.open("https://www.linkedin.com/in/aleph-ramos", "_blank")}   
    />
*/}

{/* 
    <IconHeader
    icon={PiDotsSixVerticalBold}
    onClick={() => alert("Menu Clicked")}
    />    
*/}
