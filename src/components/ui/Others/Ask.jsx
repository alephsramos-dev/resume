import React from "react";
import styled from "styled-components";
import AskItem from "./AskItem";

const Content = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    & span {
        font-size: 16px;
        font-weight: 300;
        line-height: 1.2;
        color: #ffffff90;
    }
`

// Removido Texts; estrutura é controlada por AskItem

export default function Ask() {
    return (
        <>
            <Content>
                <AskItem
                    question="Qual as tecnologias utilizadas para criar os sites?"
                    answer="Foram utilizadas as tecnologias mais modernas do mercado, sendo ela o React, Javascript etc."
                    defaultOpen={false}
                />
            </Content>
        </>
    )
}