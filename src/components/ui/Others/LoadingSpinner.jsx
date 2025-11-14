import styled, { keyframes } from 'styled-components';
import { useMemo } from 'react';
import logo from '@assets/brands/aleph.svg';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const fadeScale = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.95);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Spinner = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
    animation: ${fadeScale} 220ms ease forwards;
`;

const Logo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    object-fit: cover;
    user-select: none;
`;

const Halo = styled.span`
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    border: 1px solid transparent;
    border-top-color: ${(props) => props.$color};
    border-right-color: ${(props) => props.$color};
    opacity: 0.85;
    animation: ${spin} 1.15s linear infinite;
`;

export default function LoadingSpinner({ size = 36, color }) {
    const resolvedColor = useMemo(() => {
        if (color) {
            return color;
        }

        return '#34c759';
    }, [color]);

    return (
        <Wrapper role="status" aria-live="polite">
            <Spinner $size={size}>
                <Logo src={logo} alt="Aleph Ramos" draggable={false} />
                <Halo $color={resolvedColor} aria-hidden="true" />
            </Spinner>
        </Wrapper>
    );
}
