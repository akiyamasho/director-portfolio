import React, { useState } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHeader from "../../components/blog/post-header";
import TestVideo from "../../components/blog/test-video";
import { DirectingReferenceSeriesNavigation } from "../../components/blog/article-navigation";
import SEO from "../../components/seo";
import { getPost } from "../../blog/posts";

const RemoteImage = ({ src, alt, className, fallback, loading = "lazy" }) => {
    const [isUnavailable, setIsUnavailable] = useState(false);

    return isUnavailable ? (
        <div className={`${className || ""} blog-media-fallback`} role="status">
            {fallback}
        </div>
    ) : (
        <img
            className={className}
            src={src}
            alt={alt}
            loading={loading}
            onError={() => setIsUnavailable(true)}
        />
    );
};

const Comparison = ({
    id,
    heading,
    observation,
    detail,
    labels,
    caption,
    media,
    locale,
}) => (
    <article className="blog-test-card">
        <div className="blog-test-heading">
            <span>{id}</span>
            <p>{heading}</p>
        </div>
        <div className="blog-comparison-key" aria-hidden="true">
            <span>{labels[0]}</span>
            <span>{labels[1]}</span>
        </div>
        <TestVideo
            src={media.video}
            poster={media.poster}
            title={`${locale === "ja" ? "テスト" : "Test"} ${id}: ${heading}`}
            fallback={
                locale === "ja"
                    ? `テスト${id}の比較映像を読み込めませんでした。`
                    : `The comparison video for test ${id} could not be loaded.`
            }
        />
        <p className="blog-media-caption">{caption}</p>
        <div className="blog-test-copy">
            <h3>{observation}</h3>
            <p>{detail}</p>
        </div>
    </article>
);

const SourceComparison = ({
    heading,
    labels,
    title,
    caption,
    media,
    fallback,
    orientation,
    muted,
}) => (
    <article className="blog-source-comparison-card">
        <h3>{heading}</h3>
        {labels ? (
            <div className="blog-comparison-key" aria-hidden="true">
                <span>{labels[0]}</span>
                <span>{labels[1]}</span>
            </div>
        ) : null}
        <div
            className={`blog-source-player blog-source-player--${orientation}`}
        >
            <TestVideo
                src={media.video}
                poster={media.poster}
                title={title}
                fallback={fallback}
                muted={muted}
            />
        </div>
        <p className="blog-media-caption">{caption}</p>
    </article>
);

const ImageComparison = ({
    heading,
    labels,
    media,
    alt,
    caption,
    fallback,
    videoComparison,
}) => (
    <article className="blog-l7-study-card">
        <h3>{heading}</h3>
        <div className="blog-comparison-key" aria-hidden="true">
            <span>{labels[0]}</span>
            <span>{labels[1]}</span>
        </div>
        <div className="blog-l7-study-images">
            <RemoteImage src={media.input} alt={alt[0]} fallback={fallback} />
            <RemoteImage src={media.output} alt={alt[1]} fallback={fallback} />
        </div>
        <p className="blog-media-caption">{caption}</p>
        {videoComparison ? (
            <div className="blog-l7-video-comparison">
                <h4>{videoComparison.heading}</h4>
                <div className="blog-comparison-key" aria-hidden="true">
                    <span>{videoComparison.labels[0]}</span>
                    <span>{videoComparison.labels[1]}</span>
                </div>
                <TestVideo
                    src={videoComparison.media.video}
                    poster={videoComparison.media.poster}
                    title={videoComparison.title}
                    fallback={videoComparison.fallback}
                    muted={false}
                />
                <p className="blog-media-caption">{videoComparison.caption}</p>
            </div>
        ) : null}
    </article>
);

const ImageStrip = ({ items, labels, fallback }) => (
    <div className="blog-input-strip">
        {items.map((item) => (
            <figure key={item.key}>
                <RemoteImage
                    src={item.src}
                    alt={labels[item.key]}
                    fallback={fallback}
                />
                <figcaption>{labels[item.key]}</figcaption>
            </figure>
        ))}
    </div>
);

const Facts = ({ locale }) => {
    const facts =
        locale === "ja"
            ? [
                  ["画面", "16:9 / 9:16"],
                  ["尺", "15秒 / 17.533秒"],
                  ["モデル", "Seedance 2.0 / 2.5"],
                  ["音声", "無音 / 元音声"],
                  ["検証", "A–F + L7"],
              ]
            : [
                  ["Format", "16:9 / 9:16"],
                  ["Duration", "15 / 17.533 seconds"],
                  ["Models", "Seedance 2.0 / 2.5"],
                  ["Sound", "Silent / source audio"],
                  ["Studies", "A–F + L7"],
              ];
    return (
        <dl className="blog-facts">
            {facts.map(([term, value]) => (
                <div key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                </div>
            ))}
        </dl>
    );
};

const EnglishArticle = ({ media }) => {
    const originalLabels = {
        main: "Main",
        magician: "Look 2",
        look1: "Look 1",
        look3: "Look 3",
        look4: "Look 4",
    };
    const refinedLabels = { ...originalLabels, identity: "Identity" };
    return (
        <div className="blog-notebook">
            <Facts locale="en" />
            <div className="blog-body blog-opening">
                <p className="blog-lead">
                    We used one fifteen-second scene to test a practical
                    directing problem: what should come from the rough
                    storyboard, and what should come from the finished character
                    designs?
                </p>
                <p>
                    The scene follows a woman onto an empty white runway. Three
                    seated doubles disappear as she dances, and their clothes
                    transfer to her through a series of transformations. The
                    rough already fixed the shots and blocking. Separate
                    character sheets fixed her face, proportions, and wardrobe.
                </p>
                <p>
                    We first documented Brighter as an animation project in
                    2018. This test returns to one scene from that work with a
                    narrower goal: compare six ways of directing Seedance 2.0
                    from the same material. Every result is fifteen seconds long
                    and has no generated audio.
                </p>
            </div>

            <section className="blog-study-section">
                <header className="blog-section-heading">
                    <p>01 / Source material</p>
                    <h2>The inputs</h2>
                    <span>
                        The rough fixes shot order and blocking. Character
                        references fix the drawing and costumes.
                    </span>
                </header>
                <div className="blog-source-comparison-grid">
                    <SourceComparison
                        heading="Brighter / vertical comparison"
                        orientation="vertical"
                        labels={[
                            "Top / rough storyboard",
                            "Bottom / dense-script result",
                        ]}
                        title="Synchronized Brighter rough storyboard and dense-script result"
                        caption="Both clips share one timeline. The 14.375-second rough holds its last frame until the fifteen-second result ends."
                        media={media.overview}
                        fallback="The Brighter source comparison video could not be loaded."
                    />
                    <SourceComparison
                        heading="Remote Startup Senpai / side-by-side comparison"
                        orientation="horizontal"
                        labels={[
                            "Left / rough performance",
                            "Right / approved subtitled final",
                        ]}
                        title="Synchronized Remote Startup Senpai rough performance and approved subtitled final"
                        caption="The rough and approved final share one timeline. The rough holds its last frame for the final 2.533 seconds while the subtitled cut completes its full 17.533-second delivery."
                        media={media.remoteStartupSenpai.roughVsFinished}
                        fallback="The Remote Startup Senpai rough-to-final comparison could not be loaded."
                        muted={false}
                    />
                </div>

                <div className="blog-input-heading">
                    <h3>Original character sheets</h3>
                    <span>Tests A–D</span>
                </div>
                <ImageStrip
                    items={media.originalInputs}
                    labels={originalLabels}
                    fallback="Character reference unavailable."
                />

                <div className="blog-input-heading">
                    <h3>Refined character anchors</h3>
                    <span>Tests E–F</span>
                </div>
                <div className="blog-body blog-compact-copy">
                    <p>
                        For E and F, we split the original sheets into one face
                        reference and one full figure for each costume. This
                        removed extra views that could be mistaken for separate
                        people.
                    </p>
                </div>
                <ImageStrip
                    items={media.refinedInputs}
                    labels={refinedLabels}
                    fallback="Refined character reference unavailable."
                />
            </section>

            <section className="blog-study-section">
                <header className="blog-section-heading">
                    <p>02 / First pass</p>
                    <h2>Four control strategies</h2>
                    <span>
                        A moving rough, character art alone, a dense shot
                        script, and paired storyboard frames.
                    </span>
                </header>
                <div className="blog-test-grid">
                    <Comparison
                        id="A"
                        heading="Full rough video"
                        labels={["Left / rough video", "Right / output A"]}
                        observation="The cuts survived, along with the rough timing."
                        detail="The generated clip follows the storyboard coverage closely. It also copies the long holds and sudden pose changes, which makes the animation feel choppy."
                        caption="One synchronized player. The rough holds its final frame for the last 0.625 seconds."
                        media={media.tests.a}
                        locale="en"
                    />
                    <Comparison
                        id="B"
                        heading="Text and character art"
                        labels={["Left / timed prompt", "Right / output B"]}
                        observation="Without shot references, the coverage drifted."
                        detail="The motion is less tied to the rough, but the camera positions, placement of the doubles, and order of events no longer match the planned scene."
                        caption="The left panel changes at each timed prompt window so the active direction stays synchronized with the output."
                        media={media.tests.b}
                        locale="en"
                    />
                    <Comparison
                        id="C"
                        heading="Dense shot script"
                        labels={[
                            "Left / timed shot script",
                            "Right / output C",
                        ]}
                        observation="The dense shot script gave the strongest result."
                        detail="Detailed camera, blocking, and transformation directions recovered most of the scene without importing the storyboard pose timing. Some compositions still differ from the boards."
                        caption="The left panel follows the seven timed windows in the generation prompt."
                        media={media.tests.c}
                        locale="en"
                    />
                    <Comparison
                        id="D"
                        heading="Paired storyboard frames"
                        labels={["Left / storyboard grid", "Right / output D"]}
                        observation="The compositions improved, but movement between them weakened."
                        detail="Start and end frames clarify the intended framing. The generated action tends to pause on those images instead of moving through them naturally."
                        caption="The complete storyboard frame grid remains visible while the result plays."
                        media={media.tests.d}
                        locale="en"
                    />
                </div>
            </section>

            <section className="blog-study-section">
                <header className="blog-section-heading">
                    <p>03 / Refinement</p>
                    <h2>Reduce the timing signal</h2>
                    <span>
                        E and F keep screen direction and shot order while
                        carrying less of the rough cadence.
                    </span>
                </header>
                <Comparison
                    id="E"
                    heading="Camera-only video role"
                    labels={["Left / camera reference", "Right / output E"]}
                    observation="Limiting the rough’s job reduced its influence."
                    detail="The video supplies shot order, framing, screen direction, and blocking. The prompt rejects its anatomy, clothing, drawing style, pose timing, and cut lengths. The action is grouped into six longer phrases."
                    caption="The camera reference holds its final frame until the fifteen-second output ends."
                    media={media.tests.e}
                    locale="en"
                />
                <Comparison
                    id="F"
                    heading="Sparse held-keyframe animatic"
                    labels={["Left / sparse animatic", "Right / output F"]}
                    observation="The sparse animatic kept the shot order."
                    detail="The input holds the beginning and end of each shot, with extra drawings around the cape transition. It leaves more room for continuous movement, although the final costume still drifts away from Look 4."
                    caption="The sparse animatic and generated result share one fifteen-second timeline."
                    media={media.tests.f}
                    locale="en"
                />
            </section>

            <section className="blog-study-section blog-notes">
                <header className="blog-section-heading">
                    <p>04 / Direction notes</p>
                    <h2>What changed across six tests</h2>
                </header>
                <ol>
                    <li>
                        <span>01</span>
                        <div>
                            <h3>A moving reference supplies timing.</h3>
                            <p>
                                A copied the storyboard holds and abrupt pose
                                changes. Calling it a camera reference did not
                                remove that signal completely.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>02</span>
                        <div>
                            <h3>Each reference needed one stated purpose.</h3>
                            <p>
                                Character images controlled face, body,
                                costumes, linework, and color. Video and
                                storyboard references handled framing, blocking,
                                and screen direction.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>03</span>
                        <div>
                            <h3>Six longer phrases moved more smoothly.</h3>
                            <p>
                                Longer sections gave the motion more time for
                                anticipation, weight shifts, overlap, and
                                follow-through.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>04</span>
                        <div>
                            <h3>
                                Sparse boards carried the edit with fewer poses.
                            </h3>
                            <p>
                                F retained the cuts and screen direction while
                                giving the model fewer rough in-betweens to
                                copy.
                            </p>
                        </div>
                    </li>
                </ol>
                <div className="blog-next-pass">
                    <span>Next pass</span>
                    <p>
                        Keep F’s sparse camera reference, make Look 4 clearer as
                        the final-frame authority, and reduce the number of
                        costume changes in the last five seconds.
                    </p>
                </div>
            </section>

            <section className="blog-study-section">
                <header className="blog-section-heading">
                    <p>05 / Production transfer</p>
                    <h2>Apply the split to a new scene</h2>
                    <span>
                        An unreleased Remote Startup Senpai clip separates
                        performance timing from the finished drawing.
                    </span>
                </header>
                <div className="blog-body blog-transfer-copy">
                    <p>
                        The office shot is an unreleased clip from Remote
                        Startup Senpai. Meiko remains offscreen while Hiro moves
                        from a slumped response to a sudden stand, then walks
                        out of frame. The rough carried the top-down camera,
                        room layout, blocking, dialogue timing, and performance.
                        A character sheet and seven rendered keyframes carried
                        Hiro’s finished identity and drawing.
                    </p>
                    <p>
                        The authored action ends at 14.5 seconds, leaving the
                        last half-second clear for the final delivery. After the
                        silent render, the picture was conformed to exactly
                        fifteen seconds and the original audio was restored.
                    </p>
                </div>

                <div className="blog-input-heading">
                    <h3>Character authority</h3>
                    <span>Visible / offscreen</span>
                </div>
                <div className="blog-body blog-compact-copy">
                    <p>
                        Hiro is the only visible character. His sheet fixes the
                        face, tired eyes, loose hair, camel jacket, black shirt,
                        charcoal trousers, and brown shoes. Meiko’s sheet fixes
                        the identity of the offscreen speaker, but she never
                        enters the frame.
                    </p>
                </div>
                <ImageStrip
                    items={media.remoteStartupSenpai.characters}
                    labels={{
                        hiro: "Hiro / visible performance",
                        meiko: "Meiko / offscreen voice",
                    }}
                    fallback="Character design unavailable."
                />

                <div className="blog-input-heading">
                    <h3>Four input conditions</h3>
                    <span>Reference / result</span>
                </div>
                <div className="blog-body blog-compact-copy">
                    <p>
                        The tests separated motion, timing, composition, and
                        finished drawing instead of asking one reference to do
                        everything. A prepared seven-keyframe configuration had
                        no completed output in the research folder, so it is not
                        presented as a result below.
                    </p>
                </div>
                <div className="blog-l7-study-grid">
                    <ImageComparison
                        heading="Motion blockout and character sheets"
                        labels={[
                            "Input / rough performance",
                            "Output / pass 1",
                        ]}
                        media={media.remoteStartupSenpai.studies.motion}
                        alt={[
                            "Rough performance frames for Hiro in the office",
                            "First finished rendering pass across the office scene",
                        ]}
                        caption="The moving rough supplied the locked camera, action order, dialogue timing, stand, exit path, and empty-office hold. The design sheets supplied the finished identity."
                        fallback="Motion-reference study unavailable."
                        videoComparison={{
                            heading: "Motion-reference playback",
                            labels: [
                                "Left / input video",
                                "Right / Seedance 2.0 output",
                            ],
                            media: media.remoteStartupSenpai.studies.motion
                                .video,
                            title: "Remote Startup Senpai motion-reference input and Seedance 2.0 output",
                            caption:
                                "The complete input and output play on one fifteen-second timeline. Audio comes from this test output.",
                            fallback:
                                "The Seedance 2.0 input-to-output comparison could not be loaded.",
                        }}
                    />
                    <ImageComparison
                        heading="Seven storyboard beats and original audio"
                        labels={[
                            "Input / storyboard",
                            "Output / no motion video",
                        ]}
                        media={media.remoteStartupSenpai.studies.storyboard}
                        alt={[
                            "Seven-panel storyboard for the office performance",
                            "Result frames from the storyboard and audio test",
                        ]}
                        caption="Without a motion video, seven broad poses carried composition and progression while the production audio supplied dialogue and lip-sync timing."
                        fallback="Storyboard study unavailable."
                    />
                    <ImageComparison
                        heading="The same motion brief across two render passes"
                        labels={["Earlier pass", "Later pass"]}
                        media={media.remoteStartupSenpai.studies.modelPasses}
                        alt={[
                            "Contact sheet from the earlier motion-reference pass",
                            "Contact sheet from the later motion-reference pass",
                        ]}
                        caption="Keeping the motion brief and character authority comparable exposed changes in room design, drawing stability, and the strength of Hiro’s reaction."
                        fallback="Render-pass comparison unavailable."
                        videoComparison={{
                            heading: "Later motion-reference playback",
                            labels: [
                                "Left / input video",
                                "Right / Seedance 2.5 output",
                            ],
                            media: media.remoteStartupSenpai.studies.modelPasses
                                .video,
                            title: "Remote Startup Senpai motion-reference input and Seedance 2.5 output",
                            caption:
                                "The same motion-reference video is repeated here so the later output can be judged against its actual input rather than against the earlier output alone.",
                            fallback:
                                "The Seedance 2.5 input-to-output comparison could not be loaded.",
                        }}
                    />
                    <ImageComparison
                        heading="Motion blockout with all chronological keyframes"
                        labels={[
                            "Input / polished keys",
                            "Output / final pass",
                        ]}
                        media={media.remoteStartupSenpai.studies.allKeyframes}
                        alt={[
                            "Polished chronological keyframes for Hiro's performance",
                            "Chronological result frames from the final reference pass",
                        ]}
                        caption="Fifteen polished keyframes fixed the important performance states while the rough remained responsible for continuous motion, timing, camera, and path."
                        fallback="Full-keyframe study unavailable."
                        videoComparison={{
                            heading: "All-keyframes playback",
                            labels: [
                                "Left / input video",
                                "Right / all-keyframes output",
                            ],
                            media: media.remoteStartupSenpai.studies
                                .allKeyframes.video,
                            title: "Remote Startup Senpai motion-reference input and all-keyframes output",
                            caption:
                                "This pass uses the same moving rough together with the chronological finished keyframes. Both sides remain synchronized for the full fifteen seconds.",
                            fallback:
                                "The all-keyframes input-to-output comparison could not be loaded.",
                        }}
                    />
                </div>

                <div className="blog-input-heading">
                    <h3>Rough to finished</h3>
                    <span>One synchronized timeline</span>
                </div>
                <div className="blog-comparison-key" aria-hidden="true">
                    <span>Left / motion blockout</span>
                    <span>Right / approved subtitled final</span>
                </div>
                <TestVideo
                    src={media.remoteStartupSenpai.roughVsFinished.video}
                    poster={media.remoteStartupSenpai.roughVsFinished.poster}
                    title="Remote Startup Senpai rough performance and approved subtitled final"
                    fallback="The rough-to-finished comparison could not be loaded."
                    muted={false}
                />
                <p className="blog-media-caption">
                    The result preserves the 8.52-second reaction, exit by
                    12.96, and the final empty-office hold. The most important
                    poses are fixed at authored instants rather than treated as
                    separate shots.
                </p>

                <div className="blog-input-heading">
                    <h3>Upscale review</h3>
                    <span>Source / attempted restoration</span>
                </div>
                <div className="blog-comparison-key" aria-hidden="true">
                    <span>Left / approved source</span>
                    <span>Right / attempted upscale</span>
                </div>
                <TestVideo
                    src={media.remoteStartupSenpai.sourceVsUpscale.video}
                    poster={media.remoteStartupSenpai.sourceVsUpscale.poster}
                    title="Remote Startup Senpai source and attempted upscale comparison"
                    fallback="The upscale comparison video could not be loaded."
                    muted={false}
                />
                <p className="blog-media-caption">
                    Both sides use the same subtitles and production audio. The
                    right side is the attempted restoration result.
                </p>
                <div className="blog-body blog-transfer-copy">
                    <h3>The sharper result changed the acting.</h3>
                    <p>
                        The restoration clarified edges and facial detail, but
                        it did not behave like a neutral upscale. The service
                        returned 720 × 1280 at 24 fps and 17.375 seconds from a
                        1080 × 1920, 30 fps, 17.533-second source. Around Hiro’s
                        comic emotional snap, the mouth shape and intensity
                        shifted away from the approved performance.
                    </p>
                    <p>
                        Restoring the original audio, conforming the frame rate,
                        and holding the final frame repaired the delivery
                        length. Those steps could not restore the altered
                        acting. The upscaled pass was rejected, and the approved
                        source remains the production master.
                    </p>
                </div>
            </section>
        </div>
    );
};

const JapaneseArticle = ({ media }) => {
    const originalLabels = {
        main: "メイン",
        magician: "Look 2",
        look1: "Look 1",
        look3: "Look 3",
        look4: "Look 4",
    };
    const refinedLabels = { ...originalLabels, identity: "顔・同一性" };
    return (
        <div className="blog-notebook" lang="ja">
            <Facts locale="ja" />
            <div className="blog-body blog-opening">
                <p className="blog-lead">
                    同じ15秒のシーンを使い、実制作に近い演出上の問いを検証しました。ラフ絵コンテから受け取るものと、完成用のキャラクター設定から受け取るものを、どこで分けるべきか。
                </p>
                <p>
                    白いランウェイへ一人の女性が現れます。踊りの途中で、椅子に座る3人の分身が消え、その衣装が主役へ移ります。ショットとブロッキングはラフで決まっており、顔、プロポーション、衣装は別のキャラクター設定で決まっています。
                </p>
                <p>
                    2018年に『Brighter』をアニメーション作品として記録しました。今回はその一場面へ戻り、同じ素材からSeedance
                    2.0を6通りに演出します。すべて15秒、生成音声なしの条件です。
                </p>
            </div>

            <section className="blog-study-section">
                <header className="blog-section-heading">
                    <p>01 / 入力素材</p>
                    <h2>何を参照させるか</h2>
                    <span>
                        ラフはショット順とブロッキングを、キャラクター資料は絵柄と衣装を決めます。
                    </span>
                </header>
                <div className="blog-source-comparison-grid">
                    <SourceComparison
                        heading="『Brighter』 / 上下比較"
                        orientation="vertical"
                        labels={[
                            "上 / ラフ絵コンテ",
                            "下 / 詳細スクリプトの結果",
                        ]}
                        title="『Brighter』のラフ絵コンテと詳細スクリプト結果の同期比較"
                        caption="2つの映像を同じタイムラインで再生します。14.375秒のラフは、15秒の出力が終わるまで最終フレームを保持します。"
                        media={media.overview}
                        fallback="『Brighter』の比較映像を読み込めませんでした。"
                    />
                    <SourceComparison
                        heading="『Remote Startup Senpai』 / 左右比較"
                        orientation="horizontal"
                        labels={[
                            "左 / ラフ芝居",
                            "右 / 字幕付き承認済み仕上げ",
                        ]}
                        title="『Remote Startup Senpai』のラフ芝居と字幕付き承認済み仕上げの同期比較"
                        caption="ラフと承認済み仕上げを同じタイムラインで再生します。ラフは最後の2.533秒で最終フレームを保持し、字幕付き仕上げは17.533秒の芝居を最後まで収録しています。"
                        media={media.remoteStartupSenpai.roughVsFinished}
                        fallback="『Remote Startup Senpai』のラフと仕上げの比較映像を読み込めませんでした。"
                        muted={false}
                    />
                </div>

                <div className="blog-input-heading">
                    <h3>元のキャラクター設定</h3>
                    <span>テスト A–D</span>
                </div>
                <ImageStrip
                    items={media.originalInputs}
                    labels={originalLabels}
                    fallback="キャラクター資料を読み込めませんでした。"
                />

                <div className="blog-input-heading">
                    <h3>整理したキャラクターアンカー</h3>
                    <span>テスト E–F</span>
                </div>
                <div className="blog-body blog-compact-copy">
                    <p>
                        EとFでは、元の設定を顔の基準1枚と、各衣装の全身1枚に分けました。別人として解釈されかねない複数アングルを入力から外すためです。
                    </p>
                </div>
                <ImageStrip
                    items={media.refinedInputs}
                    labels={refinedLabels}
                    fallback="整理したキャラクター資料を読み込めませんでした。"
                />
            </section>

            <section className="blog-study-section">
                <header className="blog-section-heading">
                    <p>02 / 最初の検証</p>
                    <h2>4つの制御方法</h2>
                    <span>
                        動くラフ、キャラクター画のみ、詳細なショットスクリプト、対になる絵コンテフレームを比較します。
                    </span>
                </header>
                <div className="blog-test-grid">
                    <Comparison
                        id="A"
                        heading="ラフ映像をそのまま使用"
                        labels={["左 / ラフ映像", "右 / 出力 A"]}
                        observation="カットと一緒に、ラフのタイミングも残りました。"
                        detail="絵コンテのカメラ配置はよく継承されました。同時に、長い止めと急なポーズ変化まで写り、動きはぎこちなくなります。"
                        caption="1つのプレイヤーで同期再生します。最後の0.625秒はラフの最終フレームを保持します。"
                        media={media.tests.a}
                        locale="ja"
                    />
                    <Comparison
                        id="B"
                        heading="テキストとキャラクター画"
                        labels={["左 / 時間別プロンプト", "右 / 出力 B"]}
                        observation="ショット資料を外すと、カメラ設計がずれました。"
                        detail="ラフの動きには縛られにくくなりますが、カメラ位置、分身の配置、出来事の順番が予定したシーンから離れます。"
                        caption="左側は各時間帯に合わせて、その瞬間に有効な演出指示へ切り替わります。"
                        media={media.tests.b}
                        locale="ja"
                    />
                    <Comparison
                        id="C"
                        heading="詳細なショットスクリプト"
                        labels={["左 / 時間別ショット指示", "右 / 出力 C"]}
                        observation="詳細なショットスクリプトが最も強い結果でした。"
                        detail="カメラ、ブロッキング、変身を細かく書くことで、ラフのポーズタイミングを持ち込まずにシーンの大部分を回収できました。ただし一部の構図は絵コンテと異なります。"
                        caption="左側は生成プロンプトと同じ7つの時間帯で指示を表示します。"
                        media={media.tests.c}
                        locale="ja"
                    />
                    <Comparison
                        id="D"
                        heading="対になる絵コンテフレーム"
                        labels={["左 / 絵コンテグリッド", "右 / 出力 D"]}
                        observation="構図は改善しましたが、構図の間の動きが弱くなりました。"
                        detail="開始と終了の絵がフレーミングを明確にします。一方、出力はその絵を通過せず、停止点として扱う傾向がありました。"
                        caption="完成した絵コンテグリッドを左に表示したまま、右で結果を再生します。"
                        media={media.tests.d}
                        locale="ja"
                    />
                </div>
            </section>

            <section className="blog-study-section">
                <header className="blog-section-heading">
                    <p>03 / 改良</p>
                    <h2>タイミング情報を減らす</h2>
                    <span>
                        EとFでは、画面方向とショット順を残しながら、ラフの拍子が伝わる量を減らしました。
                    </span>
                </header>
                <Comparison
                    id="E"
                    heading="カメラ専用の映像リファレンス"
                    labels={["左 / カメラ参照", "右 / 出力 E"]}
                    observation="ラフの役割を限定すると、影響も小さくなりました。"
                    detail="映像はショット順、フレーミング、画面方向、ブロッキングだけを担当します。解剖、衣装、線、ポーズのタイミング、カット尺は参照しないと明記し、動きを6つの長いまとまりへ整理しました。"
                    caption="カメラ参照は、15秒の出力が終わるまで最終フレームを保持します。"
                    media={media.tests.e}
                    locale="ja"
                />
                <Comparison
                    id="F"
                    heading="疎なホールドキーフレームのアニマティック"
                    labels={["左 / 疎なアニマティック", "右 / 出力 F"]}
                    observation="疎なアニマティックでもショット順は残りました。"
                    detail="各ショットの始まりと終わりを保持し、ケープの転換だけ絵を増やしています。連続した動きの余地は広がりましたが、最終衣装はまだLook 4からずれました。"
                    caption="疎なアニマティックと生成結果を、同じ15秒のタイムラインで再生します。"
                    media={media.tests.f}
                    locale="ja"
                />
            </section>

            <section className="blog-study-section blog-notes">
                <header className="blog-section-heading">
                    <p>04 / 演出メモ</p>
                    <h2>6つの検証で変わったこと</h2>
                </header>
                <ol>
                    <li>
                        <span>01</span>
                        <div>
                            <h3>動くリファレンスはタイミングも運びます。</h3>
                            <p>
                                Aでは絵コンテの止めと急なポーズ変化まで継承されました。カメラ参照と指定しても、その信号は完全には消えません。
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>02</span>
                        <div>
                            <h3>各リファレンスには1つの役割が必要でした。</h3>
                            <p>
                                顔、身体、衣装、線、色はキャラクター画が担当し、映像と絵コンテはフレーミング、ブロッキング、画面方向を担当します。
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>03</span>
                        <div>
                            <h3>
                                6つの長い動作単位は、より滑らかに動きました。
                            </h3>
                            <p>
                                長い区間を設けることで、予備動作、重心移動、オーバーラップ、フォロースルーの時間を確保できました。
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>04</span>
                        <div>
                            <h3>疎な絵でも編集の流れは運べます。</h3>
                            <p>
                                Fはカットと画面方向を残しつつ、モデルが複製できるラフの中割りを減らしました。
                            </p>
                        </div>
                    </li>
                </ol>
                <div className="blog-next-pass">
                    <span>次の検証</span>
                    <p>
                        Fの疎なカメラ参照を残し、Look
                        4を最終フレームの基準として明確にし、最後の5秒に解決する衣装変化の数を減らします。
                    </p>
                </div>
            </section>

            <section className="blog-study-section">
                <header className="blog-section-heading">
                    <p>05 / 実制作への展開</p>
                    <h2>別のシーンへ分担を移す</h2>
                    <span>
                        『Remote Startup
                        Senpai』の未公開カットで、芝居のタイミングと仕上げの絵を分けて扱いました。
                    </span>
                </header>
                <div className="blog-body blog-transfer-copy">
                    <p>
                        このオフィスのショットは『Remote Startup
                        Senpai』の未公開カットです。Meikoは画面外から話し、Hiroは机に伏せた状態から急に立ち上がり、そのまま画面外へ歩きます。俯瞰カメラ、室内レイアウト、ブロッキング、台詞の間、芝居はラフが担当しました。Hiroの同一性と仕上げの絵は、キャラクター設定と7枚の仕上げキーフレームが担当しています。
                    </p>
                    <p>
                        動作設計は14.5秒で終え、最後の0.5秒を納品処理の余白にしました。無音のレンダー後に映像を正確な15秒へ整え、元音声を戻しています。
                    </p>
                </div>

                <div className="blog-input-heading">
                    <h3>キャラクターの基準</h3>
                    <span>画面内 / 画面外</span>
                </div>
                <div className="blog-body blog-compact-copy">
                    <p>
                        画面に登場するのはHiroだけです。顔、疲れた目元、無造作な髪、キャメル色のジャケット、黒いシャツ、チャコールのパンツ、茶色の靴はHiroの設定を基準にしました。Meikoの設定は画面外で話す人物の同一性を定めますが、このカットには姿を見せません。
                    </p>
                </div>
                <ImageStrip
                    items={media.remoteStartupSenpai.characters}
                    labels={{
                        hiro: "Hiro / 画面内の芝居",
                        meiko: "Meiko / 画面外の声",
                    }}
                    fallback="キャラクター設定を読み込めませんでした。"
                />

                <div className="blog-input-heading">
                    <h3>4つの入力条件</h3>
                    <span>参照素材 / 結果</span>
                </div>
                <div className="blog-body blog-compact-copy">
                    <p>
                        1つの資料にすべてを任せず、動き、台詞の間、構図、仕上げの絵を分けて検証しました。7枚のキーフレームを選んだ構成も準備しましたが、調査フォルダ内に完成出力がないため、結果としては掲載していません。
                    </p>
                </div>
                <div className="blog-l7-study-grid">
                    <ImageComparison
                        heading="動くラフとキャラクター設定"
                        labels={["入力 / ラフの芝居", "出力 / 1回目"]}
                        media={media.remoteStartupSenpai.studies.motion}
                        alt={[
                            "オフィスでのHiroの芝居を示すラフフレーム",
                            "最初の仕上げ結果を並べたコンタクトシート",
                        ]}
                        caption="動くラフが固定カメラ、動作順、台詞の間、立ち上がり、退場経路、空のオフィスの止めを担当し、キャラクター設定が仕上げの同一性を担当しました。"
                        fallback="映像リファレンスの検証資料を読み込めませんでした。"
                        videoComparison={{
                            heading: "映像リファレンスの再生比較",
                            labels: [
                                "左 / 入力映像",
                                "右 / Seedance 2.0の出力",
                            ],
                            media: media.remoteStartupSenpai.studies.motion
                                .video,
                            title: "『Remote Startup Senpai』の映像入力とSeedance 2.0の出力",
                            caption:
                                "入力と出力を同じ15秒のタイムラインで再生します。音声はこの検証出力に含まれるものです。",
                            fallback:
                                "Seedance 2.0の入力と出力の比較映像を読み込めませんでした。",
                        }}
                    />
                    <ImageComparison
                        heading="7つの絵コンテと元音声"
                        labels={["入力 / 絵コンテ", "出力 / 動画参照なし"]}
                        media={media.remoteStartupSenpai.studies.storyboard}
                        alt={[
                            "オフィスの芝居を7つに分けた絵コンテ",
                            "絵コンテと音声から作った結果フレーム",
                        ]}
                        caption="動く映像を使わず、7つの大きなポーズで構図と進行を示し、制作音声で台詞とリップシンクのタイミングを与えました。"
                        fallback="絵コンテ入力の検証資料を読み込めませんでした。"
                    />
                    <ImageComparison
                        heading="同じ動きの設計による2つの仕上げ"
                        labels={["前の仕上げ", "後の仕上げ"]}
                        media={media.remoteStartupSenpai.studies.modelPasses}
                        alt={[
                            "前の映像参照テストのコンタクトシート",
                            "後の映像参照テストのコンタクトシート",
                        ]}
                        caption="動きの設計とキャラクターの基準を近い条件に保つことで、室内設計、作画の安定性、Hiroのリアクションの強さを比較しました。"
                        fallback="仕上げ結果の比較を読み込めませんでした。"
                        videoComparison={{
                            heading: "後の映像リファレンス検証",
                            labels: [
                                "左 / 入力映像",
                                "右 / Seedance 2.5の出力",
                            ],
                            media: media.remoteStartupSenpai.studies.modelPasses
                                .video,
                            title: "『Remote Startup Senpai』の映像入力とSeedance 2.5の出力",
                            caption:
                                "後の出力を実際の入力映像と見比べられるよう、同じ映像リファレンスをここでも左側に配置しています。",
                            fallback:
                                "Seedance 2.5の入力と出力の比較映像を読み込めませんでした。",
                        }}
                    />
                    <ImageComparison
                        heading="動くラフと時系列の全キーフレーム"
                        labels={["入力 / 仕上げキー", "出力 / 最終検証"]}
                        media={media.remoteStartupSenpai.studies.allKeyframes}
                        alt={[
                            "Hiroの芝居を時系列に並べた仕上げキーフレーム",
                            "最終検証の結果を時系列に並べたフレーム",
                        ]}
                        caption="15枚の仕上げキーフレームで重要な芝居の状態を固定し、連続した動き、タイミング、カメラ、移動経路はラフに担当させました。"
                        fallback="全キーフレームの検証資料を読み込めませんでした。"
                        videoComparison={{
                            heading: "全キーフレーム検証の再生比較",
                            labels: [
                                "左 / 入力映像",
                                "右 / 全キーフレームの出力",
                            ],
                            media: media.remoteStartupSenpai.studies
                                .allKeyframes.video,
                            title: "『Remote Startup Senpai』の映像入力と全キーフレームの出力",
                            caption:
                                "同じ動くラフへ時系列の仕上げキーフレームを加えた検証です。左右を15秒の全編で同期しています。",
                            fallback:
                                "全キーフレームの入力と出力の比較映像を読み込めませんでした。",
                        }}
                    />
                </div>

                <div className="blog-input-heading">
                    <h3>ラフから仕上げへ</h3>
                    <span>同じタイムラインで同期</span>
                </div>
                <div className="blog-comparison-key" aria-hidden="true">
                    <span>左 / 動きのラフ</span>
                    <span>右 / 字幕付き承認済み仕上げ</span>
                </div>
                <TestVideo
                    src={media.remoteStartupSenpai.roughVsFinished.video}
                    poster={media.remoteStartupSenpai.roughVsFinished.poster}
                    title="『Remote Startup Senpai』のラフ芝居と字幕付き承認済み仕上げ"
                    fallback="ラフと仕上げの比較映像を読み込めませんでした。"
                    muted={false}
                />
                <p className="blog-media-caption">
                    8.52秒のリアクション、12.96秒までの退場、その後の空のオフィスの止めを残しています。重要なポーズは別々のショットではなく、指定した時刻を通過する芝居の基準として扱いました。
                </p>

                <div className="blog-input-heading">
                    <h3>アップスケール検証</h3>
                    <span>ソース / 修復の試行</span>
                </div>
                <div className="blog-comparison-key" aria-hidden="true">
                    <span>左 / 承認済みソース</span>
                    <span>右 / アップスケール試行</span>
                </div>
                <TestVideo
                    src={media.remoteStartupSenpai.sourceVsUpscale.video}
                    poster={media.remoteStartupSenpai.sourceVsUpscale.poster}
                    title="『Remote Startup Senpai』のソースとアップスケール試行の比較"
                    fallback="アップスケール比較映像を読み込めませんでした。"
                    muted={false}
                />
                <p className="blog-media-caption">
                    左右とも同じ字幕と制作音声を使用しています。右側が修復を試した結果です。
                </p>
                <div className="blog-body blog-transfer-copy">
                    <h3>鮮明になっても、芝居は同じではありませんでした。</h3>
                    <p>
                        輪郭と顔のディテールは明瞭になりましたが、純粋なアップスケールにはなりませんでした。1080
                        × 1920、30
                        fps、17.533秒のソースに対し、返された映像は720 ×
                        1280、24
                        fps、17.375秒です。Hiroの感情が急に切り替わる箇所では、口の形と芝居の強さが承認済みの演技から変わりました。
                    </p>
                    <p>
                        元音声を戻し、フレームレートを整え、最終フレームを保持することで納品尺は修正できます。ただし、変化した芝居は戻りません。この結果は採用せず、承認済みのソースを制作マスターとして残しました。
                    </p>
                </div>
            </section>
        </div>
    );
};

const Post = ({ intl }) => {
    const locale = intl.locale || "en";
    const post = getPost("directing-the-reference");
    const content = post.translations[locale] || post.translations.en;
    return (
        <BlogLayout article>
            <SEO
                title={content.title}
                lang={locale}
                description={content.summary}
                meta={[
                    { property: "og:type", content: "article" },
                    { property: "og:image", content: post.media.hero },
                ]}
            />
            <section className="blog-feature-hero">
                <RemoteImage
                    className="blog-feature-hero-image"
                    src={post.media.hero}
                    alt={
                        locale === "ja"
                            ? "光るハートへ息を吹きかける女性のアニメーション・キービジュアル"
                            : "Animation key visual of a woman blowing toward a glowing heart"
                    }
                    fallback={
                        locale === "ja"
                            ? "キービジュアルを読み込めませんでした。"
                            : "The key visual could not be loaded."
                    }
                    loading="eager"
                />
                <div className="blog-feature-hero-shade" aria-hidden="true" />
                <div className="blog-feature-hero-copy">
                    <div className="blog-feature-eyebrow">
                        {locale === "ja"
                            ? "Seedance 2.0 ・ リファレンス入力検証"
                            : "Seedance 2.0 · Reference-input study"}
                    </div>
                    <PostHeader post={post} locale={locale} />
                </div>
            </section>
            <DirectingReferenceSeriesNavigation
                currentPart={1}
                locale={locale}
            />
            {locale === "ja" ? (
                <JapaneseArticle media={post.media} />
            ) : (
                <EnglishArticle media={post.media} />
            )}
        </BlogLayout>
    );
};

export default injectIntl(Post);
