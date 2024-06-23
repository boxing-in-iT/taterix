import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 30vh;
  width: 100vw;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  width: 95%;
  min-height: 30vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  @media (max-width: 64em) {
    flex-direction: column-reverse;
  }
`;

const Box = styled.div`
  width: 60%;
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

const Title = styled.p`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 64em) {
    font-size: 18px;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; // Ensure canvas is behind the content
`;

const phrases = [
  "Break free from the matrix",
  "Exit the matrix",
  "It's time to claim your freedom.",
  "Seize your chance at freedom",
];

const fontSize = 21;
const columns = Math.ceil(window.innerWidth / fontSize);
const drops = Array.from({ length: columns }).map(() => ({
  y: window.innerHeight / fontSize,
  opacity: 1,
}));

let phraseIndex = 0;
let characterIndex = 0;

const draw = (context, width, height) => {
  context.fillStyle = "rgba(0,0,0,.05)";
  context.fillRect(0, 0, width, height);
  context.font = `${fontSize}px system-ui`;

  const currentPhrase = phrases[phraseIndex % phrases.length];
  const text = currentPhrase.charAt(characterIndex);

  drops.forEach((drop, i) => {
    context.fillStyle = `rgba(0, 255, 0, ${drop.opacity})`;
    context.fillText(text, i * fontSize, drop.y * fontSize);

    if (drop.y * fontSize < 0 && Math.random() > 0.975) {
      drop.y = height / fontSize;
      drop.opacity = 1; // Reset opacity
    }

    drop.y--;
    drop.opacity -= 0.01; // Gradually decrease opacity
    if (drop.opacity < 0) {
      drop.opacity = 0;
    }
  });

  characterIndex++;
  if (characterIndex >= currentPhrase.length) {
    characterIndex = 0;
    phraseIndex++;
  }
};

const Footer = () => {
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
            Tatetrix is not just a meme coin. It is a symbol of freedom and
            independence in the world of cryptocurrencies. Join our movement and
            become part of a story that is changing the world.
          </Title>
        </Box>
      </Container>
    </Section>
  );
};

export default Footer;
