import React, { useState } from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaYoutube, FaTwitter } from "react-icons/fa";

const HeaderWrapper = styled.header`
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  color: white;
  height: 4em;
  border-bottom: 1px solid #0cfc03;
`;

const HeaderContent = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    gap: 1rem;
    .desktop {
      display: none;
    }

    .mobile {
      display: flex;
    }
  }
`;

const Logo = styled.h1`
  text-transform: uppercase;
  font-size: 46px;
  color: white;
  cursor: pointer;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5),
    0 0 30px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.5),
    0 0 50px rgba(0, 255, 0, 0.5), 0 0 60px rgba(0, 255, 0, 0.5),
    0 0 70px rgba(0, 255, 0, 0.5);

  @media (max-width: 64em) {
    font-size: 32px;
    text-shadow: 0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.5),
      0 0 15px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.5),
      0 0 25px rgba(0, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.5),
      0 0 35px rgba(0, 255, 0, 0.5);
  }

  @media (min-width: 64.5em) and(max-width: 85em) {
    margin-right: 30%;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 5em;
`;

const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 4em;

  @media (max-width: 64em) {
    position: fixed;
    top: 2em;
    left: 0;
    right: 0;
    bottom: 0;
    width: 80vw;
    margin: 0 auto;
    height: 90vh;
    z-index: 10000;
    background-color: black;
    border: 2px solid #0cfc03;
    border-radius: 15px;
    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NavItem = styled.li`
  font-size: 21px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-transform: uppercase;

  &:hover {
    color: #0cfc03;
    cursor: pointer;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;
    margin-right: 12.5%;
    font-size: 48px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
  margin-right: 7.5%;
  justify-content: center;
  align-items: center;

  svg {
    color: white;
    font-size: 1.5em;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #0cfc03;
    }
  }
`;

const HamburgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  cursor: pointer;

  div {
    width: 2rem;
    height: 2px;
    background-color: white;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(1) {
      transform: ${(props) =>
        props.click ? "rotate(45deg) translateY(6px)" : "translateY(0)"};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.click ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.click ? "rotate(-45deg) translateY(-6px)" : "translateY(0)"};
    }
  }
`;

const CloseMenu = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  display: ${(props) => (props.click ? "block" : "none")};
`;

const Button = styled.button`
  background: linear-gradient(#0cfc03, #079602);
  border: none;
  border-radius: 13px;
  padding: 15px 50px;
  font-size: 23.29px;
  font-weight: 700;
  color: black;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 14.2px 0px #0cfc03;
  }
  @media (max-width: 64em) {
    padding: 15px 40px;
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setClick(!click);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HamburgerMenu
          className="mobile"
          click={click}
          onClick={() => setClick(!click)}
        >
          <div />
          <div />
          <div />
        </HamburgerMenu>
        <Logo>TATETRIX</Logo>
        <Nav>
          <NavItems click={click}>
            <CloseMenu click={click} onClick={() => setClick(false)}>
              &times;
            </CloseMenu>
            <NavItem onClick={() => scrollTo("about")}>About</NavItem>
            <NavItem onClick={() => scrollTo("benefits")}>Benefits</NavItem>
            <NavItem onClick={() => scrollTo("tokenomics")}>Tokenomics</NavItem>
            <IconWrapper className="mobile">
              <FaTelegramPlane />
              <FaYoutube />
              <FaTwitter />
            </IconWrapper>
          </NavItems>
          <Button className="desktop">BUY TATETRIX</Button>
        </Nav>
        <Button className="mobile">BUY</Button>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
