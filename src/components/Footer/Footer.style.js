import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.1); }
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #1e1710;
  padding: 4rem 1.25rem calc(5rem + env(safe-area-inset-bottom, 0px));
`;

export const FooterContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Divider = styled.div`
  width: 60px;
  height: 1px;
  background: rgba(217, 201, 173, 0.3);
  margin-bottom: 0.5rem;
`;

export const ThankYouText = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(0.9rem, 3vw, 1.05rem);
  font-style: italic;
  color: #b8a88a;
  text-align: center;
  line-height: 1.8;
  margin: 0;
  letter-spacing: 0.02em;
`;

export const HeartIcon = styled.div`
  font-size: 1rem;
  color: #c4956a;
  animation: ${pulse} 2.2s ease-in-out infinite;
`;

export const CoupleNames = styled.h3`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1.6rem, 5vw, 2.1rem);
  font-weight: 400;
  color: #f0e6d3;
  text-align: center;
  margin: 0;
  letter-spacing: 0.04em;
`;

export const Year = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #b8a88a;
  margin: 0;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 0.5rem;
`;

export const SocialLink = styled.a`
  font-size: 1.2rem;
  line-height: 1;
  opacity: 0.55;
  transition: opacity 0.2s ease, transform 0.2s ease;
  text-decoration: none;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
  }
`;

export const Copyright = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: rgba(185, 168, 138, 0.35);
  text-align: center;
  margin: 0.5rem 0 0;
`;