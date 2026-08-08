import React from "react";
import Helmet from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";

import {
    localVscodeCloudGpusArticle,
    localVscodeCloudGpusSource,
    post,
} from "../../blog/migrated/local-vscode-cloud-gpus";
import BlogLayout from "../../components/blog/blog-layout";
import PostHeader from "../../components/blog/post-header";
import SEO from "../../components/seo";

const Article = ({ copy, locale }) => (
    <>
        <div className="blog-body blog-opening">
            <p className="blog-original-source">
                <a
                    href={localVscodeCloudGpusSource}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {copy.sourceLabel}
                    <span className="sr-only">
                        {locale === "ja"
                            ? "（新しいタブで開きます）"
                            : " (opens in a new tab)"}
                    </span>
                </a>
            </p>
        </div>
        <article
            className="blog-body blog-compact-copy"
            dangerouslySetInnerHTML={{ __html: copy.bodyHtml }}
        />
    </>
);

const EnglishArticle = () => (
    <Article copy={localVscodeCloudGpusArticle.en} locale="en" />
);

const JapaneseArticle = () => (
    <Article copy={localVscodeCloudGpusArticle.ja} locale="ja" />
);

const LocalVscodeCloudGpusPage = ({ intl }) => {
    const locale = intl.locale === "ja" ? "ja" : "en";
    const translation = post.translations[locale];

    return (
        <BlogLayout>
            <SEO
                title={translation.title}
                description={translation.summary}
                lang={locale}
            />
            <Helmet>
                <link rel="canonical" href={localVscodeCloudGpusSource} />
            </Helmet>
            <PostHeader post={post} locale={locale} />
            {locale === "ja" ? <JapaneseArticle /> : <EnglishArticle />}
        </BlogLayout>
    );
};

export default injectIntl(LocalVscodeCloudGpusPage);
