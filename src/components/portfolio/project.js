import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    display: flex;
`;

const PosterImg = styled.img``;

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1``;

const SubTitle = styled.div``;

const BtnWrapper = styled.div`
    display: flex;
`;

const Link = styled.button``;

const SnsLink = styled.img``;

export const SnsTypeLogoMap = {
    instagram: "instagram",
    twitter: "twitter",
    facebook: "facebook",
    reddit: "reddit",
    github: "github",
};

const SnsTypes = Object.keys(SnsTypeLogoMap);
const Project = ({
    posterImageSrc,
    title,
    subTitle,
    linkTextMap,
    snsLinkTypeMap,
}) => (
    <Container>
        <PosterImg src={posterImageSrc} />
        <DetailsWrapper>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <BtnWrapper>
                {Object.keys(linkTextMap).map(({ link, text }) => (
                    <Link src={link} target="__blank">
                        {text}
                    </Link>
                ))}
                {Object.keys(snsLinkTypeMap).map(({ link, type }) => (
                    <Link src={link} target="__blank">
                        <SnsLink src={SnsTypeLogoMap[link]} />
                    </Link>
                ))}
            </BtnWrapper>
        </DetailsWrapper>
    </Container>
);

Project.propTypes = {
    posterImageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    linkTextMap: PropTypes.shape({
        link: PropTypes.string,
        text: PropTypes.string,
    }),
    snsLinkTypeMap: PropTypes.shape({
        link: PropTypes.string,
        type: PropTypes.oneOf(SnsTypes),
    }),
};

Project.defaultProps = {
    linkTextMap: {},
};

export default Project;
