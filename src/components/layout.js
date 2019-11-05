/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
    <>
        <Header />
        <div>
            <main>{children}</main>
            <footer>footer</footer>
        </div>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);
