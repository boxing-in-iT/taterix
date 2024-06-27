//

import React, { useEffect } from "react";
import styled from "styled-components";
import tateImg from "../assets/tateMain.png";
import solBg from "../assets/Layer_1.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 100;
  background-color: black;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; // Ensure canvas is behind the content
`;

const Container = styled.div`
  position: relative;
  width: 95%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8em;
  padding-top: 5em;
  z-index: 2; // Ensure content is above the canvas
  background-image: url(${solBg});
  background-size: 35%; // Adjust this value to reduce the size of the background image
  background-repeat: no-repeat;
  background-position: center;
`;

const Box = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 200px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  font-family: "Matrix", sans-serif;
  margin: 0;
  padding: 0;
  cursor: pointer;
  position: relative;
  z-index: 2;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5),
    0 0 30px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.5),
    0 0 50px rgba(0, 255, 0, 0.5), 0 0 60px rgba(0, 255, 0, 0.5),
    0 0 70px rgba(0, 255, 0, 0.5);

  @media (max-width: 64em) {
    font-size: 80px;
    font-weight: 900;
    margin-bottom: 0; /* Adjusted margin for smaller screens */
  }
`;

const Image = styled.img`
  width: 30%;
  position: absolute;
  z-index: 3;
  @media (max-width: 64em) {
    width: 60%;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Card = styled.div`
  margin-top: 47%;
  background-color: #0d0f0d;
  color: white;
  border: 1px solid #00ff00;
  border-radius: 30px;
  padding: 20px;
  width: 60%;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 64em) {
    margin-top: 95%;
    width: 90%;
  }
`;

const phrases = [
  "Break free from the matrix",
  "Exit the matrix",
  "it's time to claim your freedom.",
  "seize your chance at freedom",
];

const fontSize = 15;
const columns = Math.ceil(window.innerWidth / fontSize);
const drops = Array.from({ length: columns }).map(() => ({
  y: 1,
  opacity: 1,
  decay: Math.random() * 0.02 + 0.005, // Random decay factor for each drop
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

    if (drop.y * fontSize > height && Math.random() > 0.975) {
      drop.y = 0;
      drop.opacity = 1; // Reset opacity
    }

    drop.y++;
    drop.opacity -= drop.decay; // Decrease opacity with random decay factor
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

const Welcome = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas");
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
      <Canvas />
      <Container>
        <Title>TATETRIX</Title>
        <Image src={tateImg} />
        <Card>
          <h2>
            The Story of <span style={{ color: "#0CFC03" }}>TATETRIX</span>
          </h2>
          <p>
            Deep within the cryptic depths of the crypto matrix lived a man
            known as Andrew Tate. A former kickboxing champion and successful
            entrepreneur, Andrew always aspired for independence and freedom. He
            realized that the financial system was controlled by a select few,
            preventing ordinary people from becoming wealthy and independent.
            His mission was to liberate the crypto industry and give people a
            chance at financial freedom.
          </p>
          <p>
            One day, after extensive meditation and deep reflection, Andrew
            discovered a way out of the matrix. Once freed, he knew he had to
            share this knowledge with the world. Thus, TATETRIX was born - a
            meme coin that became a symbol of freedom and independence in the
            crypto industry. This coin is not only funny and popular among memes
            but also has a real mission - to help everyone become wealthier and
            more independent.
          </p>
        </Card>
      </Container>
    </Section>
  );
};

export default Welcome;
