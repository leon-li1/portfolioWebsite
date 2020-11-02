import styled from "styled-components";
import { COLORS, SMALL } from "../../utils/constants";
import { Card } from "../Card";

export const UrbanLyricsCard = () => (
  <Card
    backgroundColor={COLORS.blue}
    offset={{ x: 120, y: 10 }}
    id="urban-lyrics"
  >
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
          Urban Lyrics is an extension that provides its user with lyrics to a
          song with the click of a button. It also has integrated search boxes
          for word definitions by Urban Dictionary and also for custom song
          lookups. At the end of the song lyrics is also a Genius link for the
          current song displayed.
        </p>
        <a href="https://github.com/leon-li1/Urban-Lyrics" target="_blank">
          <Icon src="/github.svg" />
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/urban-lyrics/akahkofaophahlgdibcfelkfnamedong?hl=en"
          target="_blank"
        >
          <Icon src="/chrome.svg" />
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

const StackTable = styled.table`
  td:first-child {
    white-space: nowrap;
    text-transform: uppercase;
    text-align: left;
    vertical-align: top;
    font-weight: bold;
    padding: 5px 5px 0px 0px;
  }
`;

const Img = styled.img.attrs({
  src: "/urban-lyrics.png",
})`
  width: 50%;
  @media (max-width: ${SMALL}) {
    width: 100%;
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
