const bucketUrl = "https://storage.googleapis.com/5rps-film-public-media";
const prefix = "20260808_directing-the-reference";

const asset = (name) => `${bucketUrl}/${prefix}/${name}`;

export const directingTheReferenceMedia = {
    hero: asset("hero-fixed-23783dffab76.webp"),
    overview: {
        video: asset("source-overview-b3f5d30a886d.mp4"),
        poster: asset("overview-poster-09s-4fb3a70fbb04.webp"),
    },
    remoteStartupSenpai: {
        roughVsFinished: {
            video: asset("remote-startup-rough-vs-finished-9802f4a9bd08.mp4"),
            poster: asset(
                "remote-startup-rough-vs-finished-poster-bc3b2b7afcfc.webp"
            ),
        },
        sourceVsUpscale: {
            video: asset("remote-startup-source-vs-upscale-c19e5be98b59.mp4"),
            poster: asset(
                "remote-startup-source-vs-upscale-poster-812a51f37b5b.webp"
            ),
        },
    },
    originalInputs: [
        { key: "main", src: asset("original-main-a26ae2a99bf9.webp") },
        {
            key: "magician",
            src: asset("original-magician-0b8333da8fc7.webp"),
        },
        { key: "look1", src: asset("original-look1-fe6993411da3.webp") },
        { key: "look3", src: asset("original-look3-29bcace05482.webp") },
        { key: "look4", src: asset("original-look4-1847bf4111c5.webp") },
    ],
    refinedInputs: [
        {
            key: "identity",
            src: asset("refined-identity-6a2149dad546.webp"),
        },
        { key: "main", src: asset("refined-main-c3de8affd4dd.webp") },
        {
            key: "magician",
            src: asset("refined-magician-ed11cf98ca9a.webp"),
        },
        { key: "look1", src: asset("refined-look1-ec301c38afac.webp") },
        { key: "look3", src: asset("refined-look3-6f1affb311e0.webp") },
        { key: "look4", src: asset("refined-look4-67239d618238.webp") },
    ],
    tests: {
        a: {
            video: asset("comparison-a-0ee5711b1760.mp4"),
            poster: asset("comparison-a-poster-09s-e3c108c8e47f.webp"),
        },
        b: {
            video: asset("comparison-b-4cbebe9f7ca5.mp4"),
            poster: asset("comparison-b-poster-09s-1d0e47e01565.webp"),
        },
        c: {
            video: asset("comparison-c-94a46ad0699d.mp4"),
            poster: asset("comparison-c-poster-09s-fbe2011227ba.webp"),
        },
        d: {
            video: asset("comparison-d-d24a3202f368.mp4"),
            poster: asset("comparison-d-poster-09s-97d451676803.webp"),
        },
        e: {
            video: asset("comparison-e-cfef20095acb.mp4"),
            poster: asset("comparison-e-poster-09s-405494b6b5b5.webp"),
        },
        f: {
            video: asset("comparison-f-0f5cbdff5c9e.mp4"),
            poster: asset("comparison-f-poster-09s-0a24e8e6e6ed.webp"),
        },
    },
};

export const publicMediaBaseUrl = bucketUrl;
