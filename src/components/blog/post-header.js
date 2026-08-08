import React from "react";
import PropTypes from "prop-types";
import { tagLabel, tagTone } from "../../blog/tags";
import JapaneseLineBreak from "../japanese-line-break";

const PostHeader = ({ post, locale }) => {
    const translation = post.translations[locale] || post.translations.en;
    const date = new Intl.DateTimeFormat(locale === "ja" ? "ja-JP" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(`${post.date}T00:00:00`));

    return (
        <>
            <div className="blog-kicker">
                {locale === "ja" ? "制作ノート" : "Production notebook"}
            </div>
            <h1 className="blog-title">
                <JapaneseLineBreak>{translation.title}</JapaneseLineBreak>
            </h1>
            <div className="blog-meta">{date}</div>
            <p className="blog-lede">
                <JapaneseLineBreak>{translation.summary}</JapaneseLineBreak>
            </p>
            <div className="blog-tags">
                {post.tags.map((tag) => (
                    <span
                        className="blog-tag"
                        data-tone={tagTone(tag)}
                        key={tag}
                    >
                        {tagLabel(tag, locale)}
                    </span>
                ))}
            </div>
        </>
    );
};

PostHeader.propTypes = {
    post: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
};

export default PostHeader;
