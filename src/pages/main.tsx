import React from "react";
import About from "../components/About";
import Education from "../components/Education";
import Portfolio from "../components/Portfolio";
import Layout from "../components/Layout";
import "../css/comic_style.css";
import "../css/main_style.css";

const Main: React.FC = () => (
  <Layout>
    <About />
    <Education />
    <Portfolio />
  </Layout>
);

export default Main;
