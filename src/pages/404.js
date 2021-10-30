import React, { useEffect } from "react";

import { navigate } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <Layout>
      <Seo title="404: Not found" />
    </Layout>
  );
};

export default NotFoundPage;
