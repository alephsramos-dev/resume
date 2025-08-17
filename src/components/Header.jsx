import React, { useState, useEffect, useRef } from "react";
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
    right: 1.5%;
    top: 20px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;

    @media (max-width: 768px) {
        width: 90%;
        right: 5%;
        top: 20px;
        /* Keep header content aligned to the right on mobile to prevent jumping */
        justify-content: flex-end;
        & > nav { margin-left: auto; }
    }

    & nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: auto;
        background-color: #1d1d1b95;
        backdrop-filter: blur(2px);     
        border-radius: 15px;
        padding: 5px 10px;
        transition: padding .35s ease, border-radius .35s ease, background-color .35s ease, box-shadow .35s ease;

        @media (max-width: 768px) {
            border-radius: 10px;
            width: auto;
        }

        & > button {
            padding: 10px;
            margin-right: 100px;
            cursor: pointer;
            transition: margin-right .35s ease .5s, transform .35s ease;

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
            max-width: 520px;
            transition: max-width .4s ease .5s, margin .4s ease .5s;
        }

        & ol li {
            display: flex;
            transition: transform .25s ease, opacity .25s ease;
            will-change: transform, opacity;
        }
    }

    /* Collapsed (on scroll) */
    & nav[data-collapsed="true"] {
        padding: 4px 4px;
        border-radius: 12px;
    }

    /* Only hide overflow on expand animation */
    & nav[data-animating="expand"] ol {
        overflow: hidden;
    }

    & nav[data-collapsed="true"] > button {
        margin-right: 0;
    }

    & nav[data-collapsed="true"] ol {
        max-width: 0px;
        margin: 0;
    }

    /* Stagger out: each item collapses sequentially */
    & nav[data-collapsed="true"] ol li { opacity: 0; transform: translateY(-6px) scale(.9); }
    & nav[data-collapsed="true"] ol li:nth-child(1) { transition-delay: 0ms; }
    & nav[data-collapsed="true"] ol li:nth-child(2) { transition-delay: 120ms; }
    & nav[data-collapsed="true"] ol li:nth-child(3) { transition-delay: 240ms; }
    & nav[data-collapsed="true"] ol li:nth-child(4) { transition-delay: 360ms; }
    & nav[data-collapsed="true"] ol li:nth-child(5) { transition-delay: 480ms; }
    & nav[data-collapsed="true"] ol li:nth-child(6) { transition-delay: 600ms; }

    /* Expanded (at top): stagger in (reverse delay for a smoother cascade) */
    & nav[data-collapsed="false"] ol li { opacity: 1; transform: translateY(0) scale(1); }
    & nav[data-collapsed="false"] ol li:nth-child(1) { transition-delay: 300ms; }
    & nav[data-collapsed="false"] ol li:nth-child(2) { transition-delay: 240ms; }
    & nav[data-collapsed="false"] ol li:nth-child(3) { transition-delay: 180ms; }
    & nav[data-collapsed="false"] ol li:nth-child(4) { transition-delay: 120ms; }
    & nav[data-collapsed="false"] ol li:nth-child(5) { transition-delay: 60ms; }
    & nav[data-collapsed="false"] ol li:nth-child(6) { transition-delay: 0ms; }

    @media (prefers-reduced-motion: reduce) {
        & nav, & nav > button, & nav ol, & nav ol li { transition: none !important; }
    }
`;

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const inactivityTimerRef = useRef(null);
    const sidebarOpenRef = useRef(false);
    // Add missing animation state/refs for expand animation flag
    const [animatingExpand, setAnimatingExpand] = useState(false);
    const expandTimerRef = useRef(null);
    const prevCollapsedRef = useRef(false);

    // keep ref in sync
    useEffect(() => { sidebarOpenRef.current = sidebarOpen; }, [sidebarOpen]);

    // Toggle animating flag when transitioning from collapsed -> expanded
    useEffect(() => {
        const wasCollapsed = prevCollapsedRef.current;
        if (wasCollapsed && !collapsed) {
            setAnimatingExpand(true);
            if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
            // Duration should cover stagger + width transitions
            expandTimerRef.current = setTimeout(() => setAnimatingExpand(false), 900);
        }
        prevCollapsedRef.current = collapsed;
        return () => {
            if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
        };
    }, [collapsed]);

    useEffect(() => {
        const onScroll = () => {
            const shouldCollapse = window.scrollY > 10;
            if (shouldCollapse && sidebarOpenRef.current) {
                // close sidebar with its fade-out animation
                setSidebarOpen(false);
            }
            setCollapsed(prev => (prev !== shouldCollapse ? shouldCollapse : prev));
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Reexpand after 3s without scroll only (active only when collapsed)
    useEffect(() => {
        if (!collapsed) {
            if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
            return;
        }
        const resetInactivityTimer = () => {
            if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
            inactivityTimerRef.current = setTimeout(() => setCollapsed(false), 3000);
        };
        const handleScroll = () => resetInactivityTimer();
        window.addEventListener('scroll', handleScroll, { passive: true });
        resetInactivityTimer();
        return () => {
            if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [collapsed]);

    const handleLogoClick = () => {
        if (collapsed) {
            setCollapsed(false);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Content>
                <nav data-collapsed={collapsed} data-animating={animatingExpand ? 'expand' : undefined}>
                    <button onClick={handleLogoClick} aria-label={collapsed ? 'Expandir navegação' : 'Voltar ao topo'}>
                        <img src="/icon-aleph-desenvolvedor-web.png" alt="logo do aleph desenvolvedor web" title="Aleph Desenvolvedor Web" loading="eager" />
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