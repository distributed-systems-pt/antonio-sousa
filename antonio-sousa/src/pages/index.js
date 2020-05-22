import React from "react";

import SEO from "../components/seo";
import Layout from "../components/Layout";
import HomeContent from "../components/HomeContent";

const IndexPage = () => (
  <Layout>
    <SEO title="António Sousa" />
    <HomeContent />
  </Layout>
);

export default IndexPage;