import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHero from "../../components/blog/post-hero";
import TestVideo from "../../components/blog/test-video";
import { TegakiSeriesNavigation } from "../../components/blog/article-navigation";
import SEO from "../../components/seo";
import { getPost } from "../../blog/posts";

const Figure = ({ src, alt, caption }) => (
    <figure className="blog-rich-figure">
        <img src={src} alt={alt} loading="lazy" />
        <figcaption>{caption}</figcaption>
    </figure>
);

const EnglishArticle = ({ locale, media }) => {
    const ja = locale === "ja";
    return (
        <div className="blog-notebook blog-rich-part4">
            <div className="blog-body blog-opening">
                <p className="blog-lead">
                    {ja
                        ? "9月6日から13日まで、TEGAKIの画面を手動で仕上げ、次の音のためのSunoの設計を組み上げました。画面完成の書き出しはできましたが、映画の最終ロックでも完成したスコアでもありません。"
                        : "From September 6 to 13, I manually finished the TEGAKI screens and built the Suno setup for the next score pass. The screen-completion export exists, but it is not a final lock or a finished score."}
                </p>
                <p>
                    {ja
                        ? "9月13日の画面完成書き出しはH.264/AAC、1280×720、24fps、613.083秒です。9月6日のマスターは602.604秒、14,461フレームでした。今回の書き出しは10.479秒長くなっています。"
                        : "The September 13 screen-completion export is H.264/AAC at 1280×720, 24 fps, and 613.083 seconds. The September 6 master was 602.604 seconds and 14,461 frames, making this export 10.479 seconds longer."}
                </p>
            </div>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="screens-heading"
            >
                <div className="blog-rich-section-label">
                    A / {ja ? "画面の手動仕上げ" : "MANUAL SCREEN FINISHING"}
                </div>
                <h2 id="screens-heading">
                    {ja
                        ? "読める状態を一つずつ戻す"
                        : "Restore readable screen states"}
                </h2>
                <p>
                    {ja
                        ? "画面のセットアップは、平面化した再利用可能なコンポーネント chat_simple、chat_special、chat_box、donation、donation_box を使います。二つの6秒ソースクリップ、1280x720版と630x720のクロップ版を基準に、Instagramのマーク、64プロフィールの観客グリッド、別管理のユーザー名、日英のチャット文を配置しました。ユーザー名や非公開メモの内容はここでは扱いません。"
                        : "The screen setup uses flattened reusable components named chat_simple, chat_special, chat_box, donation, and donation_box. It starts from two six-second source clips, one at 1280x720 and one cropped to 630x720, then places an Instagram mark, a 64-profile audience grid, separate usernames, and planned bilingual chat copy. Usernames and private note contents are not reproduced here."}
                </p>
                <Figure
                    src={media.screenSystem}
                    alt={
                        ja
                            ? "チャット、寄付、観客グリッドを含む画面セットアップの設計シート"
                            : "Screen setup sheet showing chat, donation, and audience-grid components"
                    }
                    caption={
                        ja
                            ? "画面システムの設計シート。再利用する部品と配置の基準を確認する。"
                            : "Screen-system setup sheet, used to check reusable components and placement."
                    }
                />
                <p>
                    {ja
                        ? "比較映像はラベルのない上下スタックです。上段は生成パス、下段は手動で修正したパスです。下段では空白になっていたノートPCとインターフェースが戻り、クリップ選択、チャットと寄付のオーバーレイ、ロゴの位置、観客の連続性を確認できます。比較映像自体にラベルはありません。すべてのピクセルを直したという意味ではなく、読解に必要な状態を優先して戻した結果です。"
                        : "The comparison video is an unlabeled stacked comparison. The generated pass is above and the manually fixed pass is below. In the lower pass, a blank laptop and interface are restored, alongside clip selection, chat and donation overlays, logo placement, and audience continuity. The source comparison itself contains no labels. This does not mean every pixel was fixed. It means the screen states needed for reading were restored first."}
                </p>
                <TestVideo
                    src={media.comparison.video}
                    poster={media.comparison.poster}
                    title={
                        ja
                            ? "生成画面と手動修正画面の比較"
                            : "Generated and manually fixed screen comparison"
                    }
                    fallback={
                        ja
                            ? "画面比較映像を読み込めませんでした。"
                            : "The screen comparison video could not be loaded."
                    }
                />
                <p className="blog-media-caption">
                    {ja
                        ? "上段が生成パス、下段が手動修正パス。元映像には比較ラベルがありません。"
                        : "Generated pass above, manually fixed pass below. The source video has no comparison labels."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="score-heading"
            >
                <div className="blog-rich-section-label">
                    B / {ja ? "スコア設計" : "SCORE SETUP"}
                </div>
                <h2 id="score-heading">
                    {ja
                        ? "実際のコンフォームに音を合わせる"
                        : "Build the score against the actual conform"}
                </h2>
                <p>
                    {ja
                        ? "以前のキュープランは合計526.4秒、パッケージは568.0秒でした。今回は602.604秒の実際のカットに合わせてコンフォームを組み直し、5つのキューを用意しました。2つはリタイムし、3つは書き直しています。5.041秒のタイトルカードと2.875秒のブラックアウトも新しく計上しました。"
                        : "The earlier cue plan totaled 526.4 seconds and the packages totaled 568.0 seconds. This conform is rebuilt against the actual 602.604-second cut, with five cues. Two were retimed and three were rewritten. The previously unaccounted-for 5.041-second title card and 2.875-second blackout are now included."}
                </p>
                <p>
                    {ja
                        ? "目標は、プリペアド・アップライトピアノ、弓で擦るガラスや金属、映画の物体世界から拾った音、調律したルームトーンです。知覚上は、ほとんど音楽として意識されない状態を目指します。全体を一つのD軸に置き、48、72、96のテンポ系を24fpsに合わせます。"
                        : "The target palette is prepared upright piano, bowed glass and metal, found sounds from the film's object world, and tuned room tone. The perceived score should mostly be absent. Everything shares a D axis, with tempo families of 48, 72, and 96 aligned to 24 fps."}
                </p>
                <p>
                    {ja
                        ? "Sunoでは、Instrumentalモードで、完全なアークではなく長い一つのハーモニック状態を生成します。除外スタイル欄を使い、アーティスト名や映画名は入れません。採用したステムはDAWでDへ移調し、画に合わせて組み立ててカットします。これは目標となるセットアップとブリーフであり、完成したスコアではありません。"
                        : "In Suno, the method is to generate long single harmonic states rather than full arcs, using Instrumental mode and the exclude-styles field. No artist or film names are entered. Accepted stems will be transposed to D in the DAW, then assembled and cut to picture. This is the target setup and brief, not a finished score."}
                </p>
            </section>

            <section className="blog-study-section blog-notes" id="next-step">
                <header className="blog-section-heading">
                    <p>C / {ja ? "次の作業" : "NEXT STEP"}</p>
                    <h2>
                        {ja
                            ? "状態を選び、画に戻す"
                            : "Select states and return to picture"}
                    </h2>
                </header>
                <div className="blog-body blog-transfer-copy">
                    <p>
                        {ja
                            ? "次は、ハーモニック状態を生成して選び、採用したステムを移調して確認し、コンフォームに合わせて組み立てます。その後、画面完成の書き出しをもう一度確認します。"
                            : "The next step is to generate and select states, transpose and check the accepted stems, assemble them against the conform, then recheck the screen-complete export."}
                    </p>
                </div>
            </section>
        </div>
    );
};

const JapaneseArticle = EnglishArticle;

const Post = ({ intl }) => {
    const locale = intl.locale || "en";
    const post = getPost("making-tegaki-part-4");
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
            <TegakiSeriesNavigation currentPart={4} locale={locale} />
            {locale === "ja" ? (
                <JapaneseArticle locale={locale} media={post.media} />
            ) : (
                <EnglishArticle locale={locale} media={post.media} />
            )}
        </BlogLayout>
    );
};

export default injectIntl(Post);
