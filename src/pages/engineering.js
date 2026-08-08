import React, { Component } from "react";
import styled from "styled-components";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/pageTitle";
import PdfModalLink from "../components/pdf-modal";
import {
    accentColour,
    themeColour,
    themeDark,
} from "../components/shared/colours";
import { TextLink } from "../components/shared/button";
import { SectionContainer, SectionInnerWrapper } from "./portfolio";

const Container = styled.div`
    width: min(1100px, 100%);
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 5vw, 4rem) 8rem;
`;

const Title = styled.h2`
    color: ${accentColour};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
`;

const WorkHistoryTable = styled.table`
    border-collapse: collapse;
    width: 100%;

    @media only screen and (max-width: 600px) {
        thead {
            display: none;
        }
    }
`;

const TableData = styled.td`
    padding: 1em 0.5em;

    @media only screen and (max-width: 600px) {
        display: block;
        padding: 0.3rem 0;
    }
`;

const Company = styled(TextLink)`
    display: flex;
    flex-flow: wrap;
`;

const TableHead = styled.th`
    text-align: left;
    color: ${themeDark};
    font-size: 0.75em;
    border-bottom: 1px solid rgba(242, 239, 233, 0.16);
    padding-bottom: 0.5em;
`;

const TableBody = styled.tbody`
    tr:not(:last-child) {
        border-bottom: 1px solid rgba(242, 239, 233, 0.16);
    }
`;

const TableRow = styled.tr`
    @media only screen and (max-width: 600px) {
        display: block;
        padding: 1rem 0;
    }
`;

const RoleList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin: 0.15rem 0;
    padding-left: 1rem;
    border-left: 1px solid rgba(122, 167, 184, 0.42);
`;

const RoleEntry = styled.div`
    position: relative;

    &::before {
        position: absolute;
        top: 0.52rem;
        left: calc(-1rem - 4px);
        width: 7px;
        height: 7px;
        border: 1px solid ${accentColour};
        border-radius: 50%;
        background: #04070a;
        content: "";
    }
`;

const Role = styled.span`
    display: block;
    color: ${themeColour};
    font-size: 0.8rem;
    line-height: 1.45;
`;

const RolePeriod = styled.span`
    display: block;
    margin-top: 0.12rem;
    color: ${themeDark};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.62rem;
    letter-spacing: 0.04em;
`;

const PublicationList = styled.ol`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Publication = styled.li`
    display: grid;
    grid-template-columns: 5rem minmax(0, 1fr);
    gap: 1rem;
    padding: 1.1rem 0;
    border-bottom: 1px solid rgba(242, 239, 233, 0.16);

    @media only screen and (max-width: 520px) {
        grid-template-columns: 1fr;
        gap: 0.25rem;
    }
`;

const PublicationYear = styled.span`
    color: ${themeDark};
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.68rem;
`;

const PublicationLink = styled(PdfModalLink)`
    align-items: flex-start;
    line-height: 1.55;
    padding: 0;
    text-align: left;
`;

const publications = [
    {
        year: "2026",
        title: "Continuous Improvement and Parallel Autonomous Exploration: An LLM-Agent Framework for Searching Large Solution Spaces",
        sourceUrl: "https://arxiv.org/abs/2608.04341",
        pdfUrl: "https://arxiv.org/pdf/2608.04341",
    },
    {
        year: "2025",
        title: "Towards Better Search with Domain-Aware Text Embeddings for C2C Marketplaces",
        sourceUrl: "https://arxiv.org/abs/2512.21021",
        pdfUrl: "https://arxiv.org/pdf/2512.21021",
    },
    {
        year: "2025",
        title: "Improving Visual Recommendation on E-commerce Platforms Using Vision-Language Models",
        sourceUrl: "https://arxiv.org/abs/2510.13359",
        pdfUrl: "https://arxiv.org/pdf/2510.13359",
    },
    {
        year: "2025",
        title: "Zero-Shot Retrieval for Scalable Visual Search in a Two-Sided Marketplace",
        sourceUrl: "https://arxiv.org/abs/2508.05661",
        pdfUrl: "https://arxiv.org/pdf/2508.05661",
    },
    {
        year: "2018",
        title: "Brighter the Animation: Study and Application of the Combination of Western and Japanese Animation Process Influences to Improve Efficiency Whilst Retaining Quality of Anime Production",
        sourceUrl:
            "https://github.com/akiyamasho/brighter-the-animation/blob/main/paper/paper.pdf",
        pdfUrl: "https://cdn.jsdelivr.net/gh/akiyamasho/brighter-the-animation@main/paper/paper.pdf",
    },
];

const workHistoryItems = [
    {
        year: "2024ー",
        companyLabelId: "engineering.mercari",
        companyLink: "https://about.mercari.com/en/",
        roles: [
            {
                labelId: "engineering.role.aiEngineeringManager",
                periodId: "engineering.period.mercariManager",
            },
            {
                labelId: "engineering.role.aiTechLead",
                periodId: "engineering.period.mercariTechLead",
            },
            {
                labelId: "engineering.role.mlFullStack",
                periodId: "engineering.period.mercariEngineer",
            },
        ],
    },
    {
        year: "2022-2024",
        companyLabelId: "engineering.555comic",
        companyLink: "https://555comic.com",
        roles: [
            {
                labelId: "engineering.role.mlEngineeringManager",
                periodId: "engineering.period.555Manager",
            },
            {
                labelId: "engineering.role.seriesCreator",
                periodId: "engineering.period.555Engineer",
            },
        ],
    },
    {
        year: "2020-2022",
        companyLabelId: "engineering.retailAi",
        companyLink: "https://www.retail-ai.jp/en/",
        roles: [{ labelId: "engineering.role.mleSreTechLead" }],
    },
    {
        year: "2018-2020",
        companyLabelId: "engineering.cogent",
        companyLink: "https://www.cogent.co.jp",
        roles: [
            { labelId: "engineering.role.fullStack" },
            { labelId: "engineering.role.uiUxDesigner" },
        ],
    },
    {
        year: "2015-2017",
        companyLabelId: "engineering.ibridge",
        companyLink: "http://i-bridge.com.ph",
        roles: [
            { labelId: "engineering.role.mobile" },
            { labelId: "engineering.role.uiUxDesigner" },
        ],
    },
    {
        year: "2014-2015",
        companyLabelId: "engineering.azeus",
        companyLink: "https://www.azeus.com/",
        roles: [
            { labelId: "engineering.role.frontend" },
            { labelId: "engineering.role.uiUxDesigner" },
        ],
    },
];

class Engineering extends Component {
    render() {
        const { intl } = this.props;
        return (
            <Layout>
                <SEO
                    title={intl.formatMessage({ id: "engineering.title" })}
                    lang={intl.locale}
                />
                <PageTitle
                    kicker={intl.formatMessage({ id: "engineering.kicker" })}
                    subTitle={intl.formatMessage({
                        id: "engineering.subTitle",
                    })}
                    title={intl.formatMessage({ id: "engineering.title" })}
                    shouldRenderFromRight
                />
                <Container>
                    <SectionContainer>
                        <SectionInnerWrapper>
                            <Title>
                                <FormattedMessage id="engineering.workHistory" />
                            </Title>
                            <WorkHistoryTable>
                                <thead>
                                    <TableRow>
                                        <TableHead>
                                            <FormattedMessage id="engineering.year" />
                                        </TableHead>
                                        <TableHead>
                                            <FormattedMessage id="engineering.company" />
                                        </TableHead>
                                        <TableHead>
                                            <FormattedMessage id="engineering.role" />
                                        </TableHead>
                                    </TableRow>
                                </thead>
                                <TableBody>
                                    {workHistoryItems.map(
                                        ({
                                            year,
                                            companyLabelId,
                                            companyLink,
                                            roles,
                                        }) => (
                                            <TableRow key={companyLabelId}>
                                                <TableData>{year}</TableData>
                                                <TableData>
                                                    <Company
                                                        target="_blank"
                                                        href={companyLink}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FormattedMessage
                                                            id={companyLabelId}
                                                        />
                                                        &nbsp;
                                                        <i className="material-icons">
                                                            launch
                                                        </i>
                                                    </Company>
                                                </TableData>
                                                <TableData>
                                                    <RoleList>
                                                        {roles.map(
                                                            ({
                                                                labelId,
                                                                periodId,
                                                            }) => (
                                                                <RoleEntry
                                                                    key={
                                                                        labelId
                                                                    }
                                                                >
                                                                    <Role>
                                                                        <FormattedMessage
                                                                            id={
                                                                                labelId
                                                                            }
                                                                        />
                                                                    </Role>
                                                                    {periodId && (
                                                                        <RolePeriod>
                                                                            <FormattedMessage
                                                                                id={
                                                                                    periodId
                                                                                }
                                                                            />
                                                                        </RolePeriod>
                                                                    )}
                                                                </RoleEntry>
                                                            )
                                                        )}
                                                    </RoleList>
                                                </TableData>
                                            </TableRow>
                                        )
                                    )}
                                </TableBody>
                            </WorkHistoryTable>
                        </SectionInnerWrapper>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionInnerWrapper>
                            <Title>
                                <FormattedMessage id="engineering.techStack" />
                            </Title>
                            <ul>
                                <li>
                                    <FormattedMessage id="engineering.techStack.ai" />
                                </li>
                                <li>
                                    <FormattedMessage id="engineering.techStack.mlops" />
                                </li>
                                <li>
                                    <FormattedMessage id="engineering.techStack.platform" />
                                </li>
                                <li>
                                    <FormattedMessage id="engineering.techStack.product" />
                                </li>
                            </ul>
                        </SectionInnerWrapper>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionInnerWrapper>
                            <Title>
                                <FormattedMessage id="engineering.publications" />
                            </Title>
                            <PublicationList>
                                {publications.map(
                                    ({ year, title, pdfUrl, sourceUrl }) => (
                                        <Publication key={title}>
                                            <PublicationYear>
                                                {year}
                                            </PublicationYear>
                                            <PublicationLink
                                                locale={intl.locale}
                                                pdfUrl={pdfUrl}
                                                sourceUrl={sourceUrl}
                                                title={title}
                                                variant="text"
                                            >
                                                {title}&nbsp;
                                                <i className="material-icons">
                                                    picture_as_pdf
                                                </i>
                                            </PublicationLink>
                                        </Publication>
                                    )
                                )}
                            </PublicationList>
                        </SectionInnerWrapper>
                    </SectionContainer>
                    <SectionContainer>
                        <SectionInnerWrapper>
                            <Title>
                                <FormattedMessage id="engineering.qualifications" />
                            </Title>
                            <ul>
                                <li>
                                    <FormattedMessage id="engineering.qualifications.n1" />
                                </li>
                                <li>
                                    <FormattedMessage id="engineering.qualifications.bscs" />
                                </li>
                            </ul>
                        </SectionInnerWrapper>
                    </SectionContainer>
                </Container>
            </Layout>
        );
    }
}

export default injectIntl(Engineering);
