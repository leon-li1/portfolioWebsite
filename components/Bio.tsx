import styled from "styled-components";
import { SMALL } from "../utils/constants";

export const Bio = () => (
  <Container>
    <ProfileImg />
    <TextContainer>
      <h3>
        I'm a third year Computer Science student at{" "}
        <a href="https://i.redd.it/zfjyptgr04651.jpg" target="_blank">
          UWaterloo
        </a>
        .
      </h3>
      <p>
        I enjoy listening to music and occasionally performing my favourite
        songs in front of the bathroom mirror (I'm pretty shy though so you
        would rarely catch me doing so). I’m also a mediocre at best 8-ball pool
        player. Thanks for visiting my website! <br />
        You can reach me at <a href="mailto:mail@leonli.cc">mail@leonli.cc</a>
      </p>
    </TextContainer>
  </Container>
);

const ProfileImg = styled.img.attrs({
  src: "me.jpg",
})`
  border-radius: 50%;
  height: 155px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

const TextContainer = styled.div`
  margin-left: 20px;
  font-size: 0.8em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${SMALL}) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
