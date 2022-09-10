import React, { FC, ReactNode, useRef, useState } from "react";
import styled from "styled-components";
import { COLORS, SMALL } from "../utils/constants";
import { usePageResize } from "../utils/usePageResize";
import { Bio } from "./Bio";

type CardLayoutProps = {
  children: ReactNode;
  footer: ReactNode;
};

export const CardLayout: FC<CardLayoutProps> = ({ children, footer }) => {
  const [height, setHeight] = useState("200vh");
  const floatingDiv = useRef<HTMLDivElement>(null);

  usePageResize(() => {
    // console.log("resize");
    const newHeight = floatingDiv.current?.getBoundingClientRect()?.height;
    setHeight(newHeight ? `${newHeight}px` : "200vh");
  });

  return (
    <ContainerForTheContainer>
      <Container>
        <main>
          <Bio />
          <FloatingContainer ref={floatingDiv}>{children}</FloatingContainer>
          <Spacer height={height} />
        </main>
        <FooterContainer>{footer}</FooterContainer>
      </Container>
    </ContainerForTheContainer>
  );
};

type SpacerProps = { height: string };

const Spacer = styled.div<SpacerProps>`
  height: ${(p) => p.height};
  transition: height 0.5s ease-in-out;
`;

const ContainerForTheContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const margin = 100;
const maxwidth = 1200;
const padding = 50;
const mobilePadding = 20;

const Container = styled.div`
  background-color: ${COLORS.darkBlue};
  border-radius: 38px;
  margin: 0 ${margin}px;
  max-width: ${maxwidth}px;
  padding: ${padding}px;
  overflow: hidden;
  @media (max-width: ${SMALL}) {
    margin: 0;
    padding: ${mobilePadding}px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const FloatingContainer = styled.div`
  position: absolute;
  width: calc(100% - ${margin * 2}px - ${padding * 2}px);
  max-width: calc(${maxwidth}px - ${padding * 2}px);
  @media (max-width: ${SMALL}) {
    width: calc(100% - ${mobilePadding * 2}px);
    padding-bottom: 20px;
  }
`;

const FooterContainer = styled.footer`
  background-color: ${COLORS.reallyDarkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 50px -${padding}px -${padding}px -${padding}px;
  z-index: 2;
  @media (max-width: ${SMALL}) {
    margin: 0px -${mobilePadding}px -${mobilePadding}px -${mobilePadding}px;
  }
  * {
    margin: 0 10px;
    @media (max-width: ${SMALL}) {
      margin: 0 2px;
    }
  }
`;
