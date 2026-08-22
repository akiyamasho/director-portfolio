import React, { useState } from "react";
import PropTypes from "prop-types";
import PostHeader from "./post-header";

const PostHero = ({ post, locale }) => {
    const [failed, setFailed] = useState(false);
    const alt = post.cover.alt[locale] || post.cover.alt.en;

    return (
        <section
            className={`blog-feature-hero blog-feature-hero--article blog-feature-hero--${post.slug}`}
            data-cover-tone={post.cover.tone || "cyan"}
        >
            {failed ? (
                <div className="blog-media-fallback" role="status">
                    {locale === "ja"
                        ? "カバーメディアを読み込めませんでした。"
                        : "The cover media could not be loaded."}
                </div>
            ) : post.cover.video ? (
                <video
                    className="blog-feature-hero-image blog-feature-hero-video"
                    controls
                    playsInline
                    preload="metadata"
                    poster={post.cover.poster}
                    onError={() => setFailed(true)}
                    aria-label={alt}
                >
                    <source src={post.cover.video} type="video/mp4" />
                </video>
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
