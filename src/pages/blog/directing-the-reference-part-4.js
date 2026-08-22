import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHero from "../../components/blog/post-hero";
import { DirectingReferenceSeriesNavigation } from "../../components/blog/article-navigation";
import SEO from "../../components/seo";
import { getPost } from "../../blog/posts";
import TestVideo from "../../components/blog/test-video";
import { directingTheReferencePart4Media as media } from "../../blog/media";

const Figure = ({ src, alt, caption }) => (
    <figure className="blog-rich-figure">
        <img src={src} alt={alt} loading="lazy" />
        <figcaption>{caption}</figcaption>
    </figure>
);

const EnglishArticle = ({ locale }) => {
    const ja = locale === "ja";
    return (
        <div className="blog-notebook blog-part4 blog-rich-part4">
            <div className="blog-body blog-opening">
                <p className="blog-lead">
                    {ja
                        ? "脚本を書き切り、6シーン、約5分の短編映画として全体が見えました。いまは、完成に向けて各ショットの判断を閉じています。"
                        : "The screenplay is complete. The short film now has a six-scene, roughly five-minute shape, and the work is about closing the decisions that will carry it to the finish."}
                </p>
                <p>
                    {ja ? (
                        <>
                            制作しているのは、アニメーションディレクターの私とMLエンジニアの{" "}
                            <a
                                href="https://www.instagram.com/jsonmathsai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="@jsonmathsai on Instagram"
                            >
                                @jsonmathsai
                            </a>
                            です。二人とも本業があるため、作業時間は週末と、ときどき平日の夜に限られます。
                        </>
                    ) : (
                        <>
                            This is a two-person production. I am the animation
                            director, and{" "}
                            <a
                                href="https://www.instagram.com/jsonmathsai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="@jsonmathsai on Instagram"
                            >
                                @jsonmathsai
                            </a>{" "}
                            is the ML engineer. We both have day jobs, so the
                            available time is weekends and occasional
                            weeknights.
                        </>
                    )}
                </p>
            </div>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="animatic-heading"
            >
                <div className="blog-rich-section-label">
                    A / {ja ? "音で決めるペース" : "PACING WITH SOUND"}
                </div>
                <h2 id="animatic-heading">
                    {ja
                        ? "アニマティックをペースの基準にする"
                        : "The sound animatic sets the pace"}
                </h2>
                <p>
                    {ja
                        ? "Scene 1–2のサウンド・アニマティックを先に見直し、ショットのホールド、編集上の因果、台詞の呼吸を確認します。生成映像の尺に合わせて編集するのではなく、映画のペースに合わせてショットを直します。"
                        : "We review the sound animatic for Scenes 1–2 before revising generated shots. It gives us the holds, editorial causality, and breath around dialogue. The shots serve the film's pace, rather than the edit being bent around a generated clip length."}
                </p>
                <TestVideo
                    src={media.animatic.video}
                    poster={media.animatic.poster}
                    title={
                        ja
                            ? "Scene 1–2 サウンド・アニマティック"
                            : "Scenes 1–2 sound animatic"
                    }
                    fallback={
                        ja
                            ? "アニマティックを読み込めませんでした。"
                            : "The animatic could not be loaded."
                    }
                    muted={false}
                />
                <p className="blog-media-caption">
                    {ja
                        ? "音付きのアニマティック。編集と演技の呼吸を、ショットの判断に戻す。"
                        : "The sound animatic returns editorial and performance breath to each shot decision."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="keyframe-heading"
            >
                <div className="blog-rich-section-label">
                    B / {ja ? "ラフからキーへ" : "ROUGH TO KEYFRAME"}
                </div>
                <h2 id="keyframe-heading">
                    {ja
                        ? "ラフの演出を、検査できるキーへ"
                        : "Keep the rough's direction in the keyframe"}
                </h2>
                <p>
                    {ja
                        ? "Scene 2 Sequence 2では、SH01、SH02 A/B、SH03、SH04、SH05、SH06 A/B/C、SH07、SH08、SH09の全12出力を並べました。ラフはカメラ、パース、ポーズ、芝居を決めます。プロダクション化したキーでは、人物のスケール、空間、照明がショット間で確認できます。"
                        : "For Scene 2 Sequence 2, the complete twelve-output set is shown together: SH01, SH02 A/B, SH03, SH04, SH05, SH06 A/B/C, SH07, SH08, and SH09. The rough establishes camera, perspective, pose, and acting. The productionized key makes actor scale, space, and lighting inspectable across shots."}
                </p>
                <Figure
                    src={media.comparisons.roughToKeyframe}
                    alt={
                        ja
                            ? "Scene 2 Sequence 2の全12出力、ラフとプロダクション化キー"
                            : "All twelve Scene 2 Sequence 2 rough and productionized keyframe outputs"
                    }
                    caption={
                        ja
                            ? "全12出力。ラフ → プロダクション化キー。"
                            : "The complete twelve-output set. Rough → productionized keyframe."
                    }
                />
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="iterations-heading"
            >
                <div className="blog-rich-section-label">
                    C / {ja ? "現在の反復" : "CURRENT ITERATIONS"}
                </div>
                <h2 id="iterations-heading">
                    {ja
                        ? "最初の試行を、次の判断に変える"
                        : "Turn the first attempt into the next decision"}
                </h2>
                <p>
                    {ja
                        ? "TEGAKIのSH14–19では、現在の方法での最初の試行と最終版を全9ペアで比較しています。改善点は、カメラを固定し、俳優のスケールと人物の識別を保ち、画面の中で誰がどこにいるかを崩さないことです。"
                        : "For TEGAKI SH14–19, all nine first-attempt to final pairs from the current method are compared. The improvements come from locking the camera, holding actor scale, separating identities, and keeping each person's place in the frame legible."}
                </p>
                <Figure
                    src={media.comparisons.earlyToFinal}
                    alt={
                        ja
                            ? "TEGAKI SH14からSH19の全9ペア、最初の試行と最終版"
                            : "All nine TEGAKI SH14 to SH19 first-attempt and final pairs"
                    }
                    caption={
                        ja
                            ? "TEGAKI SH14–19。最初の試行 → 最終版、全9ペア。"
                            : "TEGAKI SH14–19. First attempt → final, all nine pairs."
                    }
                />
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="motion-heading"
            >
                <div className="blog-rich-section-label">
                    D / {ja ? "空間からモーションへ" : "SPACE TO MOTION"}
                </div>
                <h2 id="motion-heading">
                    {ja
                        ? "空間キーを動きに渡す"
                        : "Carry the spatial key into motion"}
                </h2>
                <p>
                    {ja
                        ? "Scene 1 Shot 1では、ラフから空間キーをつくり、そのキーをモーションへ渡します。最初の出力を受け入れて終わりにはせず、カメラ、人物の大きさ、ポーズ、芝居のどこが崩れたかを確認して、次の指示へ戻します。"
                        : "In TEGAKI Scene 1 Shot 1, the rough becomes a spatial key before it becomes motion. We do not accept the first result as the finish. We check where the camera, actor scale, pose, or acting slipped, then return that direction to the next iteration."}
                </p>
                <TestVideo
                    src={media.roughKeyframeMotion.video}
                    poster={media.roughKeyframeMotion.poster}
                    title={
                        ja
                            ? "ラフ、空間キー、モーションの比較"
                            : "Rough, spatial keyframe, and motion comparison"
                    }
                    fallback={
                        ja
                            ? "比較映像を読み込めませんでした。"
                            : "The comparison video could not be loaded."
                    }
                />
                <p className="blog-media-caption">
                    {ja
                        ? "ラフ → 空間キー → モーション。判断を一度で終わらせず、次の反復へ戻す。"
                        : "Rough → spatial keyframe → motion. Direction returns to the next iteration instead of ending at the first output."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="plates-heading"
            >
                <div className="blog-rich-section-label">
                    E / {ja ? "環境プレート" : "ENVIRONMENT PLATES"}
                </div>
                <h2 id="plates-heading">
                    {ja
                        ? "部屋のトポロジーを固定する"
                        : "Fix the room's topology"}
                </h2>
                <p>
                    {ja
                        ? "スタジオの夜は、参照画像を出発点に、採用した複数のプレートへ展開しました。机、窓、描画壁、通路の関係と照明の状態を保つことで、カットが変わっても同じ部屋として読めます。却下したPlate 01はこのコラージュに含めていません。"
                        : "For the studio at night, the reference was extended into the accepted plate set. Keeping the desk, windows, drawing wall, walking lane, and lighting state in the same relationship lets the room remain legible when the shot changes. Rejected Plate 01 is excluded from this collage."}
                </p>
                <Figure
                    src={media.comparisons.plates}
                    alt={
                        ja
                            ? "TEGAKIスタジオ夜の参照と採用プレート"
                            : "TEGAKI studio-night reference and accepted plates"
                    }
                    caption={
                        ja
                            ? "参照 → 採用プレート。室内のトポロジーと照明をショット間で固定する。"
                            : "Reference → accepted plates. Room topology and lighting stay fixed across shots."
                    }
                />
            </section>

            <section className="blog-study-section blog-notes" id="finish-line">
                <header className="blog-section-heading">
                    <p>F / {ja ? "完成へ" : "FINISHING"}</p>
                    <h2>{ja ? "映画を最後まで閉じる" : "Close the film"}</h2>
                </header>
                <div className="blog-body blog-transfer-copy">
                    <p>
                        {ja
                            ? "6シーン、約5分の脚本は完成しました。残るのは、ペース、文章、描画の基礎を使って、ショット、編集、音を一本の映画として閉じることです。AIツールを使うほど、どの候補を選び、何を直すのかを判断する基礎が重要になります。"
                            : "The six-scene, roughly five-minute screenplay is complete. What remains is to close the shots, edit, and sound as one film through the fundamentals of pacing, writing, and drawing. The more AI tools enter the process, the more those fundamentals matter when choosing a candidate and naming the correction."}
                    </p>
                    <p>
                        {ja
                            ? "8月31日、または今月末を目標に、二人で映画を完成させます。"
                            : "As a two-person team, we are aiming to finish the film by August 31, at the end of the month."}
                    </p>
                </div>
            </section>
        </div>
    );
};

const JapaneseArticle = EnglishArticle;

const Post = ({ intl }) => {
    const locale = intl.locale || "en";
    const post = getPost("directing-the-reference-part-4");
    const content = post.translations[locale] || post.translations.en;
    return (
        <BlogLayout article>
            <SEO
                title={content.title}
                lang={locale}
                description={content.summary}
                meta={[
                    { property: "og:type", content: "article" },
                    { property: "og:image", content: post.cover.src },
                ]}
            />
            <PostHero post={post} locale={locale} />
            <DirectingReferenceSeriesNavigation
                currentPart={4}
                locale={locale}
            />
            {locale === "ja" ? (
                <JapaneseArticle locale={locale} />
            ) : (
                <EnglishArticle locale={locale} />
            )}
        </BlogLayout>
    );
};

export default injectIntl(Post);
