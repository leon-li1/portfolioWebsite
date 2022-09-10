import Layout from "../components/Layout";
import { Hero } from "../components/Hero";
import styled from "styled-components";
import { CardLayout } from "../components/CardLayout";
import React from "react";
import { SkillsCard } from "../components/IndexPage/SkillsCard";
import { FlexlogCard } from "../components/IndexPage/FlexlogCard";
import { UrbanLyricsCard } from "../components/IndexPage/UrbanLyricsCard";
import { GestureRecognizerCard } from "../components/IndexPage/GestureRecognizerCard";
import { DataRushCard } from "../components/IndexPage/DataRushCard";
import { FroggerCard } from "../components/IndexPage/FroggerCard";

const footerContent = () => (
  <>
    <span>Perth, Australia</span>
    <AirplaneSVG />
    <span>East Gwillimbury, ON</span>
  </>
);

const IndexPage = () => (
  <Layout title="Leon Li ~ SWE Portfolio">
    <TopWaveSVG />
    <Hero />
    <CardLayout footer={footerContent()}>
      <SkillsCard />
      <FlexlogCard />
      <UrbanLyricsCard />
      <GestureRecognizerCard />
      <DataRushCard />
      <FroggerCard />
    </CardLayout>
    <BottomWaveSVG />
  </Layout>
);

const TopWaveSVG = styled.img.attrs({
  src: "/top-page-wave.svg",
})`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const BottomWaveSVG = styled.img.attrs({
  src: "/bottom-page-wave.svg",
})`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

const AirplaneSVG = styled.img.attrs({
  src: "/airplane.svg",
})`
  transform: translate(-2px, 5px);
`;

export default IndexPage;
