import {
  AkadSection,
  AkadContainer,
  AkadTitle,
  AkadCard,
  DateInfo,
  Day,
  Date,
  TimeInfo,
  TimeLabel,
  Time,
  LocationInfo,
  LocationLabel,
  Location,
  MapButton,
  IconWrapper,
  Overlay
} from "./Akad.style";
import bgImage from "../../assets/background/1.jpeg";

function Akad() {
  return (
    <AkadSection $bgImage={bgImage}>
      <Overlay />
      <AkadContainer>
        <IconWrapper>💍</IconWrapper>
        <AkadTitle>Akad Nikah dan Resepsi</AkadTitle>
        
        <AkadCard>
          <DateInfo>
            <Day>SABTU</Day>
            <Date>25 April 2026</Date>
          </DateInfo>

          <TimeInfo>
            <TimeLabel>Akad Pukul</TimeLabel>
            <Time>09.00 WIB s/d Selesai</Time>
          </TimeInfo>

          <TimeInfo>
            <TimeLabel>Resepsi Pukul</TimeLabel>
            <Time>11.00 WIB s/d Selesai WIB</Time>
          </TimeInfo>

          <LocationInfo>
            <LocationLabel>Lokasi</LocationLabel>
            <Location>
              Kediaman Mempelai Wanita
              <br />
              Kp Benteng rt 07 rw 04 desa kutajaya kec.cicurug kab.sukabumi
              <br />
              Jawa Barat
            </Location>
          </LocationInfo>
          <MapButton 
            href="https://maps.app.goo.gl/tPSJcjYboyEZSMvH7?g_st=ic" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LIHAT LOKASI
          </MapButton>
        </AkadCard>
      </AkadContainer>
    </AkadSection>
  );
}

export default Akad;
