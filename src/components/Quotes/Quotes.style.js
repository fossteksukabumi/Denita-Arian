import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const QuotesSection = styled.section`
  width: 100%;
  padding: 5rem 1.25rem;
  background: #1e1710;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const QuotesContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: ${fadeUp} 0.8s ease-out both;
`;

export const QuoteIcon = styled.span`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 5rem;
  line-height: 0.6;
  color: rgba(196, 149, 106, 0.35);
  user-select: none;
  align-self: flex-start;
`;

export const QuoteText = styled.blockquote`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1rem, 3.2vw, 1.15rem);
  font-style: italic;
  color: #d9c9ad;
  text-align: center;
  line-height: 1.9;
  margin: 0;
  letter-spacing: 0.02em;
`;

export const QuoteSource = styled.cite`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #c4956a;
  font-style: normal;
  margin-top: 0.25rem;
`;

export const Divider = styled.div`
  width: 48px;
  height: 1px;
  background: rgba(196, 149, 106, 0.3);
  margin-top: 0.5rem;
`;