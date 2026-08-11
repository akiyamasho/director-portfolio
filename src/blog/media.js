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
        finished: {
            video: asset("remote-startup-finished-4fa333a8f826.mp4"),
            poster: asset("remote-startup-finished-poster-0f481eed86fe.webp"),
        },
        roughVsFinished: {
            video: asset(
                "remote-startup-rough-vs-subbed-final-e6ce3241d71f.mp4"
            ),
            poster: asset(
                "remote-startup-rough-vs-subbed-final-poster-3c71f6702f5e.webp"
            ),
        },
        sourceVsUpscale: {
            video: asset("remote-startup-source-vs-upscale-c19e5be98b59.mp4"),
            poster: asset(
                "remote-startup-source-vs-upscale-poster-812a51f37b5b.webp"
            ),
        },
        characters: [
            {
                key: "hiro",
                src: asset("hiro-character-design-a9baddbf7003.webp"),
            },
            {
                key: "meiko",
                src: asset("meiko-character-design-4d9e3fbba1bc.webp"),
            },
        ],
        studies: {
            motion: {
                input: asset("rough-performance-d68322b9f8db.webp"),
                output: asset("video-output-748a2b4d7aee.webp"),
                video: {
                    video: asset("motion-seedance20-37d1b19176cf.mp4"),
                    poster: asset("motion-seedance20-poster-46e88743656c.webp"),
                },
            },
            storyboard: {
                input: asset("storyboard-f1fbff680a57.webp"),
                output: asset("storyboard-output-3594ed3132fe.webp"),
            },
            modelPasses: {
                input: asset("video-output-748a2b4d7aee.webp"),
                output: asset("model-output-3324cd00c316.webp"),
                video: {
                    video: asset("motion-seedance25-7fc7b0155654.mp4"),
                    poster: asset("motion-seedance25-poster-59c565da9b43.webp"),
                },
            },
            allKeyframes: {
                input: asset("rendered-keyframes-361220a2c6d2.webp"),
                output: asset("all-keyframes-output-ac97e6a986cb.webp"),
                video: {
                    video: asset("motion-all-keyframes-5800ff1e1260.mp4"),
                    poster: asset(
                        "motion-all-keyframes-poster-89104a7568af.webp"
                    ),
                },
            },
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

const directingReferencePart2Prefix = "20260811_directing-the-reference-part-2";
const directingReferencePart2Asset = (name) =>
    `${bucketUrl}/${directingReferencePart2Prefix}/${name}`;

export const directingTheReferencePart2Media = {
    heroImage: directingReferencePart2Asset("hero-landscape-2097e9844ea2.webp"),
    comparison: {
        video: directingReferencePart2Asset(
            "hero-rough-over-attempt7-d2abccadc805.mp4"
        ),
        poster: directingReferencePart2Asset("hero-poster-e86d0233cdac.webp"),
    },
    attempts: {
        2: {
            video: directingReferencePart2Asset(
                "attempt2-output-e881f67b824b.mp4"
            ),
            poster: directingReferencePart2Asset(
                "attempt2-poster-116cd975f2f4.webp"
            ),
        },
        4: {
            video: directingReferencePart2Asset(
                "attempt4-output-c72b96dbc470.mp4"
            ),
            poster: directingReferencePart2Asset(
                "attempt4-poster-f1592cf6ea20.webp"
            ),
        },
        5: {
            video: directingReferencePart2Asset(
                "attempt5-output-67d36e23f9f4.mp4"
            ),
            poster: directingReferencePart2Asset(
                "attempt5-poster-c516e5aa3d47.webp"
            ),
        },
        6: {
            video: directingReferencePart2Asset(
                "attempt6-output-082182ad43cd.mp4"
            ),
            poster: directingReferencePart2Asset(
                "attempt6-poster-9a86a009c420.webp"
            ),
        },
        7: {
            video: directingReferencePart2Asset(
                "attempt7-output-d135ccbbe48e.mp4"
            ),
            poster: directingReferencePart2Asset(
                "attempt7-poster-8dcfc6dcb361.webp"
            ),
        },
    },
    manualKeys: directingReferencePart2Asset(
        "manual-rough-vs-productionized-ed593dbeefb4.webp"
    ),
    attempt1: directingReferencePart2Asset(
        "attempt1-keyframes-189e86a215b0.webp"
    ),
    finalReferences: directingReferencePart2Asset(
        "attempt7-reference-set-3498f11e1b9b.webp"
    ),
    evolution: {
        video: directingReferencePart2Asset(
            "attempt-evolution-grid-2b433559b78c.mp4"
        ),
        poster: directingReferencePart2Asset(
            "attempt-evolution-poster-67f814a6033f.webp"
        ),
    },
};
