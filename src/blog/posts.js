import {
    directingTheReferenceMedia,
    directingTheReferencePart2Media,
    directingTheReferencePart3Media,
    directingTheReferencePart4Media,
} from "./media";
import screenplayCover from "../assets/blog-covers/5rps-screenplay-complete.webp";
import storyboardingCover from "../assets/blog-covers/5rps-storyboarding-in-progress.webp";
import { post as aksNginxIngressStaticIp } from "./migrated/aks-nginx-ingress-static-ip";
import { post as introducingMlopsPart1 } from "./migrated/introducing-mlops-part-1";
import { post as introducingMlopsPart2 } from "./migrated/introducing-mlops-part-2";
import { post as introducingMlopsPart3 } from "./migrated/introducing-mlops-part-3";
import { post as journeyCreatingAnAnimeSeries } from "./migrated/journey-creating-an-anime-series";
import { post as localVscodeCloudGpus } from "./migrated/local-vscode-cloud-gpus";
import { post as ragEnterpriseDocuments } from "./migrated/rag-enterprise-documents";

export const posts = [
    {
        slug: "directing-the-reference-part-4",
        date: "2026-08-22",
        tags: ["production", "screenplay", "animation"],
        media: directingTheReferencePart4Media,
        cover: {
            src: directingTheReferencePart4Media.cover.poster,
            position: "center",
            lede: {
                en: "The screenplay is complete. Two people and limited hours are finishing the film.",
                ja: "脚本は完成しました。二人の小さなチームと限られた時間で映画を仕上げます。",
            },
            alt: {
                en: "First frame from the opening demo video for Directing the Reference, Part 4",
                ja: "リファレンスを演出する Part 4の冒頭デモ映像のファーストフレーム",
            },
        },
        translations: {
            en: {
                title: "Directing the Reference, Part 4",
                summary:
                    "The screenplay is complete. A two-person team is finishing a six-scene short film by August 31, while learning that pacing, writing, and drawing fundamentals matter more than ever.",
            },
            ja: {
                title: "リファレンスを演出する Part 4",
                titleBreaks: ["リファレンスを", "演出する", "Part 4"],
                summary:
                    "脚本を完成させ、二人のチームで8月31日までに短編を仕上げる。AI時代にこそ必要なペーシング、文章、描画の基礎を記録します。",
            },
        },
    },
    {
        slug: "directing-the-reference-part-3",
        date: "2026-08-16",
        tags: ["production", "screenplay", "storyboarding", "animatic"],
        media: directingTheReferencePart3Media,
        cover: {
            src: directingTheReferencePart3Media.cover,
            position: "58% center",
            lede: {
                en: "The first seven days of a short film, from an early voice conversation to a hand-directed opening shot.",
                ja: "短編制作、その最初の7日間。最初の音声対話から、手で演出した冒頭カットまでの制作記録。",
            },
            alt: {
                en: "Nozomi seen from behind while Mia works at a laptop across a cramped apartment room",
                ja: "狭いアパートの室内で、手前からミアのノートPC作業を見るノゾミの後ろ姿",
            },
        },
        translations: {
            en: {
                title: "Directing the Reference, Part 3",
                summary:
                    "Building a short film through story development, character design, spatial planning, manual storyboards, production experiments, and one finished moving shot.",
            },
            ja: {
                title: "リファレンスを演出する Part 3",
                titleBreaks: ["リファレンスを", "演出する", "Part 3"],
                summary:
                    "短編の企画、キャラクター設計、空間設計、手描き絵コンテ、制作検証、最初の完成映像までをたどる制作記録。",
            },
        },
    },
    {
        slug: "directing-the-reference-part-2",
        date: "2026-08-11",
        tags: ["production", "storyboarding", "animatic"],
        media: directingTheReferencePart2Media,
        cover: directingTheReferencePart2Media.heroImage
            ? {
                  src: directingTheReferencePart2Media.heroImage,
                  lede: {
                      en: "Seven passes on one hand-directed shot. The strongest result came from fewer visual anchors and more precise direction.",
                      ja: "手で演出した1カットを7回検証。仕上げアンカーを減らし、演出指示を細かくすることで動きが改善しました。",
                  },
                  alt: {
                      en: "Anime-film portrait of a brown-haired woman framed on the right beside an open white dream space",
                      ja: "白い夢の空間を左に残し、右側に配置された茶色い髪の女性のアニメ映画風ポートレート",
                  },
              }
            : undefined,
        translations: {
            en: {
                title: "Directing the Reference, Part 2",
                summary:
                    "Seven passes on one five-second shot, from manually selected millisecond keyframes to a sparse production reference package.",
            },
            ja: {
                title: "リファレンスを演出する Part 2",
                titleBreaks: ["リファレンスを", "演出する", "Part 2"],
                summary:
                    "5秒の1カットを7回検証し、ミリ秒単位で選んだキーから、疎な仕上げリファレンス構成へ整理した制作記録。",
            },
        },
    },
    {
        slug: "directing-the-reference",
        date: "2026-08-08",
        tags: ["production", "storyboarding", "animatic"],
        media: directingTheReferenceMedia,
        cover: {
            src: directingTheReferenceMedia.hero,
            lede: {
                en: "Six input strategies. One locked sequence. A study of what motion preserves, reinterprets, and loses.",
                ja: "入力資料だけを変え、同じ尺の中で画面設計と動きの差を見比べた演出記録。",
            },
            alt: {
                en: "Animation key visual of a woman blowing toward a glowing heart",
                ja: "光るハートへ息を吹きかける女性のアニメーション・キービジュアル",
            },
        },
        translations: {
            en: {
                title: "Directing the Reference, Part 1",
                summary:
                    "The same fifteen-second scene, directed six ways by changing its shot plan, character references, and timing input.",
            },
            ja: {
                title: "リファレンスを演出する Part 1",
                titleBreaks: ["リファレンスを", "演出する", "Part 1"],
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
        cover: {
            src: storyboardingCover,
            tone: "external",
            position: "center 38%",
            alt: {
                en: "Hand-drawn storyboard panels with framing notes for a city scene",
                ja: "街のシーンの画角メモが描き込まれた手描きの絵コンテ",
            },
        },
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
        cover: {
            src: screenplayCover,
            tone: "external",
            position: "68% center",
            alt: {
                en: "The central characters of 5 Requests Per Second in a warmly lit studio",
                ja: "暖かな光のスタジオに集う『秒速5リクエスト』の主要キャラクター",
            },
        },
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
