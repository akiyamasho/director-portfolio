import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Parser, jaModel } from "budoux";
import { useIntl } from "gatsby-plugin-intl";

const parser = new Parser(jaModel);
const ZWSP = "\u200B";
const japaneseCharacter = "[\\u3040-\\u30ff\\u3400-\\u9fff\\uf900-\\ufaff]";
const spaceAfterJapanese = new RegExp(
    `(${japaneseCharacter})[\\t\\n\\r ]+(?=\\S)`,
    "g"
);
const spaceBeforeJapanese = new RegExp(
    `(\\S)[\\t\\n\\r ]+(?=${japaneseCharacter})`,
    "g"
);

export const normalizeJapaneseWhitespace = (text) =>
    text.replace(spaceAfterJapanese, "$1").replace(spaceBeforeJapanese, "$1");

export const applyJapaneseLineBreaks = (text) =>
    text ? parser.parse(normalizeJapaneseWhitespace(text)).join(ZWSP) : text;

const JapaneseLineBreak = ({ children, className, phrases }) => {
    const intl = useIntl();
    const text =
        typeof children === "string" ? children : String(children ?? "");
    const phraseText = useMemo(
        () =>
            intl.locale === "ja"
                ? phrases?.join(ZWSP) || applyJapaneseLineBreaks(text)
                : text,
        [intl.locale, phrases, text]
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
    phrases: PropTypes.arrayOf(PropTypes.string),
};

JapaneseLineBreak.defaultProps = { className: undefined, phrases: undefined };

export default JapaneseLineBreak;
