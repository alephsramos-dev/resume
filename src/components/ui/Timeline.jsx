import React from "react";
import styled from "styled-components";

// Styled primitives
const SContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    width: 70%;
    gap: 20px;
    position: relative;
    font-family: 'Urbanist', sans-serif;

    @media (max-width: 768px){
        width: 100%;
    }
`;

const SLine = styled.div`
    position: relative;
    left: 0;
    top: 0;
    height: ${props => props.$height || "120px"};
    width: 2px;
    background: #ffffff80;
`;

const SDot = styled.div`
    position: absolute;
    left: ${p => (p.$left !== undefined ? p.$left : '-50%')};
    transform: ${p => p.$transform || 'translateX(-50%)'};
    top: ${p => (p.$top !== undefined ? p.$top : '0')};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 3px solid #000;

    & svg {
        position: absolute;
        left: auto;
        font-size: 18px;
        color: #000;
        fill: #000;
        top: auto;
    }
`;

const SCard = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    & h4 {
        font-size: 18px;
        font-weight: 500;
        transition: transform .25s cubic-bezier(.4,.2,.2,1);
        letter-spacing: -0.25px;
        margin-top: 7.5px;
    }

    & p {
        font-size: 14px;
        font-weight: 300;
        color: #ffffff80;
        line-height: 1.45;
        transition: transform .25s cubic-bezier(.4,.2,.2,1);
    }

    & span {
        font-size: 10px;
        margin-top: 0px;
        opacity: 0.8;
        font-weight: 300;
        margin-bottom: 20px;
        border: 1px solid #ffffff50;
        padding: 5px 7.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        border-radius: 10px;
    }
`;

// Public components
export function TimelineContainer({ children, ...props }) {
    return <SContainer {...props}>{children}</SContainer>;
}

export function TimelineLine({ children, ...props }) {
    return <SLine {...props}>{children}</SLine>;
}

/**
 * TimelineDot
 * icon: React.ElementType | React.ReactElement
 */
export function TimelineDot({ icon, "aria-label": ariaLabel = "timeline dot", ...props }) {
    const renderIcon = () => {
        // Accept both a component type (e.g., HiOutlineChatAlt2) and an element (<HiOutlineChatAlt2 />)
        if (!icon) return null;
        // If it's already an element
        if (React.isValidElement(icon)) return icon;
        // If it's a component type
        if (typeof icon === "function") {
            const Icon = icon;
            return <Icon />;
        }
        return null;
    };

    return (
        <SDot role="img" aria-label={ariaLabel} {...props}>
            {renderIcon()}
        </SDot>
    );
}

export function TimelineCard({ title, description, tag, tagColor, children, ...props }) {
    return (
        <SCard {...props}>
            {title ? <h4>{title}</h4> : null}
            {description ? <p>{description}</p> : null}
            {children}
            {tag ? <span style={tagColor ? { color: tagColor, borderColor: tagColor, backgroundColor: tagColor ? `${tagColor}20` : undefined } : undefined}>{tag}</span> : null}
        </SCard>
    );
}

// Convenience component to render a single item row
export function TimelineItem({ icon, title, description, tag, tagColor, lineProps, dotProps, cardProps }) {
    return (
        <TimelineContainer>
            <TimelineLine {...lineProps}>
                <TimelineDot icon={icon} {...dotProps} />
            </TimelineLine>
            <TimelineCard title={title} description={description} tag={tag} tagColor={tagColor} {...cardProps} />
        </TimelineContainer>
    );
}

// List with a single continuous track line on the left
const SList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${p => (p.$gap != null ? `${p.$gap}px` : '24px')};
    width: 70%;

    @media (max-width: 768px){
        width: 100%;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${p => (p.$trackOffset != null ? `${p.$trackOffset}px` : '15px')};
        width: 2px;
        background: #ffffff80;
        z-index: 0;
    }
`;

const SRow = styled.div`
    position: relative;
    min-height: ${p => (p.$minHeight != null ? `${p.$minHeight}px` : 'auto')};
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

// Overlay para "cortar" a linha no último item
const SLineOverlay = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 75%;
    bottom: 0;
    background: transparent; /* cor de fundo do container */
    z-index: 1;
    pointer-events: none;
`;

const SLineTrack = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #fff;
    z-index: 0;
`;

const SContent = styled.div`
    margin-left: ${p => (p.$offset != null ? `${p.$offset}px` : '60px')};
    display: flex;
    flex-direction: column;
`;

export function TimelineList({ items = [], itemHeight = 'auto', trackOffset = 15, contentOffset = 15, itemGap = 14, getKey }) {
    const contentLeft = trackOffset + contentOffset;
    const numericMinHeight = typeof itemHeight === 'number' ? itemHeight : null;
    return (
        <SList $trackOffset={trackOffset} $gap={itemGap}>
            {items.map((it, idx) => {
                const isLast = idx === items.length - 1;
                return (
                    <SRow key={getKey ? getKey(it, idx) : idx} $minHeight={numericMinHeight} style={{ paddingLeft: trackOffset }}>
                        {/* Overlay para "cortar" a linha no último item */}
                        {isLast && (
                            <SLineOverlay style={{ left: trackOffset, width: 2, background: '#000' }} />
                        )}
                        <TimelineDot icon={it.icon} $left={`${trackOffset}px`} $top="0" />
                        <SContent $offset={contentLeft}>
                            <TimelineCard title={it.title} description={it.description} tag={it.tag} tagColor={it.tagColor} />
                        </SContent>
                    </SRow>
                );
            })}
        </SList>
    );
}
