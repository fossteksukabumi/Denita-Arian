import {
  JourneySection,
  JourneyContainer,
  JourneyTitle,
  JourneySubtitle,
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineDate,
  TimelineTitle,
  TimelineDescription,
  TimelineIcon,
} from "./Journey.style";

function Journey() {
  // Data timeline perjalanan cinta
  const journeySteps = [
    {
      
      title: "Pertemuan Pertama",
      description:
        "Setiap insan di takdirkan berpasangan. Kami di pertemukan di waktu yg tepat, tidak ada yg tidak mungkin kalau kami di takdirkan untuk hidup bersama.",
      icon: "💫",
    },
    {
      
      title: "Cinta Mulai Bersemi",
      description:
        "Seiring berjalannya waktu tidak terasa perasaan cinta di antara kami berdua mulai tumbuh. Dan pada akhirnya perasaan rasa cinta ini membawa kami untuk melanjutkan hubungan ke arah yg lebih serius.",
      icon: "💕",
    },
    {
      
      title: "Lamaran",
      description:
        "Dengan hubungan kami berdua yg semakin kuat sehingga meyakinkan kami untuk melangsungkan Lamaran",
      icon: "💍",
    },
    {
      date: "Segera",
      title: "Pernikahan",
      description:
        "Perjalanan panjang kami akan memasuki babak terindah. Sebuah ikatan suci yang akan menyatukan dua hati menjadi satu keluarga. Semoga kehangatan dan kebahagiaan ini tak pernah padam hingga akhir waktu.",
      icon: "👰‍♀️",
    },
  ];

  return (
    <JourneySection id="journey">
      <JourneyContainer>
        <JourneyTitle>Perjalanan Kami</JourneyTitle>
        <JourneySubtitle>Kisah Cinta yang Tertulis Takdir</JourneySubtitle>
        <Timeline>
          {journeySteps.map((step, index) => (
            <TimelineItem key={index} $delay={`${index * 0.2}s`}>
              <TimelineDot />
              <TimelineContent>
                <TimelineIcon>{step.icon}</TimelineIcon>
                <TimelineDate>{step.date}</TimelineDate>
                <TimelineTitle>{step.title}</TimelineTitle>
                <TimelineDescription>{step.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </JourneyContainer>
    </JourneySection>
  );
}

export default Journey;