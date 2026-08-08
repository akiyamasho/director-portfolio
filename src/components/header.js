import React, { useState } from "react";
import styled from "styled-components";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import Language from "./language";
import { TextBtn } from "./shared/button";
import {
    accentColour,
    projectorLight,
    themeColour,
    themeRule,
} from "./shared/colours";

export const navHeightPx = "80";

const Container = styled.div`
    position: fixed;
    z-index: 20;
    top: 0;
    width: 100%;
    min-height: ${navHeightPx}px;
    display: flex;
    align-items: center;
    background: rgba(4, 7, 10, 0.84);
    border-bottom: 1px solid ${themeRule};
    backdrop-filter: blur(16px);
`;

const Inner = styled.div`
    width: min(1440px, 100%);
    min-height: ${navHeightPx}px;
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 4vw, 4.5rem);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 360px) {
        padding-right: 1rem;
        padding-left: 1rem;
    }
`;

const Mark = styled(Link)`
    display: flex;
    flex-direction: column;
    color: ${themeColour};
    font-family: "Barlow Condensed", "Noto Sans JP", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    line-height: 1.05;
    text-decoration: none;

    small {
        margin-top: 0.35rem;
        color: ${accentColour};
        font-family: "IBM Plex Mono", monospace;
        font-size: 0.56rem;
        font-weight: 500;
        letter-spacing: 0.16em;
    }

    @media only screen and (max-width: 360px) {
        font-size: 1rem;

        small {
            font-size: 0.49rem;
            letter-spacing: 0.12em;
        }
    }
`;

const LinkContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: clamp(0.9rem, 2.1vw, 2.25rem);

    @media only screen and (max-width: 768px) {
        position: fixed;
        inset: ${navHeightPx}px 0 0;
        display: ${(props) => (props.isMobileMenuVisible ? "flex" : "none")};
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 0;
        padding: 2rem 1.5rem;
        background: #0c0c0c;
        overflow-y: auto;
    }
`;

export const NavigationLink = styled.a`
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    min-height: 44px;
    color: ${themeColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.67rem;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;

    &::after {
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 16px;
        height: 1px;
        background: ${projectorLight};
        content: "";
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 180ms ease;
    }

    &:hover::after,
    &:focus-visible::after {
        transform: scaleX(1);
    }

    @media only screen and (max-width: 768px) {
        min-height: 60px;
        border-bottom: 1px solid ${themeRule};
        font-size: 0.82rem;
    }
`;

const Hamburger = styled(TextBtn)`
    display: none;
    min-width: 44px;
    min-height: 44px;
    justify-content: center;
    color: ${themeColour};

    @media only screen and (max-width: 768px) {
        display: inline-flex;
    }
`;

const Header = () => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
    const closeMenu = () => setIsMobileMenuVisible(false);

    return (
        <header>
            <Container>
                <Inner>
                    <Mark to="/" onClick={closeMenu}>
                        秋山 翔<small>SHO AKIYAMA / DIRECTOR</small>
                    </Mark>
                    <Hamburger
                        aria-label={
                            isMobileMenuVisible
                                ? "Close navigation / ナビゲーションを閉じる"
                                : "Open navigation / ナビゲーションを開く"
                        }
                        aria-expanded={isMobileMenuVisible}
                        onClick={() =>
                            setIsMobileMenuVisible(!isMobileMenuVisible)
                        }
                    >
                        <i className="material-icons">
                            {isMobileMenuVisible ? "close" : "menu"}
                        </i>
                    </Hamburger>
                    <LinkContainer
                        aria-label="Primary navigation / メインナビゲーション"
                        isMobileMenuVisible={isMobileMenuVisible}
                    >
                        <NavigationLink as={Link} to="/" onClick={closeMenu}>
                            <FormattedMessage id="nav.home" />
                        </NavigationLink>
                        <NavigationLink
                            as={Link}
                            to="/portfolio"
                            onClick={closeMenu}
                        >
                            <FormattedMessage id="nav.portfolio" />
                        </NavigationLink>
                        <NavigationLink
                            as={Link}
                            to="/blog"
                            onClick={closeMenu}
                        >
                            <FormattedMessage
                                id="nav.blog"
                                defaultMessage="Journal"
                            />
                        </NavigationLink>
                        <NavigationLink
                            as={Link}
                            to="/engineering"
                            onClick={closeMenu}
                        >
                            <FormattedMessage id="nav.engineering" />
                        </NavigationLink>
                        <NavigationLink
                            as={Link}
                            to="/contact"
                            onClick={closeMenu}
                        >
                            <FormattedMessage id="nav.contact" />
                        </NavigationLink>
                        <NavigationLink
                            href="https://www.instagram.com/akiyamasho"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FormattedMessage id="nav.gallery" />{" "}
                            <span aria-hidden="true">↗</span>
                        </NavigationLink>
                        <Language />
                    </LinkContainer>
                </Inner>
            </Container>
        </header>
    );
};

export default Header;
