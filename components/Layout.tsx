import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
    </Head>
    <Header />
    {children}
  </Container>
);

const Container = styled.div`
  position: relative;
`;

export default Layout;
