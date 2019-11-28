import React, { Component } from "react";
import styled from "styled-components";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/pageTitle";
import { themeColour, themeDark } from "../components/shared/colours";
import { TextLink } from "../components/shared/button";
import { SectionContainer, SectionInnerWrapper } from "./portfolio";

const Title = styled.h1``;

const WorkHistoryTable = styled.table`
    border-collapse: collapse;
`;

const CompanyTd = styled.td``;

const Company = styled(TextLink)``;

const TableHead = styled.th`
    text-align: left;
    color: ${themeDark};
    font-size: 0.75em;
    border-bottom: 1px solid ${themeColour};
    padding-bottom: 0.5em;
`;

const TableRow = styled.tr`
    padding: 0.5em 0;
    border-bottom: 1px solid ${themeDark};
`;

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
                            <tbody>
                                {workHistoryItems.map(
                                    ({
                                        year,
                                        companyLabelId,
                                        companyLink,
                                        roleLabelIdList,
                                    }) => (
                                        <TableRow>
                                            <td>{year}</td>
                                            <CompanyTd>
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
                                            </CompanyTd>
                                            <td>
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
                                            </td>
                                        </TableRow>
                                    )
                                )}
                            </tbody>
                        </WorkHistoryTable>
                    </SectionInnerWrapper>
                </SectionContainer>
            </Layout>
        );
    }
}

export default injectIntl(Engineering);
