import React from "react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import HomeContent from "../components/home-content";

const HomePage = () => (
  <Layout>
    <Seo title="António Sousa - Software Engineer" />
    <HomeContent />
  </Layout>
);

export default HomePage;
