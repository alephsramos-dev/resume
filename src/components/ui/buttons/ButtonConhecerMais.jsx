import styled, { keyframes, css } from 'styled-components';

const shine = keyframes`
  0% { background-position: 100%; }
  100% { background-position: -100%; }
`;

const StyledShinyText = styled.div`
  color: #b5b5b5a4; /* base color when gradient isn't visible (fallback) */
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 60%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  font-size: 18px;
  font-weight: 500;
  font-family: "Urbanist", sans-serif;
  background-clip: text;
  color: #ffffff50; /* ensures gradient shows */
  display: inline-block;
  cursor: pointer;
  ${({ disabled, speed }) => !disabled && css`
    animation: ${shine} ${speed || 5}s linear infinite;
  `}
`;

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  return (
    <StyledShinyText disabled={disabled} speed={speed} className={className}>
      {text}
    </StyledShinyText>
  );
};

export default ShinyText;
