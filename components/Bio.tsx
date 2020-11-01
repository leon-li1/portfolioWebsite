import styled from "styled-components";
import { SMALL } from "../utils/constants";

export const Bio = () => (
  <Container>
    <ProfileImg />
    <TextContainer>
      <h4>I'm a third year Computer Science student at Waterloo.</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua. Lorem ipsum amet, consectetur adipiscing elit
      </p>
      <br/>
      <p>You can reach me at: <a href="mailto:leon.li1@uwaterloo.ca">leon.li1@uwaterloo.ca</a></p>
    </TextContainer>
  </Container>
);

const ProfileImg = styled.img.attrs({
  src: 'me.jpg'
})`
  border-radius: 50%;
  height: 150px;
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

