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

export const navHeightPx = "75";
const invertedColour = "#000";
const invertedHoverColour = "#444";
const btnBorderColour = "#888";
const menuVisibleBgColour = "rgba(255, 255, 255, 0.9)";

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
        ${(props) =>
            props.isMobileMenuVisible && `background: ${menuVisibleBgColour};`}
    }
`;

export const NavigationLink = styled.a`
    padding: 0 1.5em;

    text-decoration: none;
    letter-spacing: 1px;
    cursor: pointer;
    display: flex;
    align-items: center;

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
        width: 100%;
        color: ${invertedColour};
        font-size: 1.25em;

        &:hover {
            color: ${invertedHoverColour};
        }
    }
`;

const HamburgerContainer = styled.div`
    display: none;
    padding-right: 0.5em;
    height: ${navHeightPx}px;
    width: 100%;
    text-align: right;
    align-items: center;
    justify-content: flex-end;
    ${(props) =>
        props.isMobileMenuVisible &&
        `border-bottom: 1px solid ${btnBorderColour};`}

    @media only screen and (max-width: 768px) {
        display: flex;
    }
`;

const Hamburger = styled(TextBtn)`
    cursor: pointer;
    display: block;
    color: ${textBtnColour};

    &:hover {
        color: ${textBtnHoverColour};
        ${(props) =>
            props.isMobileMenuVisible && `color: ${invertedHoverColour};`}
    }

    i {
        margin-right: 1em;
        font-size: 2em;
        color: ${themeColour};

        ${(props) => props.isMobileMenuVisible && `color: ${invertedColour};`}
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
        ${(props) => !props.isMobileMenuVisible && "display: none;"}
        flex-direction: column;
        text-align: left;
    }
`;

const Header = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    return (
        <header>
            <Container isMobileMenuVisible={isMobileMenuVisible}>
                <HamburgerContainer>
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
                </HamburgerContainer>

                <LinkContainer isMobileMenuVisible={isMobileMenuVisible}>
                    <NavigationLink as={Link} to="/">
                        <FormattedMessage id="nav.home" />
                    </NavigationLink>
                    <NavigationLink as={Link} to="/portfolio">
                        <FormattedMessage id="nav.portfolio" />
                    </NavigationLink>
                    <NavigationLink
                        target="_blank"
                        href="https://www.instagram.com/akiyamasho"
                    >
                        <FormattedMessage id="nav.gallery" />
                        &nbsp;
                        <i className="material-icons">launch</i>
                    </NavigationLink>
                    <NavigationLink
                        target="_blank"
                        href="https://www.linkedin.com/in/shoakiyama"
                    >
                        <FormattedMessage id="nav.engineering" />
                        &nbsp;
                        <i className="material-icons">launch</i>
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
