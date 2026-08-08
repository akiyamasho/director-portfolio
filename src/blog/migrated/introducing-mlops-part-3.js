const canonicalUrl =
    "https://medium.com/@akiyamasho/introducing-mlops-why-we-need-it-and-how-to-apply-it-in-your-company-3-3-e8f0d9d609c4";

export const post = {
    slug: "introducing-mlops-part-3",
    date: "2023-12-23",
    tags: ["machine-learning", "programming", "mlops"],
    canonicalUrl,
    series: {
        key: "introducing-mlops",
        part: 3,
        total: 3,
    },
    toc: {
        en: [
            { id: "how", label: "How??" },
            { id: "a-simple-flow", label: "A Simple Flow" },
            { id: "takeaways", label: "Takeaways" },
            { id: "parting-words", label: "Parting Words" },
        ],
        ja: [
            { id: "how", label: "どう始めるか" },
            { id: "a-simple-flow", label: "シンプルな移行例" },
            { id: "takeaways", label: "要点" },
            { id: "parting-words", label: "結び" },
        ],
    },
    media: {},
    translations: {
        en: {
            title: "Introducing MLOps — Why we need it, and how to apply it in your company (3/3)",
            summary:
                "This is part III and the last part of an archive of my tech talk `Introducing MLOps — Why we need it, and how to apply it in your company` at Code Chrysalis in September 2021.",
        },
        ja: {
            title: "MLOps入門 第3回：小さなステップで実装する",
            titleBreaks: ["MLOps入門 第3回：", "小さなステップで", "実装する"],
            summary:
                "1冊のJupyter Notebookから本番MLシステムへ。ML、開発、運用を横断しながら、小さく検証可能な変更を積み重ねる移行例です。",
        },
    },
};
