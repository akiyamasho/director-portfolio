import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "gatsby-plugin-intl";

const SITE_URL = "https://akiyamasho.com";

const ArticleShare = () => {
    const intl = useIntl();
    const locale = intl.locale === "ja" ? "ja" : "en";
    const [pageUrl, setPageUrl] = useState(SITE_URL);
    const [pageTitle, setPageTitle] = useState("");
    const [copied, setCopied] = useState(false);
    const [copyFailed, setCopyFailed] = useState(false);
    const resetTimer = useRef(null);

    useEffect(() => {
        setPageUrl(window.location.href);

        const ogTitle = document
            .querySelector('meta[property="og:title"]')
            ?.getAttribute("content");
        const heading = document.querySelector(".blog-title")?.textContent;
        const documentTitle = document.title.replace(
            /\s*\|\s*秋山翔 Akiyama Shō\s*$/,
            ""
        );

        setPageTitle(ogTitle || heading || documentTitle);

        return () => window.clearTimeout(resetTimer.current);
    }, []);

    const labels =
        locale === "ja"
            ? {
                  heading: "この記事をシェア",
                  twitter: "Xでシェア",
                  facebook: "Facebookでシェア",
                  copy: "リンクをコピー",
                  copied: "コピーしました",
                  copyFailed: "リンクをコピーできませんでした",
                  fallbackTitle: "制作ノート",
              }
            : {
                  heading: "Share this article",
                  twitter: "Share on X",
                  facebook: "Share on Facebook",
                  copy: "Copy link",
                  copied: "Link copied",
                  copyFailed: "Couldn’t copy the link",
                  fallbackTitle: "Journal article",
              };

    const twitterUrl = `https://twitter.com/intent/tweet?${new URLSearchParams({
        text: pageTitle || labels.fallbackTitle,
        url: pageUrl,
    }).toString()}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?${new URLSearchParams(
        { u: pageUrl }
    ).toString()}`;

    const copyLink = async () => {
        let didCopy = false;

        try {
            await navigator.clipboard.writeText(pageUrl);
            didCopy = true;
        } catch {
            const input = document.createElement("textarea");
            input.value = pageUrl;
            input.setAttribute("readonly", "");
            input.style.position = "fixed";
            input.style.opacity = "0";

            try {
                document.body.appendChild(input);
                input.select();
                didCopy = document.execCommand("copy");
            } catch {
                didCopy = false;
            } finally {
                input.remove();
            }
        }

        window.clearTimeout(resetTimer.current);
        setCopied(didCopy);
        setCopyFailed(!didCopy);
        resetTimer.current = window.setTimeout(() => {
            setCopied(false);
            setCopyFailed(false);
        }, 2200);
    };

    return (
        <aside className="blog-share" aria-labelledby="blog-share-heading">
            <p id="blog-share-heading">{labels.heading}</p>
            <div className="blog-share-actions">
                <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={labels.twitter}
                >
                    <span aria-hidden="true">X</span>
                    {labels.twitter}
                </a>
                <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={labels.facebook}
                >
                    <span aria-hidden="true">f</span>
                    {labels.facebook}
                </a>
                <button type="button" onClick={copyLink}>
                    <span aria-hidden="true">⌁</span>
                    {copied ? labels.copied : labels.copy}
                </button>
            </div>
            <span className="blog-share-status" aria-live="polite">
                {copied ? labels.copied : copyFailed ? labels.copyFailed : ""}
            </span>
        </aside>
    );
};

export default ArticleShare;
