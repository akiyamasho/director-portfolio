import React from "react";
import PropTypes from "prop-types";

import Layout from "../layout";
import "./blog.css";

const BlogLayout = ({ children }) => (
    <Layout>
        <div className="blog-shell">{children}</div>
    </Layout>
);

BlogLayout.propTypes = { children: PropTypes.node.isRequired };

export default BlogLayout;
