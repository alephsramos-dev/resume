import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: max-content;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 1px 8px;
    box-shadow: inset 0 0 0 1px #f1f1f120;
    border-radius: 10px;
    transition: all .2s ease-in-out;
    cursor: default;

    &:hover {
        box-shadow: inset 0 0 0 1px #f1f1f140;
    }

    & div {
        width: 14px;
    }

    & span {
        font-size: 12px;
        font-weight: 600;
        line-height: 1.2;
    }
`

export default function Technology ({
    nameTech,
    techSrc
}) {
    return (
        <>
            <Container>
                <div>{techSrc}</div>
                <span>{nameTech}</span>
            </Container>
        </>
    )
}