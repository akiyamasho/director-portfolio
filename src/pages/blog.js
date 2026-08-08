import React, { useState } from "react";
import { Link, injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../components/blog/blog-layout";
import SEO from "../components/seo";
import JapaneseLineBreak from "../components/japanese-line-break";
import { posts } from "../blog/posts";
import {
    journalFilters,
    postMatchesFilter,
    tagLabel,
    tagTone,
} from "../blog/tags";

const filterLabels = {
    en: {
        all: "All",
        film: "Film & animation",
        engineering: "Engineering & AI",
        "5rps": "5RPS",
    },
    ja: {
        all: "すべて",
        film: "映像・アニメーション",
        engineering: "エンジニアリング・AI",
        "5rps": "5RPS",
    },
};

const Blog = ({ intl }) => {
    const locale = intl.locale || "en";
    const language = locale === "ja" ? "ja" : "en";
    const [activeFilter, setActiveFilter] = useState("all");
    const visiblePosts = posts.filter((post) =>
        postMatchesFilter(post, activeFilter)
    );
    return (
        <BlogLayout>
            <SEO
                title={locale === "ja" ? "制作ノート" : "Production notes"}
                lang={locale}
                description={
                    locale === "ja"
                        ? "映像とアニメーション制作のノート。"
                        : "Notes from film and animation production."
                }
            />
            <section className="blog-index">
                <div className="blog-kicker">
                    {locale === "ja" ? "日誌" : "Journal"}
                </div>
                <h1 className="blog-title">
                    {locale === "ja" ? "制作ノート" : "Production notes"}
                </h1>
                <div
                    className="blog-filter"
                    aria-label={
                        language === "ja"
                            ? "記事を分野で絞り込む"
                            : "Filter journal by discipline"
                    }
                >
                    {journalFilters.map((filter) => (
                        <button
                            className="blog-filter-button"
                            data-active={activeFilter === filter}
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filterLabels[language][filter]}
                            <span>
                                {
                                    posts.filter((post) =>
                                        postMatchesFilter(post, filter)
                                    ).length
                                }
                            </span>
                        </button>
                    ))}
                </div>
                <div aria-live="polite" className="blog-results-count">
                    {language === "ja"
                        ? `${visiblePosts.length}件`
                        : `${visiblePosts.length} entries`}
                </div>
                {visiblePosts.map((post) => {
                    const translation =
                        post.translations[locale] || post.translations.en;
                    const cardContent = (
                        <>
                            <div className="blog-card-topline">
                                <div className="blog-meta">{post.date}</div>
                                {post.externalUrl && (
                                    <div className="blog-external-label">
                                        {language === "ja"
                                            ? `${post.externalSource} · 外部記事`
                                            : `${post.externalSource} · external`}
                                    </div>
                                )}
                            </div>
                            <h2 className="blog-card-title">
                                <JapaneseLineBreak
                                    phrases={translation.titleBreaks}
                                >
                                    {translation.title}
                                </JapaneseLineBreak>
                                {post.externalUrl && (
                                    <span
                                        className="blog-card-outbound-arrow"
                                        aria-hidden="true"
                                    >
                                        ↗
                                    </span>
                                )}
                            </h2>
                            {!post.externalUrl && translation.summary && (
                                <p>
                                    <JapaneseLineBreak>
                                        {translation.summary}
                                    </JapaneseLineBreak>
                                </p>
                            )}
                            <div className="blog-card-tags">
                                {post.tags.map((tag) => (
                                    <span
                                        className="blog-tag"
                                        data-tone={tagTone(tag)}
                                        key={tag}
                                    >
                                        {tagLabel(tag, language)}
                                    </span>
                                ))}
                            </div>
                        </>
                    );

                    return post.externalUrl ? (
                        <a
                            className="blog-card"
                            data-external="true"
                            key={post.slug}
                            href={post.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${translation.title} — ${
                                language === "ja"
                                    ? "外部の5RPS公式サイトで開く"
                                    : "opens on the external 5RPS website"
                            }`}
                        >
                            {cardContent}
                        </a>
                    ) : (
                        <Link
                            className="blog-card"
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                        >
                            {cardContent}
                        </Link>
                    );
                })}
            </section>
        </BlogLayout>
    );
};

export default injectIntl(Blog);
