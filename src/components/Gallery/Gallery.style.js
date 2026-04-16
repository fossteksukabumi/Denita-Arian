import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
`;

/* ─── Section ─────────────────────────────────────────────── */

export const GallerySection = styled.section`
  width: 100%;
  padding: 5rem 0;
  background: #1e1710;
`;

export const GalleryContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

/* ─── Heading ──────────────────────────────────────────────── */

export const GalleryTitle = styled.h2`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: clamp(1.6rem, 5vw, 2.2rem);
  font-weight: 400;
  color: #f0e6d3;
  text-align: center;
  margin: 0;
  letter-spacing: 0.05em;
`;

export const GallerySubtitle = styled.p`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
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

/* ─── Masonry Grid ─────────────────────────────────────────── */
/*
  CSS Columns masonry: browser stacks items top-to-bottom
  within each column — natural height variation creates the
  staggered Pinterest-style layout without JS.
*/

export const GalleryGrid = styled.div`
  width: 100%;
  column-count: 3;
  column-gap: 8px;

  @media (max-width: 600px) {
    column-count: 2;
    column-gap: 6px;
  }

  @media (max-width: 360px) {
    column-count: 2;
    column-gap: 4px;
  }
`;

/* ─── Individual Item ──────────────────────────────────────── */

export const GalleryItem = styled.div`
  position: relative;
  break-inside: avoid;       /* prevent column break mid-item */
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  margin-bottom: 8px;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  background: #2a2014;

  animation: ${fadeUp} 0.6s ease-out both;
  animation-delay: ${({ $delay }) => $delay || "0s"};

  /* Hover: lift + reveal overlay */
  &:hover img {
    transform: scale(1.05);
  }

  &:hover > div {
    opacity: 1;
  }

  @media (max-width: 600px) {
    margin-bottom: 6px;
  }

  @media (max-width: 360px) {
    margin-bottom: 4px;
  }
`;

export const GalleryImage = styled.img`
  display: block;          /* removes inline bottom gap */
  width: 100%;
  height: auto;            /* natural height = masonry magic */
  object-fit: cover;
  transition: transform 0.45s ease;
  border-radius: 3px;
`;

/* ─── Hover Overlay ────────────────────────────────────────── */

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(30, 23, 16, 0.72) 0%,
    rgba(30, 23, 16, 0.15) 55%,
    transparent 100%
  );
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 0.75rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 3px;
`;

export const ImageCaption = styled.span`
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(240, 230, 211, 0.85);
`;

/* ─── Modal ────────────────────────────────────────────────── */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(16, 11, 6, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  animation: ${fadeIn} 0.25s ease-out both;
  /* allow scroll on very tall images */
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: min(90vw, 700px);
  width: 100%;
  animation: ${scaleIn} 0.3s ease-out both;
`;

export const ModalImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-height: 88vh;
  object-fit: contain;
  border-radius: 4px;
  border: 1px solid rgba(235, 220, 195, 0.12);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -14px;
  right: -14px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(235, 220, 195, 0.3);
  background: #2a2014;
  color: #d9c9ad;
  font-size: 0.9rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(235, 220, 195, 0.15);
    border-color: rgba(235, 220, 195, 0.65);
    color: #f0e6d3;
  }

  &:active {
    transform: scale(0.93);
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
    background: rgba(30, 23, 16, 0.85);
  }
`;