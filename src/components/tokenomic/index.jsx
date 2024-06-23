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
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;

  @media (max-width: 64em) {
    flex-direction: column;
  }
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 64em) {
    font-size: 45px;
    text-align: center;
  }
`;

const SubTitle = styled.p`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  @media (max-width: 64em) {
    font-size: 24px;
    text-align: center;
  }
`;

const Supply = styled.p`
  font-size: 49px;
  font-weight: 700;
  @media (max-width: 64em) {
    font-size: 20px;
    text-align: center;
  }
`;

const Tokenomics = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  @media (max-width: 64em) {
    flex-direction: column;
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
  width: 60em;
  @media (max-width: 64em) {
    width: 30em;
  }
  /* margin-top: 2em;  */
`;

const Tokenomic = () => {
  return (
    <Section>
      <Container>
        <Box>
          <Title>
            <span style={{ color: "#0CFC03" }}>Tatetrix</span> Tokenomics
          </Title>
          <SubTitle>Let's dive into the tokenomics of Tatetrix:</SubTitle>
          <Supply>
            Total Supply: 1 000,000,000{" "}
            <span style={{ color: "#0CFC03", textTransform: "uppercase" }}>
              Tatetrix
            </span>
          </Supply>
          <Tokenomics>
            <TokenomicItem>
              <TokenomicImg src={binary} />
              <TokenomicDescription>Mint: Revoke</TokenomicDescription>
            </TokenomicItem>
            <TokenomicItem>
              <TokenomicImg src={fire} />
              <TokenomicDescription>liquidity burn</TokenomicDescription>
            </TokenomicItem>
            <TokenomicItem>
              <TokenomicImg src={taxi} />
              <TokenomicDescription>tax 0%</TokenomicDescription>
            </TokenomicItem>
          </Tokenomics>
        </Box>
        <Box>
          <TImage src={tCar} />
        </Box>
      </Container>
    </Section>
  );
};

export default Tokenomic;
