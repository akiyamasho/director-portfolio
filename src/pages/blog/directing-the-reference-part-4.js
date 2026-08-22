import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHero from "../../components/blog/post-hero";
import { DirectingReferenceSeriesNavigation } from "../../components/blog/article-navigation";
import SEO from "../../components/seo";
import { getPost } from "../../blog/posts";
import TestVideo from "../../components/blog/test-video";
import {
    directingTheReferenceMedia as part1Media,
    directingTheReferencePart2Media as part2Media,
    directingTheReferencePart4Media as media,
} from "../../blog/media";

const Figure = ({ src, alt, caption }) => (
    <figure className="blog-rich-figure">
        <img src={src} alt={alt} loading="lazy" />
        <figcaption>{caption}</figcaption>
    </figure>
);

const EnglishArticle = ({ locale }) => {
    const ja = locale === "ja";
    return (
        <div className="blog-notebook blog-part3 blog-part4 blog-rich-part4">
            <div className="blog-body blog-opening">
                <p className="blog-lead">
                    {ja
                        ? "Part 3から、制作は実験の記録から完成へ向かう作業になりました。脚本を最後まで書き切り、6シーン、約5分の映画にしました。"
                        : "Since Part 3, the work has changed from documenting experiments to finishing a film. The screenplay is complete: six scenes and roughly five minutes."}
                </p>
                <p>
                    {ja ? (
                        <>
                            この映画を一緒につくっているのは、アニメーションディレクターの私とMLエンジニアの{" "}
                            <a
                                href="https://www.instagram.com/jsonmathsai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="@jsonmathsai on Instagram"
                            >
                                @jsonmathsai
                            </a>
                            です。二人とも本業があり、作業できるのは週末と、ときどき平日の夜だけです。
                        </>
                    ) : (
                        <>
                            I am the animation director, and{" "}
                            <a
                                href="https://www.instagram.com/jsonmathsai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="@jsonmathsai on Instagram"
                            >
                                @jsonmathsai
                            </a>{" "}
                            is the ML engineer. We both have day jobs. Our
                            production time is weekends and, sometimes,
                            weeknights after work.
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
                        ? "まず、アニマティックを見直す"
                        : "The animatic is the pacing authority"}
                </h2>
                <p>
                    {ja
                        ? "Scene 1–2のストーリーボード・アニマティックには音があります。ここでショットのホールド、台詞の間、カットの因果を確認してから、生成映像を直します。"
                        : "The storyboard animatic for scenes 1–2 has sound. It is where we check shot holds, dialogue breath, and editorial causality before asking a generated shot to move."}
                </p>
                <TestVideo
                    src={media.animatic.video}
                    poster={media.animatic.poster}
                    title={
                        ja
                            ? "Scene 1–2 ストーリーボード・アニマティック"
                            : "Scenes 1–2 storyboard animatic"
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
                        ? "音付き・192秒。プロバイダーのクリップ尺ではなく、編集と演技の呼吸を基準にする。"
                        : "192 seconds with sound. Duration comes from edit and performance, not a provider clip limit."}
                </p>
            </section>
            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="early-heading"
            >
                <div className="blog-rich-section-label">
                    B /{" "}
                    {ja
                        ? "初期手法から現在の反復へ"
                        : "EARLY METHOD TO CURRENT ITERATION"}
                </div>
                <h2 id="early-heading">
                    {ja
                        ? "左から右へ、判断が増えた"
                        : "The improvement is visible left to right"}
                </h2>
                <p>
                    {ja
                        ? "Part 1–2の初期実験では、入力と出力の間にカメラ、人物のスケール、空間のルールが足りませんでした。Part 2の試行進化は、その差分を時間の中で見せます。"
                        : "In the early Part 1–2 experiments, the gap between input and output left too much room for camera drift, actor-scale drift, and invented geography. Part 2’s attempt evolution shows that gap over time."}
                </p>
                <TestVideo
                    src={part2Media.evolution.video}
                    poster={part2Media.evolution.poster}
                    title={ja ? "Part 2の試行進化" : "Part 2 attempt evolution"}
                    fallback={
                        ja
                            ? "初期実験の比較映像を読み込めませんでした。"
                            : "The early-experiment comparison could not be loaded."
                    }
                />
                <div className="blog-rich-pair">
                    <Figure
                        src={part1Media.originalInputs[0].src}
                        alt={ja ? "Part 1の初期入力" : "Part 1 early input"}
                        caption={
                            ja ? "Part 1 / 初期入力" : "Part 1 / early input"
                        }
                    />
                    <Figure
                        src={part1Media.refinedInputs[0].src}
                        alt={
                            ja
                                ? "Part 1の整理された入力"
                                : "Part 1 refined input"
                        }
                        caption={
                            ja
                                ? "Part 1 / 整理された入力"
                                : "Part 1 / refined input"
                        }
                    />
                </div>
                <p className="blog-media-caption">
                    {ja
                        ? "ここでのSH14–19は初期実験ではなく、現在の方法の中での最初の試行 → 最終版です。"
                        : "The SH14–19 sheet below is not the earliest experiment; it is first attempt → final within the current method."}
                </p>
                <Figure
                    src={media.comparisons.earlyToFinal}
                    alt={
                        ja
                            ? "現在の方法におけるSH14からSH19の最初の試行と最終版"
                            : "Current-method first-attempt and final comparisons across SH14 to SH19"
                    }
                    caption={
                        ja
                            ? "現在の方法 / 最初の試行 → 最終版"
                            : "Current method / first attempt → final"
                    }
                />
            </section>
            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="keyframe-heading"
            >
                <div className="blog-rich-section-label">
                    C / {ja ? "ラフからキーへ" : "ROUGH TO KEYFRAME"}
                </div>
                <h2 id="keyframe-heading">
                    {ja
                        ? "ラフを捨てずに、撮影可能なキーへ"
                        : "Productionize the rough without losing its direction"}
                </h2>
                <p>
                    {ja
                        ? "Scene 2 Sequence 2では、SH01、SH02 A/B、SH03、SH04、SH05、SH06 A/B/C、SH07、SH08、SH09を一つの比較シートにしました。ラフがカメラと芝居を持ち、キーが空間と照明を検査可能にします。"
                        : "For Scene 2 Sequence 2, SH01, SH02 A/B, SH03, SH04, SH05, SH06 A/B/C, SH07, SH08, and SH09 are kept in one comparison sheet. The rough owns camera and acting; the keyframe makes space and light inspectable."}
                </p>
                <Figure
                    src={media.comparisons.roughToKeyframe}
                    alt={
                        ja
                            ? "Scene 2 Sequence 2のラフとプロダクション化キーの比較一覧"
                            : "Scene 2 Sequence 2 rough-to-productionized keyframe comparison sheet"
                    }
                    caption={
                        ja
                            ? "全12出力。ラフ → プロダクション化キー。"
                            : "The complete twelve-output set. Rough → productionized keyframe."
                    }
                />
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
                        ? "ラフ → 空間キー → モーション。v1をそのまま採用せず、演出側のQAを次の反復へ戻す。"
                        : "Rough → spatial keyframe → motion. v1 is not accepted by default; animation-direction QA returns to the next iteration."}
                </p>
            </section>
            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="plates-heading"
            >
                <div className="blog-rich-section-label">
                    D / {ja ? "環境プレート" : "ENVIRONMENT PLATES"}
                </div>
                <h2 id="plates-heading">
                    {ja
                        ? "部屋を一枚の絵で終わらせない"
                        : "A room is more than one beautiful image"}
                </h2>
                <p>
                    {ja
                        ? "スタジオの夜は、ヒーロー参照を空間の権威として、採用したカメラプレートへ展開しました。SH02とSH03は制限付きの角度、SH04は全室の基準です。却下したPlate 01は、カノンとして使っていません。"
                        : "For the studio at night, the hero reference becomes room authority and the accepted camera plates extend it. SH02 and SH03 are limited angles; SH04 is the whole-room anchor. Rejected Plate 01 is not treated as canon."}
                </p>
                <Figure
                    src={media.comparisons.plates}
                    alt={
                        ja
                            ? "スタジオ夜の参照と採用プレートの比較"
                            : "Studio night reference and accepted plate comparison"
                    }
                    caption={
                        ja
                            ? "参照 → 採用プレート。机、窓、描画壁、通路の関係をカット間で固定する。"
                            : "Reference → accepted plates. Desk, windows, drawing wall, and walking lane stay legible across cuts."
                    }
                />
            </section>
            <section className="blog-study-section" id="experiment-outputs">
                <header className="blog-section-heading">
                    <p>00 / {ja ? "実験出力" : "Experiment outputs"}</p>
                    <h2>
                        {ja
                            ? "出力の背後にある判断"
                            : "The decisions behind the output"}
                    </h2>
                </header>
                <div className="blog-body blog-transfer-copy">
                    <p>
                        {ja
                            ? "準備中のカバー映像は、完成した脚本のフリップブック世界の実験です。水彩の空間、反射する男性の姿、ノゾミの落下を、一つの短い流れに置きました。"
                            : "The prepared cover video is the completed screenplay’s flipbook-world experiment: watercolor space, reflected male figures, and Nozomi’s fall placed in one short flow."}
                    </p>
                    <p>
                        {ja
                            ? "AIツールが増えたからこそ、ペーシング、書くこと、描くことの基礎が以前より重要です。候補を選ぶ力と、直すべき場所を説明する力は自動化されません。"
                            : "The more AI tools we use, the more the fundamentals of pacing, writing, and drawing matter. Selecting a candidate and explaining what must be fixed are not automated."}
                    </p>
                    <p>
                        {ja
                            ? "Scene 1 Shot 1の3Dモーション検証でも、v1からv3までを残し、アニメーションディレクターのQAを次の指示へ戻しました。動きを生成して終わりではなく、何が不自然で、どの判断を固定するかを言葉にする工程です。"
                            : "The Scene 1 Shot 1 3D-motion experiment kept v1 through v3, then fed animation-director QA back into the next direction. Generating motion is not the end. We have to name what feels wrong and which decision must stay fixed."}
                    </p>
                    <p>
                        {ja
                            ? "脚本はPart 3の13シーン案から、現在の6シーン、4分45秒から5分の構成へ縮まりました。ペースはプロバイダーの尺ではなく、編集上の因果、ショットのホールド、台詞の呼吸でつくります。描くことは生成前にカメラ、パース、ポーズ、芝居を発見します。"
                            : "The screenplay contracted from Part 3’s 13-scene plan to the current six-scene, 4:45–5:00 version. Pacing is editorial causality, shot holds, and the breath around dialogue, not provider duration. Drawing catches camera, perspective, pose, and acting before generation."}
                    </p>
                </div>
            </section>
            <section className="blog-study-section" id="screenplay-complete">
                <header className="blog-section-heading">
                    <p>01 / {ja ? "脚本" : "Screenplay"}</p>
                    <h2>
                        {ja ? "脚本を最後まで書く" : "Finish the screenplay"}
                    </h2>
                </header>
                <div className="blog-body blog-transfer-copy">
                    <p>
                        {ja
                            ? "脚本は完成しました。いま必要なのは、次の出力を待つことではなく、全編のペース、ショットの役割、台詞の間、感情の転換を一本の映画として確認することです。"
                            : "The screenplay is complete. What we need now is not another output. We need to check the pace, shot purpose, pauses in dialogue, and emotional turns as one film."}
                    </p>
                    <p>
                        {ja
                            ? "AIツールが増えても、実際のペーシング、書くこと、描くことの基礎は軽くなりません。むしろ、候補を見て良し悪しを判断し、直すために、これまで以上に必要です。"
                            : "Actual pacing, writing, and drawing fundamentals matter more than ever despite all the AI tools. They are what let us judge a candidate, find the problem, and direct the correction."}
                    </p>
                </div>
            </section>
            <section className="blog-study-section blog-notes" id="finish-line">
                <header className="blog-section-heading">
                    <p>02 / {ja ? "今月の締切" : "This month"}</p>
                    <h2>{ja ? "8月31日に向けて" : "Toward August 31"}</h2>
                </header>
                <div className="blog-body blog-transfer-copy">
                    <p>
                        {ja
                            ? "週末を中心に、平日の夜にできる範囲で、脚本から絵コンテ、ショット、編集、音までを一つの判断系として閉じます。二人の小さなチームで、完成を優先します。8月31日までに映画を完成させます。"
                            : "We will close the chain from screenplay to boards, shots, edit, and sound as one decision system, centered on weekends and whatever weeknights remain after our day jobs. With two people, we are prioritizing completion and will finish the film by August 31."}
                    </p>
                    <p>
                        {ja
                            ? "この制作では、AIツールを使うほど、映画を終えるための基礎を自分たちで確認する必要がありました。"
                            : "In this production, using more AI tools has made it necessary to check the fundamentals ourselves in order to finish the film."}
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
