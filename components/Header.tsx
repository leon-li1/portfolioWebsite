import { useState } from "react";
import styled from "styled-components";
import { COLORS, SMALL } from "../utils/constants";

export const Header = () => {
  const [showMenu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!showMenu);

  return (
    <HeaderBackground>
      <MenuContainer showMenu={showMenu}>
        <ul>
          <li>
            <strong>About Me</strong>
            <ul>
              <a target="_blank" href="/LeonLiResume.pdf.pdf">
                <li>Resume</li>
              </a>
              <a target="_blank" href="https://github.com/leon-li1">
                <li>Github</li>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/leon-li1/">
                <li>Linkedin</li>
              </a>
            </ul>
          </li>
          <li>
            <strong>Projects</strong>
            <ul>
              <a href="#flexlog">
                <li>
                  Flexlog
                  <NewBadge />
                </li>
              </a>
              <a href="#urban-lyrics">
                <li>Urban Lyrics</li>
              </a>
              <a href="#data-rush">
                <li>Data Rush</li>
              </a>
              <a href="#frogger">
                <li>Frogger</li>
              </a>
            </ul>
          </li>
        </ul>
      </MenuContainer>
      <SandwichIcon onClick={toggleMenu} src="/sandwich-menu.svg" />
      <img height="45%" src="/site-logo.svg" />
    </HeaderBackground>
  );
};

const SandwichIcon = styled.img`
  height: 30%;
  cursor: pointer;
  z-index: 2;
`;

const HeaderBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: fixed;
  height: 60px;
  width: 100%;
  z-index: 1;
  background-color: ${COLORS.black}80;
`;

type MenuContainerProps = {
  showMenu: boolean;
};

const MenuContainer = styled.div<MenuContainerProps>`
  position: fixed;
  top: 0px;
  padding-top: 30px;
  left: ${({ showMenu }) => (showMenu ? "0px" : "-10em")};
  width: 10em;
  background-color: ${COLORS.darkBlue};
  transition: left 0.5s ease-in-out;
  font-size: 1.2em;
  li {
    list-style-type: none;
    font-size: 0.8em;
    padding: 0.4em 0;
  }
  a {
    text-decoration: none;
    color: ${COLORS.white};
  }
  @media (max-width: ${SMALL}) {
    width: 100%;
    left: ${({ showMenu }) => (showMenu ? "0px" : "-100%")};
  }
`;

const NewBadge = () => {
  return (
    <NewBadgeContainer>
      <strong>New!</strong>
    </NewBadgeContainer>
  );
};

const NewBadgeContainer = styled.div`
  display: inline-block;
  background-color: ${COLORS.white};
  border-radius: 12px;
  vertical-align: top;
  font-size: 0.3em;
  color: ${COLORS.darkBlue};
  padding: 0 0.8em;
  margin: 1em;
`;
