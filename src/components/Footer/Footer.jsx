import {
  FooterWrapper,
  FooterContainer,
  Divider,
  ThankYouText,
  CoupleNames,
  Year,
  HeartIcon,
  SocialLinks,
  SocialLink,
  Copyright,
} from "./Footer.style";

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Divider />

        <ThankYouText>
          Terima kasih telah menjadi bagian dari hari bahagia kami.
          <br />
          Doa dan kehadiran Anda sangat berarti bagi kami.
        </ThankYouText>

        <HeartIcon>♥</HeartIcon>

        <CoupleNames>Denita & Arian</CoupleNames>
        <Year>25 April 2026</Year>

        <SocialLinks>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            📷
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            📧
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            💬
          </SocialLink>
        </SocialLinks>

        <Copyright>
          © 2026 Dibuat oleh UMKM Sukabumi Cicurug . All rights reserved.
        </Copyright>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;