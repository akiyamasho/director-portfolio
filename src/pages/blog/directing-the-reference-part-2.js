import React, { useState } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHeader from "../../components/blog/post-header";
import TestVideo from "../../components/blog/test-video";
import { DirectingReferenceSeriesNavigation } from "../../components/blog/article-navigation";
import SEO from "../../components/seo";
import { getPost } from "../../blog/posts";

const PreparedImage = ({
    src,
    alt,
    fallback,
    className,
    loading = "lazy",
    fetchPriority,
}) => {
    const [failed, setFailed] = useState(false);

    if (!src || failed) {
        return (
            <div
                className={`${className || ""} blog-media-fallback`}
                role="status"
            >
                {fallback}
            </div>
        );
    }

    return (
        <img
            className={className}
            src={src}
            alt={alt}
            loading={loading}
            fetchPriority={fetchPriority}
            onError={() => setFailed(true)}
        />
    );
};

const PreparedVideo = ({ media, title, fallback, className }) =>
    media.video && media.poster ? (
        <div className={className}>
            <TestVideo
                src={media.video}
                poster={media.poster}
                title={title}
                fallback={fallback}
            />
        </div>
    ) : (
        <div className={`${className || ""} blog-media-fallback`} role="status">
            {fallback}
        </div>
    );

const Facts = ({ locale }) => {
    const facts =
        locale === "ja"
            ? [
                  ["動きラフ", "4.75秒 / 24 fps"],
                  ["出力", "5.041667秒"],
                  ["手動キー", "8枚"],
                  ["最終アンカー", "3枚 + FX"],
                  ["保存済み出力", "5本"],
              ]
            : [
                  ["Motion rough", "4.75 seconds / 24 fps"],
                  ["Outputs", "5.041667 seconds"],
                  ["Manual keys", "8 frames"],
                  ["Final anchors", "3 frames + FX"],
                  ["Retained outputs", "5 videos"],
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

const OpeningComparison = ({ media, locale }) => (
    <div className="blog-part2-opening-comparison">
        <div className="blog-stack-key" aria-hidden="true">
            <span>
                {locale === "ja"
                    ? "上 / 手描きの動きラフ"
                    : "Top / hand-drawn motion rough"}
            </span>
            <span>
                {locale === "ja" ? "下 / Attempt 7" : "Bottom / Attempt 7"}
            </span>
        </div>
        <PreparedVideo
            className="blog-part2-opening-video"
            media={media.comparison}
            title={
                locale === "ja"
                    ? "手描きの動きラフとAttempt 7を上下に同期した比較"
                    : "Top-to-bottom synchronized comparison of the hand-drawn motion rough and Attempt 7"
            }
            fallback={
                locale === "ja"
                    ? "手描きラフとAttempt 7の上下比較映像を読み込めませんでした。"
                    : "The top-to-bottom comparison of the rough and Attempt 7 could not be loaded."
            }
        />
        <p className="blog-media-caption">
            {locale === "ja"
                ? "上段の手描きラフが時間、カメラ、芝居を担当し、下段のAttempt 7が仕上げ、キャラクター、エフェクトを担当します。"
                : "The hand-drawn rough above controls timing, camera, and acting. Attempt 7 below supplies the finished character, effects, and rendering."}
        </p>
    </div>
);

const AttemptVideoGallery = ({ media, locale }) => {
    const copy =
        locale === "ja"
            ? [
                  [
                      "2",
                      "静止画9枚",
                      "余分な分身と遅いカットが残った初期映像。",
                  ],
                  [
                      "4",
                      "仕上げキー8枚",
                      "構図は安定しましたが、キー間の動きが止まりました。",
                  ],
                  [
                      "5",
                      "ショット冒頭3枚",
                      "歩行、髪、衣装、粒子の軌道が滑らかになりました。",
                  ],
                  [
                      "6",
                      "FX資料を追加",
                      "葉と桜の色、魔法表現、ガラスの連続性が改善しました。",
                  ],
                  [
                      "7",
                      "作画原則を追加",
                      "予備動作、解放、オーバーシュート、余韻を時間指示へ加えた最終パス。",
                  ],
              ]
            : [
                  [
                      "2",
                      "Nine still references",
                      "The early video retained an extra clone and a late cut.",
                  ],
                  [
                      "4",
                      "Eight finished keys",
                      "Composition held, while motion stalled between anchors.",
                  ],
                  [
                      "5",
                      "Three shot openings",
                      "Walking, hair, cloth, and particle paths became smoother.",
                  ],
                  [
                      "6",
                      "Added the FX plate",
                      "Foliage color, magical layering, and glass continuity improved.",
                  ],
                  [
                      "7",
                      "Added animation mechanics",
                      "The final pass timed anticipation, release, overshoot, and follow-through.",
                  ],
              ];

    return (
        <div className="blog-attempt-video-grid">
            {copy.map(([attempt, input, outcome]) => (
                <article className="blog-attempt-video-card" key={attempt}>
                    <header>
                        <h3>Attempt {attempt}</h3>
                        <span>{input}</span>
                    </header>
                    <PreparedVideo
                        className="blog-attempt-video"
                        media={media.attempts[attempt]}
                        title={`Attempt ${attempt}`}
                        fallback={
                            locale === "ja"
                                ? `Attempt ${attempt}の映像を読み込めませんでした。`
                                : `Attempt ${attempt} could not be loaded.`
                        }
                    />
                    <p>{outcome}</p>
                </article>
            ))}
        </div>
    );
};

const AttemptTable = ({ locale }) => {
    const rows =
        locale === "ja"
            ? [
                  [
                      "1",
                      "初期キー7枚",
                      "映像なし",
                      "最初の画面設計。誤った消失と配置が残りました。",
                  ],
                  [
                      "2",
                      "ラフ + 静止画9枚",
                      "5,483字",
                      "主役は残りましたが、余分な分身とカット時刻のずれが発生しました。",
                  ],
                  [
                      "4",
                      "ラフ + 仕上げキー8枚",
                      "3,418字",
                      "構図は安定しましたが、キー間で動きが止まりました。",
                  ],
                  [
                      "5",
                      "ラフ + 各ショット冒頭3枚",
                      "3,285字",
                      "歩行、髪、衣装、粒子の軌道が滑らかになりました。",
                  ],
                  [
                      "6",
                      "5の構成 + FX資料",
                      "3,431字",
                      "葉と花びらの色、魔法表現、ガラスの質感が改善しました。",
                  ],
                  [
                      "7",
                      "6の構成 + 作画原則",
                      "3,300字",
                      "予備動作、オーバーシュート、落下する花びら、手元で組み上がるノートを明記しました。",
                  ],
              ]
            : [
                  [
                      "1",
                      "Seven early keys",
                      "No video",
                      "The first visual pass retained incorrect dissolution and staging.",
                  ],
                  [
                      "2",
                      "Rough + nine stills",
                      "5,483 chars",
                      "The lead remained intact, but an extra clone and late cut remained.",
                  ],
                  [
                      "4",
                      "Rough + eight finished keys",
                      "3,418 chars",
                      "Composition held while motion stalled between anchors.",
                  ],
                  [
                      "5",
                      "Rough + three shot openings",
                      "3,285 chars",
                      "Walking, hair, cloth, and particle paths became smoother.",
                  ],
                  [
                      "6",
                      "Pass 5 + FX plate",
                      "3,431 chars",
                      "Foliage color, magic, glass, and table continuity improved.",
                  ],
                  [
                      "7",
                      "Pass 6 + animation principles",
                      "3,300 chars",
                      "The prompt specified anticipation, overshoot, falling petals, and notebook assembly over the palm.",
                  ],
              ];

    return (
        <div className="blog-body blog-attempt-table">
            <table>
                <thead>
                    <tr>
                        <th>{locale === "ja" ? "試行" : "Pass"}</th>
                        <th>{locale === "ja" ? "入力" : "Inputs"}</th>
                        <th>{locale === "ja" ? "プロンプト" : "Prompt"}</th>
                        <th>
                            {locale === "ja"
                                ? "確認できたこと"
                                : "Observed result"}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row[0]}>
                            {row.map((cell, index) =>
                                index === 0 ? (
                                    <th scope="row" key={cell}>
                                        {cell}
                                    </th>
                                ) : (
                                    <td key={cell}>{cell}</td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const EnglishArticle = ({ media }) => (
    <div className="blog-notebook">
        <Facts locale="en" />
        <div className="blog-body blog-opening">
            <p className="blog-lead">
                We did not begin this five-second shot by asking a model to find
                the scene. We drew the performance, chose the important frames
                ourselves, and wrote the direction against seconds and
                milliseconds before generating anything.
            </p>
            <p>
                The shot moves through three angles. Band equipment and two
                doubles dissolve into green and brown leaves and pale sakura.
                The material gathers into a gray notebook above the woman’s
                hand. A hard cut then reveals a man behind cracked glass as the
                camera moves toward him. The work recorded here is about making
                that staging readable while preserving continuous animation.
            </p>
        </div>

        <OpeningComparison media={media} locale="en" />

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>01 / Manual direction</p>
                <h2>Choose the instants first</h2>
                <span>
                    Eight frames were selected by hand before they were rendered
                    as production images.
                </span>
            </header>
            <div className="blog-body blog-transfer-copy">
                <p>
                    On paper, we marked the frames that had to survive the
                    translation from rough motion to finished drawing. The list
                    became 01a through 03c. The timing document then fixed them
                    at 00:00.000, 00:01.014, 00:01.015, 00:02.002, 00:03.003,
                    00:03.004, 00:03.028, and 00:04.023.
                </p>
                <p>
                    The notes described what happened between those instants:
                    camera movement, walking direction, which clone dissolved
                    first, how far the notebook had formed, where the glass
                    ended on the floor, and how the foreground tables changed
                    scale during the push-in. The rough supplied pose and
                    blocking. The production pass supplied design, anatomy,
                    materials, light, and finish.
                </p>
            </div>
            <div className="blog-comparison-key" aria-hidden="true">
                <span>Left / manually selected rough</span>
                <span>Right / productionized frame</span>
            </div>
            <PreparedImage
                className="blog-part2-tall-image"
                src={media.manualKeys}
                alt="Eight rows comparing manually selected rough keyframes with their productionized anime frames"
                fallback="The manual-keyframe comparison is prepared and awaiting public-media approval."
            />
            <p className="blog-media-caption">
                All eight candidates were finished so that camera, staging, and
                continuity could be reviewed before deciding which images to
                upload.
            </p>

            <div className="blog-input-heading">
                <h3>Attempt 1 / early keyframe pass</h3>
                <span>Seven frames / no retained video</span>
            </div>
            <PreparedImage
                className="blog-part2-study-image"
                src={media.attempt1}
                alt="Seven early Attempt 1 anime keyframes arranged chronologically"
                fallback="The Attempt 1 keyframe sheet is prepared and awaiting public-media approval."
            />
            <p className="blog-media-caption">
                Attempt 1 remains useful as an input record. It exposed wrong
                dissolution targets, an unwanted wall position, and a weak final
                pose before the video workflow was locked.
            </p>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>02 / Reference authority</p>
                <h2>Productionize more than you upload</h2>
                <span>
                    The strongest output used only the first finished frame of
                    each shot.
                </span>
            </header>
            <div className="blog-body blog-transfer-copy">
                <p>
                    Attempt 4 uploaded all eight productionized frames. The room
                    and compositions became clear, but the video began to move
                    from still to still. Hair held its shape. Dissolution read
                    as a set of percentages. The finished keyframes were useful
                    for direction and review, yet too many of them became timing
                    constraints.
                </p>
                <p>
                    Attempt 5 kept the same detailed direction and canonical
                    character designs, then reduced the visual anchors to 01a,
                    02a, and 03a. These were the first frames after each cut.
                    The rough video became the sole authority for timing,
                    camera, paths, weight transfer, and continuous acting. The
                    three images fixed only how each shot looked when it began.
                </p>
                <p>
                    Attempts 6 and 7 added one effects-only plate. It controlled
                    the color and material language of the dissolution without
                    supplying another character pose. The final package was a
                    motion rough, one cast board, three shot-opening frames, and
                    one FX plate.
                </p>
            </div>
            <PreparedImage
                className="blog-part2-study-image"
                src={media.finalReferences}
                alt="Attempt 7 reference set showing the cast board, three shot-opening frames, and a sakura and leaf effects plate"
                fallback="The final reference-set image is prepared and awaiting public-media approval."
            />
            <p className="blog-media-caption">
                Character designs fixed identity and wardrobe. The three first
                frames fixed production appearance. The FX plate fixed colored
                foliage and magical layering. None of the stills controlled the
                in-between motion.
            </p>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>03 / Every retained output</p>
                <h2>Watch the authority shift</h2>
                <span>
                    Five generated outputs and the rough play on one timeline.
                </span>
            </header>
            <PreparedVideo
                className="blog-part2-wide-video"
                media={media.evolution}
                title="Synchronized grid comparing Attempts 2, 4, 5, 6, 7 and the motion rough"
                fallback="The synchronized attempt grid is prepared and awaiting public-media approval."
            />
            <p className="blog-media-caption">
                Attempt 2 retained nine still references. Attempt 4 used eight
                productionized semantic keys. Attempt 5 reduced them to three
                shot openings. Attempt 6 added an effects plate. Attempt 7 added
                explicit animation mechanics to the timed direction.
            </p>
            <AttemptVideoGallery media={media} locale="en" />
            <AttemptTable locale="en" />
            <div className="blog-body blog-transfer-copy">
                <h3>The prompts are documented as production changes.</h3>
                <p>
                    The full prompt files remain in the private production
                    archive. The table records their exact retained lengths,
                    reference packages, correction goals, and observed outputs.
                    From Attempt 4 onward, each prompt stayed below the
                    3,500-character field limit.
                </p>
                <p>
                    Detail did not mean adding more plot description. It meant
                    assigning authority, naming exact cut times, stating what
                    must remain still, defining where particles originate, and
                    describing drawable mechanics such as anticipation,
                    explosive spacing, overshoot, drag, gravity, and settle.
                </p>
            </div>
        </section>

        <section className="blog-study-section blog-notes">
            <header className="blog-section-heading">
                <p>04 / Working rule</p>
                <h2>The best input package</h2>
            </header>
            <ol>
                <li>
                    <span>01</span>
                    <div>
                        <h3>Direct the rough before generating.</h3>
                        <p>
                            Draw the performance, choose semantic instants by
                            hand, and write the action against the rough’s exact
                            clock.
                        </p>
                    </div>
                </li>
                <li>
                    <span>02</span>
                    <div>
                        <h3>Use canonical character designs.</h3>
                        <p>
                            Identity, proportions, hair, wardrobe, and
                            accessories need one stable authority across every
                            shot.
                        </p>
                    </div>
                </li>
                <li>
                    <span>03</span>
                    <div>
                        <h3>
                            Productionize every candidate, then upload less.
                        </h3>
                        <p>
                            Review all eight finished keys, but give the motion
                            model only the first production frame of each shot.
                        </p>
                    </div>
                </li>
                <li>
                    <span>04</span>
                    <div>
                        <h3>Separate motion, identity, appearance, and FX.</h3>
                        <p>
                            The rough moves. Character sheets identify. Opening
                            keys establish the shot. An effects plate controls
                            material and color.
                        </p>
                    </div>
                </li>
                <li>
                    <span>05</span>
                    <div>
                        <h3>Write animation principles as visible actions.</h3>
                        <p>
                            A brief hold, inward compression, sharp release,
                            overshoot, falling flurry, hair drag, and cloth
                            recoil are instructions that can be drawn and timed.
                        </p>
                    </div>
                </li>
            </ol>
            <div className="blog-next-pass">
                <span>Next production pass</span>
                <p>
                    Keep the Attempt 7 authority split. Concentrate the next
                    correction on direct contact between the equipment and its
                    particle breakup, while removing the remaining dark
                    transitional specks.
                </p>
            </div>
            <div className="blog-body blog-transfer-copy">
                <p>
                    Production discussion continues in the 5 Requests Per Second{" "}
                    <a href="https://discord.gg/cWae4TfR">Discord</a>.
                </p>
            </div>
        </section>
    </div>
);

const JapaneseArticle = ({ media }) => (
    <div className="blog-notebook" lang="ja">
        <Facts locale="ja" />
        <div className="blog-body blog-opening">
            <p className="blog-lead">
                この5秒のカットでは、生成前に演出を決めています。動きのラフを描き、必要なフレームを人の手で選び、秒とミリ秒に合わせて指示を書きました。
            </p>
            <p>
                3つのアングルを通して、バンド機材と2人の分身が緑と茶色の葉、淡い桜の花びらへ変わります。粒子は女性の手元で灰色のノートを作り、カットが変わると、ひび割れたガラスの向こうに男性が現れます。今回の検証は、この画面設計を守りながら連続した動きを成立させるための記録です。
            </p>
        </div>

        <OpeningComparison media={media} locale="ja" />

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>01 / 手動の演出設計</p>
                <h2>先に瞬間を選ぶ</h2>
                <span>
                    8枚のフレームを手で選び、その後に仕上げ用の画へ変換しました。
                </span>
            </header>
            <div className="blog-body blog-transfer-copy">
                <p>
                    紙の上で、動きラフから仕上げへ移す際に残すべき瞬間を選びました。01aから03cまでの8枚です。タイミング表では、00:00.000、00:01.014、00:01.015、00:02.002、00:03.003、00:03.004、00:03.028、00:04.023に固定しました。
                </p>
                <p>
                    指示には、各時刻の間で起きることも書いています。カメラ移動、歩く方向、どちらの分身が先に消えるか、ノートがどこまで形成されるか、ガラスが床へ接する位置、前景のテーブルが寄りでどう拡大するか。ポーズとブロッキングはラフ、デザイン、解剖、素材、光、仕上げは制作キーが担当します。
                </p>
            </div>
            <div className="blog-comparison-key" aria-hidden="true">
                <span>左 / 手で選んだラフ</span>
                <span>右 / 仕上げたフレーム</span>
            </div>
            <PreparedImage
                className="blog-part2-tall-image"
                src={media.manualKeys}
                alt="手で選んだ8枚のラフキーフレームと、対応する仕上げアニメフレームの比較"
                fallback="手動キーの比較画像は準備済みで、公開メディアの承認待ちです。"
            />
            <p className="blog-media-caption">
                カメラ、配置、連続性を確認してからアップロード枚数を決めるため、候補8枚はすべて仕上げました。
            </p>

            <div className="blog-input-heading">
                <h3>Attempt 1 / 初期キーフレーム</h3>
                <span>7枚 / 保存映像なし</span>
            </div>
            <PreparedImage
                className="blog-part2-study-image"
                src={media.attempt1}
                alt="Attempt 1の初期アニメキーフレーム7枚を時系列に並べた画像"
                fallback="Attempt 1のキーフレーム画像は準備済みで、公開メディアの承認待ちです。"
            />
            <p className="blog-media-caption">
                Attempt
                1は入力資料として残しています。消える対象、壁の位置、最後のポーズの誤りを、この段階で確認できました。
            </p>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>02 / リファレンスの権限</p>
                <h2>多く仕上げ、少なく入力する</h2>
                <span>
                    最も良い結果では、各ショットの最初の仕上げフレームだけを使いました。
                </span>
            </header>
            <div className="blog-body blog-transfer-copy">
                <p>
                    Attempt
                    4では、8枚の仕上げキーをすべて入力しました。室内と構図は明確になりましたが、映像は静止画から静止画へ移るように見えます。髪の形が止まり、消失も段階的な割合として読めました。制作キーは演出確認には有効ですが、すべてを動きの拘束へ使うと多すぎます。
                </p>
                <p>
                    Attempt
                    5では、詳細な指示と正規のキャラクター設定を残し、視覚アンカーを01a、02a、03aの3枚へ減らしました。各カットの最初のフレームです。タイミング、カメラ、軌道、重心移動、連続した芝居は動きラフだけが担当し、3枚の画像は各ショットの開始時の見た目だけを決めます。
                </p>
                <p>
                    Attempt
                    6と7では、FX専用の画像を1枚加えました。新しいポーズを増やさず、消失の色と素材だけを指定します。最終構成は、動きラフ、キャスト設定1枚、各ショット冒頭3枚、FX資料1枚です。
                </p>
            </div>
            <PreparedImage
                className="blog-part2-study-image"
                src={media.finalReferences}
                alt="キャスト設定、各ショット冒頭3枚、桜と木の葉のFX資料からなるAttempt 7の入力セット"
                fallback="最終リファレンスセットは準備済みで、公開メディアの承認待ちです。"
            />
            <p className="blog-media-caption">
                キャラクター設定は同一性と衣装、3枚の冒頭キーは仕上げの見た目、FX資料は葉と花びらの色と魔法表現を担当します。中割りの動きは静止画へ任せません。
            </p>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>03 / 保存した全出力</p>
                <h2>権限の移動を見る</h2>
                <span>5本の生成結果と動きラフを同じ時間軸で再生します。</span>
            </header>
            <PreparedVideo
                className="blog-part2-wide-video"
                media={media.evolution}
                title="Attempt 2、4、5、6、7と動きラフを同期した比較"
                fallback="試行ごとの同期比較映像は準備済みで、公開メディアの承認待ちです。"
            />
            <p className="blog-media-caption">
                Attempt 2は静止画9枚、Attempt 4は仕上げた8枚の意味キー、Attempt
                5はショット冒頭3枚、Attempt 6はFX資料を追加し、Attempt
                7では作画の動作原則を時間指示へ加えました。
            </p>
            <AttemptVideoGallery media={media} locale="ja" />
            <AttemptTable locale="ja" />
            <div className="blog-body blog-transfer-copy">
                <h3>プロンプトは制作上の変更として記録します。</h3>
                <p>
                    全文は非公開の制作アーカイブに残しています。ここでは、保存した文字数、リファレンス構成、修正目的、確認できた結果を記録しました。Attempt
                    4以降は、3,500文字の入力上限内に収めています。
                </p>
                <p>
                    詳細さとは、物語の説明を増やすことではありません。各素材の権限、正確なカット時刻、動かしてはいけない身体、粒子の発生源、予備動作、急な加速、オーバーシュート、ドラッグ、重力、収束など、描いて時間へ置ける動作を書くことでした。
                </p>
            </div>
        </section>

        <section className="blog-study-section blog-notes">
            <header className="blog-section-heading">
                <p>04 / 制作ルール</p>
                <h2>最も良かった入力構成</h2>
            </header>
            <ol>
                <li>
                    <span>01</span>
                    <div>
                        <h3>生成前にラフを演出する。</h3>
                        <p>
                            芝居を描き、意味のある瞬間を手で選び、ラフの正確な時刻に合わせて動作を書きます。
                        </p>
                    </div>
                </li>
                <li>
                    <span>02</span>
                    <div>
                        <h3>正規のキャラクター設定を使う。</h3>
                        <p>
                            顔、比率、髪、衣装、アクセサリーに、全ショット共通の基準を与えます。
                        </p>
                    </div>
                </li>
                <li>
                    <span>03</span>
                    <div>
                        <h3>候補はすべて仕上げ、入力は減らす。</h3>
                        <p>
                            8枚の仕上げキーを確認した上で、動きのモデルには各ショット最初の1枚だけを渡します。
                        </p>
                    </div>
                </li>
                <li>
                    <span>04</span>
                    <div>
                        <h3>動き、同一性、仕上げ、FXを分ける。</h3>
                        <p>
                            ラフは動き、設定は同一性、冒頭キーは画面、FX資料は素材と色を担当します。
                        </p>
                    </div>
                </li>
                <li>
                    <span>05</span>
                    <div>
                        <h3>作画原則を見える動作として書く。</h3>
                        <p>
                            短い止め、内側への圧縮、急な解放、オーバーシュート、落下する花びら、髪の遅れ、衣装の反動を、描ける指示へします。
                        </p>
                    </div>
                </li>
            </ol>
            <div className="blog-next-pass">
                <span>次の制作パス</span>
                <p>
                    Attempt
                    7の権限分担を残します。次は、機材が粒子へ変わる接触を明確にし、残っている暗い中間粒子を取り除きます。
                </p>
            </div>
            <div className="blog-body blog-transfer-copy">
                <p>
                    制作についての対話は、5 Requests Per Secondの
                    <a href="https://discord.gg/cWae4TfR">Discord</a>
                    でも続けています。
                </p>
            </div>
        </section>
    </div>
);

const Post = ({ intl }) => {
    const locale = intl.locale || "en";
    const post = getPost("directing-the-reference-part-2");
    const content = post.translations[locale] || post.translations.en;
    const meta = [{ property: "og:type", content: "article" }];

    if (post.media.heroImage) {
        meta.push({ property: "og:image", content: post.media.heroImage });
    }

    return (
        <BlogLayout article>
            <SEO
                title={content.title}
                lang={locale}
                description={content.summary}
                meta={meta}
            />
            <section className="blog-feature-hero blog-feature-hero--article">
                <PreparedImage
                    className="blog-feature-hero-image"
                    src={post.media.heroImage}
                    alt={
                        locale === "ja"
                            ? "白い夢の空間を左に残し、桜と木の葉の中で右側に立つ彼女"
                            : "The woman framed on the right among sakura and leaves beside an open white dream space"
                    }
                    fallback={
                        locale === "ja"
                            ? "彼女のカバー画像を読み込めませんでした。"
                            : "The cover image could not be loaded."
                    }
                    loading="eager"
                    fetchPriority="high"
                />
                <div className="blog-feature-hero-shade" aria-hidden="true" />
                <div className="blog-feature-hero-copy">
                    <div className="blog-feature-eyebrow">
                        {locale === "ja"
                            ? "Seedance 2.0 ・ キーフレームと動きの検証"
                            : "Seedance 2.0 · Keyframe and motion study"}
                    </div>
                    <PostHeader post={post} locale={locale} />
                </div>
            </section>
            <DirectingReferenceSeriesNavigation
                currentPart={2}
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
