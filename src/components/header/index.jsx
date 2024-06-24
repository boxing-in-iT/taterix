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
  font-size: 32px;
  color: white;
  -webkit-text-stroke: 1px #0cfc03; /* Green outline */
  cursor: pointer;
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
    height: 50vh;
    z-index: 10000;
    background-color: black;
    border: 2px solid #0cfc03;
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

  &:hover {
    color: #0cfc03;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;

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
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2rem;
    height: 2px;
    background-color: white;
    transition: transform 0.3s ease;
  }

  &::before {
    transform: ${(props) =>
      props.click ? "rotate(45deg)" : "translateY(-0.5rem)"};
  }

  &::after {
    transform: ${(props) =>
      props.click ? "rotate(-45deg)" : "translateY(0.5rem)"};
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
  transition: box-shadow 0.1s ease-in-out; /* Smooth transition for both shadow and background */

  &:hover {
    box-shadow: 0px 0px 14.2px 0px #0cfc03; /* Drop shadow effect */
  }
`;

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContent>
        <HamburgerMenu
          className="mobile"
          click={click}
          onClick={() => setClick(!click)}
        />
        <Logo>Taterix</Logo>
        <Nav>
          <NavItems click={click}>
            <CloseMenu click={click} onClick={() => setClick(false)}>
              &times;
            </CloseMenu>
            <NavItem>About</NavItem>
            <NavItem>Benefits</NavItem>
            <NavItem>Tokenomics</NavItem>
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
