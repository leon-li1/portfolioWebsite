import styled from "styled-components";
import { COLORS, SMALL } from "../../utils/constants";
import { Card } from "../Card";

export const FlexlogCard = () => (
  <Card backgroundColor={COLORS.blue} offset={{ x: 120, y: 10 }} id="flexlog">
    <h2>Check out my latest project, Flexlog!</h2>
    <HorziontalContainer>
      <Img />
      <RHS>
        <StackTable>
          <tbody>
            <tr>
              <td>Frontend</td>
              <td>React, Next.js, Styled Components, Vercel</td>
            </tr>
            <tr>
              <td>Backend</td>
              <td>Node.js, Express, MongoDB, Heroku</td>
            </tr>
          </tbody>
        </StackTable>
        <p>
          A fitness tracking and sharing web app built with the MERN stack and
          Next.js. Features authentication and authorization using JSON Web
          Tokens for a secure and improved user experience.
        </p>
        <a href="https://github.com/leon-li1/flexlog" target="_blank">
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
  src: "/flexlog.png",
})`
  width: 50%;
  @media (max-width: ${SMALL}) {
    width: 100%;
  }
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
