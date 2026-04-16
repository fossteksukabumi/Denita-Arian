import styled, { keyframes } from "styled-components";

const fadeLeft = keyframes`
  from { opacity: 0; transform: translateX(-18px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export const JourneySection = styled.section`
  width: 100%;
  padding: 5rem 1.25rem;
  background: #2a2014;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JourneyContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const JourneyTitle = styled.h2`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1.6rem, 5vw, 2.2rem);
  font-weight: 400;
  color: #f0e6d3;
  text-align: center;
  margin: 0;
  letter-spacing: 0.05em;
`;

export const JourneySubtitle = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b8a88a;
  text-align: center;
  margin: 0 0 1.5rem;

  &::after {
    content: "";
    display: block;
    width: 36px;
    height: 1px;
    background: rgba(217, 201, 173, 0.35);
    margin: 0.65rem auto 0;
  }
`;

export const Timeline = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;

  /* Vertical line */
  &::before {
    content: "";
    position: absolute;
    left: 18px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(217, 201, 173, 0.18);
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 0 0 2rem;
  animation: ${fadeLeft} 0.6s ease-out both;
  animation-delay: ${({ $delay }) => $delay || "0s"};
`;

export const TimelineDot = styled.div`
  flex-shrink: 0;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #c4956a;
  border: 2px solid rgba(196, 149, 106, 0.35);
  margin-top: 1.1rem;
  margin-left: 14px;
  box-shadow: 0 0 0 3px rgba(196, 149, 106, 0.1);
`;

export const TimelineContent = styled.div`
  flex: 1;
  background: rgba(244, 237, 224, 0.05);
  border: 1px solid rgba(235, 220, 195, 0.12);
  border-radius: 4px;
  padding: 1rem 1.1rem;
`;

export const TimelineIcon = styled.div`
  font-size: 1.3rem;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

export const TimelineDate = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #c4956a;
  margin: 0 0 0.25rem;
`;

export const TimelineTitle = styled.h3`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #f0e6d3;
  margin: 0 0 0.5rem;
  letter-spacing: 0.04em;
`;

export const TimelineDescription = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.9rem;
  color: #b8a88a;
  line-height: 1.75;
  margin: 0;
`;