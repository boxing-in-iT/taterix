import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import tate from "../../assets/tateCigaree.png";
import bg from "../../assets/bgMatrix.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;

  @media (max-width: 64em) {
    flex-direction: column-reverse;
  }

  .ff {
    width: 50%;
    margin-right: 15em;
    align-items: center;
  }

  @media (max-width: 64em) {
    .ff {
      width: 95%;
      align-items: center;
      margin: 0 auto;
    }
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
    width: 100%;
  }
`;

const Image = styled.img`
  width: 30em;
  filter: drop-shadow(0 0 170px rgba(12, 252, 3, 0.5));
  @media (max-width: 64em) {
    width: 20em;
    filter: drop-shadow(0 0 70px rgba(12, 252, 3, 0.5));
  }
`;

const Title = styled.h1`
  font-size: 72px;
  margin: 0;
  padding: 0;
  @media (max-width: 64em) {
    text-align: center;
    font-size: 50px;
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

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box style={{ background: `url(${bg}) no-repeat center center/cover` }}>
          <Image src={tate} />
        </Box>
        <Box className="ff">
          <Title>
            About{" "}
            <span style={{ textTransform: "uppercase", color: "#0CFC03" }}>
              TATETRIX
            </span>
          </Title>
          <Subtitle>
            <span style={{ color: "#0CFC03" }}>Story:</span> Andrew Tate's
            journey from the confines of the matrix to the creation of Tatetrix
            is a story of resilience, vision, and unwavering determination.
            TATETRIX stands as a testament to the belief that anyone can break
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
