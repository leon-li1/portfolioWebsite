import Link from "next/link";
import Layout from "../components/Layout";
import { Hero } from "../components/Hero";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Hero />
  </Layout>
);

export default IndexPage;
