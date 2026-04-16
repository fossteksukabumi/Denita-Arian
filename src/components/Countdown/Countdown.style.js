import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.12); }
`;

export const CountdownSection = styled.section`
  width: 100%;
  padding: 5rem 1.25rem;
  background: #2a2014;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CountdownContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: ${fadeUp} 0.8s ease-out both;
`;

export const CountdownTitle = styled.h2`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1.6rem, 5vw, 2.2rem);
  font-weight: 400;
  color: #f0e6d3;
  text-align: center;
  margin: 0;
  letter-spacing: 0.04em;
`;

export const CountdownSubtitle = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #b8a88a;
  text-align: center;
  margin: 0 0 1.25rem;

  &::before {
    content: "";
    display: block;
    width: 36px;
    height: 1px;
    background: rgba(217, 201, 173, 0.35);
    margin: 0 auto 0.75rem;
  }
`;

export const TimerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  width: 100%;
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  background: rgba(244, 237, 224, 0.06);
  border: 1px solid rgba(235, 220, 195, 0.15);
  border-radius: 4px;
  padding: clamp(0.85rem, 3vw, 1.25rem) 0.5rem;
`;

export const TimeValue = styled.span`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1.8rem, 6vw, 2.8rem);
  font-weight: 400;
  color: #f0e6d3;
  line-height: 1;
  letter-spacing: 0.04em;
  text-shadow: 0 0 18px rgba(217, 201, 173, 0.2);
`;

export const TimeLabel = styled.span`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b8a88a;
`;

export const HeartIcon = styled.div`
  font-size: 1.1rem;
  color: #c4956a;
  margin-top: 0.5rem;
  animation: ${pulse} 2.2s ease-in-out infinite;
`;