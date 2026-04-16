import { CoverContainer, Names, DateText, Overlay } from "./Cover.style";
import bgImage from "../../assets/background/3.jpeg";
function Cover() {
  return (
    <CoverContainer id="cover" $bgImage={bgImage}>
      <Overlay />

      <Names>Denita & Arian</Names>
      <DateText>25 April 2026</DateText>
    </CoverContainer>
  );
}

export default Cover;
