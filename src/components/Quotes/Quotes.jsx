import {
  QuotesSection,
  QuotesContainer,
  QuoteIcon,
  QuoteText,
  QuoteSource,
  Divider,
} from "./Quotes.style";

function Quotes() {
  return (
    <QuotesSection>
      <QuotesContainer>
        <QuoteIcon>"</QuoteIcon>
        <QuoteText>
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang."
        </QuoteText>
        <QuoteSource>QS. Ar-Rum: 21</QuoteSource>
        <Divider />
      </QuotesContainer>
    </QuotesSection>
  );
}

export default Quotes;