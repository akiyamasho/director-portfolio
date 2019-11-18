import React, { useState } from "react";
import styled from "styled-components";

import { FormattedMessage, Link } from "gatsby-plugin-intl";

import Language from "./language";

import { TextBtn } from "./shared/button";

import {
    themeColour,
    textBtnColour,
    textBtnHoverColour,
} from "./shared/colours";

export const navHeightPx = "50";
const invertedColour = "#000";
const invertedHoverColour = "#444";
const btnBorderColour = "#888";
const menuVisibleBgColour = "rgba(255, 255, 255, 0.7)";

const Container = styled.div`
    position: fixed;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;

    opacity: 0.8;

    height: ${navHeightPx}px;
    color: ${themeColour};

    @media only screen and (max-width: 768px) {
        height: auto;
        ${props =>
            props.isMobileMenuVisible && `background: ${menuVisibleBgColour};`}
    }
`;

export const NavigationLink = styled.a`
    padding: 0 1em;

    text-decoration: none;
    cursor: pointer;

    color: ${textBtnColour};

    transition: 0.2s cubic-bezier(0.355, 0.045, 0.645, 0);

    &:hover {
        color: ${textBtnHoverColour};
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${btnBorderColour};
        padding: 0.5em 0 0.5em 1em;
        height: ${navHeightPx}px;
        width: 100%;
        color: ${invertedColour};
        font-size: 1.25em;

        &:hover {
            color: ${invertedHoverColour};
        }
    }
`;

const Hamburger = styled(TextBtn)`
    display: none;

    @media only screen and (max-width: 768px) {
        cursor: pointer;
        padding-right: 0.5em;
        height: ${navHeightPx}px;
        width: 100%;
        display: block;
        text-align: right;
        color: ${textBtnColour};

        &:hover {
            color: ${textBtnHoverColour};
        }

        ${props =>
            props.isMobileMenuVisible &&
            `border-bottom: 1px solid ${btnBorderColour};
            color: ${invertedColour};

            &:hover {
                color: ${invertedHoverColour};
            }`}
    }
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    width: 100%;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
        ${props => !props.isMobileMenuVisible && "display: none;"}
        flex-direction: column;
        text-align: left;
    }
`;

const Header = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    return (
        <header>
            <Container isMobileMenuVisible={isMobileMenuVisible}>
                <Hamburger
                    onClick={() => {
                        setIsMobileMenuVisible(!isMobileMenuVisible);
                    }}
                    isMobileMenuVisible={isMobileMenuVisible}
                >
                    <i className="material-icons">
                        {isMobileMenuVisible ? "menu_open" : "menu"}
                    </i>
                </Hamburger>

                <LinkContainer isMobileMenuVisible={isMobileMenuVisible}>
                    <NavigationLink as={Link} to="/">
                        <FormattedMessage id="nav.home" />
                    </NavigationLink>
                    <NavigationLink as={Link} to="/portfolio">
                        <FormattedMessage id="nav.portfolio" />
                    </NavigationLink>
                    <NavigationLink as={Link} to="/engineering">
                        <FormattedMessage id="nav.engineering" />
                    </NavigationLink>
                    <NavigationLink as={Link} to="/contact">
                        <FormattedMessage id="nav.contact" />
                    </NavigationLink>
                    <Language />
                </LinkContainer>
            </Container>
        </header>
    );
};

export default Header;
