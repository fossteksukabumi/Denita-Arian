import styled, { keyframes, css } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const GiftSection = styled.section`
  width: 100%;
  padding: 5rem 1.25rem;
  background: #241b11;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GiftContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const GiftIcon = styled.div`
  font-size: 2rem;
  line-height: 1;
  margin-bottom: 0.25rem;
`;

export const GiftTitle = styled.h2`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1.6rem, 5vw, 2.2rem);
  font-weight: 400;
  color: #f0e6d3;
  text-align: center;
  margin: 0;
  letter-spacing: 0.05em;
`;

export const GiftSubtitle = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.95rem;
  font-style: italic;
  color: #b8a88a;
  text-align: center;
  line-height: 1.75;
  margin: 0 0 1rem;
`;

export const AccountsGrid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AccountCard = styled.div`
  width: 100%;
  background: rgba(244, 237, 224, 0.06);
  border: 1px solid rgba(235, 220, 195, 0.18);
  border-radius: 4px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${fadeUp} 0.7s ease-out both;
  animation-delay: ${({ $delay }) => $delay || "0s"};
`;

export const BankLogo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(235, 220, 195, 0.15);
`;

export const BankName = styled.span`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: #f0e6d3;
  text-transform: uppercase;
`;

export const AccountInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
`;

export const AccountLabel = styled.span`
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b8a88a;
  font-family: "Cormorant Garamond", "Georgia", serif;
  align-self: end;
`;

export const AccountNumber = styled.span`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 1.1rem;
  color: #f0e6d3;
  letter-spacing: 0.08em;
`;

export const AccountName = styled.span`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 1rem;
  color: #e8d5b0;
  letter-spacing: 0.04em;
`;

export const CopyButton = styled.button`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f0e6d3;
  background: transparent;
  border: 1px solid rgba(235, 220, 195, 0.35);
  border-radius: 2px;
  padding: 0.7rem 1rem;
  cursor: pointer;
  min-height: 44px;
  transition: background 0.3s ease, border-color 0.3s ease, color 0.2s ease;

  &:hover {
    background: rgba(235, 220, 195, 0.1);
    border-color: rgba(235, 220, 195, 0.7);
  }

  &.copied {
    color: #c4956a;
    border-color: rgba(196, 149, 106, 0.5);
    background: rgba(196, 149, 106, 0.08);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const Divider = styled.div`
  width: 48px;
  height: 1px;
  background: rgba(217, 201, 173, 0.25);
  margin: 0.5rem 0;
`;

export const NoteText = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.92rem;
  font-style: italic;
  color: #b8a88a;
  text-align: center;
  line-height: 1.75;
  margin: 0;
`;