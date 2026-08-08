import React, { useState } from "react";
import PropTypes from "prop-types";
import PostHeader from "./post-header";

const PostHero = ({ post, locale }) => {
    const [failed, setFailed] = useState(false);
    const alt = post.cover.alt[locale] || post.cover.alt.en;

    return (
        <section
            className="blog-feature-hero blog-feature-hero--article"
            data-cover-tone={post.cover.tone || "cyan"}
        >
            {failed ? (
                <div className="blog-media-fallback" role="status">
                    {locale === "ja"
                        ? "カバー画像を読み込めませんでした。"
                        : "The cover image could not be loaded."}
                </div>
            ) : (
                <img
                    className="blog-feature-hero-image"
                    src={post.cover.src}
                    alt={alt}
                    loading="eager"
                    onError={() => setFailed(true)}
                />
            )}
            <div className="blog-feature-hero-shade" aria-hidden="true" />
            <div className="blog-feature-hero-copy">
                <PostHeader post={post} locale={locale} />
            </div>
        </section>
    );
};

PostHero.propTypes = {
    post: PropTypes.object.isRequired,
    locale: PropTypes.string.isRequired,
};

export default PostHero;
