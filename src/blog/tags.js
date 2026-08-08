const filmTags = new Set([
    "animation",
    "anime",
    "animatic",
    "indie",
    "pitching",
    "production",
    "screenplay",
    "storyboarding",
]);

export const journalFilters = ["all", "film", "engineering", "5rps"];

const tagLabels = {
    en: {
        animation: "Animation",
        anime: "Anime",
        animatic: "Animatic",
        azure: "Azure",
        engineering: "Engineering",
        "google cloud": "Google Cloud",
        gpu: "GPU",
        indie: "Independent",
        ingress: "Ingress",
        kubernetes: "Kubernetes",
        llmops: "LLMOps",
        "machine learning": "Machine Learning",
        "machine-learning": "Machine Learning",
        mlops: "MLOps",
        pitching: "Pitching",
        production: "Production",
        programming: "Programming",
        rag: "RAG",
        screenplay: "Screenplay",
        storyboarding: "Storyboarding",
        "vertex-ai": "Vertex AI",
        vscode: "VS Code",
    },
    ja: {
        animation: "アニメーション",
        anime: "アニメ",
        animatic: "アニマティック",
        azure: "Azure",
        engineering: "エンジニアリング",
        "google cloud": "Google Cloud",
        gpu: "GPU",
        indie: "自主制作",
        ingress: "Ingress",
        kubernetes: "Kubernetes",
        llmops: "LLMOps",
        "machine learning": "機械学習",
        "machine-learning": "機械学習",
        mlops: "MLOps",
        pitching: "企画提案",
        production: "制作",
        programming: "プログラミング",
        rag: "RAG",
        screenplay: "脚本",
        storyboarding: "絵コンテ",
        "vertex-ai": "Vertex AI",
        vscode: "VS Code",
    },
};

export const tagTone = (tag) =>
    filmTags.has(tag.toLowerCase()) ? "film" : "engineering";

export const tagLabel = (tag, locale = "en") => {
    const language = locale === "ja" ? "ja" : "en";
    return tagLabels[language][tag.toLowerCase()] || tag;
};

export const postMatchesFilter = (post, filter) => {
    if (filter === "all") return true;
    if (filter === "5rps") return post.externalSource === "5RPS";

    return post.tags.some((tag) => tagTone(tag) === filter);
};
