import React from "react";
import styled from "styled-components";

const Children = styled.p`
    font-family: ${({ theme }) => theme.fonts.urbanist};
    font-size: ${({ fontSize }) => fontSize || '18px'};
    width: auto;
    line-height: ${({ theme }) => theme.lineHeights.normal};
    font-weight: ${({ theme }) => theme.fontWeights.light};

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