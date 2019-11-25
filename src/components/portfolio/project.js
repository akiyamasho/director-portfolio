import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import facebookLogo from "../../assets/sns/facebook.png";
import githubLogo from "../../assets/sns/github.png";
import instagramLogo from "../../assets/sns/instagram.png";
import redditLogo from "../../assets/sns/reddit.png";
import twitterLogo from "../../assets/sns/twitter.png";
import { themeColour } from "../shared/colours";
import { LineLink } from "../shared/button";

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 80%;

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

const SubTitle = styled.div``;

const CallToAction = styled.div`
    display: flex;
    padding: 1em 0;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        align-items: center;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    padding: 0.25em 0;
`;

const ProjectLink = styled(LineLink)`
    padding-right: 0.35em;
    padding: 0.25em 0.5em;
    border: 1px solid ${themeColour};
`;

const SnsLink = styled.a`
    padding-right: 0.35em;
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
}) => (
    <Container>
        <ContentWrapper>
            <PosterImg src={posterImageSrc} />
            <DetailsWrapper>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
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
