import React from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/constants";
import { Card } from "../Card";

export const SkillsCard = () => (
  <Card backgroundColor={COLORS.reallyDarkBlue} offset={{ x: -80, y: -10 }}>
    <Table>
      <tbody>
        <tr>
          <td>
            <strong>Languages</strong>
          </td>
          <td>Python • C++ • JavaScript • TypeScript • Java • Kotlin • Scala • SQL • HTML • CSS</td>
        </tr>
        <tr>
          <td>
            <strong>Technologies</strong>
          </td>
          <td>
            React • Spring • Node.js • Git • MongoDB • PostgreSQL • Angular • Docker • Kubernetes • Android SDK
          </td>
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
