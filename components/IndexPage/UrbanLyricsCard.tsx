import styled from 'styled-components';
import { COLORS } from '../../utils/constants';
import { Card } from '../Card';

export const UrbanLyricsCard = () => (
  <Card backgroundColor={COLORS.blue} offset={{x: 120, y: 10}}>
    <h2>Check out my latest project, Urban Lyrics!</h2>
    <HorziontalContainer>
      <Img />
      <RHS>
        <StackTable>
          <tbody>
            <tr>
              <td>Frontend</td>
              <td>Typescript, React, Styled Components, Chrome API, Webpack</td>
            </tr>
            <tr>
              <td>Backend</td>
              <td>Node.js, Express, Puppeteer, Heroku</td>
            </tr>
          </tbody>
        </StackTable>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="https://github.com/leon-li1/Urban-Lyrics" target="_blank"><Icon src="/github.svg"/></a>
        <a href="https://chrome.google.com/webstore/detail/urban-lyrics/akahkofaophahlgdibcfelkfnamedong?hl=en" target="_blank"><Icon src="/chrome.svg"/></a>
      </RHS>
    </HorziontalContainer>
  </Card>
);

const Icon = styled.img`
  display: inline-block;
  height: 2em;
  padding-right: 10px;
`;

const StackTable = styled.table`
  td:first-child {
    white-space: nowrap;
    text-transform: uppercase;
    text-align: left;
    font-weight: bold;
    padding-right: 5px;
  }
`;

const Img = styled.img.attrs({
  src: "/urban-lyrics.png"
})`
  width: 50%;
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
