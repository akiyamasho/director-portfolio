/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";

import Header, { navHeightPx } from "./header";
import "./layout.css";

const Content = styled.div`
    padding-top: ${navHeightPx}px;
    min-height: calc(100vh - ${navHeightPx}px);
`;

const Layout = ({ children }) => (
    <>
        <Header />
        <main>
            <Content>{children}</Content>
        </main>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);
