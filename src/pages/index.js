import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Backdrop from "../components/home/backdrop";
import Welcome from "../components/home/welcome";

const IndexPage = ({ intl }) => (
    <Layout>
        <SEO
            title={intl.locale === "ja" ? "ホーム" : "Home"}
            lang={intl.locale}
        />
        <Backdrop />
        <Welcome />
    </Layout>
);

export default injectIntl(IndexPage);
