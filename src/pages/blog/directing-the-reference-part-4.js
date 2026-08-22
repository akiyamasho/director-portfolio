import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHero from "../../components/blog/post-hero";
import { DirectingReferenceSeriesNavigation } from "../../components/blog/article-navigation";
import SEO from "../../components/seo";
import { getPost } from "../../blog/posts";

const EnglishArticle = ({ locale }) => {
    const ja = locale === "ja";
    return (
        <div className="blog-notebook blog-part3 blog-part4">
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
