import React, { Component } from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";

import SEO from "../components/seo";
import PageTitle from "../components/pageTitle";

import sampleMovie from "../assets/sample_movie.jpg";
import Project, {
    SNS_TYPE_FACEBOOK,
    SNS_TYPE_INSTAGRAM,
    SNS_TYPE_REDDIT,
    SNS_TYPE_TWITTER,
} from "../components/portfolio/project";

class Portfolio extends Component {
    render() {
        const { intl } = this.props;
        const projects = [
            {
                posterImageSrc: sampleMovie,
                title: intl.formatMessage({ id: "projects.venture.title" }),
                subTitle: intl.formatMessage({
                    id: "projects.venture.subTitle",
                }),
                linkTextList: [
                    {
                        text: intl.formatMessage({
                            id: "portfolio.visitWebsite",
                        }),
                        link: "https://venture-anime.com",
                    },
                ],
                snsLinkTypeMap: {
                    [SNS_TYPE_INSTAGRAM]: intl.formatMessage({
                        id: "projects.venture.instagram",
                    }),
                    [SNS_TYPE_TWITTER]: intl.formatMessage({
                        id: "projects.venture.twitter",
                    }),
                    [SNS_TYPE_REDDIT]: "https://www.reddit.com/r/ventureanime/",
                    [SNS_TYPE_FACEBOOK]: intl.formatMessage({
                        id: "projects.venture.facebook",
                    }),
                },
            },
        ];
        return (
            <Layout>
                <SEO title="Portfolio" />
                <PageTitle
                    subTitle={intl.formatMessage({ id: "portfolio.subTitle" })}
                    title={intl.formatMessage({ id: "portfolio.title" })}
                />
                <div>
                    {projects.map(
                        ({
                            posterImageSrc,
                            title,
                            subTitle,
                            linkTextList,
                            snsLinkTypeMap,
                        }) => (
                            <Project
                                posterImageSrc={posterImageSrc}
                                subTitle={subTitle}
                                title={title}
                                linkTextList={linkTextList}
                                snsLinkTypeMap={snsLinkTypeMap}
                            />
                        )
                    )}
                </div>
            </Layout>
        );
    }
}

export default injectIntl(Portfolio);
