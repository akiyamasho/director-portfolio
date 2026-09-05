import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHero from "../../components/blog/post-hero";
import { DirectingReferenceSeriesNavigation } from "../../components/blog/article-navigation";
import SEO from "../../components/seo";
import { getPost } from "../../blog/posts";
import TestVideo from "../../components/blog/test-video";
import { directingTheReferencePart5Media as media } from "../../blog/media";

const Figure = ({ src, alt, caption }) => (
    <figure className="blog-rich-figure">
        <img src={src} alt={alt} loading="lazy" />
        <figcaption>{caption}</figcaption>
    </figure>
);

const Test = ({ src, poster, title, fallback }) => (
    <TestVideo
        src={src}
        poster={poster}
        title={title}
        fallback={fallback}
        muted={false}
    />
);

const EnglishArticle = ({ locale }) => {
    const ja = locale === "ja";
    const scenes = ja
        ? [
              "ランニング・アニメーションのデモ（ペーシング 01:00／WIP 01:00）",
              "スタジオでのデジタル作画（ペーシング 02:40／WIP 02:20）",
              "ミアがノートPCを持ってくる場面（ペーシング 03:20／WIP 03:25）",
              "ライブ配信への反応（ペーシング 04:40／WIP 04:40）",
              "短編の編集（ペーシング 08:00／WIP 07:40）",
              "父のフリップブック（ペーシング 08:40／WIP 08:20）",
          ]
        : [
              "running-animation demo (pacing 01:00 / WIP 01:00)",
              "digital character drawing (pacing 02:40 / WIP 02:20)",
              "Mia brings in the laptop (pacing 03:20 / WIP 03:25)",
              "livestream reaction (pacing 04:40 / WIP 04:40)",
              "editing the short film (pacing 08:00 / WIP 07:40)",
              "the father's flipbook (pacing 08:40 / WIP 08:20)",
          ];
    return (
        <div className="blog-notebook blog-part5 blog-rich-part5">
            <div className="blog-body blog-opening">
                <p className="blog-lead">
                    {ja
                        ? "Part 4で掲げた8月31日の締切は、9月14日まで延長されました。9分29.0秒のペーシング・アニマティックと、9分02.8秒の字幕付き現行WIPが、いまの映画の二つの全長カットです。制作はまだWIPです。"
                        : "The August 31 deadline mentioned in Part 4 was extended to September 14. A 9:29.0 pacing animatic and a 9:02.8 subtitled current WIP are now the film's two full-length working cuts. The film is still a WIP."}
                </p>
                <p>
                    {ja
                        ? "この観察期間は8月29日から9月4日までの1週間です。ペーシングは9分29.0秒、現行WIPは9分02.8秒で、現行WIPのほうが26.2秒短い。ただし、短いこと自体が良いという意味ではありません。"
                        : "The observation window is August 29 to September 4, one week so far. The pacing cut is 9:29.0, and the current WIP is 9:02.8, which is 26.2 seconds shorter. That is an editorial fact, not proof that shorter is better."}
                </p>
            </div>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="cuts-heading"
            >
                <div className="blog-rich-section-label">
                    A / {ja ? "二つの全長カット" : "TWO FULL-LENGTH CUTS"}
                </div>
                <h2 id="cuts-heading">
                    {ja
                        ? "まず、二つのカットを並べる"
                        : "Start with the two cuts"}
                </h2>
                <p>
                    {ja
                        ? "字幕付きの現行WIPを先に置き、その後に新しく字幕を付けたペーシング・カットを置きます。両方とも66個のバイリンガル字幕キューを持ちます。ペーシング版の字幕は、このカットの音声とシーン境界に合わせてタイミングを引き直しました。"
                        : "The current WIP comes first, followed by the newly subtitled pacing cut. Both public videos carry 66 bilingual subtitle cues. The pacing subtitles were retimed against that cut's audio and scene boundaries."}
                </p>
                <Test
                    src={media.currentWip.video}
                    poster={media.currentWip.poster}
                    title={ja ? "字幕付き現行WIP" : "Subtitled current WIP"}
                    fallback={
                        ja
                            ? "現行WIPを読み込めませんでした。"
                            : "The current WIP could not be loaded."
                    }
                />
                <p className="blog-media-caption">
                    {ja ? "現行WIP、9分02.8秒。" : "Current WIP, 9:02.8."}
                </p>
                <Test
                    src={media.pacing.video}
                    poster={media.pacing.poster}
                    title={
                        ja
                            ? "字幕付きペーシング・アニマティック"
                            : "Newly subtitled pacing animatic"
                    }
                    fallback={
                        ja
                            ? "ペーシング・カットを読み込めませんでした。"
                            : "The pacing cut could not be loaded."
                    }
                />
                <p className="blog-media-caption">
                    {ja
                        ? "ペーシング・アニマティック、9分29.0秒。"
                        : "Pacing animatic, 9:29.0."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="notes-heading"
            >
                <div className="blog-rich-section-label">
                    B / {ja ? "時間を根拠にする" : "MAKE TIME ACCOUNTABLE"}
                </div>
                <h2 id="notes-heading">
                    {ja
                        ? "カットが制作ノートの基準になる"
                        : "Let the cut answer the notes"}
                </h2>
                <p>
                    {ja
                        ? "今回、カットそのものが制作ノートの基準になりました。絶対的なソース区間、カット境界、ショット尺、内部ビートを記録し、フレームで照合します。以前の文章をそのまま持ち越さないための、タイムコードを反映した制作ノートと映像の突き合わせです。"
                        : "The cut became the authority for the production notes. The new timing workflow records absolute source windows, cut boundaries, shot durations, and internal beats, then reconciles the prose against frames. It prevents stale notes from being carried forward."}
                </p>
                <div className="blog-comparison-table-wrap">
                    <table className="blog-comparison-table">
                        <caption>
                            {ja
                                ? "現在のノートとフレーム確認で見つかった具体例"
                                : "Concrete mismatches found by the current notes and frame check"}
                        </caption>
                        <thead>
                            <tr>
                                <th>{ja ? "ノート" : "Written note"}</th>
                                <th>
                                    {ja
                                        ? "フレームで確認したこと"
                                        : "Frame-backed result"}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {(ja
                                ? [
                                      [
                                          "ラップトップは閉じて書かれていた",
                                          "ボードでは開いていて暗い",
                                      ],
                                      [
                                          "3本のボトル",
                                          "1本のボトルと1個のグラス",
                                      ],
                                      [
                                          "タブレット／ラップトップの目線",
                                          "一続きのインターフェースへのプッシュイン",
                                      ],
                                      ["赤い注釈", "実際には緑"],
                                      [
                                          "男性ノゾミのインセット",
                                          "ボードに書かれていなかった",
                                      ],
                                  ]
                                : [
                                      [
                                          "Laptop written closed",
                                          "Boarded open and dark",
                                      ],
                                      [
                                          "Three bottles",
                                          "One bottle and one glass",
                                      ],
                                      [
                                          "Tablet/laptop eye-flicks",
                                          "One continuous interface push-in",
                                      ],
                                      ["Red annotations", "Actually green"],
                                      [
                                          "Written male-Nozomi inset",
                                          "Not boarded",
                                      ],
                                  ]
                            ).map(([note, result]) => (
                                <tr key={note}>
                                    <td>{note}</td>
                                    <td>{result}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p>
                    {ja
                        ? "Scene 5では、17カットのうち14個の不一致が見つかりました。これは短縮の評価ではなく、置き換えるショットと直すべき判断を明確にするための数です。"
                        : "In Scene 5, the pass found fourteen mismatches across seventeen cuts. The number does not rate a shorter cut. It identifies which shots and decisions still need replacement or correction."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="voices-heading"
            >
                <div className="blog-rich-section-label">
                    C / {ja ? "声を先に置く" : "PLACE THE VOICES"}
                </div>
                <h2 id="voices-heading">
                    {ja
                        ? "台詞の呼吸を編集へ渡す"
                        : "Let delivery shape the edit"}
                </h2>
                <p>
                    {ja
                        ? "固定したElevenLabs v3の日本語キャラクター音声を、台詞ごとにフラットなショット単位ファイルとして生成しました。Scene 4には複数のA/B/C/Dパフォーマンス候補があり、ノゾミ、リカ、佐藤のテイクも支えています。完成画を待たず、ペーシング編集に声を置いて、息と台詞の運びがカットを形づくるようにしました。"
                        : "Fixed ElevenLabs v3 Japanese character voices were generated per line into flat shot-level files. Scene 4 has multiple A/B/C/D performance candidates, with supporting Nozomi, Rika, and Sato takes. The voices were placed in the pacing edit so breath and delivery could shape the cut before finished picture."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="experiments-heading"
            >
                <div className="blog-rich-section-label">
                    D / {ja ? "反復のログ" : "A FOCUSED PRODUCTION LOG"}
                </div>
                <h2 id="experiments-heading">
                    {ja
                        ? "一週間の反復で変わったこと"
                        : "What changed across one week"}
                </h2>
                <p>
                    {ja
                        ? "8月29日から9月3日の最終ペーシング・コミットまで、ペーシングを繰り返し改訂しました。Scene 1のタイトル・コーダを更新し、Scene 4のコンタミネーションとキャンセルの制作プランを整理しました。キャンセルは合計20.0秒の6つの外景ショットとして再構成し、登録済みのロケーション・ハンドルを使い、却下したScene 4 SH01のプリフライトを記録しました。配信チャットのインサートとScene 5のペース付きショット・プランも更新しました。"
                        : "Pacing was revised repeatedly from August 29 through the final pacing commit on September 3. The Scene 1 title coda was updated, and the Scene 4 contamination and cancellation plans were clarified. Cancellation was rebuilt as six exterior shots totaling 20.0 seconds. Registered location handles were used, a rejected Scene 4 SH01 preflight was archived, the livestream chat insert was updated, and the Scene 5 paced shot plans were revised."}
                </p>
                <p>
                    {ja
                        ? "以下では、二つのカットから同じ芝居の瞬間を選び、前後の別ショットではなく画面設計の差を比較します。"
                        : "Each pair below holds on the same narrative beat in both cuts, so the comparison is between staging decisions rather than adjacent moments."}
                </p>
                <div className="blog-comparison-grid">
                    {media.comparisons.map((src, index) => (
                        <Figure
                            key={src}
                            src={src}
                            alt={
                                ja
                                    ? `Pacingと現行WIPのScene ${index + 1}、${scenes[index]}の比較`
                                    : `Side-by-side comparison of Scene ${index + 1}, ${scenes[index]}`
                            }
                            caption={
                                ja
                                    ? `Scene ${index + 1}。${scenes[index]}`
                                    : `Scene ${index + 1}. ${scenes[index]}`
                            }
                        />
                    ))}
                </div>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="scene-six-heading"
            >
                <div className="blog-rich-section-label">
                    E / {ja ? "失敗から修正へ" : "FROM FAILURE TO CORRECTION"}
                </div>
                <h2 id="scene-six-heading">
                    {ja
                        ? "禁止する言葉を減らす"
                        : "Name the approved references"}
                </h2>
                <p>
                    {ja
                        ? "Scene 6では、画面ブロックを13秒から8秒へ、正面のノゾミのショットを削り、シーケンスを76秒から67秒へ組み直しました。4回の生成では、除外リストに書いた正確な不要要素が戻ってきました。そこで、禁止語を増やすのではなく、肯定形のプロンプトと、再説明せずに参照エレメントを名前で指定する方法へ切り替えました。"
                        : "In Scene 6, the screen block went from 13 seconds to 8, the frontal Nozomi shot was cut, and the sequence moved from 76 seconds to 67. Four generations failed because exclusion lists named the exact unwanted content that returned. The response was positive-only prompt wording and naming reference Elements without redescribing them."}
                </p>
            </section>

            <section className="blog-study-section blog-notes" id="next-step">
                <header className="blog-section-heading">
                    <p>F / {ja ? "次の作業" : "NEXT STEP"}</p>
                    <h2>
                        {ja
                            ? "残る差分を閉じる"
                            : "Close the remaining differences"}
                    </h2>
                </header>
                <div className="blog-body blog-transfer-copy">
                    <p>
                        {ja
                            ? "次は、ペーシングと現行WIPの残る差分を解消し、ショットの置き換えを終え、最終編集と音へ進みます。今回のノートは、映画を短く見せるためではなく、次に何を直すかをフレーム単位で決めるために使います。"
                            : "The next step is to resolve the remaining differences between the pacing cut and the WIP, finish shot replacement, and move into final edit and sound. These notes are for deciding what to fix at frame level, not for making the film shorter by default."}
                    </p>
                </div>
            </section>
        </div>
    );
};

const JapaneseArticle = EnglishArticle;

const Post = ({ intl }) => {
    const locale = intl.locale || "en";
    const post = getPost("directing-the-reference-part-5");
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
                currentPart={5}
                locale={locale}
            />
            <EnglishArticle locale={locale} />
        </BlogLayout>
    );
};

export default injectIntl(Post);
