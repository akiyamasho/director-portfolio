import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "gatsby-plugin-intl";
import { navHeightPx } from "../header";
import { LineBtn } from "../shared/button";

const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    height: calc(100vh - ${navHeightPx}px);
    justify-content: center;
`;

const TitleWrapper = styled.div`
    padding: 1em 0;
`;

const Name = styled.div`
    font-size: 3em;
`;

const Profession = styled.div`
    font-size: 1em;
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
            <LineBtn>
                <FormattedMessage id="home.viewPortfolio" />
            </LineBtn>
        </ButtonWrapper>
    </Container>
);

export default Welcome;
