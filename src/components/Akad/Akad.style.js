import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const AkadSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 1.25rem;
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
    160deg,
    rgba(50, 38, 25, 0.72) 0%,
    rgba(80, 62, 40, 0.65) 100%
  );
  z-index: 1;
`;

export const AkadContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  animation: ${fadeUp} 0.8s ease-out both;
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 0.25rem;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
`;

export const AkadTitle = styled.h2`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1.6rem, 5vw, 2.2rem);
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #f0e6d3;
  text-align: center;
  margin: 0;
  text-shadow: 0 2px 12px rgba(40, 25, 10, 0.5);

  &::after {
    content: "";
    display: block;
    width: 48px;
    height: 1px;
    background: rgba(217, 201, 173, 0.55);
    margin: 0.8rem auto 0;
  }
`;

export const AkadCard = styled.div`
  width: 100%;
  background: rgba(244, 237, 224, 0.1);
  border: 1px solid rgba(235, 220, 195, 0.25);
  border-radius: 4px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: clamp(1.5rem, 5vw, 2.25rem);
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

export const DateInfo = styled.div`
  text-align: center;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid rgba(235, 220, 195, 0.2);
`;

export const Day = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.8rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #d9c9ad;
  margin: 0 0 0.35rem;
`;

export const Date = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: 400;
  color: #f0e6d3;
  margin: 0;
  letter-spacing: 0.03em;
`;

export const TimeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TimeLabel = styled.span`
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b8a88a;
  font-family: "Cormorant Garamond", "Georgia", serif;
`;

export const Time = styled.span`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 1.05rem;
  color: #f0e6d3;
  letter-spacing: 0.04em;
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-top: 0.25rem;
`;

export const LocationLabel = styled.span`
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b8a88a;
  font-family: "Cormorant Garamond", "Georgia", serif;
`;

export const Location = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.98rem;
  color: #e8d5b0;
  line-height: 1.7;
  margin: 0;
`;

export const MapButton = styled.a`
  display: block;
  text-align: center;
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.82rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  color: #f0e6d3;
  border: 1px solid rgba(235, 220, 195, 0.45);
  border-radius: 2px;
  padding: 0.75rem 1.5rem;
  margin-top: 0.5rem;
  transition: background 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: rgba(235, 220, 195, 0.14);
    border-color: rgba(235, 220, 195, 0.8);
  }

  &:active {
    background: rgba(235, 220, 195, 0.22);
  }
`;