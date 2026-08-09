import React from "react";
import Helmet from "react-helmet";
import { injectIntl, Link } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import {
    ArticleContents,
    MLOpsSeriesNavigation,
} from "../../components/blog/article-navigation";
import PostHero from "../../components/blog/post-hero";
import SEO from "../../components/seo";
import { post } from "../../blog/migrated/introducing-mlops-part-2";

const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const EnglishArticle = () => (
    <div className="blog-body">
        <MLOpsSeriesNavigation currentPart={post.series.part} locale="en" />

        <p>
            This is part II of an archive of my tech talk `Introducing
            MLOps — Why we need it, and how to apply it in your company` at{" "}
            <ExternalLink href="https://www.codechrysalis.io/">
                Code Chrysalis
            </ExternalLink>{" "}
            in September 2021.
        </p>
        <p>
            In the{" "}
            <ExternalLink href="https://akiyamasho.medium.com/d210a9f0e409">
                previous episode
            </ExternalLink>
            , we defined what MLOps is. Now we will discuss <em>why </em>we need
            it. Sure, efficiency is good and all, but what’s in it for our dev
            teams? Isn’t simply serving a model on a VM enough? If it ain’t
            broken, why fix it?
        </p>

        <section aria-labelledby="table-of-contents">
            <h2 id="table-of-contents">Table of Contents</h2>
            <ol>
                <li>
                    <ExternalLink href="https://akiyamasho.medium.com/d210a9f0e409">
                        ML Productionisation and MLOps
                    </ExternalLink>
                </li>
                <li>
                    <strong>Why do we need MLOps? (this article)</strong>
                </li>
                <li>
                    <ExternalLink href="https://akiyamasho.medium.com/e8f0d9d609c4">
                        How do you apply MLOps? + a simple Flow
                    </ExternalLink>
                </li>
            </ol>
        </section>

        <section aria-labelledby="why-do-we-need-mlops">
            <h2 id="why-do-we-need-mlops">Why do we need MLOps?</h2>
            <p>
                <strong>A Case Study Wrapped in a Short Story</strong>
            </p>
            <p>
                In the tech talk, we used a simple story about a developer named
                Maurice, who has a food classifier running on a notebook as an
                example.
            </p>
            <p>
                Now, say despite Maurice building this model on his own, it is
                an extremely good classifier that can predict whether a photo of
                a food is a hotdog or not a hotdog with a pretty high accuracy.
                (and yes this section of the tech talk was a{" "}
                <ExternalLink href="https://www.youtube.com/watch?v=tWwCK95X6go&ab_channel=Felix">
                    Silicon Valley Reference
                </ExternalLink>
                )
            </p>
            <p>
                At this point, Maurice’s team only has 1 member — himself, and
                he has developed this food classifier app for fun. However, at
                one point, he met a brilliant business person, Jim, who
                convinces him to make an app for it and claims that it can{" "}
                <em>make the world a better place</em>. Also Jim has enough
                capital to fund Maurice to develop this classifier into a
                full-blown app.
            </p>
            <p>
                Let’s say after a few months, Maurice starts integrating this
                classifier into an app served to actual users, and continues to
                improve the model with different datasets and versions. On top
                of this, he now has to deal with user feedback, usability
                changes, and frontend/backend implementation for the app.
                Maurice and his notebook are now overwhelmed!
            </p>
            <p>
                As a solo dev wearing too many hats, Maurice is now panicking
                about how to manage a plethora of datasets, model versions,
                model implementation &amp; analysis. Colab notebooks, Google
                Drive, and his single laptop used for implementation for his
                service served on `ngrok` can’t serve everything anymore.
            </p>
            <p>
                Maurice now has to think of a way to organize this whole
                operation, and <em>fast</em>, otherwise the system can fall
                apart and the users would stop using their application, thereby
                wasting Jim’s money.
            </p>
            <p>
                From this, Maurice and Jim decide to hire Mathieu the Maîtres
                MLOps, to look at their current system and advise on how this
                can be optimized for scale, growth, and speed.
            </p>
            <p>
                As with any system optimization, Mathieu tells the team to look
                at the big picture first and see the current architecture, in
                order to see pain points and plan how to migrate them into a
                more proper and manageable infrastructure.
            </p>
            <p>
                They start looking at Maurice’s primitive notebook/Flask/mobile
                app infrastructure and improved them phase by phase based on the{" "}
                <ExternalLink href="https://akiyamasho.medium.com/d210a9f0e409">
                    first article
                </ExternalLink>{" "}
                (ML / DEV / PROD phases)
            </p>
            <p>
                Mathieu helps Maurice build automated model experiment/release
                pipelines in the ML phase using the latest tools, builds the
                CI/CD pipeline for quick updates and releases in the DEV phase,
                as well as setup monitoring and alerts for uptime and model
                performance in the PROD phase.
            </p>
            <p>
                Thanks to this, they were able to scale to millions of users and
                have Jim continue with the marketing smoothly without fear of
                downtime, and Maurice’s development experience is as good as
                ever despite the small team of three.
            </p>
        </section>

        <section aria-labelledby="recap">
            <h2 id="recap">Recap</h2>
            <p>
                While this might be an oversimplified story with certain comedic
                elements, it shows how the organisation of a very complex system
                into bite-size parts, as well as the automation of repeated
                operations, can do wonders not just for the developer workflow,
                but also to a product as a whole.
            </p>
            <p>
                For a cool real-world example on how a small team of engineers
                built a huge yet extremely optimized system that serves a large
                scale of users, you can check a{" "}
                <ExternalLink href="https://cloud.google.com/customers/go-jek">
                    case study of Go-Jek, a ride-hailing service in Indonesia
                </ExternalLink>
                .
            </p>
            <p>
                Going back, to give a quick recap what Mathieu and Maurice did,
                they:
            </p>
            <ul>
                <li>
                    streamlined data pipeline &amp; model implementation for the
                    food classifier
                </li>
                <li>
                    analysed and verified each component in the ML, DEV, and
                    PROD phase
                </li>
                <li>automated staging/production deployments and testing</li>
                <li>
                    implemented model performance monitoring and uptime checks
                </li>
            </ul>
            <p>
                To summarize why introducing MLOps to a pipeline can help, here
                are a few bullet points:
            </p>
            <ol>
                <li>ML is more experimental than classic software</li>
                <li>
                    It eliminates the bottlenecks in your production pipeline
                    that can and will cost you resources (time and $$$)
                </li>
                <li>Any untested component can make or break your product</li>
                <li>
                    It eases product scaling by providing speed and reliability
                    for your end-to-end ML pipeline
                </li>
            </ol>
        </section>

        <section aria-labelledby="next-episode">
            <h2 id="next-episode">Next Episode</h2>
            <p>
                Now that we’ve seen a simplified example, as well as a
                real-world case study link, on why we need MLOps, it’s time to
                get our hands dirty and dive into <em>how</em> we can apply it
                in the last installment,{" "}
                <ExternalLink href="https://akiyamasho.medium.com/e8f0d9d609c4">
                    Part III: How do you apply MLOps? + a simple flow
                </ExternalLink>
                .
            </p>
        </section>
    </div>
);

const JapaneseArticle = () => (
    <div className="blog-body">
        <p className="blog-lead">
            2021年9月に
            <ExternalLink href="https://www.codechrysalis.io/">
                Code Chrysalis
            </ExternalLink>
            で行った「Introducing MLOps: Why we need it, and how to apply it in
            your
            company」を再録する全3回の第2回です。第1回では、ML、開発、本番運用の3つのフェーズを通してMLOpsを定義しました。今回は、MLプロダクトの成長に伴って、なぜその考え方が必要になるのかを架空の物語でたどります。
        </p>
        <p>
            内容は2021年当時の講演に基づいています。その後、ツールや一般的な運用方法は変化しています。
        </p>

        <MLOpsSeriesNavigation currentPart={post.series.part} locale="ja" />
        <ArticleContents items={post.toc.ja} locale="ja" />

        <section aria-labelledby="why-mlops">
            <h2 id="why-mlops">なぜMLOpsが必要になるのか</h2>
            <p>
                初期のデモであれば、仮想マシン上でモデルを動かすだけでも目的を果たせます。負荷が増えるのは、そのモデルがプロダクトの一部になってからです。データセットとモデルの版を管理し、アプリケーションを継続して変更し、リリース前にテストし、サービスとモデルの状態を確認する必要が生まれます。
            </p>
            <p>
                課題はモデルサービングだけではありません。研究から実装、実装からデプロイ、本番環境から次の実験へと戻るまで、工程間の受け渡し全体が対象になります。
            </p>
        </section>

        <section aria-labelledby="maurice-and-jim">
            <h2 id="maurice-and-jim">成長するMauriceとJimのプロダクト</h2>
            <p>
                講演では、Mauriceという架空の開発者を例にしました。Mauriceは、食べ物の画像を「ホットドッグ」か「ホットドッグではない」かに分類するノートブックを作っています。これはドラマ『シリコンバレー』へのオマージュです。最初は個人的な実験でしたが、資金と事業案を持つJimが加わり、アプリとして提供する話が進みます。
            </p>
            <p>
                ユーザーが増えると、Mauriceの仕事はモデル開発だけでは収まりません。複数のデータセットとモデルを比較し、フィードバックに対応し、フロントエンドとバックエンドも保守します。Colab、Drive、1台のPC、ngrokで公開したサービスの組み合わせでは、本番運用を整理しきれなくなります。
            </p>
            <p>
                登場人物と結末は、講演用に誇張したフィクションです。「数百万人のユーザー」も実績ではありません。ここで見るべきなのは、一人の記憶だけでは、依存関係、リリース、運用指標を管理できなくなるという状況です。
            </p>
            <p>
                分類器の元ネタは、
                <ExternalLink href="https://www.youtube.com/watch?v=tWwCK95X6go&ab_channel=Felix">
                    ドラマ『シリコンバレー』の一場面
                </ExternalLink>
                です。
            </p>
        </section>

        <section aria-labelledby="system-view">
            <h2 id="system-view">システム全体を見る</h2>
            <p>
                MauriceとJimは、架空のMLOps担当者Mathieuを迎えます。最初に行うのは、ツール選定ではなく、現在のアーキテクチャを図にすることです。ノートブック、Flaskのサービス、モバイルアプリ、データセット、モデル、デプロイ、本番指標を、一つのシステムとして確認できるようにします。
            </p>
            <p>
                改善は第1回で紹介した3フェーズに沿って進めます。MLフェーズでは、実験とモデルリリースのパイプラインによって反復作業を減らします。開発フェーズでは、CI/CDとテストでアプリケーションのリリースを支えます。本番フェーズでは、サービスの稼働状況とモデル性能を監視し、アラートを設定します。既存の工程で見つけた弱点に対し、必要な変更を一つずつ当てていきます。
            </p>
        </section>

        <section aria-labelledby="practical-lessons">
            <h2 id="practical-lessons">物語から見える実務上の要点</h2>
            <p>架空のチームが行った変更は、次の4点に整理できます。</p>
            <ul>
                <li>データパイプラインとモデル実装を再現可能な形に整える</li>
                <li>ML、開発、本番の各要素を一続きの工程として検証する</li>
                <li>
                    繰り返しが遅延やミスにつながるデプロイとテストを自動化する
                </li>
                <li>サービスの稼働状況とモデル性能を監視する</li>
            </ul>
            <p>
                MLの実験性を保ちながら、周辺のプロダクトには安定したソフトウェア開発が求められます。モデルが正常でも、工程間の未検証な受け渡しが一つあれば、パイプライン全体は止まり得ます。ボトルネックを減らし、システムの状態を見えるようにすることで、小さなチームでも毎回のリリースを個別作業にせず改善を続けられます。
            </p>
        </section>

        <section aria-labelledby="real-world-case">
            <h2 id="real-world-case">実例との比較</h2>
            <p>
                講演では、架空の例とあわせてGoogle
                CloudによるGo-Jekの事例を紹介しました。インドネシアの配車サービスを支える基盤を、少人数のエンジニアリングチームが構築した経緯を扱ったものです。大規模運用との比較材料になりますが、アーキテクチャや数値は事例公開当時の情報として読む必要があります。
            </p>
            <p>
                <ExternalLink href="https://cloud.google.com/customers/go-jek">
                    Go-Jekの顧客事例
                </ExternalLink>
                を読む。
            </p>
        </section>

        <section aria-labelledby="next-part">
            <h2 id="next-part">次回：MLOpsを導入する</h2>
            <p>
                今回は、単純化したプロダクト開発の物語を通して、MLOpsが必要になる理由を整理しました。第3回では現在の工程を図にし、制約に合うツールを選び、ノートブックから本番アーキテクチャへ段階的に移行する方法を扱います。
            </p>
            <p>
                <Link to="/blog/introducing-mlops-part-3">
                    第3回「MLOpsをどう導入するか」へ進む
                </Link>
            </p>
        </section>

        <p className="blog-media-caption">
            2023年12月23日に
            <ExternalLink href={post.canonicalUrl}>Medium</ExternalLink>
            で公開した記事を再編集しました。技術的な主旨は維持しつつ、元の講演スライドは素材内のストック画像について再掲載権を確認できないため省略しています。
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
                    { name: "robots", content: "index,follow" },
                    { property: "og:image", content: post.cover.src },
                ]}
            />
            <PostHero post={post} locale={locale} />
            {locale === "ja" ? <JapaneseArticle /> : <EnglishArticle />}
        </BlogLayout>
    );
};

export default injectIntl(Post);
