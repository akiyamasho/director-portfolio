import React from "react";
import styled from "styled-components";
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import { navHeightPx } from "../header";
import { LineBtn } from "../shared/button";
import { themeDark } from "../shared/colours";

const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    height: calc(100vh - ${navHeightPx}px);
    justify-content: center;

    text-shadow: 2px 2px 4px rgba(0, 0, 30, 0.4);
`;

const TitleWrapper = styled.div`
    padding: 1em 0;
    user-select: none;
`;

const Name = styled.div`
    font-size: 3em;
`;

const Profession = styled.div`
    font-size: 1em;
    color: ${themeDark};
`;

const ButtonWrapper = styled.div`
    display: inline-block;
    width: auto;
    text-align: center;
`;

const Welcome = () => (
    <Container>
        <TitleWrapper>
            <Name>
                <FormattedMessage id="home.name" />
            </Name>
            <Profession>
                <FormattedMessage id="home.profession" />
            </Profession>
        </TitleWrapper>
        <ButtonWrapper>
            <LineBtn as={Link} to="/portfolio">
                <FormattedMessage id="home.viewPortfolio" />
            </LineBtn>
        </ButtonWrapper>
    </Container>
);

export default Welcome;
