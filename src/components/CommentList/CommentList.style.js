import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1rem 0;

  > p {
    font-family: "Cormorant Garamond", "Georgia", serif;
    font-size: 0.95rem;
    color: rgba(217, 201, 173, 0.55);
    text-align: center;
    letter-spacing: 0.06em;
    margin: 1.5rem 0;
  }
`;

export const CommentCard = styled.div`
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  background: rgba(244, 237, 224, 0.07);
  border: 1px solid rgba(235, 220, 195, 0.15);
  border-radius: 4px;
  padding: 1rem 1.1rem;
  animation: ${fadeUp} 0.5s ease-out both;
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(217, 201, 173, 0.15);
  border: 1px solid rgba(217, 201, 173, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #d9c9ad;
  letter-spacing: 0;
`;

export const Name = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #f0e6d3;
  margin: 0 0 0.25rem;
  letter-spacing: 0.04em;
`;

export const Message = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.92rem;
  color: #e0cdb0;
  line-height: 1.65;
  margin: 0 0 0.35rem;
`;

export const Timestamp = styled.span`
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: rgba(185, 168, 138, 0.55);
  font-family: "Cormorant Garamond", "Georgia", serif;
`;