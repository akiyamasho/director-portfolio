import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "gatsby-plugin-intl";

const sectionSlug = (value) =>
    value
        .normalize("NFKD")
        .toLowerCase()
        .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
        .replace(/^-+|-+$/g, "");

const copyText = async (value) => {
    try {
        await navigator.clipboard.writeText(value);
        return true;
    } catch {
        const input = document.createElement("textarea");
        input.value = value;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";

        try {
            document.body.appendChild(input);
            input.select();
            return document.execCommand("copy");
        } catch {
            return false;
        } finally {
            input.remove();
        }
    }
};

const ArticleSectionLinks = () => {
    const intl = useIntl();
    const locale = intl.locale === "ja" ? "ja" : "en";
    const [status, setStatus] = useState("");
    const resetTimer = useRef(null);

    useEffect(() => {
        const labels =
            locale === "ja"
                ? {
                      link: (heading) => `${heading}へのリンク`,
                      copy: (heading) => `${heading}へのリンクをコピー`,
                      copied: (heading) =>
                          `${heading}へのリンクをコピーしました`,
                      failed: "セクションへのリンクをコピーできませんでした",
                  }
                : {
                      link: (heading) => `Link to ${heading}`,
                      copy: (heading) => `Copy link to ${heading}`,
                      copied: (heading) => `Link to ${heading} copied`,
                      failed: "Couldn’t copy the section link",
                  };
        const headings = Array.from(
            document.querySelectorAll(
                ".blog-shell .blog-body h2, .blog-shell .blog-body h3, .blog-shell .blog-body h4, .blog-shell .blog-study-section h2, .blog-shell .blog-study-section h3, .blog-shell .blog-study-section h4"
            )
        );
        const generatedIds = [];
        const labeledHeadings = [];
        const tools = [];

        headings.forEach((heading, index) => {
            if (heading.querySelector(":scope > .blog-heading-tools")) return;

            const headingText = heading.textContent.trim();
            if (!headingText) return;

            if (!heading.hasAttribute("aria-label")) {
                heading.setAttribute("aria-label", headingText);
                labeledHeadings.push(heading);
            }

            if (!heading.id) {
                const baseId =
                    sectionSlug(headingText) || `section-${index + 1}`;
                let id = baseId;
                let suffix = 2;

                while (document.getElementById(id)) {
                    id = `${baseId}-${suffix}`;
                    suffix += 1;
                }

                heading.id = id;
                generatedIds.push(heading);
            }

            const controls = document.createElement("span");
            controls.className = "blog-heading-tools";
            controls.dataset.sectionTools = "true";

            const permalink = document.createElement("a");
            permalink.className = "blog-heading-permalink";
            permalink.href = `#${heading.id}`;
            permalink.setAttribute("aria-label", labels.link(headingText));
            permalink.title = labels.link(headingText);
            permalink.textContent = "#";

            const copyButton = document.createElement("button");
            copyButton.className = "blog-heading-copy";
            copyButton.type = "button";
            copyButton.setAttribute("aria-label", labels.copy(headingText));
            copyButton.title = labels.copy(headingText);
            copyButton.textContent = "⧉";
            copyButton.addEventListener("click", async () => {
                const url = new URL(window.location.href);
                url.hash = heading.id;
                const didCopy = await copyText(url.toString());

                window.clearTimeout(resetTimer.current);
                copyButton.dataset.copied = didCopy ? "true" : "false";
                copyButton.setAttribute(
                    "aria-label",
                    didCopy ? labels.copied(headingText) : labels.failed
                );
                setStatus(didCopy ? labels.copied(headingText) : labels.failed);
                resetTimer.current = window.setTimeout(() => {
                    delete copyButton.dataset.copied;
                    copyButton.setAttribute(
                        "aria-label",
                        labels.copy(headingText)
                    );
                    setStatus("");
                }, 2200);
            });

            controls.append(permalink, copyButton);
            heading.appendChild(controls);
            tools.push(controls);
        });

        if (window.location.hash) {
            window.requestAnimationFrame(() => {
                let targetId = window.location.hash.slice(1);

                try {
                    targetId = decodeURIComponent(targetId);
                } catch {
                    // Keep the raw fragment when it is not URI encoded.
                }

                document.getElementById(targetId)?.scrollIntoView();
            });
        }

        return () => {
            window.clearTimeout(resetTimer.current);
            tools.forEach((tool) => tool.remove());
            generatedIds.forEach((heading) => heading.removeAttribute("id"));
            labeledHeadings.forEach((heading) =>
                heading.removeAttribute("aria-label")
            );
        };
    }, [locale]);

    return (
        <span className="blog-section-link-status" aria-live="polite">
            {status}
        </span>
    );
};

export default ArticleSectionLinks;
