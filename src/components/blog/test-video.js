import React, { useState } from "react";
import PropTypes from "prop-types";

const TestVideo = ({ src, poster, title, fallback, muted }) => {
    const [isUnavailable, setIsUnavailable] = useState(false);

    if (isUnavailable) {
        return (
            <div className="blog-media-fallback" role="status">
                {fallback}
            </div>
        );
    }

    return (
        <video
            className="blog-video"
            controls
            muted={muted}
            playsInline
            preload="metadata"
            poster={poster}
            title={title}
            onError={() => setIsUnavailable(true)}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
    );
};

TestVideo.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    fallback: PropTypes.string.isRequired,
    muted: PropTypes.bool,
};

TestVideo.defaultProps = { muted: true };

export default TestVideo;
