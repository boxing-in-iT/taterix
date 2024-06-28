import React, { useEffect } from "react";
import styled from "styled-components";
import solBg from "../../assets/Layer_1.png";
import tateImg from "../../assets/tateMain.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  z-index: 100;
  background-color: black;
  overflow: hidden;
  position: relative;
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
  margin-top: 5vh;
  position: relative;
  width: 95%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 5em;
  z-index: 2; // Ensure content is above the canvas
  background-image: url(${solBg});
  background-size: 35%; // Adjust this value to reduce the size of the background image
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 64em) {
    background-size: 75%;
    background-position: center 25%; // Adjust this value to move the background image higher
  }
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
  -webkit-text-stroke: 3px #0cfc03;
  z-index: 2;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5),
    0 0 30px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.5),
    0 0 50px rgba(0, 255, 0, 0.5), 0 0 60px rgba(0, 255, 0, 0.5);

  @media (max-width: 64em) {
    font-size: 70px;
    font-weight: 900;
    margin-bottom: 0;
    /* -webkit-text-stroke: 2px #0cfc03; */
    text-shadow: 0 0 20px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.5),
      0 0 40px rgba(0, 255, 0, 0.5);
  }

  @media (max-width: 85em) {
    font-size: 120px;
    text-align: center;
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

const Card = styled.div`
  margin-top: 47%;
  background-color: #0d0f0d;
  color: white;
  border: 1px solid #00ff00;
  border-radius: 30px;
  padding: 2.5%;
  width: 60%;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  @media (max-width: 64em) {
    margin-top: 95%;
    width: 90%;
  }
`;

const TestBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
`;

const phrases = [
  "Break free from the matrix",
  "Exit the matrix",
  "it's time to claim your freedom.",
  "seize your chance at freedom",
];

const fontSize = 21;
const columns = Math.ceil(window.innerWidth / fontSize);
const drops = Array.from({ length: columns }).map(() => ({
  y: 1,
  opacity: 1,
  decay: Math.random() * 0.01 + 0.002,
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
      drop.opacity = 1;
    }

    drop.y++;
    drop.opacity -= drop.decay;
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

    const interval = setInterval(() => draw(context, width, height), 100);

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
        <div>
          <Title>TATETRIX</Title>
        </div>
        <TestBox>
          <Image src={tateImg} />
          <Card>
            <h2>
              The Story of <span style={{ color: "#0CFC03" }}>TATETRIX</span>
            </h2>
            <p>
              Deep within the cryptic depths of the crypto matrix lived a man
              known as Andrew Tate. A former kickboxing champion and successful
              entrepreneur, Andrew always aspired for independence and freedom.
              He realized that the financial system was controlled by a select
              few, preventing ordinary people from becoming wealthy and
              independent. His mission was to liberate the crypto industry and
              give people a chance at financial freedom.
            </p>
            <p>
              One day, after extensive meditation and deep reflection, Andrew
              discovered a way out of the matrix. Once freed, he knew he had to
              share this knowledge with the world. Thus, TATETRIX was born - a
              meme coin that became a symbol of freedom and independence in the
              crypto industry. This coin is not only funny and popular among
              memes but also has a real mission - to help everyone become
              wealthier and more independent.
            </p>
          </Card>
        </TestBox>
      </Container>
    </Section>
  );
};

export default Welcome;
