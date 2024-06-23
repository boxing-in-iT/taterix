import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import tate from "../../assets/tateMain.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  width: 95%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;

  @media (max-width: 64em) {
    flex-direction: column-reverse;
  }
`;

const Box = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 64em) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 30em;
  @media (max-width: 64em) {
    width: 25em;
  }
`;

const Title = styled.h1`
  font-size: 72px;
  @media (max-width: 64em) {
    text-align: center;
    font-size: 54px;
  }
`;

const Subtitle = styled.p`
  color: white;
  font-size: 32px;
  text-align: center;
  @media (max-width: 64em) {
    font-size: 24px;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 90%;
  z-index: -1; // Ensure canvas is behind the content
  @media (max-width: 64em) {
    height: 60%;
    width: 50%;
    margin-top: 45em;
  }
`;

const phrases = [
  "Break free from the matrix",
  "Exit the matrix",
  "it's time to claim your freedom.",
  "seize your chance at freedom",
];

const fontSize = 12;
// const rows = Math.ceil(window.innerHeight / fontSize);
const rows = Math.ceil(80);
const drops = Array.from({ length: rows }).map(() => 0);

let phraseIndex = 0;
let characterIndex = 0;

const draw = (context, width, height) => {
  context.fillStyle = "rgba(0,0,0,.05)";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "#0f0";
  context.font = `${fontSize}px system-ui`;

  const currentPhrase = phrases[phraseIndex % phrases.length];
  const text = currentPhrase.charAt(characterIndex);

  drops.forEach((drop, i) => {
    context.fillText(text, drop * fontSize, i * fontSize);

    if (drop * fontSize > width / 2 && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  });

  characterIndex++;
  if (characterIndex >= currentPhrase.length) {
    characterIndex = 0;
    phraseIndex++;
  }
};

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const interval = setInterval(() => draw(context, width, height), 123);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section>
      <Canvas ref={canvasRef} />
      <Container>
        <Box>
          <Image src={tate} />
        </Box>
        <Box>
          <Title>
            About{" "}
            <span style={{ textTransform: "uppercase", color: "#0CFC03" }}>
              Tatetrix
            </span>
          </Title>
          <Subtitle>
            <span style={{ color: "#0CFC03" }}>Story:</span> Andrew Tate's
            journey from the confines of the matrix to the creation of Tatetrix
            is a story of resilience, vision, and unwavering determination.
            Tatetrix stands as a testament to the belief that anyone can break
            free from the chains of the traditional financial system and achieve
            true independence. Join the Tatetrix movement and become part of a
            community dedicated to changing the world, one meme at a time
          </Subtitle>
          <Subtitle>
            <span style={{ color: "#0CFC03" }}>Mission</span> We aim to make
            cryptocurrencies accessible to everyone and give each person the
            opportunity to become independent and wealthy.
          </Subtitle>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
