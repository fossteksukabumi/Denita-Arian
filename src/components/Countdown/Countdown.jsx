import { useEffect, useState } from "react";
import {
  CountdownSection,
  CountdownContainer,
  CountdownTitle,
  CountdownSubtitle,
  TimerContainer,
  TimeBox,
  TimeValue,
  TimeLabel,
  HeartIcon,
} from "./Countdown.style";

function Countdown() {
  const targetDate = new Date("2026-04-25T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Hari" },
    { value: timeLeft.hours, label: "Jam" },
    { value: timeLeft.minutes, label: "Menit" },
    { value: timeLeft.seconds, label: "Detik" },
  ];

  return (
    <CountdownSection>
      <CountdownContainer>
        <CountdownTitle>Menuju Hari Bahagia</CountdownTitle>
        <CountdownSubtitle>Hitung Mundur Pernikahan</CountdownSubtitle>

        <TimerContainer>
          {timeUnits.map((unit, index) => (
            <TimeBox key={index}>
              <TimeValue>{String(unit.value).padStart(2, "0")}</TimeValue>
              <TimeLabel>{unit.label}</TimeLabel>
            </TimeBox>
          ))}
        </TimerContainer>

        <HeartIcon>♥</HeartIcon>
      </CountdownContainer>
    </CountdownSection>
  );
}

export default Countdown;