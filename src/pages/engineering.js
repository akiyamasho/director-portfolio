import React, { Component } from "react";
import styled from "styled-components";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/pageTitle";
import { themeColour, themeDark } from "../components/shared/colours";
import { TextLink } from "../components/shared/button";
import { SectionContainer, SectionInnerWrapper } from "./portfolio";

const Title = styled.h1`
    color: ${themeDark};
`;

const WorkHistoryTable = styled.table`
    border-collapse: collapse;
`;

const TableData = styled.td`
    padding: 0.25em 0.5em;
`;

const Company = styled(TextLink)``;

const TableHead = styled.th`
    text-align: left;
    color: ${themeDark};
    font-size: 0.75em;
    border-bottom: 1px solid ${themeColour};
    padding-bottom: 0.5em;
`;

const TableBody = styled.tbody`
    tr:not(:last-child) {
        border-bottom: 1px solid ${themeDark};
    }
`;

const TableRow = styled.tr``;

const RoleList = styled.div`
    display: flex;
    flex-direction: column;
`;

const Role = styled.span`
    border-radius: 1px;
    padding: 0.25em;
    color: ${themeDark};
    margin-right: 0.25em;
    font-size: 0.75em;
`;

const workHistoryItems = [
    {
        year: "2018ー",
        companyLabelId: "engineering.cogent",
        companyLink: "https://www.cogent.co.jp",
        roleLabelIdList: [
            "engineering.role.fullStack",
            "engineering.role.uiUxDesigner",
        ],
    },
    {
        year: "2015-2017",
        companyLabelId: "engineering.ibridge",
        companyLink: "http://i-bridge.com.ph",
        roleLabelIdList: [
            "engineering.role.mobile",
            "engineering.role.uiUxDesigner",
        ],
    },
    {
        year: "2014-2015",
        companyLabelId: "engineering.azeus",
        companyLink: "https://www.azeus.com/",
        roleLabelIdList: [
            "engineering.role.frontend",
            "engineering.role.uiUxDesigner",
        ],
    },
];

class Engineering extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Engineering" />
                <PageTitle
                    subTitle={<FormattedMessage id="engineering.subTitle" />}
                    title={<FormattedMessage id="engineering.title" />}
                    shouldRenderFromRight
                />
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
                                        roleLabelIdList,
                                    }) => (
                                        <TableRow>
                                            <TableData>{year}</TableData>
                                            <TableData>
                                                <Company
                                                    target="_blank"
                                                    href={companyLink}
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
                                                    {roleLabelIdList.map(
                                                        roleLabelId => (
                                                            <Role>
                                                                <FormattedMessage
                                                                    id={
                                                                        roleLabelId
                                                                    }
                                                                />
                                                            </Role>
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
                                <FormattedMessage id="engineering.techStack.ios" />
                            </li>
                            <li>
                                <FormattedMessage id="engineering.techStack.android" />
                            </li>

                            <li>
                                <FormattedMessage id="engineering.techStack.frontend" />
                            </li>
                            <li>
                                <FormattedMessage id="engineering.techStack.backend" />
                            </li>
                        </ul>
                    </SectionInnerWrapper>
                </SectionContainer>
                <SectionContainer>
                    <SectionInnerWrapper>
                        <Title>
                            <FormattedMessage id="engineering.qualifications" />
                        </Title>
                        <ul>
                            <li>
                                <FormattedMessage id="engineering.qualifications.courseraMl" />
                            </li>
                            <li>
                                <FormattedMessage id="engineering.qualifications.n2" />
                            </li>
                            <li>
                                <FormattedMessage id="engineering.qualifications.bscs" />
                            </li>
                        </ul>
                    </SectionInnerWrapper>
                </SectionContainer>
            </Layout>
        );
    }
}

export default injectIntl(Engineering);
