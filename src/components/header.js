import React, { useState } from "react";
import styled from "styled-components";

import { FormattedMessage, Link } from "gatsby-plugin-intl";

import Language from "./language";

import { TextBtn } from "./shared/button";

export const navHeightPx = "30";
const btnBorderColour = "#888";

const Container = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: right;

    background: #fff;
    opacity: 0.8;

    height: 30px;

    @media only screen and (max-width: 768px) {
        height: auto; 
    }
`;

export const NavigationLink = styled(TextBtn)`
    padding: 0 1em;

    @media only screen and (max-width: 768px) {
        border-bottom: 1px solid ${btnBorderColour};
        padding: 0.5em 1em;
        height: auto;
    }
`;

const Hamburger = styled(TextBtn)`
    display: none;
    transition: 0.1s ease-in;
    cursor: pointer;
    padding-right: 0.5em;
    height: ${navHeightPx}px;
    width: 100%;

    @media only screen and (max-width: 768px) {
        display: block;
        text-align: right;
        border-bottom: 1px solid ${btnBorderColour};
    }
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    width: 100%;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
        ${props => !props.isMobileMenuVisible && "display: none;"}
        flex-direction: column;
    }
`;

const Header = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    return (
        <header>
            <Container>
                <Hamburger
                    onClick={() => {
                        setIsMobileMenuVisible(!isMobileMenuVisible);
                    }}
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
