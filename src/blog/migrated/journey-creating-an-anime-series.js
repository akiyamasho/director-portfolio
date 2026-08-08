import coverImage from "../../assets/blog-covers/journey-creating-anime-series.webp";
import listingImage from "../../assets/blog-covers/journey-creating-anime-series-list.webp";
import pilotPoster from "../../assets/blog-covers/journey-creating-anime-series-poster.webp";

const mediaBase =
    "https://storage.googleapis.com/5rps-film-public-media/20201014_journey-anime-series";

export const post = {
    slug: "journey-creating-an-anime-series",
    date: "2020-10-14",
    tags: ["animation", "indie", "programming", "pitching", "anime"],
    canonicalUrl:
        "https://akiyamasho.medium.com/on-the-journey-attempting-to-create-an-anime-series-about-programming-98cdcf619ced",
    media: {
        hero: pilotPoster,
        commercialStoryboard: `${mediaBase}/commercial-storyboard-4f5534e1b809.webp`,
        pitchBible: `${mediaBase}/pitch-bible-ae19d1e810b3.webp`,
        episodeStoryboards: `${mediaBase}/episode-1-2-storyboards-a87521842106.webp`,
    },
    cover: {
        src: coverImage,
        cardSrc: listingImage,
        lede: {
            en: "Six months of production, five years of source stories, and the difficult work of turning a finished pilot into a viable series.",
            ja: "6か月かけたパイロット版の完成後、放送、映画祭、企画提案を通じてシリーズ化の条件を探った記録。",
        },
        alt: {
            en: "The Venture protagonist looking back beside Tokyo's waterfront",
            ja: "東京の水辺で振り返る『Venture』の主人公",
        },
    },
    translations: {
        en: {
            title: "On the journey [attempting] to create an anime series about programming.",
            summary:
                "Hey everyone! I’m Shō Akiyama, an indie animator/director who also works as a software engineer in Tokyo.",
        },
        ja: {
            title: "プログラミングを描くアニメシリーズへの挑戦",
            titleBreaks: [
                "プログラミングを",
                "描く",
                "アニメシリーズへの",
                "挑戦",
            ],
            summary:
                "仕事の合間に『Venture』のパイロットを完成させ、テレビ放送と映画祭を経て、作品だけでは企画が動かないことを知った2020年の制作記録。",
        },
    },
};
