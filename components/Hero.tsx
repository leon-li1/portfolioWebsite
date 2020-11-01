import styled from "styled-components";

export const Hero = () => {
  return (
    <HeroContainer>
      <h1>👋 Hey, I'm Leon!</h1>
      <IconContainer>
        <a href="/leonli-resume.pdf" target="_blank">
          <SVGIcon src="./file-text.svg" />
        </a>
        <a href="https://github.com/leon-li1" target="_blank">
          <SVGIcon src="./github.svg" />
        </a>
        <a href="https://www.linkedin.com/in/leon-li1/" target="_blank">
          <SVGIcon src="./linkedin.svg" />
        </a>
      </IconContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  padding: 45vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
`;

const SVGIcon = styled.img`
  margin: 5px 20px;
  height: 1.5em;
`;
