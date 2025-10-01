import React from "react";
import styled from "styled-components";

const Children = styled.p`
    width: auto;
    font-size: ${({ fontSize }) => fontSize };
    font-family: ${(props) => props.theme.fonts.urbanist};
    line-height: ${(props) => props.theme.lineHeights.normal};
    font-weight: ${(props) => props.theme.fontWeights.light};

    @media (max-width: 768px) {
        font-size: 16px;
        width: 100%;
    }
`;

export default function Description({
    children
}){
    return (
        <>
            <Children>{children}</Children>
        </>
    )
}