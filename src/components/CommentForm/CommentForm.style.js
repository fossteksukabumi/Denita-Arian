import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1.5rem;
  background: rgba(244, 237, 224, 0.07);
  border: 1px solid rgba(235, 220, 195, 0.18);
  border-radius: 4px;
  animation: ${fadeUp} 0.7s ease-out both;
`;

export const GiftTitle = styled.h3`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  font-weight: 400;
  letter-spacing: 0.06em;
  color: #f0e6d3;
  text-align: center;
  margin: 0 0 0.5rem;

  &::after {
    content: "";
    display: block;
    width: 36px;
    height: 1px;
    background: rgba(217, 201, 173, 0.45);
    margin: 0.6rem auto 0;
  }
`;

const fieldBase = `
  width: 100%;
  box-sizing: border-box;
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 1rem;
  color: #f0e6d3;
  background: rgba(255, 248, 238, 0.06);
  border: 1px solid rgba(235, 220, 195, 0.22);
  border-radius: 2px;
  padding: 0.75rem 1rem;
  outline: none;
  transition: border-color 0.25s ease, background 0.25s ease;

  &::placeholder {
    color: rgba(217, 201, 173, 0.45);
  }

  &:focus {
    border-color: rgba(217, 201, 173, 0.6);
    background: rgba(255, 248, 238, 0.1);
  }
`;

export const Input = styled.input`
  ${fieldBase}
  height: 48px;
`;

export const Textarea = styled.textarea`
  ${fieldBase}
  min-height: 110px;
  resize: vertical;
  line-height: 1.65;
`;

export const Button = styled.button`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #f0e6d3;
  background: transparent;
  border: 1px solid rgba(235, 220, 195, 0.45);
  border-radius: 2px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  min-height: 48px;
  transition: background 0.3s ease, border-color 0.3s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(235, 220, 195, 0.14);
    border-color: rgba(235, 220, 195, 0.8);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;