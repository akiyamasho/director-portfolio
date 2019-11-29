import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { themeDark } from "./shared/colours";
import { navHeightPx } from "./header";

const Container = styled.div`
    padding: 0 10vw;
    display: flex;
    justify-content: ${props =>
        props.shouldRenderFromRight ? "flex-end" : "flex-start"};
    align-items: center;
    text-align: ${props => (props.shouldRenderFromRight ? "right" : "left")};
    height: calc(100vh - ${navHeightPx}px);

    @media only screen and (max-width: 768px) {
        justify-content: center;
        text-align: center;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: ${navHeightPx / 2}px;
`;

const Title = styled.div`
    font-size: 5em;
`;

const SubTitle = styled.div`
    font-size: 1em;
    display: flex;
    justify-content: ${props =>
        props.shouldRenderFromRight ? "flex-end" : "flex-start"};

    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
`;

const Line = styled.div`
    border-bottom: 1px solid ${themeDark};
    margin: 0 1em;
    margin-bottom: 0.5em;
    width: 20vw;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const MobileLineContainer = styled.div`
    display: none;
    padding: 1em 0;

    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

const MobileLine = styled(Line)`
    display: none;
    width: 40vw;

    @media only screen and (max-width: 768px) {
        display: block;
    }
`;

const PageTitle = ({ title, subTitle, shouldRenderFromRight }) => (
    <Container shouldRenderFromRight={shouldRenderFromRight}>
        <Content shouldRenderFromRight={shouldRenderFromRight}>
            <Title>{title}</Title>
            <MobileLineContainer>
                <MobileLine />
            </MobileLineContainer>
            <SubTitle shouldRenderFromRight={shouldRenderFromRight}>
                {!shouldRenderFromRight && <Line />}
                {subTitle}
                {shouldRenderFromRight && <Line />}
            </SubTitle>
        </Content>
    </Container>
);

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    shouldRenderFromRight: PropTypes.bool,
};

PageTitle.defaultProps = {
    shouldRenderFromRight: false,
};

export default PageTitle;
