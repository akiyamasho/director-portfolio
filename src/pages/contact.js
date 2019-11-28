import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "gatsby-plugin-intl";
import { TextLink } from "../components/shared/button";
import { themeDark } from "../components/shared/colours";

import Layout from "../components/layout";
import SEO from "../components/seo";

import instagramLogo from "../assets/sns/instagram.png";
import twitterLogo from "../assets/sns/twitter.png";
import githubLogo from "../assets/sns/github.png";
import { navHeightPx } from "../components/header";

const Container = styled.div`
    padding: 0 5em;
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
                    href="https://www.instagram.com/akiyamash0"
                >
                    <SnsIcon src={instagramLogo} />
                </SnsLink>
                <SnsLink
                    target="_blank"
                    href="https://www.twitter.com/akiyamash0"
                >
                    <SnsIcon src={twitterLogo} />
                </SnsLink>
                <SnsLink
                    target="_blank"
                    href="https://www.github.com/akiyamasho"
                >
                    <SnsIcon src={githubLogo} />
                </SnsLink>
            </SnsBtnWrapper>
            <Email href="mailto:contact@akiyamasho.com">
                contact@akiyamasho.com
            </Email>
        </Container>
    </Layout>
);

export default Contact;
