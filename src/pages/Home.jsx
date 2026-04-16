import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Opening from "../components/Opening/Opening";
import { useMusic } from "../hooks/useMusic";
import musicFile from "../assets/music/arvian.mp3";

import Cover from "../components/Cover/Cover";
import Quotes from "../components/Quotes/Quotes";
import Akad from "../components/Akad/Akad";
import Countdown from "../components/Countdown/Countdown";
import Journey from "../components/Journey/Journey";
import Gallery from "../components/Gallery/Gallery";
import CommentForm from "../components/CommentForm/CommentForm";
import CommentList from "../components/CommentList/CommentList";
import Footer from "../components/Footer/Footer";
import Gift from "../components/Gift/Gift";
import BottomNav from "../components/BottomNav/BottomNav";

const MainContainer = styled.div`
  padding-bottom: 90px;
  min-height: 100vh;
`;

function Home() {
  const [isOpened, setIsOpened] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { play } = useMusic(musicFile);

  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);

const handleOpen = () => {
  play();
  setIsClosing(true);

  // tunggu animasi selesai
  setTimeout(() => {
    setIsOpened(true);
    document.body.style.overflow = "auto";
  }, 700); // HARUS sama dengan durasi animasi
};

  useEffect(() => {
    document.body.style.overflow = isOpened ? "auto" : "hidden";
  }, [isOpened]);

  const fetchComments = async () => {
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycby18BtypPGoCwyFAC22PMGoNmK0cIpwTqSfS7_wqVOP7nCmKOYlVVmyIsPGI1o7K6pvoA/exec");
      const data = await res.json();
      setComments(data.reverse());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [refresh]);

  return (
    <>
      {!isOpened && (
        <Opening onOpen={handleOpen} isClosing={isClosing} />
      )}

      <MainContainer>
        <Cover />
        <Quotes />
        <Akad />
        <Countdown />
        <Journey />
        <Gallery />
        <Gift />
        <CommentForm onSuccess={() => setRefresh(r => !r)} />
        <CommentList comments={comments} />
        <Footer />
      </MainContainer>

      {isOpened && <BottomNav />}
    </>
  );
}

export default Home;
