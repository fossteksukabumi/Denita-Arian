import { useRef } from "react";

export const useMusic = (musicSrc) => {
  const audioRef = useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(musicSrc);
    audioRef.current.loop = true;
  }

  const play = () => {
    audioRef.current
      .play()
      .catch(err => console.log("Autoplay blocked:", err));
  };

  return { play };
};

