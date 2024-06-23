import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import tt from "../../assets/Group 3156.png";

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
    flex-direction: column;
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
    width: 90%;
  }
`;

const Image = styled.img`
  width: 25em;
  @media (max-width: 64em) {
    width: 20em;
  }
`;

const Title = styled.h1`
  font-size: 86px;
  font-weight: 700;
`;

const SubtitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.p`
  color: white;
  font-size: 32px;
  text-align: left;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 90%;
  z-index: -1; // Ensure canvas is behind the content
  @media (max-width: 64em) {
    height: 50%;
    margin-top: 50em;
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
    const x = width - drop * fontSize; // Calculate x-position from right to left
    context.fillText(text, x, i * fontSize);

    if (x < width / 2 && Math.random() > 0.975) {
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

const Benefits = () => {
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
          <Title>
            {" "}
            Benefits <span style={{ color: "#0CFC03" }}>Tatetrix</span>
          </Title>
          <SubtitleBox>
            <Subtitle>
              <span style={{ color: "#0CFC03" }}>Independence:</span> Tatetrix
              provides you with financial freedom.
            </Subtitle>
            <Subtitle>
              <span style={{ color: "#0CFC03" }}>Accessibility: </span> Easy to
              buy and trade.
            </Subtitle>
            <Subtitle>
              <span style={{ color: "#0CFC03" }}>Community:</span> Join our
              friendly and supportive community.
            </Subtitle>
          </SubtitleBox>
        </Box>
        <Box>
          <Image src={tt} />
        </Box>
      </Container>
    </Section>
  );
};

export default Benefits;
