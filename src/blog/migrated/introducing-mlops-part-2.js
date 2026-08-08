import coverImage from "../../assets/blog-covers/introducing-mlops.webp";

const canonicalUrl =
    "https://akiyamasho.medium.com/introducing-mlops-why-we-need-it-and-how-to-apply-it-in-your-company-2-3-8111b59bd790";

export const post = {
    slug: "introducing-mlops-part-2",
    date: "2023-12-22",
    tags: ["machine-learning", "MLOps", "engineering"],
    canonicalUrl,
    series: {
        key: "introducing-mlops",
        part: 2,
        total: 3,
    },
    toc: {
        en: [
            { id: "table-of-contents", label: "Table of Contents" },
            { id: "why-do-we-need-mlops", label: "Why do we need MLOps?" },
            { id: "recap", label: "Recap" },
            { id: "next-episode", label: "Next Episode" },
        ],
        ja: [
            { id: "why-mlops", label: "なぜMLOpsが必要になるのか" },
            {
                id: "maurice-and-jim",
                label: "成長するMauriceとJimのプロダクト",
            },
            { id: "system-view", label: "システム全体を見る" },
            { id: "practical-lessons", label: "物語から見える実務上の要点" },
            { id: "real-world-case", label: "実例との比較" },
            { id: "next-part", label: "次回：MLOpsを導入する" },
        ],
    },
    media: {},
    cover: {
        src: coverImage,
        tone: "gold",
        alt: {
            en: "A tabletop model connecting experiment notes, pipeline stages, and production monitoring",
            ja: "実験ノート、パイプライン、本番監視をつなぐ卓上模型",
        },
    },
    translations: {
        en: {
            title: "Introducing MLOps — Why we need it, and how to apply it in your company (2/3)",
            summary:
                "This is part II of an archive of my tech talk `Introducing MLOps — Why we need it, and how to apply it in your company` at Code Chrysalis in September 2021.",
        },
        ja: {
            title: "MLOps入門：なぜ必要なのか（2/3）",
            titleBreaks: ["MLOps入門：", "なぜ必要なのか", "（2/3）"],
            summary:
                "架空の食品分類チームを例に、実験、リリース、監視、プロダクト開発を共通の運用設計で支える必要性を整理します。",
        },
    },
};

export default post;
