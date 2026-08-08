import { directingTheReferenceMedia } from "./media";
import { post as aksNginxIngressStaticIp } from "./migrated/aks-nginx-ingress-static-ip";
import { post as introducingMlopsPart1 } from "./migrated/introducing-mlops-part-1";
import { post as introducingMlopsPart2 } from "./migrated/introducing-mlops-part-2";
import { post as introducingMlopsPart3 } from "./migrated/introducing-mlops-part-3";
import { post as journeyCreatingAnAnimeSeries } from "./migrated/journey-creating-an-anime-series";
import { post as localVscodeCloudGpus } from "./migrated/local-vscode-cloud-gpus";
import { post as ragEnterpriseDocuments } from "./migrated/rag-enterprise-documents";

export const posts = [
    {
        slug: "directing-the-reference",
        date: "2026-08-08",
        tags: ["production", "storyboarding", "animatic"],
        media: directingTheReferenceMedia,
        cover: {
            src: directingTheReferenceMedia.hero,
            alt: {
                en: "Animation key visual of a woman blowing toward a glowing heart",
                ja: "光るハートへ息を吹きかける女性のアニメーション・キービジュアル",
            },
        },
        translations: {
            en: {
                title: "Directing the Reference",
                summary:
                    "The same fifteen-second scene, directed six ways by changing its shot plan, character references, and timing input.",
            },
            ja: {
                title: "リファレンスを演出する",
                titleBreaks: ["リファレンスを", "演出する"],
                summary:
                    "同じ15秒のシーンに対し、ショット設計、キャラクター資料、タイミングの入力方法を変えた6つの演出検証。",
            },
        },
    },
    {
        slug: "20260726-storyboarding-in-progress",
        date: "2026-07-26",
        tags: ["production", "storyboarding", "animatic"],
        externalUrl:
            "https://www.5rps.jp/news/20260726-storyboarding-in-progress",
        externalSource: "5RPS",
        translations: {
            en: {
                title: "Storyboarding in Progress: From Screenplay Notes to an Animatic",
                summary: "",
            },
            ja: {
                title: "絵コンテ制作中：脚本のメモからCTへ",
                titleBreaks: ["絵コンテ制作中：", "脚本のメモから", "CTへ"],
                summary: "",
            },
        },
    },
    {
        slug: "20260711-screenplay-complete",
        date: "2026-07-11",
        tags: ["production", "screenplay"],
        externalUrl: "https://www.5rps.jp/news/20260711-screenplay-complete",
        externalSource: "5RPS",
        translations: {
            en: {
                title: "5RPS Full Movie Screenplay Completed: The Human Thinks, the Agents Execute",
                summary: "",
            },
            ja: {
                title: "『秒速5リクエスト』長編映画脚本完成：人間が考え、エージェントが実行する",
                titleBreaks: [
                    "『秒速5リクエスト』",
                    "長編映画脚本完成：",
                    "人間が考え、",
                    "エージェントが",
                    "実行する",
                ],
                summary: "",
            },
        },
    },
    ragEnterpriseDocuments,
    introducingMlopsPart3,
    introducingMlopsPart2,
    introducingMlopsPart1,
    localVscodeCloudGpus,
    aksNginxIngressStaticIp,
    journeyCreatingAnAnimeSeries,
];

export const getPost = (slug) => posts.find((post) => post.slug === slug);
