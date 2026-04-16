import Opening from "../components/Opening/Opening";
import { useMusic } from "../hooks/useMusic";
import musicFile from "../assets/music/willu.mp3";
import { useNavigate } from "react-router-dom";
const OpeningPage = () => {
  const { play } = useMusic(musicFile);
  const navigate = useNavigate();

  const handleOpen = () => {
    play();
    navigate("/home");
  };

  return <Opening onOpen={handleOpen} />;
};

export default OpeningPage;