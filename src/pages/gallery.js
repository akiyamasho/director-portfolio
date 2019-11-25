import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/pageTitle";

const Gallery = () => (
    <Layout>
        <SEO title="Gallery" />
        <PageTitle
            subTitle={<FormattedMessage id="gallery.subTitle" />}
            title={<FormattedMessage id="gallery.title" />}
            shouldRenderFromRight
        />
    </Layout>
);

export default Gallery;
