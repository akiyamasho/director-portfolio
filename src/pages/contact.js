import React from "react";
import styled from "styled-components";
import { TextLink } from "../components/shared/button";
import { themeDark } from "../components/shared/colours";

import Layout from "../components/layout";
import SEO from "../components/seo";

import instagramLogo from "../assets/sns/instagram.png";
import twitterLogo from "../assets/sns/twitter.png";
import githubLogo from "../assets/sns/github.png";
import imdbLogo from "../assets/sns/imdb.png";
import { navHeightPx } from "../components/header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: calc(100vh - ${navHeightPx}px);
`;

const SnsBtnWrapper = styled.div`
    display: flex;
    padding: 0.5em 0;
`;

const SnsLink = styled.a`
    margin-right: 0.35em;
`;

const SnsIcon = styled.img`
    height: 50px;
    width: auto;
`;

const Email = styled(TextLink)`
    font-size: 0.75em;
    color: ${themeDark};
`;

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <Container>
            <SnsBtnWrapper>
                <SnsLink
                    target="_blank"
                    href="https://www.instagram.com/akiyamasho"
                >
                    <SnsIcon src={instagramLogo} />
                </SnsLink>
                <SnsLink
                    target="_blank"
                    href="https://www.twitter.com/akiyamasho_dev"
                >
                    <SnsIcon src={twitterLogo} />
                </SnsLink>
                <SnsLink
                    target="_blank"
                    href="https://www.github.com/akiyamasho"
                >
                    <SnsIcon src={githubLogo} />
                </SnsLink>
                <SnsLink
                    target="_blank"
                    href="https://www.imdb.com/name/nm11692621"
                >
                    <SnsIcon src={imdbLogo} />
                </SnsLink>
            </SnsBtnWrapper>
            <Email href="mailto:contact@akiyamasho.com">
                contact@akiyamasho.com
            </Email>
        </Container>
    </Layout>
);

export default Contact;
