import styled, { css } from "styled-components";

export const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 1rem env(safe-area-inset-bottom, 0.5rem);
  background: rgba(42, 32, 20, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top: 1px solid rgba(235, 220, 195, 0.12);
`;

export const NavContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  position: relative;
`;

export const NavButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  min-width: 64px;
  min-height: 48px;
  border-radius: 2px;
  transition: opacity 0.2s ease, transform 0.18s ease;

  ${({ $active }) =>
    $active
      ? css`
          opacity: 1;
          transform: translateY(-2px);
        `
      : css`
          opacity: 0.45;
        `}

  &:active {
    transform: scale(0.93);
    opacity: 0.8;
  }
`;

export const NavIcon = styled.span`
  font-size: 1.25rem;
  line-height: 1;
  transition: filter 0.2s ease;

  ${({ $active }) =>
    $active &&
    css`
      filter: drop-shadow(0 0 6px rgba(217, 201, 173, 0.55));
    `}
`;

export const NavLabel = styled.span`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #d9c9ad;
`;

export const NavIndicator = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 33.333%;
  height: 1.5px;
  background: rgba(217, 201, 173, 0.7);
  border-radius: 1px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${({ $position }) => $position * 100}%);
`;