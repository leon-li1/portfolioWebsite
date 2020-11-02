import styled from "styled-components";
import { SMALL } from "../utils/constants";

export const Bio = () => (
  <Container>
    <ProfileImg />
    <TextContainer>
      <h4>
        I'm a third year Computer Science student at{" "}
        <a href="https://i.redd.it/zfjyptgr04651.jpg" target="_blank">
          UWaterloo
        </a>
        .
      </h4>
      <p>
        I enjoy listening to music and lip syncing to my favourite songs in
        front of my bathroom mirror. I’m also an amateur 8-ball pool player.{" "}
        <br />
        You can reach me at: <a href="mailto:mail@leonli.cc">mail@leonli.cc</a>
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
`;

const TextContainer = styled.div`
  margin-left: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${SMALL}) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;
