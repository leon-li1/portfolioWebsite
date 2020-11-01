import React, { FC, ReactNode, useRef, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../utils/constants";
import { usePageResize } from "../utils/usePageResize";
import { Bio } from "./Bio";

type CardLayoutProps = {
  children: ReactNode;
  footer: ReactNode;
};

export const CardLayout: FC<CardLayoutProps> = ({ children, footer }) => {
  const [height, setHeight] = useState('200vh');
  const floatingDiv = useRef<HTMLDivElement>(null);
  
  usePageResize(() => {
    console.log('resize');
    const newHeight = floatingDiv.current?.getBoundingClientRect()?.height;
    setHeight(newHeight ? `${newHeight}px` : '200vh');
  });

  return (
    <ContainerForTheContainer>
    <Container>
      <main>
        <Bio />
        <FloatingContainer ref={floatingDiv}>
          {children}
        </FloatingContainer>
        <Spacer height={height}/>
      </main>
      <FooterContainer>
        {footer}
      </FooterContainer>
    </Container>
    </ContainerForTheContainer>
  );
};

type SpacerProps = { height: string };

const Spacer = styled.div<SpacerProps>`
  height: ${p => p.height};
  transition: height 0.5s ease-in-out;
`;

const ContainerForTheContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background-color: ${COLORS.darkBlue};
  border-radius: 38px;
  margin: 0 100px;
  max-width: 1200px;
  padding: 50px;
  overflow: hidden;
`;

const FloatingContainer = styled.div`
  position: absolute;
  width: calc(100% - 200px - 100px);
  max-width: calc(1200px - 100px);
`;

const FooterContainer = styled.footer`
  background-color: ${COLORS.reallyDarkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 20px -50px -50px -50px;
  z-index: 2;
  * {
    margin: 0 10px;
  }
`;
