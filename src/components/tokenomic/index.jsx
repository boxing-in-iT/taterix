import React from "react";
import styled from "styled-components";
import binary from "../../assets/Binary.png";
import fire from "../../assets/FireSimple.png";
import taxi from "../../assets/Taxi.png";
import tCar from "../../assets/IMG_6667.png";
import bg from "../../assets/tokenomicBg.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${bg});
    background-size: cover;
    background-position: center 100%;
    background-repeat: no-repeat;
    opacity: 0.7; /* Установите необходимый уровень прозрачности */
    z-index: -1; /* Положите псевдоэлемент под контент */
  }
`;

const Container = styled.div`
  /*  */
  /* position: relative; */
  padding-top: 10%;
  width: 100%;
  min-height: 50vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 0em; */
  overflow: hidden;

  @media (max-width: 64em) {
    padding-top: 20%;
    flex-direction: column;
    margin-top: 10%;
    width: 95%;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  @media (max-width: 64em) {
    /* padding-top:10%; */
  }
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 64em) {
    font-size: 35px;
    text-align: center;
  }
  @media (max-width: 85em) {
    font-size: 54px;
    text-align: center;
  }
`;

const SubTitle = styled.p`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  @media (max-width: 64em) {
    margin-top: 2%;
    font-size: 20px;
    text-align: center;
  }
`;

const Supply = styled.p`
  font-size: 49px;
  font-weight: 700;
  @media (max-width: 64em) {
    font-size: 19px;
    text-align: center;
  }
  @media (max-width: 85em) {
    font-size: 32px;
    text-align: center;
  }
`;

const Tokenomics = styled.div`
  margin-top: 10%;
  display: flex;
  width: 80%;
  color: white;
  justify-content: space-around;
  @media (max-width: 64em) {
    flex-direction: column;
  }

  .center {
    margin-right: 4em;
    @media (max-width: 64em) {
      margin-right: 0;
    }
  }
`;

const TokenomicItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TokenomicDescription = styled.p`
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
`;

const TokenomicImg = styled.img`
  width: 7em;
  @media (max-width: 64em) {
    width: 5em;
  }
`;

const TImage = styled.img`
  width: 80%;
  @media (max-width: 64em) {
    margin-left: 20px;
    width: 120%;
  }
`;

const FinalText = styled.p`
  font-size: 32px;
  color: white;
  font-weight: 700;
  text-align: center;
  @media (max-width: 64em) {
    font-size: 18px;
  }
`;

const Tokenomic = () => {
  return (
    <Section id="tokenomics">
      <Container>
        <Box>
          <Title>
            <span style={{ color: "#0CFC03" }}>TATETRIX</span> Tokenomics
          </Title>
          <SubTitle>Let's dive into the tokenomics of TATETRIX:</SubTitle>
          <Supply>
            Total Supply: 1 000,000,000{" "}
            <span style={{ color: "#0CFC03", textTransform: "uppercase" }}>
              TATETRIX
            </span>
          </Supply>
        </Box>
        <Tokenomics>
          <TokenomicItem>
            <TokenomicImg src={binary} />
            <TokenomicDescription>Mint: Revoke</TokenomicDescription>
          </TokenomicItem>
          <TokenomicItem className="center">
            <TokenomicImg src={fire} />
            <TokenomicDescription>liquidity burn</TokenomicDescription>
          </TokenomicItem>
          <TokenomicItem>
            <TokenomicImg src={taxi} />
            <TokenomicDescription>tax 0%</TokenomicDescription>
          </TokenomicItem>
        </Tokenomics>
        <Box style={{ marginBottom: "15%" }}>
          <TImage src={tCar} />
          <div style={{ width: "90%" }}>
            <FinalText>
              TATETRIX is not just a meme coin. It is a symbol of freedom and
              independence in the world of cryptocurrencies. Join our movement
              and become part of a story that is changing the world.
            </FinalText>
          </div>
        </Box>
      </Container>
    </Section>
  );
};

export default Tokenomic;
