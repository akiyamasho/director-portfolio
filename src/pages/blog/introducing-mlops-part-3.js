import React from "react";
import Helmet from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import {
    ArticleContents,
    MLOpsSeriesNavigation,
} from "../../components/blog/article-navigation";
import PostHero from "../../components/blog/post-hero";
import SEO from "../../components/seo";
import { post } from "../../blog/migrated/introducing-mlops-part-3";

const links = {
    codeChrysalis: "https://www.codechrysalis.io/",
    part1: "https://akiyamasho.medium.com/d210a9f0e409",
    part2: "https://akiyamasho.medium.com/8111b59bd790",
    gcpLevels:
        "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning?hl=ja#mlops_level_0_manual_process",
    mlopsCommunity: "https://mlops.community/",
    mlopsReddit: "https://www.reddit.com/r/mlops/",
    jayson: "https://www.linkedin.com/in/jayson-cunanan-phd/",
    felix: "https://www.linkedin.com/in/felixkirmse/?originalSubdomain=jp",
};

const ExternalLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
);

const EnglishArticle = () => (
    <>
        <MLOpsSeriesNavigation currentPart={post.series.part} locale="en" />
        <ArticleContents items={post.toc.en} locale="en" />

        <div className="blog-body">
            <p>
                This is part III and the last part of an archive of my tech talk
                `Introducing MLOps — Why we need it, and how to apply it in your
                company` at{" "}
                <ExternalLink href={links.codeChrysalis}>
                    Code Chrysalis
                </ExternalLink>{" "}
                in September 2021.
            </p>
            <p>
                In the{" "}
                <ExternalLink href={links.part2}>previous episode</ExternalLink>
                , we presented why we need MLOps using a simplified short story,
                with a real-world case study at the end. Now that we’ve learned
                the why, we now jump into how we can apply it on a simple
                project that starts with a Jupyter Notebook and ends with a
                full-blown high-level architecture.
            </p>

            <h2>Table of Contents</h2>
            <ol>
                <li>
                    <ExternalLink href={links.part1}>
                        ML Productionisation and MLOps
                    </ExternalLink>
                </li>
                <li>
                    <ExternalLink href={links.part2}>
                        Why do we need MLOps?
                    </ExternalLink>
                </li>
                <li>
                    <strong>
                        How do you apply MLOps? + a simple Flow (this article)
                    </strong>
                </li>
            </ol>

            <section aria-labelledby="how">
                <h2 id="how">How??</h2>
                <p>
                    MLOps from scratch can be quite overwhelming, especially as
                    you stare at your 500-cell single Jupyter Notebook not
                    knowing which cell to automate first. A good set of items to
                    start with can be:
                </p>
                <ol>
                    <li>Look at the big picture first</li>
                    <li>Find which tools are apt</li>
                    <li>Plan out your MLOps journey</li>
                </ol>

                <p>
                    <strong>Look at the big picture first</strong>
                </p>
                <p>
                    As you take a step back and breathe, you can start drawing
                    up how your whole process is on a simple diagram. This way
                    you can easily see bottlenecks and low-hanging fruits that
                    you can automate first in your journey. You can try the
                    following for starters:
                </p>
                <ul>
                    <li>Map out your current architecture or workflow</li>
                    <li>
                        Assess your current organisation’s MLOps Level (
                        <ExternalLink href={links.gcpLevels}>
                            good reference from GCP
                        </ExternalLink>
                        )
                    </li>
                    <li>Check your current and planned team structure</li>
                </ul>
                <p className="blog-media-caption">
                    Assuming you have multiple team members, you can assign
                    areas based on their strengths!
                </p>
                <p>
                    The diagram above applies to a multi-member team structure,
                    but as you list the things your notebook cells (or whichever
                    state your current architecture is in), you can also assign
                    people or priority levels to them so it’s easy to follow
                    your own recipe.
                </p>

                <p>
                    <strong>Find out which tools are apt</strong>
                </p>
                <p>
                    As there are a plethora of MLOps tools out in the wild, each
                    more awesome than the last, it can be paralysing to decide
                    which ones to use.
                </p>
                <p className="blog-media-caption">
                    Many an ML engineer has been plagued by decision paralysis
                </p>
                <p>
                    A good rule of thumb here is to look back at your diagram in
                    the “<strong>Look at the big picture first” </strong>step,
                    see which has the top priority, and find a tool that matches
                    two things:
                </p>
                <ul>
                    <li>your familiarity with it/language it supports</li>
                    <li>
                        how apt that tool is for that specific component (is it
                        model deployment? is it model versioning? is it data
                        processing?)
                    </li>
                </ul>
                <p>
                    As you navigate through with these two things, you can
                    easily filter out the noise. To be frank, you can even not
                    use any of these tools at first and simply separate your
                    notebook’s cells into their own clean `.py` files to start
                    with!
                </p>
                <p>
                    And definitely don’t be shy to ask around. There are a lot
                    of resources and communities such as{" "}
                    <ExternalLink href={links.mlopsCommunity}>
                        MLOps Community
                    </ExternalLink>{" "}
                    and{" "}
                    <ExternalLink href={links.mlopsReddit}>
                        MLOps Subreddit
                    </ExternalLink>{" "}
                    that you can browse around. Who knows, there may be a post
                    that already solves your specific problem!
                </p>

                <p>
                    <strong>Plan out your MLOps journey</strong>
                </p>
                <p>
                    Now that you’ve roughly cleared out what to do and what
                    tools to use, it’s time to plan out your journey! One good
                    mindset here is to move with baby steps. This way you can
                    avoid overwhelming yourself with huge migration tasks and
                    whatnot, and you can easily review your steps as you go
                    along for improvements.
                </p>
                <p>
                    Now without further ado, we can move on to an actual example
                    in <strong>A Simple Flow</strong>.
                </p>
            </section>

            <section aria-labelledby="a-simple-flow">
                <h2 id="a-simple-flow">A Simple Flow</h2>
                <p>
                    We divide our path into three stages — starting with a
                    single Jupyter Notebook to a simple API served on a host
                    site to a complete architecture for the ML, DEV, and PROD
                    phase.
                </p>
                <p>
                    Most projects (if not all) start with a simple Jupyter
                    Notebook, or even a python script. This keeps the experiment
                    feedback loop quick and it’s easy to run components of the
                    model building in one go. However, as a model needs a
                    wrapper, it starts requiring its own server which can be in
                    the form of an API or even an edge solution where the model
                    is directly used in a mobile app for example.
                </p>
                <p>
                    However, similar to how Maurice and Jim struggled with
                    scaling the application, we will need to start building the
                    infrastructure for the experiments, implementation,
                    deployments, and monitoring in order to serve a larger user
                    base.
                </p>
                <p className="blog-media-caption">
                    Implementing MLOps consists of incremental improvements,
                    jumping around the phases
                </p>
                <p>
                    Usually MLOps isn’t a sequential run of improvements through
                    the phases. It involves jumping back and forth phases,
                    adding minor to major upgrades and integrating them back
                    into the whole process. The cool thing with this is if you
                    have multiple people in your team, you can even do them in
                    parallel!
                </p>
                <p>
                    To easily visualize the fast-moving GIF above, the sample
                    steps starting from a single Jupyter notebook are as
                    follows:
                </p>

                <p>
                    <strong>Experimental Stage</strong>
                </p>
                <ol>
                    <li>Single Jupyter notebook (ML Phase)</li>
                </ol>

                <p>
                    <strong>MVP Stage</strong>
                </p>
                <ol>
                    <li>Jupyter notebook (ML Phase)</li>
                    <li>Flask API (DEV Phase)</li>
                    <li>Hosting site serving (PROD Phase)</li>
                </ol>

                <p>
                    <strong>Productionization Stage + Steps</strong>
                </p>
                <ol>
                    <li>Unit + Integration Tests (DEV Phase)</li>
                    <li>
                        Shareable notebooks on a cloud platform, ex. — GCP
                        Vertex AI or AWS Sagemaker Notebooks (ML Phase)
                    </li>
                    <li>
                        Docker-containerised Frontend &amp; Backend (DEV Phase)
                    </li>
                    <li>Caching, ex. — Redis (DEV Phase)</li>
                    <li>Load Tests, ex. — Locust (DEV Phase)</li>
                    <li>
                        Auto-scaling deployments, ex. — Kubernetes (k8s) (PROD
                        Phase)
                    </li>
                    <li>
                        GitOps for infrastructure, ex. — Helm + Terraform on k8s
                        (PROD Phase)
                    </li>
                    <li>
                        Model versioning, ex. — GCP Vertex AI Model Serving or
                        KubeFlow (ML Phase)
                    </li>
                    <li>Dataset versioning, ex. — DVC (ML Phase)</li>
                    <li>Monitoring, ex. — Grafana (PROD Phase)</li>
                    <li>Alerts, ex. — Sentry / Slack (PROD Phase)</li>
                </ol>
                <p>
                    ..and the list goes on as you automate your operations and
                    improve the efficiency of each phase.
                </p>
                <p className="blog-media-caption">
                    After looking at what you’ve incrementally built over your
                    sprints and quarters, it can be breathtaking!
                </p>
                <p>
                    And as with any project, don’t forget to celebrate the small
                    and big wins! Each improvement adds compound interest to
                    your optimized architecture which ultimately prevents bugs,
                    helps data-driven analyses, and simply makes development a
                    fun process with less toil.
                </p>
            </section>

            <section aria-labelledby="takeaways">
                <h2 id="takeaways">Takeaways</h2>
                <p>
                    This small workflow is only a mere example. The cool (yet
                    daunting) thing about this is{" "}
                    <strong>there is no one way to do it</strong>! Feel free to
                    use whatever stack your team is used to. You can use a DAG
                    runner like AirFlow or even GitHub Actions for the whole
                    thing if that floats your boat!
                </p>
                <p>
                    Though it is a difficult endeavour, it can be very fun and
                    fulfilling, especially as you feel the improvements
                    affecting your development time and effort positively. That
                    manual process you keep repeating or copy-pasting every time
                    that you automated with a simple script? Imagine those small
                    bothersome things just gone thanks to none other than
                    yourself (or your teammates)!
                </p>
                <p>
                    This is a never-ending process of improvement. As they say,
                    CI/CD (Continuous Improvement/Delivery) is a lifestyle.
                </p>
            </section>

            <section aria-labelledby="parting-words">
                <h2 id="parting-words">Parting Words</h2>
                <p>
                    As this archive is only a high-level introduction on what
                    MLOps is, why it’s needed and how to roughly implement it,
                    there is still a lot of great references out there on the
                    interwebs to look at!
                </p>
                <p>
                    As long as you take things step by step, testing what works
                    and what doesn’t, and learning from each stage as you
                    improve your ML infrastructure, you’ll definitely get to a
                    great point where your models are properly served to your
                    users.
                </p>
                <p>
                    I hope this quick introduction has provided great insight,
                    and good luck on your MLOps journey!
                </p>
                <p>
                    (thanks to{" "}
                    <ExternalLink href={links.jayson}>
                        Jayson Cunanan, Ph. D.
                    </ExternalLink>{" "}
                    and{" "}
                    <ExternalLink href={links.felix}>Felix Kirmse</ExternalLink>{" "}
                    for the pre-tech-talk reviews!)
                </p>
            </section>
        </div>
    </>
);

const JapaneseArticle = () => (
    <>
        <div className="blog-body blog-opening">
            <p className="blog-lead">
                MLOpsシリーズ最終回では、導入する理由から一歩進み、実際に着手する順序を考えます。
            </p>
            <p>
                本記事は、2021年9月に
                <ExternalLink href={links.codeChrysalis}>
                    Code Chrysalis
                </ExternalLink>
                で行った技術トークを再構成したものです。掲載するツール名は当時の例であり、現在の製品選定を勧めるものではありません。大きなNotebookを、テスト、デプロイ、監視、改善できる仕組みへどう移すかという問いに焦点を当てます。
            </p>
        </div>

        <MLOpsSeriesNavigation currentPart={post.series.part} locale="ja" />
        <ArticleContents items={post.toc.ja} locale="ja" />

        <section className="blog-body" aria-labelledby="how">
            <h2 id="how">どう始めるか</h2>
            <p>
                数百セルに膨らんだNotebookを前にすると、最初に自動化すべき処理が見えにくくなります。まず、現在のワークフローを図にします。データ処理、実験、モデル作成、API、デプロイ、監視を並べると、手作業の繰り返しや運用上のボトルネックを確認できます。
            </p>
            <p>棚卸しでは、次の3点を押さえます。</p>
            <ol>
                <li>現在のアーキテクチャまたはワークフローを可視化する</li>
                <li>
                    Google Cloudの
                    <ExternalLink href={links.gcpLevels}>
                        MLOpsレベル
                    </ExternalLink>
                    などを参照し、現状を確認する
                </li>
                <li>
                    現在と将来のチーム構成を整理し、担当者と優先順位を割り当てる
                </li>
            </ol>
            <p>
                ツールを選ぶのは、その後です。優先度の高い課題、チームが保守できる言語、対象コンポーネントとの適合性で絞ります。モデルのデプロイ、データ処理、バージョン管理は別の仕事です。新しい基盤を入れる前に、Notebookのセルを読みやすいPythonモジュールへ分けるだけでも前進になります。
            </p>
            <p>
                選択肢を比較したい場合は、
                <ExternalLink href={links.mlopsCommunity}>
                    MLOps Community
                </ExternalLink>
                や
                <ExternalLink href={links.mlopsReddit}>
                    MLOps subreddit
                </ExternalLink>
                の実装例も参考になります。移行は、個別にレビューでき、必要なら戻せる小さな変更に分けて計画します。
            </p>
        </section>

        <section className="blog-body" aria-labelledby="a-simple-flow">
            <h2 id="a-simple-flow">シンプルな移行例</h2>
            <p>
                一例として、3段階の流れを考えます。実験段階はNotebookまたはPythonスクリプトから始め、短いフィードバックループを保ちます。MVPではモデルをAPIで包み、ホスティング環境から提供します。本番化では、シリーズ前半で扱ったML、DEV、PRODの各フェーズに、共同実験、アプリケーション開発、デプロイ、監視の仕組みを足していきます。
            </p>
            <h3>実験段階</h3>
            <ul>
                <li>MLフェーズの1冊のJupyter Notebook</li>
            </ul>
            <h3>MVP段階</h3>
            <ul>
                <li>MLフェーズのモデル開発用Notebook</li>
                <li>DEVフェーズのFlask API</li>
                <li>PRODフェーズのホスティング環境</li>
            </ul>
            <p>
                これは厳密な一本道ではありません。不具合や新しい要件によって次の課題が見つかれば、フェーズを行き来します。インターフェースを明確にできる場合は、複数の担当者が別々の改善を並行して進めることもできます。
            </p>
        </section>

        <section className="blog-body" aria-labelledby="production-steps">
            <h2 id="production-steps">本番化のステップ</h2>
            <p>
                元の技術トークでは、MVPから拡張する作業候補として次の項目を挙げました。実施順序は、プロダクトとチームの状況によって変わります。
            </p>
            <ol>
                <li>アプリケーションコードの単体テストと結合テスト</li>
                <li>
                    Vertex AI WorkbenchやSageMaker
                    Notebooksなど、クラウド上で共有できるNotebook
                </li>
                <li>フロントエンドとバックエンドのコンテナ化</li>
                <li>Redisなどを使ったキャッシュ</li>
                <li>Locustなどを使った負荷テスト</li>
                <li>Kubernetesなどを使ったオートスケール</li>
                <li>HelmやTerraformを使い、Gitでインフラ構成を管理する</li>
                <li>モデルの配信とバージョン管理</li>
                <li>DVCなどを使ったデータセットのバージョン管理</li>
                <li>Grafanaなどを使った運用監視</li>
                <li>SentryやSlackなどを通じたアラート通知</li>
            </ol>
            <p>
                このリストは、項目ごとに独立して進められるようにしています。繰り返し発生する負担をひとつ選び、変更を検証し、全体へ組み込んでから次の移行に進めます。
            </p>
        </section>

        <section className="blog-body" aria-labelledby="takeaways">
            <h2 id="takeaways">要点</h2>
            <p>
                MLOpsの構成に唯一の正解はありません。Airflowのようなワークフローエンジン、GitHub
                ActionsのようなCI、マネージド基盤、あるいは小さなスクリプト群でも構築できます。ツールの数よりも、チームが扱えること、保守できること、実際のボトルネックを解消できることが重要です。
            </p>
            <p>
                続けるべきなのは、現状を点検する習慣です。繰り返し作業をひとつ自動化し、結果をテストし、負担が減ったか、問題を早く発見できたかを確認します。その積み重ねが、実験の再現、モデルを使うプロダクトのリリース、本番環境での挙動把握を少しずつ容易にします。
            </p>
        </section>

        <section className="blog-body" aria-labelledby="parting-words">
            <h2 id="parting-words">結び</h2>
            <p>
                元の技術トークをレビューしてくださった
                <ExternalLink href={links.jayson}>
                    Jayson Cunanan, Ph.D.
                </ExternalLink>
                と<ExternalLink href={links.felix}>Felix Kirmse</ExternalLink>
                に感謝します。
            </p>
            <p>
                <ExternalLink href={post.canonicalUrl}>
                    Mediumの原文を読む
                </ExternalLink>
                。
            </p>
        </section>
    </>
);

const IntroducingMLOpsPart3 = ({ intl }) => {
    const locale = intl.locale === "ja" ? "ja" : "en";
    const translation = post.translations[locale];

    return (
        <BlogLayout article>
            <SEO
                title={translation.title}
                lang={locale}
                description={translation.summary}
                meta={[{ property: "og:image", content: post.cover.src }]}
            />
            <Helmet>
                <link rel="canonical" href={post.canonicalUrl} />
            </Helmet>
            <article>
                <PostHero post={post} locale={locale} />
                {locale === "ja" ? <JapaneseArticle /> : <EnglishArticle />}
            </article>
        </BlogLayout>
    );
};

export default injectIntl(IntroducingMLOpsPart3);
