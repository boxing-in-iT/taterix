import React from "react";
import styled from "styled-components";
import tateC from "../../assets/tateCigarre-removebg-preview.png";
import videoTate from "../../assets/video/tateVideo.mp4"; // Замените на формат .mp4
import tg from "../../assets/tg.svg";
import twitter from "../../assets/twitter.svg";

// Styled Components
const Section = styled.section`
  min-height: 60vh;
  width: 100vw;
  position: relative;
  z-index: 100;
  background-color: black;
  overflow: hidden;
  @media (max-width: 64em) {
    min-height: 120vh;
  }
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
  z-index: 2;
  margin-top: 10em;
`;

const Box = styled.div`
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
  margin: 0;
  padding: 0;
  span {
    color: #00ff00;
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
  background: linear-gradient(#0cfc03, #079602);
  border: none;
  border-radius: 13px;
  padding: 25px 50px;
  font-size: 23.29px;
  margin-top: 2em;
  /* bold */
  font-weight: bold;
  /* font-weight: 700; */
  color: black;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out; /* Smooth transition for both shadow and background */
  z-index: 1000;
  &:hover {
    box-shadow: 0px 0px 14.2px 0px #0cfc03; /* Drop shadow effect */
  }
`;

// const Button = styled.button`
//   background-color: #00ff00;
//   color: black;
//   font-size: 1.5rem;
//   padding: 1em 2em;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     box-shadow: 0px 0px 14.2px 0px #0cfc03;
//   }
// `;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5em;
  margin-top: 1em;

  a {
    color: #00ff00;
    font-size: 2rem;
    text-decoration: none;
  }
`;

const Video = styled.video`
  position: absolute;
  width: 20em;
  right: 0;
  height: auto;
  z-index: -1;
  pointer-events: none;
  @media (max-width: 64em) {
    margin-top: 130%;
    margin-right: 30%;
    width: 50%;
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
            <img src={tg} />
            <img src={twitter} />
            {/* <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
          </IconContainer>
          <Button>JOIN THE MOVEMENT</Button>
          <Video
            src={videoTate}
            type="video/mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </Box>
      </Container>
    </Section>
  );
};

export default SecondWelcome;
