import React from "react";
import styled from "styled-components";

import { FormattedMessage, Link } from "gatsby-plugin-intl";

import Language from "./language";

import { TextBtn } from "./shared/button";

const Container = styled.div`
    display: flex;

    & > * {
        margin: 0 1em;
    }
`;

const Header = () => (
    <header>
        <Container>
            <TextBtn as={Link} to="/">
                <FormattedMessage id="nav.home" />
            </TextBtn>
            <TextBtn as={Link} to="/portfolio">
                <FormattedMessage id="nav.portfolio" />
            </TextBtn>
            <TextBtn as={Link} to="/engineering">
                <FormattedMessage id="nav.engineering" />
            </TextBtn>
            <TextBtn as={Link} to="/contact">
                <FormattedMessage id="nav.contact" />
            </TextBtn>
            <Language />
        </Container>
    </header>
);

export default Header;
