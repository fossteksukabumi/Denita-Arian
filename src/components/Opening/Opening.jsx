import {
  OpeningContainer,
  Title,
  DateText,
  OpenButton,
} from "./Opening.style";
import bgOpening from "../../assets/background/DA.jpg";

function Opening({ onOpen, isClosing }) {
  return (
    <OpeningContainer
      $bgImage={bgOpening}
      $isClosing={isClosing}
    >
      <Title>Denita & Arian</Title>
      <DateText>25 April 2026</DateText>
      <OpenButton onClick={onOpen}>
        Buka Undangan
      </OpenButton>
    </OpeningContainer>
  );
}

export default Opening;
