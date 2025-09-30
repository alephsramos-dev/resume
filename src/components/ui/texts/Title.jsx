import React from "react";
import styled from "styled-components";

const Children = styled.h1`
    width: auto;
    font-size: ${({ fontSize }) => fontSize };
    font-family: ${({ theme }) => theme.fonts.urbanist};
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-weight: ${({ theme }) => theme.fontWeights.normal};

    @media (max-width: 768px) {
        font-size: 26px;
    }
`;

export default function Title({
    children,
    ...props
}){

    return (
        <>
            <Children className="title">{children}</Children>
        </>
    )
}