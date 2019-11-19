import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/pageTitle";

const Engineering = () => (
    <Layout>
        <SEO title="Engineering" />
        <PageTitle
            subTitle={<FormattedMessage id="engineering.subTitle" />}
            title={<FormattedMessage id="engineering.title" />}
            shouldRenderFromRight
        />
    </Layout>
);

export default Engineering;
