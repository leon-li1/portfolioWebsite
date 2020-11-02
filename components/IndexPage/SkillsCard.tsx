import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/constants";
import { Card } from "../Card";

export const SkillsCard = () => (
  <Card backgroundColor={COLORS.reallyDarkBlue} offset={{ x: -80, y: 0 }}>
    <Table>
      <tbody>
        <tr>
          <td>
            <strong>Languages</strong>
          </td>
          <td>
            C++ • Java • JavaScript • TypeScript • Python • Scala • SQL • HTML •
            CSS
          </td>
        </tr>
        <tr>
          <td>
            <strong>Technologies</strong>
          </td>
          <td>Linux • React • Node.js • Express • Bash • Figma • Git</td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

const Table = styled.table`
  td {
    padding: 5px;
  }
`;
