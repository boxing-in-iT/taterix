import React, { useState } from "react";
import styled from "styled-components";

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
    /* 1024px */
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 30em;
    width: 100vw;
    z-index: 10000;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: center;
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

    &::after {
      content: " ";
      display: block;
      width: 0%;
      height: 2px;
      background: #fef22b;
      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: #ffffff;

  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};

  display: flex;

  cursor: pointer;
  transition: all 0.3s ease;

  &::after,
  &::before {
    content: " ";
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: #ffffff;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
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
            <NavItem>About</NavItem>
            <NavItem>Benefits</NavItem>
            <NavItem>Tokenomics</NavItem>
          </NavItems>
          <Button className="desktop">BUY TATETRIX</Button>
        </Nav>
        <Button className="mobile">BUY</Button>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
