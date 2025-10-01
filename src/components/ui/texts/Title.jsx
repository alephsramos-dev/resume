import React from "react";
import styled from "styled-components";

const Children = styled.h1`
    width: auto;
    font-size: ${({ fontSize }) => fontSize };
    font-family: ${(props) => props.theme.fonts.urbanist};
    line-height: ${(props) => props.theme.lineHeights.heading};
    font-weight: ${(props) => props.theme.fontWeights.medium};

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