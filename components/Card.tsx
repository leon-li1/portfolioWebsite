import { FC, ReactNode } from "react";
import styled from "styled-components";
import { SMALL } from "../utils/constants";

type CardProps = {
  backgroundColor: string;
  children: ReactNode;
  offset: { x: number, y: number };
  widthOffset?: number;
  id?: string;
};

export const Card: FC<CardProps> = ({ backgroundColor, offset, children, widthOffset = 0, id = "" }) => (
  <Container backgroundColor={backgroundColor} offset={offset} widthOffset={widthOffset} id={id}>
    <ThreeDotSvg />
    {children}
  </Container>
);

type ContainerProps = {
  backgroundColor: string;
  offset: { x: number, y: number };
  widthOffset: number;
};

const Container = styled.div<ContainerProps>`
  background-color: ${p => p.backgroundColor};
  transform: translate(${p => p.offset.x}px, ${p => p.offset.y}px);
  border-radius: 23px;
  padding: 20px;
  margin: 50px -${p => p.widthOffset / 2}px; /* why is it negative*/
  font-size: 0.8em;
  @media (max-width: ${SMALL}) {
    margin: 0;
    transform: none;
    margin-bottom: 20px;
  }
`;

const ThreeDotSvg = styled.img.attrs({
  src: '/three-dot.svg',
})`
  display: block;
  height: 10px;
  margin-bottom: 15px;
`;
