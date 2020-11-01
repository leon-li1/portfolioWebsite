import styled from "styled-components";

export const Bio = () => (
  <Container>
    <ProfileImg />
    <TextContainer>
      <h4>I'm a third year Comuter Science student at Waterloo.</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <br/>
      <p>You can reach me at: leon.li1@uwaterloo.ca</p>
    </TextContainer>
  </Container>
);

const ProfileImg = styled.img.attrs({
  src: 'me.jpg'
})`
  border-radius: 50%;
  height: 100px;
`;

const TextContainer = styled.div`
  margin-left: 20px; 
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

