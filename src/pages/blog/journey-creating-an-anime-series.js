import React, { useState } from "react";
import Helmet from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHeader from "../../components/blog/post-header";
import SEO from "../../components/seo";
import { post } from "../../blog/migrated/journey-creating-an-anime-series";

const ExternalLink = ({ href, locale, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${children}${
            locale === "ja" ? "（新しいタブで開く）" : " (opens in a new tab)"
        }`}
    >
        {children}
    </a>
);

const RemoteImage = ({ src, alt, caption, fallback }) => {
    const [isUnavailable, setIsUnavailable] = useState(false);

    return (
        <figure className="blog-figure">
            {isUnavailable ? (
                <div className="blog-media-fallback" role="status">
                    {fallback}
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onError={() => setIsUnavailable(true)}
                />
            )}
            <figcaption className="blog-media-caption">{caption}</figcaption>
        </figure>
    );
};

const EnglishArticle = ({ media }) => (
    <div className="blog-notebook">
        <div className="blog-body blog-opening">
            <p>
                Hey everyone! I’m Shō Akiyama, an{" "}
                <ExternalLink href="http://akiyamasho.com/" locale="en">
                    indie animator/director
                </ExternalLink>{" "}
                who also works as a{" "}
                <ExternalLink href="https://github.com/akiyamasho" locale="en">
                    software engineer
                </ExternalLink>{" "}
                in Tokyo.
            </p>
            <p>
                Last year, I worked on the production mostly alone for the pilot
                episode of{" "}
                <strong>
                    <ExternalLink href="http://venture-anime.jp/" locale="en">
                        Venture
                    </ExternalLink>
                    ,{" "}
                    <em>
                        an anime series about software engineers at an
                        international tech startup in Tokyo
                    </em>
                </strong>
                . I’ve always wanted to watch an anime about programming, so
                when I found the chance to make it myself, I became extremely
                ecstatic. It was basically a strange mix of{" "}
                <ExternalLink
                    href="https://www.hbo.com/silicon-valley"
                    locale="en"
                >
                    Silicon Valley
                </ExternalLink>
                ,{" "}
                <ExternalLink
                    href="https://myanimelist.net/anime/37141/Hataraku_Saibou_TV"
                    locale="en"
                >
                    Cells at Work
                </ExternalLink>
                ,{" "}
                <ExternalLink
                    href="https://myanimelist.net/anime/25835/Shirobako"
                    locale="en"
                >
                    Shirobako
                </ExternalLink>
                , and{" "}
                <ExternalLink
                    href="https://myanimelist.net/anime/40716/Kakushigoto_TV"
                    locale="en"
                >
                    Kakushigoto
                </ExternalLink>{" "}
                with 5 years worth of stories I collected and created as I
                worked as a software engineer.
            </p>
        </div>

        <RemoteImage
            src={media.hero}
            alt="Venture pilot poster with the character Mikaela and 2020 festival laurels"
            caption="Poster for the Pilot Episode (and yes I used GANs for the background)"
            fallback="The Venture pilot poster could not be loaded."
        />

        <div className="blog-body">
            <p>
                It took me six whole months to create the pilot outside of my
                day job, which in itself was also quite challenging yet
                rewarding — I was juggling jumping into both full-stack
                development and client correspondence from just being a frontend
                engineer at work, and at the same time writing, directing, and
                animating this episode on weekends and on my free time. I had to
                reference most of the people I look up to on how they time-box,
                sacrifice social life and other pleasures, and use every minute
                of the day as effectively as possible.
            </p>
            <p>
                Fast forward about a year after I started, the pilot episode has
                been aired on ChibaTV and has won awards and official selections
                in international film festivals worldwide. I also used the
                traction on YouTube to create{" "}
                <ExternalLink
                    href="https://www.youtube.com/watch?v=BU0Aoo4pHYg"
                    locale="en"
                >
                    a small short first episode
                </ExternalLink>{" "}
                which was also aired on the same TV channel.
            </p>
            <figure className="blog-figure">
                <figcaption className="blog-media-caption">
                    First TV Premier!
                </figcaption>
            </figure>
            <p>
                It also was the first time I got interviewed on TV and radio
                shows in Japan. The experience was simply amazing. Life was not
                just drawing frames and making them move anymore. We were even
                planning to shoot a commercial on TV for PR purposes.
            </p>
        </div>

        <RemoteImage
            src={media.commercialStoryboard}
            alt="Hand-drawn first-frame storyboard and notes for a Venture television commercial"
            caption="Storyboard for the commercial"
            fallback="The commercial storyboard could not be loaded."
        />

        <div className="blog-body">
            <p>
                However, as mentioned previously, since this series was 5 years
                in the making with stories I write slowly everyday from my daily
                life as a software engineer, I thought, “I can’t just let this
                stay as two short episodes”. I needed to know how to scale it up
                into an actual series.
            </p>
            <p>
                Which is why when we couldn’t make new episodes since studio
                recordings are risky due to coronavirus, I decided to halt all
                production and simply tried pitching to producers using the down
                time. Of course at first the normal reaction was usually{" "}
                <strong>
                    “You made anime mostly by yourself from writing to
                    postproduction to marketing to coding/deploying the PR
                    website, and a whole pitch bible complete with model sheets
                    and a season 1 storyline? I haven’t met anyone like that.”
                </strong>
            </p>
        </div>

        <RemoteImage
            src={media.pitchBible}
            alt="English and Japanese Venture pitch bibles shown side by side"
            caption="Pitch Bible (EN/JA)"
            fallback="The pitch-bible image could not be loaded."
        />

        <div className="blog-body">
            <p>
                But that was that. Such was the hype. Maybe it’s my lack of
                writing ability. Maybe it’s my lack of animation experience.
                Maybe it’s my lack of communication skill to explain the
                storyline in a more impressive manner. Or maybe it’s a mix of
                all of those and more. Way more, perhaps.
            </p>
            <p>
                With that, unsurprisingly, all pitches have failed. It was
                definitely a long shot, and I’m aware that pitching an anime
                series to producers would mean I am competing with actual
                studios and professional people who animate for a living with
                their high quality pilots and pitches, let alone the anime I’m
                creating being too much of a niche with software engineers. The
                fact that the animation that were bits and pieces of the
                extremely short experience I’ve had as an animator and director
                can never in a million years compete with this{" "}
                <ExternalLink
                    href="https://www.youtube.com/watch?v=0CJeDetA45Q&ab_channel=KyoaniChannel"
                    locale="en"
                >
                    beautiful piece from Kyoto Animation
                </ExternalLink>{" "}
                and{" "}
                <ExternalLink
                    href="https://www.youtube.com/watch?v=k4xGqY5IDBE"
                    locale="en"
                >
                    breathtaking visuals from Makoto Shinkai
                </ExternalLink>{" "}
                just makes it much harder. I ended up just criticizing my own
                work on YouTube dev updates with Sakami-san, the manager for the
                series when we were pitching.
            </p>
            <p>
                Seeing a few comments on the completed episodes on YouTube
                saying “I’m a programmer and I’ve been wanting a programming
                anime series and now it’s being made. Please make more!” was a
                good enough push at the start.
            </p>
            <p>
                However, animation as a media is a business. We were talking to
                big-time producers from large studios and streaming companies.
                There has to be numbers. There has to be social proof. The plot
                needs to be sellable. It was [countless] times of receiving
                feedback that range from{" "}
                <strong>
                    “It’s very promising but we need more audience data”
                </strong>{" "}
                to <strong>“Sorry I’m not sure how we can sell this”</strong> to
                plainly <strong>“This is trash and it will never sell”</strong>.
            </p>
            <p>And that made it all the more difficult yet interesting.</p>
            <p>
                As of this moment, I have no idea how to proceed aside from just
                studying both formally and from watching other great works, but
                looking back, just creating the story in the artform that I love
                (2D animation) and having people enjoy it, no matter how niche
                the audience is, is extremely encouraging as a creator.
            </p>
        </div>

        <RemoteImage
            src={media.episodeStoryboards}
            alt="Rough storyboard thumbnails for Venture episode 1.2 on a tablet"
            caption="Rough Storyboards for Episode 1.2"
            fallback="The episode storyboard image could not be loaded."
        />

        <div className="blog-body">
            <p>
                After the storyline’s evolution throughout the pitches, I’m just
                excited to create it regardless, be it a web series or starting
                small as a manga. Perhaps just enjoying creating it and
                entertaining the audience would be the way to go.
            </p>
            <p>
                And of course, I thank everyone who has helped build the project
                up until now, especially{" "}
                <ExternalLink href="https://twitter.com/PorkkyBoy" locale="en">
                    Gregory Chen
                </ExternalLink>{" "}
                for some of the animation scenes in the pilot and model sheet
                for the character Mayu Ishida, and{" "}
                <ExternalLink
                    href="https://twitter.com/sakamin0417?lang=en"
                    locale="en"
                >
                    Ryohei Sakami
                </ExternalLink>{" "}
                for helping out with PR on the Japan side marketing.
            </p>
            <p>
                Without further ado, I can now officially say that{" "}
                <strong>the next steps are now in the works</strong>. A short
                clip on the details will be released on the{" "}
                <ExternalLink
                    href="https://www.youtube.com/c/ventureanime"
                    locale="en"
                >
                    YouTube channel
                </ExternalLink>{" "}
                soon!
            </p>
            <p>You can check out the project on the following links!</p>
            <ul>
                <li>
                    Website:{" "}
                    <ExternalLink href="https://venture-anime.jp" locale="en">
                        https://venture-anime.jp
                    </ExternalLink>
                </li>
                <li>
                    YouTube:{" "}
                    <ExternalLink
                        href="https://www.youtube.com/c/ventureanime"
                        locale="en"
                    >
                        https://www.youtube.com/c/ventureanime
                    </ExternalLink>
                </li>
                <li>
                    Twitter:{" "}
                    <ExternalLink
                        href="https://twitter.com/VentureAnime"
                        locale="en"
                    >
                        https://twitter.com/VentureAnime
                    </ExternalLink>
                </li>
                <li>
                    Instagram:{" "}
                    <ExternalLink
                        href="https://www.instagram.com/ventureanime2020/"
                        locale="en"
                    >
                        https://www.instagram.com/ventureanime2020/
                    </ExternalLink>
                </li>
                <li>
                    Facebook:{" "}
                    <ExternalLink
                        href="https://www.facebook.com/ventureanime2020/"
                        locale="en"
                    >
                        https://www.facebook.com/ventureanime2020/
                    </ExternalLink>
                </li>
                <li>
                    GitHub (production repositories):{" "}
                    <ExternalLink
                        href="https://github.com/venture-anime"
                        locale="en"
                    >
                        https://github.com/venture-anime
                    </ExternalLink>
                </li>
            </ul>
        </div>
    </div>
);

const JapaneseArticle = ({ media }) => (
    <div className="blog-notebook">
        <div className="blog-body blog-opening">
            <p className="blog-lead">
                2020年10月、ソフトウェアエンジニアを題材にした短編アニメを、どうすればシリーズへ育てられるのかを考えていました。
            </p>
            <p>
                東京でアニメーション制作とソフトウェア開発の両方に携わる中で始めた作品が
                <ExternalLink href="https://venture-anime.jp" locale="ja">
                    『Venture』
                </ExternalLink>
                です。舞台は東京の国際的なテックスタートアップ。エンジニアとして働きながら5年間書きためた出来事やアイデアを基にしています。職場コメディ、制作現場、技術概念の擬人化を組み合わせる際には、『シリコンバレー』『はたらく細胞』『SHIROBAKO』『かくしごと』を参照しました。プログラミングそのものを題材にしたアニメを見たいと思い、自分で作り始めました。
            </p>
        </div>

        <RemoteImage
            src={media.hero}
            alt="キャラクターのミカエラと2020年の映画祭受賞・選出ローレルを配置した『Venture』パイロット版ポスター"
            caption="『Venture』パイロット版のポスター。背景にはGANを使用しました。"
            fallback="『Venture』パイロット版のポスターを読み込めませんでした。"
        />

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>01 / パイロット版</p>
                <h2>仕事と並行した6か月</h2>
                <span>
                    脚本、演出、作画、ポストプロダクション、公式サイトまでを一つの個人制作として進めました。
                </span>
            </header>
            <div className="blog-body">
                <p>
                    パイロット版の完成には、本業以外の時間を使って6か月かかりました。本業ではフロントエンド開発からフルスタック開発と顧客対応へ担当が広がり、夜と週末には脚本、演出、作画、編集、その周辺業務を進めていました。二つの仕事を止めないためには、時間を細かく区切り、何を諦めるかを決める必要がありました。
                </p>
                <p>
                    制作開始から約1年後、パイロット版はチバテレで放送され、海外映画祭で受賞・正式選出されました。YouTubeで作品を知った人の反応を受けて制作した
                    <ExternalLink
                        href="https://www.youtube.com/watch?v=BU0Aoo4pHYg"
                        locale="ja"
                    >
                        別の短編第1話
                    </ExternalLink>
                    も、同じチャンネルで放送されています。テレビとラジオの取材も初めて経験し、PR用テレビCMの企画も動き始めました。
                </p>
            </div>
            <RemoteImage
                src={media.commercialStoryboard}
                alt="『Venture』テレビCMの冒頭カットと演出メモを描いたラフ絵コンテ"
                caption="テレビCM企画の初期絵コンテと演出メモ。"
                fallback="CM用の絵コンテを読み込めませんでした。"
            />
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>02 / ピッチ</p>
                <h2>完成映像は出発点だった</h2>
                <span>
                    キャラクター設定、シーズン1の構成、日英の企画書をそろえて次の段階へ進みました。
                </span>
            </header>
            <div className="blog-body">
                <p>
                    5年間書きためた物語を2本の短編だけで終わらせたくありませんでした。新型コロナウイルスの影響でスタジオ収録のリスクが高まった時期には、新作の制作を一度止め、その時間を使ってプロデューサーへのピッチを続けました。
                </p>
                <p>
                    日英のピッチバイブルには、キャラクター設定とシーズン1のストーリーを収録しました。脚本からポストプロダクション、宣伝、PRサイトの実装と公開まで、一人が広い範囲を担当している点には関心を持ってもらえました。しかし、その驚きが企画成立につながるわけではありませんでした。
                </p>
            </div>
            <RemoteImage
                src={media.pitchBible}
                alt="英語版と日本語版の『Venture』ピッチバイブルを並べた画面"
                caption="キャラクターとストーリー資料を収録した英語版・日本語版ピッチバイブル。"
                fallback="ピッチバイブルの画像を読み込めませんでした。"
            />
            <div className="blog-body">
                <p>
                    この記録を書いた時点で、すべてのピッチは不成立でした。経験豊富なスタジオの質の高いパイロット映像と並ぶ場で、ソフトウェアエンジニアというニッチな題材を提案していました。脚本、アニメーションの経験、物語の説明方法について、自分の不足も何度も見直しました。一方で、プロデューサーから繰り返し問われたのは、現在の視聴者数、見込める市場、販売方法といった事業面でした。
                </p>
                <p>
                    「プログラミングのアニメを待っていた」と届いたエンジニアからの反応は、題材が誰かに届いたという確かな手応えでした。ただし、それだけでは大きな制作を動かすための観客データにはなりません。その違いを知ったことで、次に必要な仕事が少し具体的になりました。
                </p>
            </div>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>03 / 継続</p>
                <h2>もう一度、絵に戻る</h2>
                <span>
                    発表形式は変えられます。それでも物語を作り続ける理由は残っていました。
                </span>
            </header>
            <RemoteImage
                src={media.episodeStoryboards}
                alt="タブレットに描かれた『Venture』第1.2話のラフ絵コンテ"
                caption="第1.2話のラフ絵コンテ。"
                fallback="エピソードの絵コンテを読み込めませんでした。"
            />
            <div className="blog-body">
                <p>
                    2020年当時、進む道はまだ決まっていませんでした。ピッチを重ねる中でストーリーは変化しましたが、シリーズ化への方法は見つかっていません。ウェブシリーズにするのか、まず小さな漫画から始めるのか。ほかの作品から学び、手を動かし続けることが、その時点でできる具体的な一歩でした。
                </p>
                <p>
                    <ExternalLink
                        href="https://twitter.com/PorkkyBoy"
                        locale="ja"
                    >
                        Gregory Chenさん
                    </ExternalLink>
                    にはパイロット版の一部アニメーションと石田真由の設定画、
                    <ExternalLink
                        href="https://twitter.com/sakamin0417?lang=en"
                        locale="ja"
                    >
                        坂見良平さん
                    </ExternalLink>
                    には国内PRで協力していただきました。二人の仕事と、小さくても作品を待ってくれる観客の反応が、次の制作へ進む理由になりました。当時は次の取り組みがすでに動いており、詳細を伝える短い映像をYouTubeで公開すると予告していました。
                </p>
                <p>
                    本記事は最初に{" "}
                    <ExternalLink href={post.canonicalUrl} locale="ja">
                        Medium
                    </ExternalLink>
                    で公開しました。2020年当時のプロジェクトリンクを資料として残します。
                </p>
                <ul>
                    <li>
                        <ExternalLink
                            href="https://venture-anime.jp"
                            locale="ja"
                        >
                            『Venture』公式サイト
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href="https://www.youtube.com/c/ventureanime"
                            locale="ja"
                        >
                            『Venture』YouTube
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href="https://twitter.com/VentureAnime"
                            locale="ja"
                        >
                            『Venture』X / Twitter
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href="https://www.instagram.com/ventureanime2020/"
                            locale="ja"
                        >
                            『Venture』Instagram
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href="https://www.facebook.com/ventureanime2020/"
                            locale="ja"
                        >
                            『Venture』Facebook
                        </ExternalLink>
                    </li>
                    <li>
                        <ExternalLink
                            href="https://github.com/venture-anime"
                            locale="ja"
                        >
                            GitHub制作リポジトリ
                        </ExternalLink>
                    </li>
                </ul>
            </div>
        </section>
    </div>
);

const Post = ({ intl }) => {
    const locale = intl.locale || "en";
    const content = post.translations[locale] || post.translations.en;

    return (
        <BlogLayout>
            <Helmet>
                <link rel="canonical" href={post.canonicalUrl} />
            </Helmet>
            <SEO
                title={content.title}
                lang={locale}
                description={content.summary}
                meta={[
                    { property: "og:type", content: "article" },
                    { property: "og:image", content: post.media.hero },
                ]}
            />
            <PostHeader post={post} locale={locale} />
            {locale === "ja" ? (
                <JapaneseArticle media={post.media} />
            ) : (
                <EnglishArticle media={post.media} />
            )}
        </BlogLayout>
    );
};

export default injectIntl(Post);
