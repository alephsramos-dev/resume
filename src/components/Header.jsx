import React, { useState } from "react";
import styled from "styled-components";
import IconHeader from "./ui/IconHeader";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import Sidebar from "./Sidebar";

const Content = styled.header` 
    width: auto;
    position: fixed;
    right: 5%;
    top: 20px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: auto;
        background-color: #1D1D1D;
        border-radius: 15px;
        padding: 5px 10px;

        & > button {
            padding: 10px;
            margin-right: 100px;
            cursor: pointer;

            & img {
            width: 25px;
            height: 25px;
            border-radius: 10px;
        }}

        & ol {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
    }
`;

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            <Content>
                <nav>
                    <button onClick={() => window.href("#")}>
                        <img src="public/icon-aleph-desenvolvedor-web.png" alt="logo do aleph desenvolvedor web" title="Aleph Desenvolvedor Web" loading="eager" />
                    </button>
                    <ol>
                        <li>
                            <IconHeader
                            icon={FaInstagram}
                            color="#5B51D8"
                            onClick={() => window.open("https://www.instagram.com/alephsramos", "_blank")}
                            />   
                        </li>
                        <li>
                             <IconHeader
                            icon={FaWhatsapp}
                            color="#25D366"
                            onClick={() => window.open("https://wa.me/5524981411940", "_blank")}
                            />  
                        </li>
                        <li>
                            <IconHeader
                            icon={FaGithub}
                            color="#8F9193"
                            onClick={() => window.open("https://github.com/alephsramos-dev", "_blank")}
                            /> 
                        </li>
                        <li>
                            <IconHeader
                            icon={FaLinkedinIn}
                            color="#0e76a8"
                            onClick={() => window.open("https://www.linkedin.com/in/aleph-ramos", "_blank")}   
                            />
                        </li>
                        <li>
                            <IconHeader
                                icon={sidebarOpen ? IoMdClose : TbGridDots}
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            />  
                        </li>
                    </ol>
                </nav>
            </Content>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    )
}