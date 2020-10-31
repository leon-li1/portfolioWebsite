import styled from "styled-components";

export const Hero = () => {
  return (
    <HeroContainer>
      <h1>👋 Hey, I'm Leon!</h1>
      <IconContainer>
        <a href="/leonli-resume.pdf">
          <SVGIcon src="./file-text.svg" />
        </a>
        <a target="_blank" href="https://github.com/leon-li1">
          <SVGIcon src="./github.svg" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/leon-li1/">
          <SVGIcon src="./linkedin.svg" />
        </a>
      </IconContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  padding: 20vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3em;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
`;

const SVGIcon = styled.img`
  margin: 0 20px;
  height: 40px;
`;
