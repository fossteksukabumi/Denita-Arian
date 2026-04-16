import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.04);
  }
`;

const shimmer = keyframes`
  0%   { opacity: 0.55; }
  50%  { opacity: 1; }
  100% { opacity: 0.55; }
`;

export const OpeningContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: clamp(3rem, 10vh, 6rem);
  overflow: hidden;
  background-color: #c4b8a8;

  /* Background image */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${({ $bgImage }) => $bgImage});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    z-index: 0;
  }

  /* Warm gradient overlay — bottom to top, heavier at bottom */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(60, 45, 30, 0.82) 0%,
      rgba(60, 45, 30, 0.45) 40%,
      rgba(60, 45, 30, 0.08) 75%,
      transparent 100%
    );
    z-index: 1;
  }

  ${({ $isClosing }) =>
    $isClosing &&
    css`
      animation: ${fadeOut} 0.75s ease-in forwards;
    `}
`;

const ornamentLine = css`
  content: "";
  display: block;
  width: 36px;
  height: 1px;
  background: rgba(235, 220, 195, 0.6);
  margin: 0 auto;
`;

export const Title = styled.h1`
  position: relative;
  z-index: 2;
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(2.6rem, 9vw, 4.8rem);
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #f0e6d3;
  text-align: center;
  margin: 0 0 0.5rem;
  line-height: 1.15;
  text-shadow: 0 2px 18px rgba(40, 25, 10, 0.45);

  animation: ${fadeIn} 0.9s ease-out both;
  animation-delay: 0.15s;

  /* Decorative ampersand style via font */
  em {
    font-style: italic;
    color: #e8d5b0;
  }
`;

export const DateText = styled.p`
  position: relative;
  z-index: 2;
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(0.85rem, 3vw, 1.1rem);
  font-weight: 400;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #d9c9ad;
  text-align: center;
  margin: 0 0 2.2rem;

  animation: ${fadeIn} 0.9s ease-out both;
  animation-delay: 0.35s;

  /* Ornament lines flanking the date */
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    max-width: 48px;
    height: 0.5px;
    background: rgba(217, 201, 173, 0.55);
  }
`;

export const OpenButton = styled.button`
  position: relative;
  z-index: 2;

  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(0.9rem, 2.8vw, 1.05rem);
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f0e6d3;

  background: transparent;
  border: 1px solid rgba(235, 220, 195, 0.55);
  border-radius: 2px;
  padding: clamp(0.75rem, 2.5vw, 0.9rem) clamp(2rem, 7vw, 3.2rem);
  cursor: pointer;

  transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease,
    transform 0.18s ease;

  animation: ${fadeIn} 0.9s ease-out both;
  animation-delay: 0.55s;

  /* Mobile tap target */
  min-height: 48px;
  min-width: 160px;

  &:hover {
    background: rgba(235, 220, 195, 0.14);
    border-color: rgba(235, 220, 195, 0.85);
    color: #fff8ee;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0) scale(0.97);
    background: rgba(235, 220, 195, 0.22);
  }

  &:focus-visible {
    outline: 2px solid rgba(235, 220, 195, 0.7);
    outline-offset: 4px;
  }
`;

/* Optional: decorative monogram/ornament container */
export const Ornament = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.2rem;
  animation: ${fadeIn} 0.9s ease-out both;
  animation-delay: 0s;

  span {
    display: block;
    width: 40px;
    height: 0.5px;
    background: rgba(217, 201, 173, 0.45);
  }

  svg,
  img {
    width: 22px;
    height: 22px;
    opacity: 0.65;
  }
`;