import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";

const ZWSP = "\u200B";
const segmenter =
    typeof Intl !== "undefined" && Intl.Segmenter
        ? new Intl.Segmenter("ja", { granularity: "word" })
        : null;
const closingPunctuation = /^[、。！？：；）」』】〕〉》…]/;
const openingPunctuation = /^[（「『【〔〈《]/;
const particles = new Set([
    "が",
    "で",
    "と",
    "な",
    "に",
    "の",
    "は",
    "へ",
    "まで",
    "も",
    "や",
    "より",
    "を",
    "から",
]);

export const applyJapaneseLineBreaks = (text) => {
    if (!segmenter || !text) return text;

    const phrases = [];
    let current = "";
    let inBrackets = false;

    for (const { segment } of segmenter.segment(text)) {
        if (openingPunctuation.test(segment)) {
            if (current) phrases.push(current);
            current = segment;
            inBrackets = true;
            continue;
        }

        if (closingPunctuation.test(segment)) {
            current += segment;
            if (segment !== "、" && segment !== "：" && segment !== "；") {
                phrases.push(current);
                current = "";
                inBrackets = false;
            }
            continue;
        }

        const shouldContinue =
            inBrackets ||
            particles.has(segment) ||
            current.length < 5 ||
            /^\s+$/.test(segment);

        if (!shouldContinue && current) {
            phrases.push(current);
            current = segment;
        } else {
            current += segment;
        }
    }

    if (current) phrases.push(current);
    return phrases.join(ZWSP);
};

const JapaneseLineBreak = ({ children, className }) => {
    const intl = useIntl();
    const text =
        typeof children === "string" ? children : String(children ?? "");
    const phraseText = useMemo(
        () => (intl.locale === "ja" ? applyJapaneseLineBreaks(text) : text),
        [intl.locale, text]
    );

    return (
        <span
            className={
                intl.locale === "ja"
                    ? ["ja-phrase-break", className].filter(Boolean).join(" ")
                    : className
            }
        >
            {phraseText}
        </span>
    );
};

JapaneseLineBreak.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

JapaneseLineBreak.defaultProps = { className: undefined };

export default JapaneseLineBreak;
