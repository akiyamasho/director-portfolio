import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { FormattedMessage } from "gatsby-plugin-intl";

import facebookLogo from "../../assets/sns/facebook.png";
import githubLogo from "../../assets/sns/github.png";
import instagramLogo from "../../assets/sns/instagram.png";
import redditLogo from "../../assets/sns/reddit.png";
import twitterLogo from "../../assets/sns/twitter.png";
import { invertedColour, themeColour, themeDark } from "../shared/colours";
import { LineLink } from "../shared/button";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em 0;

    &:not(:last-child) {
        border-bottom: 1px solid ${themeDark};
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const PosterImg = styled.img`
    height: 300px;
    padding: 1em;
    width: auto;
`;

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1``;

const SubTitle = styled.span``;

const RoleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.5em;
    flex-flow: wrap;
    margin: 0.5em 0;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const RoleLabel = styled.div`
    color: ${themeDark};
    margin: 0.5em;
`;

const RoleList = styled.div`
    display: flex;
    align-items: center;
`;

const Role = styled.span`
    border-radius: 1px;
    padding: 0.25em;
    background: ${themeDark};
    color: ${invertedColour};
    margin-right: 0.25em;
    font-size: 0.75em;
`;

export const CallToAction = styled.div`
    display: flex;
    padding: 1em 0;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        align-items: center;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    padding: 0.25em 0;
`;

export const ProjectLink = styled(LineLink)`
    margin-right: 0.5em;
    padding: 0.5em 0.75em;
    border: 1px solid ${themeColour};
`;

const SnsLink = styled.a`
    margin-right: 0.35em;
`;

const SnsIcon = styled.img`
    height: 30px;
    width: auto;
`;

export const SNS_TYPE_INSTAGRAM = "instagram";
export const SNS_TYPE_TWITTER = "twitter";
export const SNS_TYPE_FACEBOOK = "facebook";
export const SNS_TYPE_REDDIT = "reddit";
export const SNS_TYPE_GITHUB = "github";

export const SnsTypeLogoMap = {
    [SNS_TYPE_INSTAGRAM]: instagramLogo,
    [SNS_TYPE_TWITTER]: twitterLogo,
    [SNS_TYPE_FACEBOOK]: facebookLogo,
    [SNS_TYPE_REDDIT]: redditLogo,
    [SNS_TYPE_GITHUB]: githubLogo,
};

const SnsTypes = Object.keys(SnsTypeLogoMap);
const Project = ({
    posterImageSrc,
    title,
    subTitle,
    linkTextList,
    snsLinkTypeMap,
    roles,
}) => (
    <Container>
        <ContentWrapper>
            <PosterImg src={posterImageSrc} />
            <DetailsWrapper>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <RoleWrapper>
                    <RoleLabel>
                        <FormattedMessage id="portfolio.role" />
                    </RoleLabel>
                    <RoleList>
                        {roles.map(role => (
                            <Role>{role}</Role>
                        ))}
                    </RoleList>
                </RoleWrapper>
                <CallToAction>
                    <BtnWrapper>
                        {linkTextList.map(({ link, text }) => (
                            <ProjectLink href={link} target="__blank">
                                {text}
                            </ProjectLink>
                        ))}
                    </BtnWrapper>
                    <BtnWrapper>
                        {Object.keys(snsLinkTypeMap).map(type => (
                            <SnsLink
                                href={snsLinkTypeMap[type]}
                                target="__blank"
                            >
                                <SnsIcon src={SnsTypeLogoMap[type]} />
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
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    roles: PropTypes.arrayOf(PropTypes.string),
    linkTextList: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string,
            text: PropTypes.string,
        })
    ),
    snsLinkTypeMap: PropTypes.shape({
        link: PropTypes.string,
        type: PropTypes.oneOf(SnsTypes),
    }),
};

Project.defaultProps = {
    linkTextMap: {},
};

export default Project;
