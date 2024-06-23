import React from "react";
import styled from "styled-components";
import tateC from "../../assets/tateCigarre-removebg-preview.png";
// import videoTate from "../../assets/video/tateVideo.mp4"; // Импортируйте ваше видео
import videoTate from "../../assets/video/tateVideo.MOV";

// Styled Components
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 100;
  background-color: black;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 95%;
  min-height: 60vh;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  z-index: 2; // Ensure content is above the canvas
`;

const Box = styled.div`
  /* position: relative; */
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 100%;
  }
`;

const Heading = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
  span {
    color: #00ff00; // Green color for "TATETRIX"
  }
  @media (max-width: 64em) {
    font-size: 2rem;
  }
`;

const Subheading = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: center;
  max-width: 800px;
`;

const Button = styled.button`
  background-color: #00ff00; // Green background color
  color: black;
  font-size: 1.5rem;
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 1em;

  a {
    color: #00ff00; // Green icon color
    font-size: 2rem;
    text-decoration: none;
  }
`;

const Video = styled.video`
  position: absolute;
  width: 30em;
  right: 0;
  height: auto;
  z-index: -1;
  pointer-events: none;
  @media (max-width: 64em) {
    margin-top: 18em;
  }
`;

const SecondWelcome = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Heading>
            Welcome to <span>TATETRIX</span> - The Meme Coin That Will Change
            Your Life!
          </Heading>
          <Subheading>
            Discover how Andrew Tate broke free from the matrix to save the
            crypto industry and give you a chance at financial freedom.
          </Subheading>
          <IconContainer>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </IconContainer>
          <Button>JOIN THE MOVEMENT</Button>
          <Video src={videoTate} controls autoPlay loop muted />
        </Box>
      </Container>
    </Section>
  );
};

export default SecondWelcome;
