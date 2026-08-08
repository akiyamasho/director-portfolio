import React from "react";
import styled from "styled-components";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import { LineBtn } from "../shared/button";
import {
    accentColour,
    cinemaRed,
    themeColour,
    themeMuted,
    themeRule,
} from "../shared/colours";

const Container = styled.section`
    position: relative;
    z-index: 1;
    width: min(1440px, 100%);
    min-height: calc(100svh - 80px);
    margin: 0 auto;
    padding: clamp(2rem, 7vw, 7rem) clamp(1.25rem, 7vw, 8rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Frame = styled.div`
    width: min(940px, 100%);
    padding: clamp(1.5rem, 3.5vw, 3.5rem);
    border: 1px solid ${themeRule};
    border-left: 3px solid ${cinemaRed};
    background: rgba(4, 7, 10, 0.58);
    backdrop-filter: blur(4px);
`;

const Kicker = styled.p`
    margin: 0 0 1.25rem;
    color: ${accentColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.68rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
`;

const Name = styled.h1`
    max-width: 13ch;
    margin: 0;
    color: ${themeColour};
    font-family: "Barlow Condensed", "Noto Sans JP", sans-serif;
    font-size: clamp(4rem, 11vw, 10rem);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 0.82;
    text-transform: uppercase;
`;

const Profession = styled.p`
    max-width: 38rem;
    margin: 1.5rem 0 2.2rem;
    color: ${themeMuted};
    font-size: clamp(0.95rem, 1.6vw, 1.2rem);
    letter-spacing: 0.04em;
`;

const Reel = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9rem;
    margin-top: auto;
    padding-top: clamp(3.5rem, 10vh, 8rem);
    color: ${themeMuted};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    &::before {
        width: 2.8rem;
        height: 1px;
        background: ${cinemaRed};
        content: "";
    }
`;

const Welcome = () => (
    <Container>
        <Frame>
            <Kicker>
                <FormattedMessage id="home.kicker" />
            </Kicker>
            <Name>
                <FormattedMessage id="home.name" />
            </Name>
            <Profession>
                <FormattedMessage id="home.profession" />
            </Profession>
            <LineBtn as={Link} to="/portfolio">
                <FormattedMessage id="home.viewPortfolio" />{" "}
                <span aria-hidden="true">↘</span>
            </LineBtn>
        </Frame>
        <Reel>
            <FormattedMessage id="home.reelNote" />
        </Reel>
    </Container>
);

export default Welcome;
