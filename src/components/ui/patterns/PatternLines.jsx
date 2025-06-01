import React from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -5;

  background: #000000;
  --gap: 3em;
  --line: 1px;
  --color: rgba(239, 239, 239, 0.15);

  background-image: linear-gradient(
      -90deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    ),
    linear-gradient(
      0deg,
      transparent calc(var(--gap) - var(--line)),
      var(--color) calc(var(--gap) - var(--line) + 1px),
      var(--color) var(--gap)
    );
  background-size: var(--gap) var(--gap);
`

export default function PatternLines() {
    return (
        <>
            <Content></Content>
        </>
    )

}