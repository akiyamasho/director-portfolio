import React from "react";
import styled from "styled-components";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import { TextLink } from "../components/shared/button";
import {
    accentColour,
    cinemaRed,
    themeMuted,
    themeRule,
} from "../components/shared/colours";
import Layout from "../components/layout";
import SEO from "../components/seo";
import instagramLogo from "../assets/sns/instagram.png";
import twitterLogo from "../assets/sns/twitter.png";
import githubLogo from "../assets/sns/github.png";
import imdbLogo from "../assets/sns/imdb.png";

const Container = styled.section`
    min-height: calc(100svh - 80px);
    width: min(1100px, 100%);
    margin: 0 auto;
    padding: clamp(4rem, 13vw, 11rem) clamp(1.25rem, 5vw, 4rem);
    display: flex;
    align-items: center;
`;
const Sheet = styled.div`
    width: 100%;
    border-top: 1px solid ${themeRule};
    border-top-color: ${cinemaRed};
    border-bottom: 1px solid ${themeRule};
    padding: clamp(2.5rem, 7vw, 6rem) 0;
`;
const Kicker = styled.p`
    margin: 0 0 1rem;
    color: ${accentColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.66rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`;
const Title = styled.h1`
    max-width: 13ch;
    margin: 0;
    font-family: "Barlow Condensed", "Noto Sans JP", sans-serif;
    font-size: clamp(4rem, 10vw, 8.5rem);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 0.86;
    text-transform: uppercase;

    html[lang="ja"] & {
        max-width: 12em;
        font-size: clamp(2.65rem, 7vw, 5.5rem);
        letter-spacing: 0;
        line-height: 1.08;
        text-transform: none;
    }
`;
const Note = styled.p`
    max-width: 30rem;
    margin: 1.5rem 0 2.2rem;
    color: ${themeMuted};
`;
const Email = styled(TextLink)`
    color: #f2efe9;
    font-family: "IBM Plex Mono", monospace;
    font-size: clamp(0.88rem, 2vw, 1.15rem);
    letter-spacing: 0.03em;
    &:hover {
        color: ${accentColour};
    }
`;
const Socials = styled.div`
    display: flex;
    gap: 0.75rem;
    margin-top: 2.5rem;
`;
const SnsLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: 1px solid ${themeRule};
    &:hover {
        border-color: ${accentColour};
    }
`;
const SnsIcon = styled.img`
    width: 23px;
    height: 23px;
`;
const socialLinks = [
    ["Instagram", "https://www.instagram.com/akiyamasho", instagramLogo],
    ["X / Twitter", "https://www.twitter.com/akiyamasho_dev", twitterLogo],
    ["GitHub", "https://www.github.com/akiyamasho", githubLogo],
    ["IMDb", "https://www.imdb.com/name/nm11692621", imdbLogo],
];

const Contact = ({ intl }) => (
    <Layout>
        <SEO
            title={intl.formatMessage({ id: "contact.seoTitle" })}
            lang={intl.locale}
        />
        <Container>
            <Sheet>
                <Kicker>
                    <FormattedMessage id="contact.kicker" />
                </Kicker>
                <Title>
                    <FormattedMessage id="contact.title" />
                </Title>
                <Note>
                    <FormattedMessage id="contact.note" />
                </Note>
                <Email href="mailto:contact@akiyamasho.com">
                    contact@akiyamasho.com ↗
                </Email>
                <Socials>
                    {socialLinks.map(([name, href, logo]) => (
                        <SnsLink
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={name}
                        >
                            <SnsIcon src={logo} alt="" />
                        </SnsLink>
                    ))}
                </Socials>
            </Sheet>
        </Container>
    </Layout>
);

export default injectIntl(Contact);
