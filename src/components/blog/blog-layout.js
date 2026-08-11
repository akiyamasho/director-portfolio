import React from "react";
import PropTypes from "prop-types";

import ArticleSectionLinks from "./article-section-links";
import ArticleShare from "./article-share";
import Layout from "../layout";
import "./blog.css";

const BlogLayout = ({ children, article }) => (
    <Layout>
        <div className="blog-shell">
            {children}
            {article ? (
                <>
                    <ArticleSectionLinks />
                    <ArticleShare />
                </>
            ) : null}
        </div>
    </Layout>
);

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
    article: PropTypes.bool,
};

BlogLayout.defaultProps = { article: false };

export default BlogLayout;
