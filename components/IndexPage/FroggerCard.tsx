import styled from "styled-components";
import { COLORS, SMALL } from "../../utils/constants";
import { Card } from "../Card";

export const FroggerCard = () => (
  <Card
    backgroundColor={COLORS.mediumBlue}
    offset={{ x: 120, y: 0 }}
    id="frogger"
  >
    <Heading>Frogger</Heading>
    <HorziontalContainer>
      <Img />
      <RHS>
        <h4>Java, Java Swing</h4>
        <p>
          One of the most popular classic arcade game of the 80’s. Frogger is a
          game in which the player guides a frog into one of the five caves. The
          frog starts at the bottom of the screen and the caves are at the top
          of the screen so the player must navigate the frog whilee avoiding
          obstacles which results in a loss of a life.
        </p>
        <a href="https://github.com/leon-li1/Frogger" target="_blank">
          <Icon src="/github.svg" />
        </a>
      </RHS>
    </HorziontalContainer>
  </Card>
);

const Icon = styled.img`
  display: inline-block;
  height: 2em;
  padding-right: 10px;
`;

const Heading = styled.h2`
  margin-bottom: 10px;
`;

const Img = styled.img.attrs({
  src: "/frogger.png",
})`
  width: 50%;
  max-height: 15em;
  border-radius: 20px;
  margin-right: 15px;
  @media (max-width: ${SMALL}) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const HorziontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${SMALL}) {
    flex-direction: column;
  }
`;

const RHS = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  > * {
    margin-bottom: 10px;
  }
`;
