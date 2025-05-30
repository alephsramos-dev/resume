import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Content = styled.header` 
    border: 1px solid red;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 2.5%;
`;

export default function Header() {
    return (
        <>
            <Content>
                <Sidebar />
            </Content>
        </>
    )
}