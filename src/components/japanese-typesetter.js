import { useEffect } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { applyJapaneseLineBreaks } from "./japanese-line-break";

const ZWSP = "\u200B";
const japaneseText = /[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff]/;
const excludedSelector = [
    "code",
    "pre",
    "kbd",
    "samp",
    "script",
    "style",
    "textarea",
    "[contenteditable='true']",
    "[data-ja-no-break]",
].join(",");

const shouldSkip = (node) =>
    !node.nodeValue ||
    node.nodeValue.includes(ZWSP) ||
    !japaneseText.test(node.nodeValue) ||
    node.parentElement?.closest(excludedSelector);

const typesetTextNode = (node) => {
    if (shouldSkip(node)) return;
    node.nodeValue = applyJapaneseLineBreaks(node.nodeValue);
};

const typesetTree = (root) => {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
        typesetTextNode(root);
        return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(typesetTextNode);
};

const JapaneseTypesetter = () => {
    const intl = useIntl();

    useEffect(() => {
        if (intl.locale !== "ja") {
            document.documentElement.classList.remove("ja-typeset-ready");
            return undefined;
        }

        typesetTree(document.body);
        document.documentElement.classList.add("ja-typeset-ready");

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "characterData") {
                    typesetTextNode(mutation.target);
                    return;
                }
                mutation.addedNodes.forEach(typesetTree);
            });
        });
        observer.observe(document.body, {
            characterData: true,
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
            document.documentElement.classList.remove("ja-typeset-ready");
        };
    }, [intl.locale]);

    return null;
};

export default JapaneseTypesetter;
