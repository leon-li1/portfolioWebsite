import styled from "styled-components";
import { COLORS, SMALL } from "../../utils/constants";
import { Card } from "../Card";

export const UrbanLyricsCard = () => (
  <Card
    backgroundColor={COLORS.turquoise}
    offset={{ x: -120, y: 20 }}
    id="urban-lyrics"
  >
    <Container>
      <h2>Urban Lyrics</h2>
      <HorziontalContainer>
        <Img />
        <RHS>
          <StackTable>
            <tbody>
              <tr>
                <td>Frontend</td>
                <td>
                  Typescript, React, Styled Components, Chrome API, Webpack
                </td>
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
            <svg
              height="2em"
              viewBox="0 0 40 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.8462 41V33.822C27.9154 32.9376 27.7965 32.0485 27.4973 31.2138C27.198 30.3791 26.7254 29.618 26.1108 28.9811C31.9077 28.3319 38 26.1247 38 15.9976C37.9995 13.408 37.008 10.9178 35.2308 9.0422C36.0723 6.7766 36.0128 4.27237 35.0646 2.0497C35.0646 2.0497 32.8862 1.40052 27.8462 4.79476C23.6148 3.64262 19.1544 3.64262 14.9231 4.79476C9.88308 1.40052 7.70462 2.0497 7.70462 2.0497C6.75639 4.27237 6.69688 6.7766 7.53846 9.0422C5.74793 10.9317 4.75543 13.4444 4.76923 16.0533C4.76923 26.1061 10.8615 28.3133 16.6585 29.0367C16.0511 29.6673 15.5826 30.4193 15.2836 31.2437C14.9847 32.0682 14.8618 32.9467 14.9231 33.822V41M14.9231 35.4357C5.69231 38.2178 5.69231 30.7987 2 29.8713L14.9231 35.4357Z"
                stroke="#0D0E4E"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://chrome.google.com/webstore/detail/urban-lyrics/akahkofaophahlgdibcfelkfnamedong?hl=en"
            target="_blank"
          >
            <Icon src="/chrome.svg" />
          </a>
        </RHS>
      </HorziontalContainer>
    </Container>
  </Card>
);

const Icon = styled.img`
  display: inline-block;
  height: 2em;
  padding-left: 10px;
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

const Container = styled.div`
  color: ${COLORS.darkBlue};
`;

const HorziontalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 0em;
  @media (max-width: ${SMALL}) {
    flex-direction: column;
  }
`;

const RHS = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0em 1.2em;
  @media (max-width: ${SMALL}) {
    margin: 1.2em;
  }
  > * {
    margin-bottom: 10px;
  }
`;
