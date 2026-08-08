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
    SNS_TYPE_YOUTUBE,
} from "../components/portfolio/project";
import { TextLink } from "../components/shared/button";
import {
    accentColour,
    filmFestivalBtnColour,
    filmFestivalBtnHoverColour,
    themeDark,
    themeRule,
} from "../components/shared/colours";

import venturePilot from "../assets/project/venture_pilot.jpeg";
import ventureEp1p1 from "../assets/project/venture_ep1.jpeg";
import rss from "../assets/project/rss.jpg";
import moon from "../assets/project/moon.jpeg";
import brighter from "../assets/project/brighter.jpeg";
import seichou from "../assets/project/seichou.jpeg";
import fiverps from "../assets/project/5rps-2026.webp";

const Container = styled.div`
    padding-bottom: clamp(4rem, 10vw, 10rem);
`;

const SectionTitle = styled.h2`
    margin: 0;
    padding: 1.5rem 0;
    color: ${accentColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`;

const FilmFestivalLink = styled(TextLink)`
    color: ${filmFestivalBtnColour};

    &:hover:not(:disabled) {
        color: ${filmFestivalBtnHoverColour};
    }
`;

export const SectionContainer = styled.div`
    width: min(1280px, 100%);
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 5vw, 4rem);
`;

export const SectionInnerWrapper = styled.div`
    padding: clamp(2rem, 5vw, 4.5rem) 0;
    border-top: 1px solid ${themeRule};
    display: flex;
    flex-direction: column;
`;

const SideprojectTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    @media only screen and (max-width: 600px) {
        thead {
            display: none;
        }
    }
`;

const SideprojectTableHead = styled.th`
    color: ${accentColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.62em;
    font-weight: 400;
    letter-spacing: 0.12em;
    text-align: left;
    text-transform: uppercase;
    border-bottom: 1px solid ${themeRule};
    padding: 0 0.5em 0.8em;
`;

const SideprojectTbody = styled.tbody`
    tr:not(:last-child) {
        border-bottom: 1px solid ${themeRule};
    }
`;

const SideprojectTableRow = styled.tr`
    padding: 1em 0;

    @media only screen and (max-width: 600px) {
        display: block;
        padding: 1.1rem 0;
    }
`;

const SideprojectTableData = styled.td`
    padding: 1.15em 0.5em;

    @media only screen and (max-width: 600px) {
        display: block;
        padding: 0.25rem 0;
    }
`;

const SideprojectSubtitle = styled.div`
    margin-top: 0.35rem;
    font-size: 0.82em;
    color: ${themeDark};
`;

const SideprojectRoleTd = styled(SideprojectTableData)`
    color: ${themeDark};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.68em;
    white-space: nowrap;

    @media only screen and (max-width: 600px) {
        white-space: normal;
    }
`;

class Portfolio extends Component {
    render() {
        const { intl } = this.props;
        const projects = [
            {
                posterImageSrc: fiverps,
                posterFit: "contain",
                title: intl.formatMessage({ id: "projects.5rps.title" }),
                subTitle: intl.formatMessage({
                    id: "projects.5rps.subTitle",
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
                linkTextList: [],
                snsLinkTypeMap: {
                    [SNS_TYPE_INSTAGRAM]:
                        "https://instagram.com/5requestspersecond",
                },
            },
            {
                posterImageSrc: rss,
                title: intl.formatMessage({ id: "projects.rss.title" }),
                subTitle: intl.formatMessage(
                    {
                        id: "projects.rss.subTitle",
                    },
                    {
                        ventureLink: (
                            <FilmFestivalLink
                                href="https://venture-anime.jp"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.rss.venture" />
                            </FilmFestivalLink>
                        ),
                        gocomic: (
                            <FilmFestivalLink
                                href="https://555comic.com"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.rss.gocomic" />
                            </FilmFestivalLink>
                        ),
                        takeyukimi: (
                            <FilmFestivalLink
                                href="https://twitter.com/take_yukimi"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.rss.takeyukimi" />
                            </FilmFestivalLink>
                        ),
                    }
                ),
                roles: [
                    intl.formatMessage({
                        id: "portfolio.role.director",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.showrunner",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.writer",
                    }),
                    intl.formatMessage({
                        id: "portfolio.role.animator",
                    }),
                ],
                linkTextList: [
                    {
                        text: intl.formatMessage({
                            id: "portfolio.viewInstagramPage",
                        }),
                        link: "https://instagram.com/remotestartupsenpai",
                    },
                    {
                        text: intl.formatMessage({
                            id: "portfolio.watchAnimation",
                        }),
                        link: "https://www.youtube.com/@remotestartupsenpai",
                    },
                ],
                snsLinkTypeMap: {
                    [SNS_TYPE_INSTAGRAM]:
                        "https://instagram.com/remotestartupsenpai",
                    [SNS_TYPE_YOUTUBE]:
                        "https://www.youtube.com/@remotestartupsenpai",
                    [SNS_TYPE_TWITTER]: "https://twitter.com/rss_mayu",
                },
            },
            {
                posterImageSrc: ventureEp1p1,
                title: intl.formatMessage({ id: "projects.venture1p1.title" }),
                subTitle: intl.formatMessage(
                    {
                        id: "projects.venture1p1.subTitle",
                    },
                    {
                        bestanimation: (
                            <FilmFestivalLink
                                href="https://bestfilmawards.com/best-film-awards/best-animation-award"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.bestanimation" />
                            </FilmFestivalLink>
                        ),
                        alternative: (
                            <FilmFestivalLink
                                href="https://altff.org/winners/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.alternative" />
                            </FilmFestivalLink>
                        ),
                        couch: (
                            <FilmFestivalLink
                                href="http://www.couchfilmfestival.com/winners"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.couch" />
                            </FilmFestivalLink>
                        ),
                        fivecontinents: (
                            <FilmFestivalLink
                                href="https://www.ficocc.com/ficocc-5-1"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.fivecontinents" />
                            </FilmFestivalLink>
                        ),
                        lonelywolf: (
                            <FilmFestivalLink
                                href="https://www.lonelywolffilmfest.com/winners-nominees-spring2021.html"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.lonelywolf" />
                            </FilmFestivalLink>
                        ),
                        athens: (
                            <FilmFestivalLink
                                href="https://aimaff.com/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.athens" />
                            </FilmFestivalLink>
                        ),
                        indie: (
                            <FilmFestivalLink
                                href="https://indieshortfest.com/award-winners-february-2021/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.indie" />
                            </FilmFestivalLink>
                        ),
                        indiex: (
                            <FilmFestivalLink
                                href="https://indiexfest.com/genre-categories-nominations-of-january-2021/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.indiex" />
                            </FilmFestivalLink>
                        ),
                        filmhaus: (
                            <FilmFestivalLink
                                href="https://www.filmhaus.org/mar2021-results.html"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.filmhaus" />
                            </FilmFestivalLink>
                        ),
                        independent: (
                            <FilmFestivalLink
                                href="https://independentshortsawards.com/finalists-january-2021/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.independent" />
                            </FilmFestivalLink>
                        ),
                        bestindie: (
                            <FilmFestivalLink
                                href="https://bestfilmawards.com/best-film-awards/best-indie-film-award"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.bestindie" />
                            </FilmFestivalLink>
                        ),
                        kosice: (
                            <FilmFestivalLink
                                href="http://kimff.sk/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.kosice" />
                            </FilmFestivalLink>
                        ),
                        prague: (
                            <FilmFestivalLink
                                href="https://praguefilmfest.com/winners/june-2020"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.prague" />
                            </FilmFestivalLink>
                        ),

                        higa: (
                            <FilmFestivalLink
                                href="https://higafestival.com/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.higa" />
                            </FilmFestivalLink>
                        ),
                        xworld: (
                            <FilmFestivalLink
                                href="https://www.welcometoxworld.com/2021/VentureAnime.html"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.xworld" />
                            </FilmFestivalLink>
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
                            id: "portfolio.watchEp1p1",
                        }),
                        link: "https://www.youtube.com/watch?v=BU0Aoo4pHYg&vl=en",
                    },
                    {
                        text: intl.formatMessage({
                            id: "portfolio.visitWebsite",
                        }),
                        link: "https://venture-anime.com",
                    },
                    {
                        text: intl.formatMessage({
                            id: "portfolio.imdb",
                        }),
                        link: "https://www.imdb.com/title/tt13959862/",
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
                posterImageSrc: venturePilot,
                title: intl.formatMessage({ id: "projects.venture.title" }),
                subTitle: intl.formatMessage(
                    {
                        id: "projects.venture.subTitle",
                    },
                    {
                        kinno: (
                            <FilmFestivalLink
                                href="http://kinnotv.com"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.kinno" />
                            </FilmFestivalLink>
                        ),
                        indie: (
                            <FilmFestivalLink
                                href="https://indieshortfest.com/2020/07/03/nominations-of-july-2020/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.indie" />
                            </FilmFestivalLink>
                        ),
                        indiex: (
                            <FilmFestivalLink
                                href="https://indiexfest.com/2020/07/21/nominations-of-july-2020/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.indiex" />
                            </FilmFestivalLink>
                        ),
                        independent: (
                            <FilmFestivalLink
                                href="https://independentshortsawards.com/honorable-mentions-may-2020/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.independent" />
                            </FilmFestivalLink>
                        ),
                        prague: (
                            <FilmFestivalLink
                                href="https://praguefilmfest.com/winners/june-2020"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.prague" />
                            </FilmFestivalLink>
                        ),
                        couch: (
                            <FilmFestivalLink
                                href="https://couchff.weebly.com/uploads/1/2/0/3/120372188/winners_couch_ff_summer_2020.pdf"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.couch" />
                            </FilmFestivalLink>
                        ),
                        kosice: (
                            <FilmFestivalLink
                                href="http://kimff.sk/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.kosice" />
                            </FilmFestivalLink>
                        ),
                        moscow: (
                            <FilmFestivalLink
                                href="http://www.moscowshorts.com/2020/06/10/may-2020-moscow-shorts-official-selection"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.moscow" />
                            </FilmFestivalLink>
                        ),
                        liftoff: (
                            <FilmFestivalLink
                                href="https://liftoff.network/realtime-results-voting-system-showcaseextravaganza-1/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.liftoff" />
                            </FilmFestivalLink>
                        ),
                        tokyoliftoff: (
                            <FilmFestivalLink
                                href="https://liftoff.network/tokyo-lift-off-film-festival-2021/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.venture.tokyoliftoff" />
                            </FilmFestivalLink>
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
                            id: "portfolio.visitWebsite",
                        }),
                        link: "https://venture-anime.com",
                    },
                    {
                        text: intl.formatMessage({
                            id: "portfolio.imdb",
                        }),
                        link: "https://www.imdb.com/title/tt12630246/",
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
                            <FilmFestivalLink
                                href={intl.formatMessage({
                                    id: "projects.moon.atamiLink",
                                })}
                                target="_blank"
                            >
                                <FormattedMessage id="projects.moon.atami" />
                            </FilmFestivalLink>
                        ),
                        tokyoLiftOff: (
                            <FilmFestivalLink
                                href="https://liftoff.network/tokyo-lift-off-film-festival/"
                                target="_blank"
                            >
                                <FormattedMessage id="projects.moon.tokyoLiftOff" />
                            </FilmFestivalLink>
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
                        pdfUrl: "https://cdn.jsdelivr.net/gh/akiyamasho/brighter-the-animation@main/paper/paper.pdf",
                        sourceUrl:
                            "https://github.com/akiyamasho/brighter-the-animation/blob/main/paper/paper.pdf",
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
                <SEO
                    title={intl.formatMessage({ id: "portfolio.title" })}
                    lang={intl.locale}
                />
                <PageTitle
                    kicker={intl.formatMessage({ id: "portfolio.kicker" })}
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
                                    posterFit,
                                    title,
                                    roles,
                                    subTitle,
                                    linkTextList,
                                    snsLinkTypeMap,
                                }) => (
                                    <Project
                                        key={title}
                                        locale={intl.locale}
                                        posterImageSrc={posterImageSrc}
                                        posterFit={posterFit}
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
                                                    {roles.map((role) => role)}
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
