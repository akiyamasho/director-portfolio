import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import JapaneseLineBreak from "./japanese-line-break";
import {
    accentColour,
    projectorLight,
    themeMuted,
    themeRule,
} from "./shared/colours";

const Container = styled.section`
    min-height: min(56vh, 560px);
    padding: clamp(4rem, 10vw, 9rem) clamp(1.25rem, 10vw, 10rem)
        clamp(3rem, 7vw, 6rem);
    display: flex;
    align-items: flex-end;
    justify-content: ${(props) =>
        props.shouldRenderFromRight ? "flex-end" : "flex-start"};
    border-bottom: 1px solid ${themeRule};
    text-align: ${(props) => (props.shouldRenderFromRight ? "right" : "left")};
`;

const Content = styled.div`
    max-width: 62rem;

    &::before {
        display: block;
        width: 3.5rem;
        height: 3px;
        margin-bottom: 1.25rem;
        background: ${projectorLight};
        content: "";
    }
`;
const Index = styled.p`
    margin: 0 0 1rem;
    color: ${accentColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.64rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
`;
const Title = styled.h1`
    margin: 0;
    font-family: "Barlow Condensed", "Noto Sans JP", sans-serif;
    font-size: clamp(4rem, 10vw, 9rem);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 0.84;
    text-transform: uppercase;

    html[lang="ja"] & {
        font-size: clamp(2.8rem, 8vw, 6rem);
        letter-spacing: 0;
        line-height: 1;
        text-transform: none;
    }

    @media only screen and (max-width: 480px) {
        html[lang="ja"] & {
            font-size: clamp(2.15rem, 11vw, 3rem);
        }
    }
`;
const SubTitle = styled.div`
    max-width: 42rem;
    margin-top: 1.5rem;
    color: ${themeMuted};
    font-size: clamp(0.95rem, 1.6vw, 1.15rem);
`;

const PageTitle = ({ kicker, title, subTitle, shouldRenderFromRight }) => (
    <Container shouldRenderFromRight={shouldRenderFromRight}>
        <Content>
            <Index>
                <JapaneseLineBreak>{kicker}</JapaneseLineBreak>
            </Index>
            <Title>
                <JapaneseLineBreak>{title}</JapaneseLineBreak>
            </Title>
            <SubTitle>
                <JapaneseLineBreak>{subTitle}</JapaneseLineBreak>
            </SubTitle>
        </Content>
    </Container>
);

PageTitle.propTypes = {
    kicker: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    shouldRenderFromRight: PropTypes.bool,
};
PageTitle.defaultProps = { shouldRenderFromRight: false };
export default PageTitle;
