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
                        ? "『手描き』は完成・公開しました。英語字幕を映像に焼き込んだ公開版は、1280×720、H.264/AAC、24fps、10分26秒です。ここで、このシリーズを終えます。"
                        : "Tegaki is completed and released. The released version with English subtitles burned into the picture is 1280×720, H.264/AAC, 24 fps, and 10 minutes and 26 seconds. This is the last article in the series."}
                </p>
                <p>
                    {ja
                        ? "9月13日の画面と音の書き出しは10分13秒でした。そこからクレジットと字幕を含む公開版へ進み、9月14日に英語字幕付きの10分26秒の納品版を書き出しました。"
                        : "The September 13 screen and sound export was 10 minutes and 13 seconds. We carried that penultimate pass through the later credit and subtitle state, then exported the 10-minute, 26-second English-subtitled delivery on September 14."}
                </p>
                <p>
                    {ja
                        ? "完成・公開した英語字幕版をここで紹介します。字幕は映像に焼き込まれています。"
                        : "We are presenting the completed and released English-subtitled film here. The subtitles are burned into the picture."}
                </p>
            </div>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="final-film-heading"
            >
                <div className="blog-rich-section-label">
                    A /{" "}
                    {ja
                        ? "完成・公開した映画"
                        : "THE COMPLETED AND RELEASED FILM"}
                </div>
                <h2 id="final-film-heading">
                    {ja ? "恐れを一本の映画にする" : "Turning fear into a film"}
                </h2>
                <TestVideo
                    src={media.finalFilm.video}
                    poster={media.finalFilm.poster}
                    title={
                        ja
                            ? "英語字幕付き公開版『手描き』"
                            : "Tegaki, completed and released English-subtitled film"
                    }
                    fallback={
                        ja
                            ? "英語字幕付き公開版の映像を読み込めませんでした。"
                            : "The completed and released English-subtitled film could not be loaded."
                    }
                />
                <p className="blog-media-caption">
                    {ja
                        ? "完成・公開版。1280×720、H.264/AAC、24fps、10分26秒。英語字幕は映像に焼き込まれています。"
                        : "Completed and released version. 1280×720, H.264/AAC, 24 fps, 10 minutes and 26 seconds. English subtitles are burned into the picture."}
                </p>
                <p>
                    {ja
                        ? "この映画の出発点には、技術への期待だけでなく恐れがありました。アニメ業界で原画マンと作画監督として大きなシリーズに関わっていた友人が、AIを使う仕事へ移ったあと、その業界で知っていた全員から排斥されたことを私たちは見ました。その痛みをノゾミとミアの間に置き、画面と芝居と時間のある映画へ変えました。"
                        : "Tegaki began with fear as well as hope about technology. A friend in the anime industry had worked as a genga artist and sakkan on major anime series. After moving toward work with AI, they were ostracized by everyone they knew in that community. We placed that pain between Nozomi and Mia, then gave it images, performance, and time."}
                </p>
                <p>
                    {ja ? (
                        <>
                            私たちの役割は明確でした。私たちが脚本・絵コンテ・演出・ラフプロンプトを担い、
                            <a
                                href="https://www.jsonmaths.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Json Cunananのウェブサイト"
                            >
                                Json Cunanan
                            </a>
                            がエージェントハーネス・ポストプロセス・自動化を担いました。企画・制作は二人で行いました。だから、手と機械を対立する二つの陣営として扱うことはできません。機械学習の自動化は反復の速度と比較の幅を増やし、アニメーションの知識は、何を残し、何を捨て、どこで直すべきかを判断します。二つの世界は互いを助けることができます。
                        </>
                    ) : (
                        <>
                            Within our partnership, we carried screenplay,
                            storyboards, direction, and rough prompts.{" "}
                            <a
                                href="https://www.jsonmaths.ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Json Cunanan website"
                            >
                                Json Cunanan
                            </a>{" "}
                            built the agent harness and handled post-processing
                            and automation. We created and produced Tegaki
                            together. That is why we cannot treat hand and
                            machine as opposing moral camps. Machine-learning
                            automation increases the speed of repetition and the
                            range of comparison. Animation knowledge decides
                            what to keep, what to reject, and where a correction
                            has to happen. The two worlds can help each other.
                        </>
                    )}
                </p>
                <p>
                    {ja
                        ? "私たちは平日の仕事が終わった後と週末にこの映画を作り、制作費とHiggsfieldのクレジットのために私たちの小遣いを出し合いました。限られた時間と予算の中でも、画面を一つずつ見て、必要な試行と修正にお金と時間を配りました。"
                        : "We made this film after-hours and on weekends, pooling our pocket money for production expenses and Higgsfield credits. With limited time and a small budget, we kept putting that money and time toward the next necessary attempt, correction, or export."}
                </p>
                <p>
                    {ja
                        ? "その間に立つ私たちは、恐れを絵コンテ、カット、音、字幕を持つ一本の映画として完成・公開しました。"
                        : "Working between those worlds, we turned the fear into a completed and released film with boards, shots, sound, and subtitles."}
                </p>
                <p>
                    {ja ? (
                        <>
                            完成・公開した提出用プロジェクトは、
                            <a
                                href="https://higgsfield.ai/@jsonmathsai/projects/tegaki"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                映画祭への提出ページ
                            </a>
                            から確認できます。
                        </>
                    ) : (
                        <>
                            The completed and released submission project is
                            available through the{" "}
                            <a
                                href="https://higgsfield.ai/@jsonmathsai/projects/tegaki"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Film Festival Submission
                            </a>
                            .
                        </>
                    )}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="foundations-heading"
            >
                <div className="blog-rich-section-label">
                    B /{" "}
                    {ja ? "基礎が映画を支える" : "FOUNDATIONS HOLD THE FILM"}
                </div>
                <h2 id="foundations-heading">
                    {ja
                        ? "知識が自動化を演出に変える"
                        : "Knowledge turns automation into direction"}
                </h2>
                <p>
                    {ja
                        ? "限られた時間の中で、完成・公開版にはまだ改善点があります。生成映像にはハルシネーションの修正をさらに重ねられる箇所があり、すべての不整合を解消したとは言えません。それでも、私たちは基礎なしにこの映画の動く版へ到達できませんでした。"
                        : "Within the time available, the completed and released film still has improvement points. There are generated moments where we would make more hallucination fixes, and we cannot say that every inconsistency was resolved. Even so, we could not have reached a working film without foundational knowledge."}
                </p>
                <p>
                    {ja
                        ? "脚本を書くことで、何が起きるかだけでなく、いつ起きるべきかを決めました。ラフ絵コンテは視線、カメラ側、ポーズ、プロップの連続性を固定し、アニマティックはその判断を時間に置きました。粗い素材でも、カットの長さ、間、反応の順番が見えれば、生成結果を映画の材料として比較できます。"
                        : "Screenplay writing let us decide what happens and when it has to happen. Rough storyboards fixed eyelines, camera side, poses, and prop continuity. The animatic placed those decisions in time. Even when the drawings were rough, shot length, pauses, and the order of reactions gave us something against which generated material could be judged."}
                </p>
                <p>
                    {ja
                        ? "カメラとパースが弱ければ、人物が正しい場所にいてもショットは成立しません。ポーズと演技が弱ければ、滑らかな動きでも感情は伝わりません。演出の判断が先にあり、生成と手動修正はその判断を試し、戻し、細く調整するためにあります。"
                        : "A shot does not work when the camera and perspective are weak, even if the character is in the correct place. Smooth movement cannot carry an emotion when pose and acting are weak. Directing judgment comes first. Generation and manual correction test that judgment, return to it, and adjust it with finer control."}
                </p>
                <p>
                    {ja
                        ? "手動で直したのは、機械を否定するためではありません。画面の意味を守るためです。顔の向き、手の位置、ノートPCの状態、インターフェースの表示、ロゴ、観客の連続性を一つずつ見て、必要なところを直しました。基礎は古い工程の飾りではなく、限られた時間で何を救うかを決めるための圧縮された判断です。"
                        : "We corrected images manually to protect the meaning of the screen. We checked face direction, hand position, the state of the laptop, interface displays, logos, and audience continuity one by one. Foundations are not decoration from an older process. They are compressed judgment for deciding what to save when time is limited."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="screens-heading"
            >
                <div className="blog-rich-section-label">
                    C / {ja ? "画面の手動仕上げ" : "MANUAL SCREEN FINISHING"}
                </div>
                <h2 id="screens-heading">
                    {ja
                        ? "読める状態を一つずつ戻す"
                        : "Restore readable screen states"}
                </h2>
                <p>
                    {ja
                        ? "画面のセットアップは、平面化した再利用可能なコンポーネント chat_simple、chat_special、chat_box、donation、donation_box を使いました。二つの6秒ソースクリップ、1280×720版と630×720のクロップ版を基準に、Instagramのマーク、64プロフィールの観客グリッド、別管理のユーザー名、日英のチャット文を配置しました。ユーザー名や非公開メモの内容はここでは扱いません。"
                        : "The screen setup used flattened reusable components named chat_simple, chat_special, chat_box, donation, and donation_box. We started from two six-second source clips, one at 1280×720 and one cropped to 630×720. We placed an Instagram mark, a 64-profile audience grid, separately managed usernames, and planned bilingual chat copy. Usernames and private note contents are not reproduced here."}
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
                            ? "画面システムの設計シート。再利用する部品と配置の基準を確認しました。"
                            : "Screen-system setup sheet used to check reusable components and placement."
                    }
                />
                <p>
                    {ja
                        ? "生成パスと手動修正パスの比較では、上段が生成画面、下段が固定した画面です。下段では空白になっていたノートPCとインターフェースを戻し、クリップ選択、チャットと寄付のオーバーレイ、ロゴの位置、観客の連続性を整えました。限られた時間の中で、観客が画面を読める状態を優先しました。"
                        : "In the comparison between the generated and manually fixed passes, the generated screens are above and the fixed screens are below. We restored the blank laptop and interface, then corrected clip selection, chat and donation overlays, logo placement, and audience continuity. Within the time available, we prioritized readable screen states."}
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
                aria-labelledby="sound-heading"
            >
                <div className="blog-rich-section-label">
                    D / {ja ? "音と自動化" : "SOUND AND AUTOMATION"}
                </div>
                <h2 id="sound-heading">
                    {ja
                        ? "画に従う音を組み立てる"
                        : "Build sound that follows the picture"}
                </h2>
                <p>
                    {ja
                        ? "Sunoでは、短い単一状態の素材を探しました。Instrumentalモードで長いハーモニック状態を生成し、アーティスト名や映画名は入力せず、除外スタイル欄で不要な方向を抑えました。採用候補はDAWで聴き比べ、画に合わせて組み立て、不要な部分を切りました。"
                        : "We used Suno to search for short single-state materials. In Instrumental mode, we generated longer harmonic states, entered no artist or film names, and used the exclude-styles field to hold back unwanted directions. We auditioned candidates in the DAW, assembled them against picture, and cut what did not belong."}
                </p>
                <p>
                    {ja
                        ? "初期の設計では、5つのキューを実際のコンフォームに合わせ、Dを共有軸にする案から始めました。聴き比べの後、4つのキューに現れる4音のセルが全体を結ぶ働きを見つけ、キューごとに異なる中心を許しました。DからC、Aマイナー、Eへ進む方向性は、ノゾミが引き下げられ、底に触れ、始まりより高い場所へ戻る動きに対応します。私たちは画に合わせて聴き比べ、耳でこの構成を選びました。"
                        : "The early setup began with five cues conformed to the actual cut and a shared D axis. After auditioning, we found that a recurring four-note cell across four cues could unify the score, allowing each cue to have its own tonal centre. The movement from D to C to A minor to E follows Nozomi being pulled down, reaching the bottom, and returning above where she began. We listened to the picture and chose the scheme by ear."}
                </p>
                <p>
                    {ja
                        ? "準備したアップライトピアノ、ガラスや金属を擦る音、映画の物体世界から拾った音、調律したルームトーンを小さく深く置きました。フリップブックをめくる音、紙の鉛筆、タブレットのスタイラス、キーボード、書き出しのクリックは、手が何をしているかを音色として追います。音楽を意識させない場面では、部屋の床下にあるようなSUB_FLOORとして扱い、画面の音と競合しないようにしました。"
                        : "We placed prepared upright piano, bowed glass and metal, sounds from the film's own object world, and tuned room tone small and deep in the mix. The flipbook riffle, pencil on paper, stylus on glass, keyboard, and export click follow what the hand is doing as timbre. Where music should not call attention to itself, we treated material as SUB_FLOOR beneath the room, so it would not compete with the screen's own sound."}
                </p>
                <p>
                    {ja
                        ? "タイトルカードでは一度だけ鳴るDのピアノが、スタジオの鋭いGのハムへ消えていきます。黒味では本当のデジタル・サイレンスを置きました。約7分52秒の最初の手動修正では、E♭が消え、B♮が入ります。機械の出力を人の手が直す瞬間が、画面、音色、和声の三つで同時に現れます。"
                        : "On the title card, one prepared-piano D decays into the studio's sharp G hum. At the blackout, we used true digital silence. Around 7:52, at the first manual correction, E flat leaves and B natural enters. The moment a human hand corrects the machine appears at once in the image, the timbre, and the harmony."}
                </p>
            </section>

            <section
                className="blog-study-section blog-notes"
                id="final-observation"
            >
                <header className="blog-section-heading">
                    <p>E / {ja ? "最後に" : "THE LAST OBSERVATION"}</p>
                    <h2>
                        {ja
                            ? "二つの世界を同じ画面に置く"
                            : "Let two worlds share the frame"}
                    </h2>
                </header>
                <div className="blog-body blog-transfer-copy">
                    <p>
                        {ja
                            ? "基礎があったからこそ、私たちは自動化の結果を読み、直し、映画の時間へ戻せました。完成版に残る改善点も、ハルシネーションも、私たちがまだ学ぶ場所を示しています。絵を描き、脚本を書き、絵コンテを切り、アニマティックを見て、カメラと芝居を判断する知識があったからこそ、恐れは画面の中で動く映画になりました。"
                            : "Foundations let us read the results of automation, correct them, and return them to film time. The improvement points and hallucinations that remain in the completed and released cut show us where we still have work to do. The fear became a moving film because we knew how to draw, write a screenplay, cut storyboards, watch an animatic, and judge camera and acting."}
                    </p>
                    <p>
                        {ja
                            ? "人が方向を持ち、機械が試行の数を増やし、また人が画面の意味を引き受ける。その往復を重ねて、一本の映画が完成しました。最後の書き出しまで、演出、機械の試行、フレームへの責任が同じループを作っていました。"
                            : "We brought direction, the machine increased the number of attempts, and we took responsibility for the meaning of the frame again. That loop continued until the final export."}
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
