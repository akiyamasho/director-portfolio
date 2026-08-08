import React from "react";
import styled from "styled-components";
import { injectIntl, Link } from "gatsby-plugin-intl";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { LineBtn } from "../../components/shared/button";
import {
    accentColour,
    themeMuted,
    themeRule,
} from "../../components/shared/colours";

const paperUrl =
    "https://cdn.jsdelivr.net/gh/akiyamasho/brighter-the-animation@2dbaf9cfe5dc4e1b6871ab532655b3b26ffcdf84/paper/paper.pdf";

const Container = styled.section`
    width: min(1200px, 100%);
    margin: 0 auto;
    padding: clamp(3rem, 7vw, 6rem) clamp(1rem, 4vw, 3rem) 5rem;
`;

const Kicker = styled.p`
    margin: 0 0 0.75rem;
    color: ${accentColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.66rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
`;

const Title = styled.h1`
    max-width: 22ch;
    margin: 0;
    font-family: "Barlow Condensed", "Noto Sans JP", sans-serif;
    font-size: clamp(2.5rem, 6vw, 5.5rem);
    font-weight: 600;
    line-height: 0.95;
`;

const Note = styled.p`
    max-width: 45rem;
    margin: 1.2rem 0 2rem;
    color: ${themeMuted};
`;

const Viewer = styled.iframe`
    width: 100%;
    height: min(78vh, 980px);
    margin-top: 2rem;
    border: 1px solid ${themeRule};
    background: #fff;
`;

const BrighterPaper = ({ intl }) => {
    const isJapanese = intl.locale === "ja";
    const title =
        "Brighter the Animation: Study and Application of the Combination of Western and Japanese Animation Process Influences to Improve Efficiency Whilst Retaining Quality of Anime Production";

    return (
        <Layout>
            <SEO title={title} lang={intl.locale} />
            <Container>
                <Kicker>
                    {isJapanese ? "研究論文 / 2018" : "Research paper / 2018"}
                </Kicker>
                <Title>{title}</Title>
                <Note>
                    {isJapanese
                        ? "GitHubに保存された原文PDFを表示しています。表示できない場合は、PDFを直接開いてください。"
                        : "Viewing the original PDF stored on GitHub. Open the PDF directly if the embedded viewer is unavailable."}
                </Note>
                <LineBtn
                    as="a"
                    href={paperUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    {isJapanese ? "PDFを直接開く ↗" : "Open PDF directly ↗"}
                </LineBtn>{" "}
                <LineBtn as={Link} to="/engineering">
                    {isJapanese ? "技術ページへ戻る" : "Back to engineering"}
                </LineBtn>
                <Viewer
                    src={paperUrl}
                    title={title}
                    sandbox="allow-downloads allow-popups"
                />
            </Container>
        </Layout>
    );
};

export default injectIntl(BrighterPaper);
