import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link, injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import {
    ArticleContents,
    MLOpsSeriesNavigation,
} from "../../components/blog/article-navigation";
import PostHero from "../../components/blog/post-hero";
import SEO from "../../components/seo";
import { post } from "../../blog/migrated/introducing-mlops-part-1";

const RemoteFigure = ({ src, alt, caption, fallback }) => {
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
            {caption && <figcaption>{caption}</figcaption>}
        </figure>
    );
};

const EnglishArticle = () => (
    <div className="blog-body">
        <p className="blog-media-caption">
            Photo by{" "}
            <a
                href="https://picjumbo.com/author/viktorhanacek/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Viktor Hanacek on PicJumbo, opens in a new tab"
            >
                Viktor Hanacek
            </a>{" "}
            from{" "}
            <a
                href="https://picjumbo.com/robot-playing-chess-artificial-intelligence-2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Original photograph on PicJumbo, opens in a new tab"
            >
                PicJumbo
            </a>
        </p>
        <p className="blog-lead">
            This is an archive of my tech talk{" "}
            <code>
                Introducing MLOps — Why we need it, and how to apply it in your
                company
            </code>{" "}
            at{" "}
            <a
                href="https://www.codechrysalis.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Code Chrysalis, opens in a new tab"
            >
                Code Chrysalis
            </a>{" "}
            in September 2021.
        </p>
        <p>
            Note that the technologies and concepts may have changed or improved
            since then, so please take this article with a grain of salt!
        </p>
        <p>
            The tech talk archive summarizes what MLOps is, its usual components
            in a cloud-provider-generic sense, and a sample high-level workflow
            on applying it on a budding ML product from scratch.
        </p>

        <h2>Table of Contents</h2>
        <ol>
            <li>
                <strong>ML Productionisation and MLOps (this article)</strong>
            </li>
            <li>
                <Link to="/blog/introducing-mlops-part-2">
                    Why do we need MLOps?
                </Link>
            </li>
            <li>
                <Link to="/blog/introducing-mlops-part-3">
                    How do you apply MLOps? + a simple flow
                </Link>
            </li>
        </ol>

        <section aria-labelledby="what-this-tech-talk-archive-is-isnt">
            <h2 id="what-this-tech-talk-archive-is-isnt">
                <strong>What this tech talk archive is/isn’t</strong>
            </h2>
            <ul>
                <li>This archive is introductory (and isn’t a deep-dive)</li>
                <li>
                    This archive isn’t going to sell you specific MLOps tools
                </li>
                <li>
                    This archive focuses on the high-level concepts on applying
                    MLOps
                </li>
                <li>
                    This archive isn’t just for technical people (although it
                    gets quite technical towards the end)
                </li>
            </ul>
        </section>

        <section aria-labelledby="self-introduction">
            <h2 id="self-introduction">Self-introduction</h2>
            <p>
                I’m Sho Akiyama, an ML Engineering Manager in Tokyo who is also
                the creator of the programming-centric anime series{" "}
                <a
                    href="https://www.instagram.com/remotestartupsenpai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Remote Startup Senpai on Instagram, opens in a new tab"
                >
                    Remote Startup Senpai
                </a>
                . At the time of this tech talk, I was working at{" "}
                <a
                    href="https://www.retail-ai.jp/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Retail AI, opens in a new tab"
                >
                    Retail AI
                </a>{" "}
                where my relatively small team built a whole MLOps
                infrastructure from scratch for recommenders on a smart cart
                product.
            </p>
            <p>
                You can find me on{" "}
                <a
                    href="https://www.linkedin.com/in/shoakiyama/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sho Akiyama on LinkedIn, opens in a new tab"
                >
                    LinkedIn
                </a>{" "}
                or{" "}
                <a
                    href="https://www.instagram.com/akiyamasho/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sho Akiyama on Instagram, opens in a new tab"
                >
                    Instagram
                </a>
                !
            </p>
        </section>

        <section aria-labelledby="ml-productionisation-and-mlops">
            <h2 id="ml-productionisation-and-mlops">
                ML Productionisation and MLOps
            </h2>
            <p>
                <strong>How are ML models productionised?</strong>
            </p>
            <p>
                As a direct answer, it does depend on how one defines{" "}
                <em>productionised.</em> Even when your models are accessible by
                users through a simple service, you can call it{" "}
                <em>productionised</em>. It could be as simple as this:
            </p>
            <RemoteFigure
                src={post.media.notebookApi}
                alt="Diagram showing a Jupyter notebook model wrapped by a Flask API and served from localhost"
                caption=""
                fallback="The notebook-to-API diagram could not be loaded."
            />
            <p>
                Though this can be good for app demos for internal use or
                investor presentations, it doesn’t really serve much outside of
                a few users. As your application and product requires scaling
                up, your team may need to start planning how to serve them on
                cloud instances, allow a hundred to a thousand users, and be
                able to easily retrain and deploy models.
            </p>
            <p>
                As this can be a huge feat, one strategy to trim this down is to
                separate the system into different phases:
            </p>
            <RemoteFigure
                src={post.media.threePhases}
                alt="Diagram grouping MLOps work into ML, DEV, and PROD phases with feedback arrows"
                caption="Three Phases of MLOps"
                fallback="The three-phase MLOps diagram could not be loaded."
            />
            <ol>
                <li>
                    The ML Phase — which involves research, data transformation,
                    and model building
                </li>
                <li>
                    The DEV Phase — the “classic engineering” so to speak,
                    building the backend and frontend around the models
                </li>
                <li>
                    The PROD Phase — the “show time” phase, where the models are
                    being served to the users through deployments, which also
                    includes monitoring and logging
                </li>
            </ol>
            <p>
                <strong>What, then, is MLOps?</strong>
            </p>
            <p>
                Simply put, one can say that it is a{" "}
                <strong>set of best practices</strong> that aims to improve
                reliability and efficiency of productionising ML pipelines.
            </p>
            <p>
                It is the continuous improvement of the iterative process that
                spans from{" "}
                <strong>
                    the early steps of research to model implementation (ML
                    Phase)
                </strong>
                , to{" "}
                <strong>
                    frontend/backend/mobile/infra development (DEV Phase)
                </strong>
                , until the{" "}
                <strong>
                    final steps of providing the model to the users and
                    monitoring (PROD Phase)
                </strong>
                , and back to the first steps after each iteration.
            </p>
        </section>

        <section aria-labelledby="next-episode">
            <h2 id="next-episode">Next Episode</h2>
            <p>
                Now that we’ve defined what MLOps is and how models are
                productionized, it’s time to dive into{" "}
                <Link to="/blog/introducing-mlops-part-2">
                    Part II: Why do we need MLOps?
                </Link>
            </p>
        </section>
    </div>
);

const JapaneseArticle = () => (
    <div className="blog-body" lang="ja">
        <p className="blog-lead">
            この記事は、2021年9月にCode
            Chrysalisで行ったテックトークの第1部を再構成したものです。出発点は「機械学習モデルを、どの段階で本番化したと言えるのか」という素朴な問いでした。
        </p>
        <p>
            文章版は2023年12月に公開しました。MLOpsを取り巻くツールやプラットフォームは変化し続けています。ここでは個別製品の手順ではなく、システムの境界と作業の流れに焦点を置きます。
        </p>

        <ArticleContents items={post.toc.ja} locale="ja" />

        <section aria-labelledby="archive-scope">
            <h2 id="archive-scope">アーカイブの範囲</h2>
            <p>
                元のトークはMLOpsの全体像をつかむための入門編でした。特定のクラウドや製品に寄せず、一般的な構成要素を整理しています。技術職以外の方も対象にしていましたが、シリーズ後半では実装寄りの内容も扱います。
            </p>
            <p>
                登壇当時、私は東京でML Engineering Managerを務め、
                <a
                    href="https://www.retail-ai.jp/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Retail AIのウェブサイト、新しいタブで開きます"
                >
                    Retail AI
                </a>
                に在籍していました。少人数のチームで、スマートカート向けレコメンドシステムのMLOps基盤を構築していました。同時に、プログラミングを題材にしたアニメシリーズ
                <a
                    href="https://www.instagram.com/remotestartupsenpai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="InstagramのRemote Startup Senpai、新しいタブで開きます"
                >
                    Remote Startup Senpai
                </a>
                も制作していました。
            </p>
        </section>

        <section aria-labelledby="productionising-a-model">
            <h2 id="productionising-a-model">モデルを本番化する</h2>
            <p>
                「本番化」の意味は、対象となるサービスによって変わります。Notebook上のモデルを小さなFlask
                APIで包み、1台のマシンから公開するだけでも、利用者がアクセスできる状態にはなります。社内デモや投資家向けのプレゼンテーションなら、これで目的を果たせる場合もあります。
            </p>
            <RemoteFigure
                src={post.media.notebookApi}
                alt="Jupyter NotebookのモデルをFlask APIで包み、localhostから提供する流れの図"
                caption="登壇資料で示した最小構成。Notebook、APIラッパー、ローカルエンドポイントの順につなぎます。作図：秋山翔"
                fallback="NotebookからAPIまでの図を読み込めませんでした。"
            />
            <p>
                利用者が増え、再現可能な再学習、安全なデプロイ、複数人での運用が必要になると、この構成は不安定になります。対象はモデルだけではありません。アプリケーション、インフラ、リリース、監視、ログ、そして本番環境から戻るデータまで含まれます。
            </p>
        </section>

        <section aria-labelledby="three-phases">
            <h2 id="three-phases">3つの作業フェーズ</h2>
            <p>
                トークでは、大きくなったシステムをML、DEV、PRODの3フェーズに分けました。これは作業を見渡すための整理法であり、3つの専任チームが必須という意味ではありません。
            </p>
            <RemoteFigure
                src={post.media.threePhases}
                alt="MLOpsの作業をML、DEV、PRODに分け、相互のフィードバックを示した図"
                caption="モデルの受け渡し、システムテスト、監視、データの還流によって、ML、DEV、PRODは相互につながります。作図：秋山翔"
                fallback="MLOpsの3フェーズ図を読み込めませんでした。"
            />
            <h3>MLフェーズ</h3>
            <p>
                リサーチ、データの抽出と変換、実験、学習、モデル実装を扱います。モデルが有用かどうかを確かめるため、短いフィードバックループを保つ段階です。
            </p>
            <h3>DEVフェーズ</h3>
            <p>
                モデルをプロダクト全体へ組み込みます。簡略化した図では、バックエンド、フロントエンド、モバイル、API、キャッシュ、単体テストと結合テストをこのフェーズに置いています。
            </p>
            <h3>PRODフェーズ</h3>
            <p>
                デプロイによってサービスを利用者へ届けます。監視とログからシステムの状態を把握し、本番データを次のモデル改善へ戻します。
            </p>
        </section>

        <section aria-labelledby="defining-mlops">
            <h2 id="defining-mlops">MLOpsの定義</h2>
            <p>
                トークでは、MLOpsを「機械学習の本番パイプラインにおける信頼性と効率を高めるための実践群」と説明しました。リサーチとモデル実装から始まり、アプリケーションとインフラの開発、サービス提供と監視へ進みます。本番環境から得た情報をもとに、再びMLフェーズへ戻る反復的な流れです。
            </p>
            <p>
                この定義で重視しているのは、連携と再現可能な作業です。モデルレジストリ、CIパイプライン、監視サービスはその流れを支えますが、単体の製品だけでMLOpsが完成するわけではありません。
            </p>
        </section>

        <section aria-labelledby="next-in-series">
            <h2 id="next-in-series">次の記事</h2>
            <p>
                <Link to="/blog/introducing-mlops-part-2">
                    Part 2では、MLOpsが必要になる理由を扱います。
                </Link>
                実験用の分類モデルが、データセット、モデル版、アプリケーション、利用者を持つサービスへ成長する過程を追います。
            </p>
        </section>

        <p className="blog-media-caption">
            2023年12月23日に公開した
            <a
                href={post.canonicalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mediumの原文、新しいタブで開きます"
            >
                Mediumの原文
            </a>
            を再構成しました。
        </p>
    </div>
);

const Post = ({ intl }) => {
    const locale = intl.locale || "en";
    const content = post.translations[locale] || post.translations.en;

    return (
        <BlogLayout article>
            <Helmet>
                <link rel="canonical" href={post.canonicalUrl} />
            </Helmet>
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
            <div className="blog-body">
                <MLOpsSeriesNavigation
                    currentPart={post.series.part}
                    locale={locale}
                />
            </div>
            {locale === "ja" ? <JapaneseArticle /> : <EnglishArticle />}
        </BlogLayout>
    );
};

export default injectIntl(Post);
