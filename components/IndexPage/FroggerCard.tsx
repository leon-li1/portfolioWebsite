import styled from 'styled-components';
import { COLORS } from '../../utils/constants';
import { Card } from '../Card';

export const FroggerCard = () => (
  <Card backgroundColor={COLORS.mediumBlue} offset={{x: 120, y: 0}}>
    <Heading>Frogger</Heading>
    <HorziontalContainer>
      <Img />
      <RHS>
        <h4>Java, Java Swing</h4>
        <p>
          Classic arcade game. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="https://github.com/leon-li1/Frogger" target="_blank">
          <Icon src="/github.svg"/>
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
  src: "/frogger.png"
})`
  width: 50%;
  max-height: 15em;
  border-radius: 20px;
  margin-right: 15px;
`;

const HorziontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RHS = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  > * {
    margin-bottom: 10px;
  }
`;
