import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const CoverContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100dvh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #c4b8a8;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${({ $bgImage }) => $bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(42, 32, 20, 0.35) 0%,
    rgba(42, 32, 20, 0.65) 100%
  );
  z-index: 1;
`;

export const Names = styled.h1`
  position: relative;
  z-index: 2;
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(2.8rem, 10vw, 5rem);
  font-weight: 400;
  color: #f0e6d3;
  text-align: center;
  margin: 0 0 0.5rem;
  letter-spacing: 0.04em;
  text-shadow: 0 2px 20px rgba(40, 25, 10, 0.4);
  animation: ${fadeIn} 0.9s ease-out both;
  animation-delay: 0.1s;
`;

export const DateText = styled.p`
  position: relative;
  z-index: 2;
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(0.8rem, 2.8vw, 1rem);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #d9c9ad;
  text-align: center;
  margin: 0;
  animation: ${fadeIn} 0.9s ease-out both;
  animation-delay: 0.3s;

  display: flex;
  align-items: center;
  gap: 0.85rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    max-width: 44px;
    height: 0.5px;
    background: rgba(217, 201, 173, 0.5);
  }
`;