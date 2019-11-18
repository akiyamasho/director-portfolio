import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Backdrop from "../components/home/backdrop";
import Welcome from "../components/home/welcome";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Backdrop />
        <Welcome />
    </Layout>
);

export default IndexPage;
