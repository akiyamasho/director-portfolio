import React, { Component } from "react";
import styled from "styled-components";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";

import SEO from "../components/seo";
import PageTitle from "../components/pageTitle";

import Project, {
    SNS_TYPE_FACEBOOK,
    SNS_TYPE_INSTAGRAM,
    SNS_TYPE_REDDIT,
    SNS_TYPE_TWITTER,
} from "../components/portfolio/project";
import { TextLink } from "../components/shared/button";
import { themeColour, themeDark } from "../components/shared/colours";

import venture from "../assets/project/venture.jpeg";
import moon from "../assets/project/moon.jpeg";
import brighter from "../assets/project/brighter.jpeg";
import seichou from "../assets/project/seichou.jpeg";

const Container = styled.div`
    margin-bottom: 10vh;
`;

const SectionTitle = styled.h2`
    color: ${themeDark};
`;

export const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SectionInnerWrapper = styled.div`
    padding: 1em 0;
    border-top: 2px solid ${themeDark};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
`;

const SideprojectTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const SideprojectTableHead = styled.th`
    font-size: 0.75em;
    text-align: left;
    color: ${themeDark};
    border-bottom: 1px solid ${themeColour};
    padding-bottom: 0.5em;
`;

const SideprojectTbody = styled.tbody`
    tr:not(:last-child) {
        border-bottom: 1px solid ${themeDark};
    }
`;

const SideprojectTableRow = styled.tr`
    padding: 1em 0;
`;

const SideprojectTableData = styled.td`
    padding: 0.25em 0.5em;
`;

const SideprojectSubtitle = styled.div`
    font-size: 0.75em;
    color: ${themeDark};
`;

const SideprojectRoleTd = styled(SideprojectTableData)`
    font-size: 0.75em;
    white-space: nowrap;
`;

class Portfolio extends Component {
    render() {
        const { intl } = this.props;
        const projects = [
            {
                posterImageSrc: venture,
                title: intl.formatMessage({ id: "projects.venture.title" }),
                subTitle: intl.formatMessage(
                    {
                        id: "projects.venture.subTitle",
                    },
                    {
                        independent: (
                            <TextLink
                                href="https://independentshortsawards.com/honorable-mentions-may-2020/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.independent" />
                            </TextLink>
                        ),
                        prague: (
                            <TextLink
                                href="https://praguefilmfest.com/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.prague" />
                            </TextLink>
                        ),
                        kosice: (
                            <TextLink href="http://kimff.sk/" target="_blank">
                                <FormattedMessage id="projects.venture.kosice" />
                            </TextLink>
                        ),
                        moscow: (
                            <TextLink
                                href="http://www.moscowshorts.com/2020/06/10/may-2020-moscow-shorts-official-selection"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.moscow" />
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
                linkTextList: [
                    {
                        text: intl.formatMessage({
                            id: "portfolio.watchPilotEpisode",
                        }),
                        link: "https://www.youtube.com/watch?v=_w_cUYvG3x0",
                    },
                    {
                        text: intl.formatMessage({
                            id: "portfolio.watchEp1point1",
                        }),
                        link: "https://www.youtube.com/watch?v=BU0Aoo4pHYg",
                    },
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
                posterImageSrc: moon,
                title: intl.formatMessage({ id: "projects.moon.title" }),
                subTitle: intl.formatMessage(
                    {
                        "portfolio.watchPilotEpisode": "Watch Pilot Episode",
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
                posterImageSrc: brighter,
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
                posterImageSrc: seichou,
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
                <Container>
                    <SectionContainer>
                        <SectionInnerWrapper>
                            <SectionTitle>
                                <FormattedMessage id="portfolio.animation" />
                            </SectionTitle>
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
                        </SectionInnerWrapper>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionInnerWrapper>
                            <SectionTitle>
                                <FormattedMessage id="portfolio.filmTheater" />
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
                                <SideprojectTbody>
                                    {sideProjects.map(
                                        ({ year, title, subTitle, roles }) => (
                                            <SideprojectTableRow>
                                                <SideprojectTableData>
                                                    {year}
                                                </SideprojectTableData>
                                                <SideprojectTableData>
                                                    <div>{title}</div>
                                                    <SideprojectSubtitle>
                                                        {subTitle}
                                                    </SideprojectSubtitle>
                                                </SideprojectTableData>
                                                <SideprojectRoleTd>
                                                    {roles.map(role => role)}
                                                </SideprojectRoleTd>
                                            </SideprojectTableRow>
                                        )
                                    )}
                                </SideprojectTbody>
                            </SideprojectTable>
                        </SectionInnerWrapper>
                    </SectionContainer>
                </Container>
            </Layout>
        );
    }
}

export default injectIntl(Portfolio);
