import React from "react";
import styled from "styled-components";
// import money from "../../assets/moneyTate.png";
import money from "../../assets/tateGun.png";
import bg from "../../assets/bgRight.png";

const Section = styled.section`
  min-height: 90vh;
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
  justify-content: center;
  align-items: center;
  gap: 2em;

  @media (max-width: 64em) {
    flex-direction: column;
  }

  .ff {
    width: 50%;
    margin-left: 15%;
    align-items: self-start;
  }

  @media (max-width: 64em) {
    .ff {
      width: 100%;
      align-items: center;
      margin: 0 auto;
    }
  }

  @media (max-width: 85em) {
    .ff {
      /* margin-left: 5%; */
    }
  }

  @media (max-width: 90em) {
    .ff {
      /* margin-left: 5%; */
    }
  }

  .opacity {
    /* background: url(${bg}) no-repeat center center/cover;
    opacity: 0.5; */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 1;
      width: 100%;
      height: 100%;
      background: url(${bg});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.7; /* Установите необходимый уровень прозрачности */
      z-index: -1; /* Положите псевдоэлемент под контент */
    }
  }
`;

const Box = styled.div`
  width: 50%;
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
  width: 48em;
  filter: drop-shadow(0 0 50px rgba(12, 252, 3, 0.5));
  @media (max-width: 64em) {
    width: 24em;
    filter: drop-shadow(0 0 70px rgba(12, 252, 3, 0.5));
  }
  @media (max-width: 85em) {
    width: 42em;
    filter: drop-shadow(0 0 70px rgba(12, 252, 3, 0.5));
  }
`;

const Title = styled.h1`
  font-size: 66px;
  font-weight: 700;
  text-align: left;
  @media (max-width: 64em) {
    font-size: 35px;
    text-align: center;
  }
  @media (max-width: 85em) {
    font-size: 55px;
    text-align: center;
  }
`;

const SubtitleBox = styled.div`
  display: flex;
  flex-direction: column;
  white-space: wrap;
  width: 100%;
  @media (max-width: 64em) {
    font-size: 24px;
    width: 90%;
  }
  @media (max-width: 85em) {
    width: 90%;
    margin-left: 5%;
    /* margin-right: 10%; */
  }
`;

const Subtitle = styled.p`
  color: white;
  font-size: 32px;
  text-align: left;
  margin-block-start: 0;
  @media (max-width: 64em) {
    font-size: 22px;
  }
  @media (max-width: 85em) {
    font-size: 25px;
    text-align: left;
  }
`;

const Benefits = () => {
  return (
    <Section id="benefits">
      <Container>
        <Box className="ff">
          <Title>
            Benefits <span style={{ color: "#0CFC03" }}>TATETRIX</span>
          </Title>
          <SubtitleBox>
            <Subtitle>
              <span style={{ color: "#0CFC03" }}>Independence:</span> TATETRIX
              provides you with financial freedom.
            </Subtitle>
            <Subtitle>
              <span style={{ color: "#0CFC03" }}>Accessibility:</span> Easy to
              buy and trade.
            </Subtitle>
            <Subtitle>
              <span style={{ color: "#0CFC03" }}>Community:</span> Join our
              friendly and supportive community.
            </Subtitle>
          </SubtitleBox>
        </Box>
        <Box className="opacity">
          <Image src={money} />
        </Box>
      </Container>
    </Section>
  );
};

export default Benefits;
