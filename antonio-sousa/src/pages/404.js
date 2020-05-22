import React, { useEffect } from "react";

import { navigate } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <Layout>
      <SEO title="404: Not found" />
    </Layout>
  );
};

export default NotFoundPage;
