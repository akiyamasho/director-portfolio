const canonicalUrl =
    "https://akiyamasho.medium.com/introducing-mlops-why-we-need-it-and-how-to-apply-it-in-your-company-1-3-d210a9f0e409";

const mediaBase =
    "https://storage.googleapis.com/5rps-film-public-media/20231223_introducing-mlops-part-1";

export const post = {
    slug: "introducing-mlops-part-1",
    date: "2023-12-23",
    tags: ["mlops", "machine learning", "engineering"],
    canonicalUrl,
    series: {
        key: "introducing-mlops",
        part: 1,
        total: 3,
    },
    toc: {
        en: [
            {
                id: "what-this-tech-talk-archive-is-isnt",
                label: "What this tech talk archive is/isn’t",
            },
            { id: "self-introduction", label: "Self-introduction" },
            {
                id: "ml-productionisation-and-mlops",
                label: "ML Productionisation and MLOps",
            },
            { id: "next-episode", label: "Next Episode" },
        ],
        ja: [
            { id: "archive-scope", label: "アーカイブの範囲" },
            { id: "productionising-a-model", label: "モデルを本番化する" },
            { id: "three-phases", label: "3つの作業フェーズ" },
            { id: "defining-mlops", label: "MLOpsの定義" },
            { id: "next-in-series", label: "次の記事" },
        ],
    },
    media: {
        notebookApi: `${mediaBase}/notebook-api-e105030efca5.webp`,
        threePhases: `${mediaBase}/three-phases-46c2cf94c3ba.webp`,
    },
    translations: {
        en: {
            title: "Introducing MLOps — Why we need it, and how to apply it in your company (1/3)",
            summary:
                "This is an archive of my tech talk Introducing MLOps — Why we need it, and how to apply it in your company at Code Chrysalis in September 2021.",
        },
        ja: {
            title: "MLOps入門 Part 1：モデルを本番環境へつなぐ",
            summary:
                "機械学習モデルの本番化を、研究からサービス提供と監視までをつなぐML、DEV、PRODの3フェーズで整理します。",
        },
    },
};

export default post;
