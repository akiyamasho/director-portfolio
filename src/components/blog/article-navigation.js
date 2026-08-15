import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby-plugin-intl";

const mlopsEntries = {
    en: [
        {
            slug: "introducing-mlops-part-1",
            label: "From a model to production",
        },
        {
            slug: "introducing-mlops-part-2",
            label: "Why MLOps becomes necessary",
        },
        {
            slug: "introducing-mlops-part-3",
            label: "Applying MLOps step by step",
        },
    ],
    ja: [
        {
            slug: "introducing-mlops-part-1",
            label: "モデルを本番環境へつなぐ",
        },
        {
            slug: "introducing-mlops-part-2",
            label: "MLOpsが必要になる理由",
        },
        {
            slug: "introducing-mlops-part-3",
            label: "小さなステップで実装する",
        },
    ],
};

const directingReferenceEntries = {
    en: [
        {
            slug: "directing-the-reference",
            label: "Testing how references divide authority",
        },
        {
            slug: "directing-the-reference-part-2",
            label: "Productionizing fewer, stronger inputs",
        },
        {
            slug: "directing-the-reference-part-3",
            label: "Turning fear into TEGAKI",
        },
    ],
    ja: [
        {
            slug: "directing-the-reference",
            label: "リファレンスの役割を分けて検証する",
        },
        {
            slug: "directing-the-reference-part-2",
            label: "少数の強い入力へ仕上げる",
        },
        {
            slug: "directing-the-reference-part-3",
            label: "恐れから『TEGAKI』をつくる",
        },
    ],
};

export const ArticleContents = ({ items, locale }) => (
    <nav
        className="blog-article-nav"
        aria-labelledby="blog-article-contents-title"
    >
        <p className="blog-nav-label" id="blog-article-contents-title">
            {locale === "ja" ? "この記事の目次" : "In this article"}
        </p>
        <ol>
            {items.map((item) => (
                <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                </li>
            ))}
        </ol>
    </nav>
);

ArticleContents.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    locale: PropTypes.string.isRequired,
};

export const MLOpsSeriesNavigation = ({ currentPart, locale }) => {
    const language = locale === "ja" ? "ja" : "en";
    const entries = mlopsEntries[language];
    const previous = entries[currentPart - 2];
    const next = entries[currentPart];

    return (
        <nav
            className="blog-series-nav"
            id="series-contents"
            aria-labelledby="blog-series-title"
        >
            <div className="blog-series-heading">
                <p className="blog-nav-label" id="blog-series-title">
                    {language === "ja" ? "全3回の構成" : "Three-part series"}
                </p>
                <span>
                    {language === "ja"
                        ? `第${currentPart}回 / 全3回`
                        : `Part ${currentPart} / 3`}
                </span>
            </div>
            <ol className="blog-series-overview">
                {entries.map((entry, index) => {
                    const part = index + 1;
                    return (
                        <li key={entry.slug}>
                            <span aria-hidden="true">0{part}</span>
                            {part === currentPart ? (
                                <strong aria-current="page">
                                    {entry.label}
                                </strong>
                            ) : (
                                <Link to={`/blog/${entry.slug}`}>
                                    {entry.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
            <div className="blog-series-pager">
                <div>
                    {previous && (
                        <Link to={`/blog/${previous.slug}`}>
                            <span>
                                {language === "ja" ? "前の記事" : "Previous"}
                            </span>
                            {previous.label}
                        </Link>
                    )}
                </div>
                <div>
                    {next && (
                        <Link to={`/blog/${next.slug}`}>
                            <span>
                                {language === "ja" ? "次の記事" : "Next"}
                            </span>
                            {next.label}
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

MLOpsSeriesNavigation.propTypes = {
    currentPart: PropTypes.oneOf([1, 2, 3]).isRequired,
    locale: PropTypes.string.isRequired,
};

export const DirectingReferenceSeriesNavigation = ({ currentPart, locale }) => {
    const language = locale === "ja" ? "ja" : "en";
    const entries = directingReferenceEntries[language];
    const previous = entries[currentPart - 2];
    const next = entries[currentPart];

    return (
        <nav
            className="blog-series-nav"
            aria-labelledby="directing-reference-series-title"
        >
            <div className="blog-series-heading">
                <p
                    className="blog-nav-label"
                    id="directing-reference-series-title"
                >
                    {language === "ja"
                        ? "全3回の制作記録"
                        : "Three-part production study"}
                </p>
                <span>
                    {language === "ja"
                        ? `Part ${currentPart} / 3`
                        : `Part ${currentPart} / 3`}
                </span>
            </div>
            <ol className="blog-series-overview">
                {entries.map((entry, index) => {
                    const part = index + 1;
                    return (
                        <li key={entry.slug}>
                            <span aria-hidden="true">0{part}</span>
                            {part === currentPart ? (
                                <strong aria-current="page">
                                    {entry.label}
                                </strong>
                            ) : (
                                <Link to={`/blog/${entry.slug}`}>
                                    {entry.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
            <div className="blog-series-pager">
                <div>
                    {previous && (
                        <Link to={`/blog/${previous.slug}`}>
                            <span>
                                {language === "ja" ? "前の記事" : "Previous"}
                            </span>
                            {previous.label}
                        </Link>
                    )}
                </div>
                <div>
                    {next && (
                        <Link to={`/blog/${next.slug}`}>
                            <span>
                                {language === "ja" ? "次の記事" : "Next"}
                            </span>
                            {next.label}
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

DirectingReferenceSeriesNavigation.propTypes = {
    currentPart: PropTypes.oneOf([1, 2, 3]).isRequired,
    locale: PropTypes.string.isRequired,
};
