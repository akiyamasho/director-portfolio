import React, { Component } from "react";
import styled from "styled-components";
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
import { TextLink } from "../components/shared/button";
import { themeDark } from "../components/shared/colours";

const SectionTitle = styled.h3`
    font-size: 3em;
`;

const SideprojectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SideprojectInnerWrapper = styled.div`
    border-bottom: 1em;
    border-top: 2px solid ${themeDark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
`;

const SideprojectTable = styled.table`
    width: 100%;
`;

const SideprojectTableHead = styled.th`
    font-size: 0.5em;
    text-align: left;
    color: ${themeDark};
`;

const SideprojectTableData = styled.td`
    font-size: 0.75em;
    padding: 0 0.5em;
`;

const SideprojectSubtitle = styled.div`
    font-size: 0.75em;
`;

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
                roles: [
                    intl.formatMessage({
                        id: "portfolio.role.director",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.producer",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.writer",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.animator",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.backgroundArtist",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.voiceActor",
                    }),
                ],
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
            {
                posterImageSrc: sampleMovie,
                title: intl.formatMessage({ id: "projects.moon.title" }),
                subTitle: intl.formatMessage(
                    {
                        id: "projects.moon.subTitle",
                    },
                    {
                        atami: (
                            <TextLink
                                href={intl.formatMessage({
                                    id: "projects.moon.atamiLink",
                                })}
                                target="_blank"
                            >
                                <FormattedMessage id="projects.moon.atami" />
                            </TextLink>
                        ),
                        tokyoLiftOff: (
                            <TextLink
                                href="https://liftoff.network/tokyo-lift-off-film-festival/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.moon.tokyoLiftOff" />
                            </TextLink>
                        ),
                    }
                ),
                roles: [
                    intl.formatMessage({
                        id: "portfolio.role.director",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.producer",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.writer",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.animator",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.backgroundArtist",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.voiceActor",
                    }),
                ],
                linkTextList: [],
                snsLinkTypeMap: {
                    [SNS_TYPE_INSTAGRAM]:
                        "https://www.instagram.com/p/BxfC9kblwB6/",
                },
            },
            {
                posterImageSrc: sampleMovie,
                title: intl.formatMessage({ id: "projects.brighter.title" }),
                subTitle: intl.formatMessage({
                    id: "projects.brighter.subTitle",
                }),
                roles: [
                    intl.formatMessage({
                        id: "portfolio.role.director",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.producer",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.writer",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.animator",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.backgroundArtist",
                    }),
                ],
                linkTextList: [
                    {
                        text: intl.formatMessage({
                            id: "portfolio.visitWebsite",
                        }),
                        link: "https://brightertheanimation.com",
                    },
                    {
                        text: intl.formatMessage({
                            id: "portfolio.readPaper",
                        }),
                        link:
                            "https://github.com/akiyamasho/brighter-the-animation/blob/master/paper/paper.pdf",
                    },
                ],
                snsLinkTypeMap: {},
            },
            {
                posterImageSrc: sampleMovie,
                title: intl.formatMessage({ id: "projects.seichou.title" }),
                subTitle: intl.formatMessage({
                    id: "projects.seichou.subTitle",
                }),
                roles: [
                    intl.formatMessage({
                        id: "portfolio.role.director",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.producer",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.writer",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.animator",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.backgroundArtist",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.voiceActor",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.musicalPerformance",
                    }),
                ],
                linkTextList: [
                    {
                        text: intl.formatMessage({
                            id: "portfolio.watchTheShortFilm",
                        }),
                        link: "https://www.youtube.com/watch?v=Km9NLQb3QK0",
                    },
                ],
                snsLinkTypeMap: {},
            },
        ];

        const sideProjects = [
            {
                year: "2017",
                title: intl.formatMessage({ id: "sideproject.karton.title" }),
                subTitle: intl.formatMessage({
                    id: "sideproject.karton.subTitle",
                }),
                roles: [intl.formatMessage({ id: "portfolio.role.mainActor" })],
            },
            {
                year: "2015",
                title: intl.formatMessage({
                    id: "sideproject.bonifacio.title",
                }),
                subTitle: intl.formatMessage({
                    id: "sideproject.bonifacio.subTitle",
                }),
                roles: [intl.formatMessage({ id: "portfolio.role.mainActor" })],
            },
            {
                year: "2014",
                title: intl.formatMessage({
                    id: "sideproject.overheard.title",
                }),
                subTitle: intl.formatMessage({
                    id: "sideproject.overheard.subTitle",
                }),
                roles: [intl.formatMessage({ id: "portfolio.role.actor" })],
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
                            roles,
                            subTitle,
                            linkTextList,
                            snsLinkTypeMap,
                        }) => (
                            <Project
                                posterImageSrc={posterImageSrc}
                                title={title}
                                subTitle={subTitle}
                                roles={roles}
                                linkTextList={linkTextList}
                                snsLinkTypeMap={snsLinkTypeMap}
                            />
                        )
                    )}
                </div>
                <SideprojectContainer>
                    <SideprojectInnerWrapper>
                        <SectionTitle>
                            <FormattedMessage id="portfolio.otherProjects" />
                        </SectionTitle>
                        <SideprojectTable border="0">
                            <thead>
                                <SideprojectTableHead>
                                    <FormattedMessage id="portfolio.sideproject.year" />
                                </SideprojectTableHead>
                                <SideprojectTableHead>
                                    <FormattedMessage id="portfolio.sideproject.title" />
                                </SideprojectTableHead>
                                <SideprojectTableHead>
                                    <FormattedMessage id="portfolio.role" />
                                </SideprojectTableHead>
                            </thead>
                            <tbody>
                                {sideProjects.map(
                                    ({ year, title, subTitle, roles }) => (
                                        <tr>
                                            <SideprojectTableData>
                                                {year}
                                            </SideprojectTableData>
                                            <SideprojectTableData>
                                                <div>{title}</div>
                                                <SideprojectSubtitle>
                                                    {subTitle}
                                                </SideprojectSubtitle>
                                            </SideprojectTableData>
                                            <SideprojectTableData>
                                                {roles.map(role => role)}
                                            </SideprojectTableData>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </SideprojectTable>
                    </SideprojectInnerWrapper>
                </SideprojectContainer>
            </Layout>
        );
    }
}

export default injectIntl(Portfolio);
