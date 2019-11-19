import React from "react";

import Layout from "../components/layout";
import { FormattedMessage } from "gatsby-plugin-intl";

import SEO from "../components/seo";
import PageTitle from "../components/pageTitle";

const Portfolio = () => (
    <Layout>
        <SEO title="Portfolio" />
        <PageTitle subTitle={<FormattedMessage id="portfolio.subTitle"/>} title={<FormattedMessage id="portfolio.title"/>} />
    </Layout>
);

export default Portfolio;
