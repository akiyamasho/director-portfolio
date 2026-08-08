import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormattedMessage } from "gatsby-plugin-intl";
import facebookLogo from "../../assets/sns/facebook.png";
import githubLogo from "../../assets/sns/github.png";
import instagramLogo from "../../assets/sns/instagram.png";
import redditLogo from "../../assets/sns/reddit.png";
import twitterLogo from "../../assets/sns/twitter.png";
import youtubeLogo from "../../assets/sns/youtube.png";
import {
    accentColour,
    cinemaRed,
    themeMuted,
    themeRule,
} from "../shared/colours";
import { LineLink } from "../shared/button";

const Container = styled.article`
    padding: clamp(3rem, 7vw, 7rem) 0;
    border-bottom: 1px solid ${themeRule};
`;
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(15rem, 0.85fr) minmax(0, 1.15fr);
    gap: clamp(1.5rem, 5vw, 5.5rem);
    align-items: start;
    @media only screen and (max-width: 760px) {
        grid-template-columns: 1fr;
    }
`;
const PosterImg = styled.img`
    display: block;
    width: 100%;
    max-height: 30rem;
    object-fit: cover;
    border: 1px solid ${themeRule};
    filter: saturate(0.82);
    transition:
        filter 250ms ease,
        transform 250ms ease;
    ${Container}:hover & {
        border-color: ${cinemaRed};
        filter: saturate(1.08);
        transform: translateY(-4px);
    }
`;
const DetailsWrapper = styled.div`
    min-width: 0;
`;
const Title = styled.h2`
    margin: -0.45rem 0 1.1rem;
    font-family: "Barlow Condensed", "Noto Sans JP", sans-serif;
    font-size: clamp(2rem, 4.3vw, 4.3rem);
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 0.98;
`;
const SubTitle = styled.div`
    max-width: 47rem;
    color: ${themeMuted};
    line-height: 1.8;
    white-space: pre-wrap;
    a {
        color: ${accentColour};
    }
`;
const RoleWrapper = styled.div`
    margin: 1.75rem 0;
    padding: 1rem 0;
    border-top: 1px solid ${themeRule};
    border-bottom: 1px solid ${themeRule};
`;
const RoleLabel = styled.div`
    margin-bottom: 0.75rem;
    color: ${accentColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.6rem;
    letter-spacing: 0.13em;
    text-transform: uppercase;
`;
const RoleList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
`;
const Role = styled.span`
    color: #d4d0c8;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.62rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    &:not(:last-child)::after {
        margin-left: 0.45rem;
        color: #68645e;
        content: "/";
    }
`;
export const CallToAction = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
`;
export const BtnWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
`;
export const ProjectLink = styled(LineLink)``;
const SnsLink = styled.a`
    display: inline-flex;
    align-items: center;
    padding: 0.3rem;
`;
const SnsIcon = styled.img`
    width: 24px;
    height: 24px;
    opacity: 0.78;
    transition: opacity 180ms ease;
    ${SnsLink}:hover & {
        opacity: 1;
    }
`;

export const SNS_TYPE_INSTAGRAM = "instagram";
export const SNS_TYPE_TWITTER = "twitter";
export const SNS_TYPE_FACEBOOK = "facebook";
export const SNS_TYPE_REDDIT = "reddit";
export const SNS_TYPE_GITHUB = "github";
export const SNS_TYPE_YOUTUBE = "youtube";
export const SnsTypeLogoMap = {
    [SNS_TYPE_INSTAGRAM]: instagramLogo,
    [SNS_TYPE_TWITTER]: twitterLogo,
    [SNS_TYPE_FACEBOOK]: facebookLogo,
    [SNS_TYPE_REDDIT]: redditLogo,
    [SNS_TYPE_GITHUB]: githubLogo,
    [SNS_TYPE_YOUTUBE]: youtubeLogo,
};

const Project = ({
    posterImageSrc,
    title,
    subTitle,
    linkTextList = [],
    snsLinkTypeMap = {},
    roles = [],
}) => (
    <Container>
        <ContentWrapper>
            <PosterImg
                src={posterImageSrc}
                alt={`${title} still`}
                loading="lazy"
            />
            <DetailsWrapper>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <RoleWrapper>
                    <RoleLabel>
                        <FormattedMessage id="portfolio.role" />
                    </RoleLabel>
                    <RoleList>
                        {roles.map((role) => (
                            <Role key={role}>{role}</Role>
                        ))}
                    </RoleList>
                </RoleWrapper>
                <CallToAction>
                    <BtnWrapper>
                        {linkTextList.map(({ link, text }) => (
                            <ProjectLink
                                key={link}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {text} <span aria-hidden="true">↗</span>
                            </ProjectLink>
                        ))}
                    </BtnWrapper>
                    <BtnWrapper>
                        {Object.keys(snsLinkTypeMap).map((type) => (
                            <SnsLink
                                key={type}
                                href={snsLinkTypeMap[type]}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SnsIcon
                                    src={SnsTypeLogoMap[type]}
                                    alt={type}
                                />
                            </SnsLink>
                        ))}
                    </BtnWrapper>
                </CallToAction>
            </DetailsWrapper>
        </ContentWrapper>
    </Container>
);

Project.propTypes = {
    posterImageSrc: PropTypes.string.isRequired,
    title: PropTypes.node.isRequired,
    subTitle: PropTypes.node.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string),
    linkTextList: PropTypes.arrayOf(
        PropTypes.shape({ link: PropTypes.string, text: PropTypes.string })
    ),
    snsLinkTypeMap: PropTypes.objectOf(PropTypes.string),
};
export default Project;
