import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../utils/colors";

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
              <Link href="/leonli-resume.pdf">
                <a>
                  <li>Resume</li>
                </a>
              </Link>
              <Link href="https://github.com/leon-li1">
                <a>
                  <li>Github</li>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/leon-li1/">
                <a>
                  <li>Linkedin</li>
                </a>
              </Link>
            </ul>
          </li>
          <li>
            <strong>Projects</strong>
            <ul>
              <a href="#urban-lyrics">
                <li>
                  Urban Lyrics
                  <NewBadge />
                </li>
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
`;

const HeaderBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  position: fixed;
  height: 60px;
  width: 100vw;
  background-color: ${COLORS.black}80;
`;

type MenuContainerProps = {
  showMenu: boolean;
};

const MenuContainer = styled.div<MenuContainerProps>`
  position: fixed;
  top: 60px;
  left: ${({ showMenu }) => (showMenu ? "0px" : "-300px")};
  background-color: ${COLORS.darkBlue};
  width: 300px;
  transition: left 0.5s ease-in-out;
  color: white;
  font-size: 1.2em;
  li {
    list-style-type: none;
    padding: 0.4em 0;
  }
  a {
    text-decoration: none;
    color: white;
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
  background-color: white;
  border-radius: 12px;
  vertical-align: top;
  font-size: 0.3em;
  color: ${COLORS.darkBlue};
  padding: 0 0.8em;
  margin: 1em;
`;
