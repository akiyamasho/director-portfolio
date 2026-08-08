import coverImage from "../../assets/blog-covers/rag-enterprise-documents.webp";

export const post = {
    slug: "rag-enterprise-documents",
    date: "2024-03-04",
    tags: ["RAG", "LLMOps", "Google Cloud"],
    canonicalUrl:
        "https://akiyamasho.medium.com/retrieval-augmented-generation-rag-for-navigating-large-enterprise-documents-google-cloud-x-9248ce3276d9",
    media: null,
    cover: {
        src: coverImage,
        lede: {
            en: "A field note on evaluation, chunking, and retrieval choices inside a document system built for enterprise scale.",
            ja: "大規模文書検索を支える評価、分割、検索設計の選択を読み解く技術ノート。",
        },
        alt: {
            en: "An illustrated archive room with indexed files leading to an open document",
            ja: "索引付きの文書棚から開かれた資料へ続くアニメ背景調の書庫",
        },
    },
    translations: {
        en: {
            title: "Retrieval Augmented Generation (RAG) for Navigating Large Enterprise Documents [Google Cloud x Generali Italia Talk Keynotes]",
            summary:
                "This is a summary based on the recent Google Cloud tech talk with Generali Italia, which discusses how their machine learning team created a RAG pipeline for building a retrieval/querying system for their large enterprise documents.",
        },
        ja: {
            title: "大規模な社内文書を扱うRAG",
            titleBreaks: ["大規模な", "社内文書を", "扱うRAG"],
            summary:
                "Google CloudとGenerali Italiaの講演をもとに、検索と回答を6段階で評価したエンタープライズRAGの検証過程を整理します。",
        },
    },
};
