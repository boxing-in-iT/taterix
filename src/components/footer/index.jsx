import React from "react";
import styled from "styled-components";
import footerBg from "../../assets/footerBg.png";

const Section = styled.section`
  min-height: 30vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  background: url(${footerBg}) no-repeat center center;
  background-size: cover;
`;

const Container = styled.div`
  position: relative;
  width: 95%;
  min-height: 30vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

const Footer = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Title>
            TATETRIX is not just a meme coin. It is a symbol of freedom and
            independence in the world of cryptocurrencies. Join our movement and
            become part of a story that is changing the world.
          </Title>
        </Box>
      </Container>
    </Section>
  );
};

export default Footer;
