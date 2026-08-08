import React from "react";
import Helmet from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHero from "../../components/blog/post-hero";
import SEO from "../../components/seo";
import { post } from "../../blog/migrated/rag-enterprise-documents";

const sources = {
    medium: "https://akiyamasho.medium.com/retrieval-augmented-generation-rag-for-navigating-large-enterprise-documents-google-cloud-x-9248ce3276d9",
    talk: "https://www.youtube.com/watch?v=KpWoxDrqrX8",
    generali: "https://www.generali.it/",
    bm25: "https://medium.com/@evertongomede/understanding-the-bm25-ranking-algorithm-19f6d45c6ce",
    lostInTheMiddle: "https://arxiv.org/abs/2307.03172",
    agentSearch:
        "https://cloud.google.com/products/gemini-enterprise-agent-platform/agent-search",
};

const ExternalLink = ({ href, children, locale }) => (
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

const Experiment = ({ number, children, metrics }) => (
    <li>
        <span>{String(number).padStart(2, "0")}</span>
        <div>
            {children}
            <p>
                <strong>{metrics}</strong>
            </p>
        </div>
    </li>
);

const EnglishEditorialAdaptation = () => (
    <div className="blog-notebook">
        <dl className="blog-facts">
            <div>
                <dt>Source</dt>
                <dd>Google Cloud talk</dd>
            </div>
            <div>
                <dt>Case</dt>
                <dd>Generali Italia</dd>
            </div>
            <div>
                <dt>Corpus</dt>
                <dd>Italian documents</dd>
            </div>
            <div>
                <dt>Evaluation</dt>
                <dd>Retrieval + Q&amp;A</dd>
            </div>
            <div>
                <dt>Experiments</dt>
                <dd>Six iterations</dd>
            </div>
        </dl>

        <div className="blog-body blog-opening">
            <p className="blog-lead">
                Generali Italia treated its document assistant as two connected
                systems: one that retrieves evidence and one that writes the
                answer. Their six experiments show why both need separate
                measurements.
            </p>
            <p>
                These notes adapt my March 2024 summary of a 42-minute
                <ExternalLink href={sources.talk} locale="en">
                    Google Cloud talk
                </ExternalLink>{" "}
                about a RAG pipeline built with
                <ExternalLink href={sources.generali} locale="en">
                    Generali Italia
                </ExternalLink>
                . The useful part is the sequence of decisions. The team moved
                from default chunking to paragraph-aware splitting, hybrid
                retrieval, reranking, and a larger document collection while
                tracking what each change did to retrieval recall and answer
                accuracy.
            </p>
            <p>
                Product names and available cloud features below describe the
                system presented in February 2024. Google Cloud model and search
                branding has changed since then, so check current documentation
                before reproducing the architecture.
            </p>
        </div>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>01 / Architecture</p>
                <h2>Separate ingestion from inference</h2>
                <span>
                    A repeatable pipeline prepared the index. A serving path
                    retrieved context and assembled an answer.
                </span>
            </header>
            <div className="blog-body blog-opening">
                <p>
                    In the initial stack, Vertex AI provided the experiment and
                    pipeline layer, LangChain handled document processing and
                    chain logic, Gemini and PaLM models supplied generation, and
                    Qdrant stored vectors. The multilingual embedding model was
                    selected for the Italian source material.
                </p>
                <h3>Ingestion and evaluation</h3>
                <p>
                    Documents began in Cloud Storage. Vertex AI Pipelines ran
                    ingestion, paragraph and sub-chunk splitting, embedding, and
                    BM25 index creation. Separate evaluation pipelines measured
                    recall at 15 retrieved documents and Q&amp;A accuracy.
                    Prompts, temperature, and other chosen parameters were
                    stored as versioned artifacts for the serving path.
                </p>
                <h3>Inference</h3>
                <p>
                    A front end called a backend service responsible for prompt
                    assembly and retrieval. Qdrant supported semantic search and
                    metadata filtering, while Firestore stored conversation
                    history. Retrieved chunks were inserted as context before
                    the model produced an answer and its sources.
                </p>
                <p>
                    The talk also considered replacing parts of the custom
                    retrieval layer with Vertex AI Vector Search. The product
                    discussed as Vertex AI Search has since evolved into
                    <ExternalLink href={sources.agentSearch} locale="en">
                        Agent Search in Gemini Enterprise Agent Platform
                    </ExternalLink>
                    . That current name should not be read back into the 2024
                    implementation.
                </p>
            </div>
        </section>

        <section className="blog-study-section blog-notes">
            <header className="blog-section-heading">
                <p>02 / Experiments</p>
                <h2>Six controlled changes</h2>
                <span>
                    Metrics are the values reported in the talk. Recall is
                    measured at 15 documents.
                </span>
            </header>
            <ol>
                <Experiment
                    number={1}
                    metrics="45,000 chunks · qualitative review only"
                >
                    <h3>Establish a default baseline</h3>
                    <p>
                        Fixed-size splitting, a base embedding model, and
                        default retriever settings created a large index. There
                        was no formal evaluation set yet.
                    </p>
                </Experiment>
                <Experiment
                    number={2}
                    metrics="13,000 chunks · recall 80.0% · Q&A accuracy 73.1%"
                >
                    <h3>Split by paragraph and tune the retriever</h3>
                    <p>
                        The team generated synthetic questions, switched to a
                        multilingual embedding model, and tuned chunking and
                        retrieval. A 1,000-character chunk performed best for
                        this corpus, with retrieval gains flattening after about
                        ten chunks in the supplied context.
                    </p>
                </Experiment>
                <Experiment
                    number={3}
                    metrics="17,000 chunks · recall 78.0% · Q&A accuracy 72.5%"
                >
                    <h3>Add explicit definitions</h3>
                    <p>
                        Four thousand manually prepared chunks covered insurance
                        definitions and acronyms. Aggregate metrics fell
                        slightly, but the team retained the change because
                        answering those definition questions was a product
                        requirement.
                    </p>
                </Experiment>
                <Experiment
                    number={4}
                    metrics="17,000 chunks · recall 84.0% · Q&A accuracy 76.0%"
                >
                    <h3>Combine dense and lexical retrieval</h3>
                    <p>
                        A hybrid retriever joined multilingual embeddings with
                        <ExternalLink href={sources.bm25} locale="en">
                            BM25
                        </ExternalLink>
                        . This was the clearest jump in both retrieval and
                        answer quality, supporting the team&apos;s observation
                        that weak retrieval limits the generator.
                    </p>
                </Experiment>
                <Experiment
                    number={5}
                    metrics="recall 84.0% · Q&A accuracy 77.9%"
                >
                    <h3>Rerank the supplied context</h3>
                    <p>
                        A reranking model reordered retrieved chunks before
                        generation. The test was motivated by
                        <ExternalLink
                            href={sources.lostInTheMiddle}
                            locale="en"
                        >
                            Lost in the Middle
                        </ExternalLink>
                        , which found that language models can use information
                        less reliably when it appears in the middle of a long
                        context. The reported ordering placed the most important
                        chunks later in the prompt.
                    </p>
                </Experiment>
                <Experiment
                    number={6}
                    metrics="recall 69.0% · PaLM 1 Q&A 72.0% · PaLM 2 Q&A 78.0%"
                >
                    <h3>Expand the corpus and update the model</h3>
                    <p>
                        More documents and prompt changes made retrieval harder,
                        reducing recall. Moving from PaLM 1 to PaLM 2 improved
                        answer accuracy on the reported evaluation even though
                        the retriever now faced a broader collection.
                    </p>
                </Experiment>
            </ol>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>03 / Evaluation</p>
                <h2>Build the test set with care</h2>
                <span>
                    Synthetic questions made iteration possible, but they still
                    required human quality checks.
                </span>
            </header>
            <div className="blog-body blog-opening">
                <p>
                    The team generated question-and-answer pairs from paragraph
                    chunks and assembled about 2,000 questions for training,
                    validation, and testing. That solved the immediate shortage
                    of labeled data, but the speakers warned that a generated
                    evaluation set needs review. Otherwise the test can
                    reproduce the same model errors as the system being
                    measured.
                </p>
                <p>
                    Chunking began at paragraph boundaries, then subdivided long
                    paragraphs with LangChain&apos;s iterative splitter. The
                    goal was to avoid placing semantically unrelated paragraphs
                    in one chunk. The 1,000-character result was specific to
                    this document collection and question set, not a general
                    default for every RAG system.
                </p>
                <p>
                    For small collections, the team&apos;s practical answer to
                    document updates was to rebuild the embedding index. Once
                    update volume grows, incremental ingestion and parameterized
                    pipelines become worth introducing. Vertex AI Pipelines
                    saved generated artifacts to Cloud Storage, and Qdrant
                    retained per-chunk metadata for semantic search and
                    filtering.
                </p>
            </div>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>04 / Q&amp;A</p>
                <h2>Operational questions</h2>
                <span>
                    The audience questions connected the experiment to document
                    maintenance, tables, metadata, and conversation state.
                </span>
            </header>
            <div className="blog-body blog-opening">
                <h3>What happens when documents change?</h3>
                <p>
                    For a small collection, rebuilding the embedding index can
                    be the simplest reliable option. As the collection and
                    update rate grow, use an incremental pipeline and keep its
                    chunking and embedding parameters explicit.
                </p>
                <h3>How should complex spreadsheets be chunked?</h3>
                <p>
                    The speakers suggested preprocessing worksheets with tools
                    such as Pandas, then serializing cells with sentences and
                    separators that preserve their meaning. Prompt design still
                    matters because a model needs enough structure to understand
                    how the cells relate.
                </p>
                <h3>Where do artifacts and metadata live?</h3>
                <p>
                    Vertex AI Pipelines stored experiment artifacts in Cloud
                    Storage. Qdrant stored metadata alongside each chunk, making
                    it available for both semantic search and filtering beyond a
                    source filename.
                </p>
                <h3>How can a follow-up question retain context?</h3>
                <p>
                    The proposed options were to condense earlier turns or
                    include the prior conversation in the next prompt. Either
                    approach is bounded by the model&apos;s input length, and
                    the team described this part as work in progress.
                </p>
            </div>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>05 / Takeaway</p>
                <h2>Retrieval quality sets the ceiling</h2>
            </header>
            <div className="blog-body blog-opening">
                <p>
                    The most transferable lesson is procedural. Keep retrieval
                    and generation evaluations separate, change one part of the
                    pipeline at a time, and retain product-specific knowledge
                    even when one aggregate score moves down. Experiment three
                    is a good example: definition chunks mattered to users
                    despite a modest metric decline.
                </p>
                <p>
                    The next items proposed in 2024 were Gemini 1.5 Pro, Vertex
                    AI automatic side-by-side evaluation, and Vertex AI Vector
                    Search. Anyone implementing those ideas now should start
                    from current Google Cloud documentation rather than the
                    names and availability shown in the talk.
                </p>
                <p>
                    This is a revised bilingual migration of the
                    <ExternalLink href={sources.medium} locale="en">
                        original Medium article
                    </ExternalLink>
                    . The linked talk remains the primary source for
                    architecture and reported metrics.
                </p>
            </div>
        </section>
    </div>
);

const mediumEnglishBodyWithOriginalCover =
    '<figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*EHzvyfYTCSAsMYiQfmGKCw.jpeg" /><figcaption>Cover Image created with <a href="https://fastsdxl.ai/">https://fastsdxl.ai/</a> (prompt: `a rag for cleaning on a tabletop with a plant in a vase`, seed: `9219780`)</figcaption></figure><p>This is a summary based on the <a href="https://www.youtube.com/watch?v=KpWoxDrqrX8&amp;ab_channel=GoogleCloudEvents">recent Google Cloud tech talk</a> with <a href="https://www.generali.it/">Generali Italia</a>, which discusses how their machine learning team created a RAG pipeline for building a retrieval/querying system for their large enterprise documents.</p><p>This article serves as a summary of the key points of the talk, targetted for those who would like the gist without having to watch the full video. The pipeline may be similar to other articles, but they define their improvement stages as well as explain in detail how their system works in a lower level, which is quite a good reference for teams who want to build a RAG pipeline but are not sure where to start.</p><h3>Table of Contents</h3><ul><li>Introduction</li><li>Initial Architecture</li><li>Experiments</li><li>Final Architecture</li><li>Learnings</li><li>Q&amp;A</li></ul><h3>Initial Architecture</h3><figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*F6PXCQsOr2IHNiwhYsMNrA.png" /></figure><ul><li>Vertex AI</li><li>LangChain</li><li>Gemini and PaLM models</li><li>Qdrant</li></ul><p>As a GCP shop, they used mostly Google components, even for the LLM layer, but with Qdrant as their vector storage. Though towards the end of the talk they mentioned about attempting to use <a href="https://cloud.google.com/enterprise-search?hl=ja">Vertex AI Search</a> to save their embeddings.</p><h3>Evaluation</h3><figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*bU_cRXq4r9KR2f3QQPkAZA.png" /></figure><p>As with most RAG pipelines, the team divided their evaluation into <strong>retrieval </strong>and <strong>response</strong>. They mostly focused on different parameters for chunking in the experiments, but overall used pretty standard evaluation procedures to determine how well the pipeline returns the correct documents, as well as how it actually answers the users’ queries.</p><ul><li>Document Retrieval</li><li>Response (Q&amp;A)</li></ul><h3>Experiments</h3><p>The team explained how they iterated on different experiments to improve the pipeline, created the synthetic dataset, as well as the evaluation process.</p><h4>Experiment #1 (base case)</h4><figure><img alt="" src="https://cdn-images-1.medium.com/max/838/1*SbO7SSYYcSvn2CoETZHdlw.png" /><figcaption>Experiment #1 Chunk Lengths</figcaption></figure><p><strong>Status</strong></p><ul><li>Default value for chunk splitting</li><li>Fixed chunk size</li><li>Base embedding model</li><li>Default value for retriever</li></ul><p><strong>Results</strong></p><ul><li>Chunks Generated: 45K</li><li>No evaluation metrics (qualitative only)</li></ul><h4>Experiment #2</h4><figure><img alt="" src="https://cdn-images-1.medium.com/max/768/1*S3JCIi1q3-wP1drCS2WWvg.png" /><figcaption>Experiment #2 Recall Curve</figcaption></figure><p>From experiment #2 onwards, they created synthetic data for evaluation as well as use the diagram in [Initial Architecture] section</p><p><strong>Improvements</strong></p><ul><li>Split by paragraph</li><li>Tune values for chunk splitting</li><li>Multilingual embedding (embedding-multilingual)</li><li>Tune values for retriever</li></ul><p><strong>Results</strong></p><ul><li>Best chunk size: 1000</li><li>Chunks generated: 13,000</li></ul><p><strong>Metrics:</strong></p><ul><li><strong>Recall: 80.0%</strong> (15 documents)</li><li><strong>Q&amp;A Accuracy: 73.1%</strong></li></ul><h4>Experiment #3</h4><figure><img alt="" src="https://cdn-images-1.medium.com/max/738/1*-hLa4onsG4EfCjBLxAQqjg.png" /><figcaption>Experiment #3 Chunk Lengths and Recall Curve</figcaption></figure><p><strong>Improvements</strong></p><ul><li>Added chunks for definitions</li></ul><p><strong>Results</strong></p><ul><li>Best chunk size: 1000</li><li>Chunks generated: 17,000</li></ul><p><strong>Metrics:</strong></p><ul><li><strong>Recall: 78.0%</strong> (15 documents)</li><li><strong>Q&amp;A Accuracy: 72.5%</strong></li></ul><h4>Experiment #4</h4><figure><img alt="" src="https://cdn-images-1.medium.com/max/884/1*sil5raQhYkkFUtIv7sblSA.png" /></figure><p>From experiment #4, they observed that there is direct correlation between the performance of retrieval and the Q&amp;A accuracy</p><p><strong>Improvements</strong></p><p>&gt; Hybrid context retriever</p><ul><li>Multilingual embedding</li><li>BM25 (<a href="https://medium.com/@evertongomede/understanding-the-bm25-ranking-algorithm-19f6d45c6ce">more details here</a>)</li></ul><p><strong>Results</strong></p><ul><li>Best chunk size: 1000</li><li>Chunks generated: 17,000</li></ul><p><strong>Metrics:</strong></p><ul><li><strong>Recall: 84.0%</strong> (15 documents)</li><li><strong>Q&amp;A Accuracy: 76.0%</strong></li><li><strong>Q&amp;A Accuracy: 76.0%</strong></li></ul><h4>Experiment #5</h4><figure><img alt="" src="https://cdn-images-1.medium.com/max/886/1*RH8UrpLNKOkBeQMCO1EGgw.png" /></figure><p>In this experiment, the team referenced <a href="https://arxiv.org/abs/2307.03172">Lost-in-the-middle (Liu et al.)</a> where RAG tends to have lower accuracy from long documents when the context is in the middle of the document.</p><p><strong>Improvements</strong></p><ul><li>Context re-ranking using reranking LLM</li></ul><p><strong>Results</strong></p><ul><li>By ordering document-chunks in importance ascending order, LLM reaches better performances</li></ul><p>Metrics:</p><ul><li><strong>Recall: 84.0%</strong> (15 documents)</li><li><strong>Q&amp;A Accuracy: 77.9%</strong></li></ul><h4>Experiment #6</h4><figure><img alt="" src="https://cdn-images-1.medium.com/max/844/1*oZTWKGyvMYfzQmnVFYaZkw.png" /></figure><p><strong>Improvements</strong></p><ul><li>Larger document collection</li><li>Prompt engineering</li><li>PaLM v1 → PaLM v2</li></ul><p><strong>Results</strong></p><ul><li>Increase tool knowledge</li></ul><p><strong>Metrics:</strong></p><ul><li><strong>Recall: 69.0%</strong> (15 documents)</li><li><strong>PaLM v1 Q&amp;A Accuracy: 72.0%</strong></li><li><strong>PaLM v2 Q&amp;A Accuracy: 78.0%</strong></li></ul><h3>Final Architecture</h3><figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*sDVW3MpaMXEV4EMqkO6BRQ.png" /><figcaption>Final Architecture after Experiment #6</figcaption></figure><h3>Learnings &amp; Next Steps</h3><h4>Summary</h4><ul><li><strong>increased accessibility</strong> of internal knowledge for the company</li><li>opportunity to <strong>experiment cutting-edge AI</strong> technologies</li><li><strong>scalability &amp; reliability</strong> of Google’s infra</li><li><strong>sharing knowledge</strong> with Google Cloud engineers</li></ul><h4>Next Items to Consider</h4><ul><li>Try new Gemini Pro 1.5 models</li><li>Vertex AI Auto SxS for evaluation and benchmarking solutions</li><li>Trying <strong>Vertex AI Vector Search</strong> instead of using Qdrant</li></ul><h3>Q&amp;A Takeaways</h3><blockquote>1. How do you build a consistent test framework especially when you don’t have resources to collect a custom Q&amp;A dataset?</blockquote><ul><li>Ingesting chunks of paragraphs into LLM and creating a synthetic Q&amp;A dataset with the LLM</li><li>Note that a synthetic dataset needs to be checked for quality</li></ul><blockquote>2. What do you do when the documents get updated — do you rebuild the index?</blockquote><ul><li>You can just rebuild the index with the text embedding model every time if the document count is still small</li><li>The rule of thumb they found is once the document count gets big enough (which still depends on your use case), you can start to introduce pipelines for updating the index or the parameters (ex. — for chunking)</li></ul><blockquote>3. What was your approach to chunking?</blockquote><ul><li>Split by paragraph then sub-split using LangChain’s IterativeSplitter, with the goal that a single chunk is semantically-different to another one</li></ul><blockquote>4. Where do you store chunks of text in a gap Cloud Storage or BigQuery?</blockquote><ul><li>Using Vertex AI Pipelines, it saves all the artifacts on Cloud Storage</li></ul><blockquote>5. Best practices for chunking large table data such as complex spreadsheets with many sheets?</blockquote><ul><li>You can use libraries like Pandas to preprocess the cells of each sheet</li><li>The way you feed the LLM is also important, so you may need to instruct with a prompt</li><li>Can integrate sentences, separators, etc. to create something more semantically-valid for the LLM</li></ul><blockquote>6. How large was your validation set? How many Q&amp;A pairs?</blockquote><ul><li>2000 questions split into test/validation sets</li><li>Chunk lengths depend on the questions</li></ul><blockquote>7. How do you store the chunks with metadata other than the source file name?</blockquote><ul><li>Vector database (Qdrant) has a feature that can store and search through metadata for each chunk</li><li>You can run semantic search as well as filter based on metadata</li></ul><blockquote>8. How do you handle scenarios where a use asks a follow-up question that lacks context. (ex. — Question 1: What color is Ivan’s shirt? Question 2: What about Dominico’s?)</blockquote><ul><li>You can create a summary of the previous conversation or,</li><li>You can embed the entire previous conversation into the prompt</li><li>Depends on the length input that the LLM can accept, so it may be limited</li><li>This is still a work in progress for the team</li></ul>';

const mediumEnglishBody = mediumEnglishBodyWithOriginalCover.replace(
    /^<figure>.*?<\/figure>/,
    ""
);

const EnglishArticle = () => (
    <article
        className="blog-body blog-verbatim-article"
        dangerouslySetInnerHTML={{ __html: mediumEnglishBody }}
    />
);

const JapaneseArticle = () => (
    <div className="blog-notebook" lang="ja">
        <dl className="blog-facts">
            <div>
                <dt>出典</dt>
                <dd>Google Cloud講演</dd>
            </div>
            <div>
                <dt>事例</dt>
                <dd>Generali Italia</dd>
            </div>
            <div>
                <dt>文書</dt>
                <dd>イタリア語の社内資料</dd>
            </div>
            <div>
                <dt>評価</dt>
                <dd>検索 + Q&amp;A</dd>
            </div>
            <div>
                <dt>検証</dt>
                <dd>6段階</dd>
            </div>
        </dl>

        <div className="blog-body blog-opening">
            <p className="blog-lead">
                Generali
                Italiaは、社内文書を扱うアシスタントを「根拠を探す検索系」と「回答を組み立てる生成系」に分け、それぞれを別の指標で評価しました。
            </p>
            <p>
                この記事は、2024年3月に公開したMedium記事を、42分間の
                <ExternalLink href={sources.talk} locale="ja">
                    Google Cloud講演
                </ExternalLink>
                と照合して再構成したものです。
                <ExternalLink href={sources.generali} locale="ja">
                    Generali Italia
                </ExternalLink>
                のチームは、デフォルト設定から始め、段落単位の分割、ハイブリッド検索、再ランキング、文書集合の拡大へと進みました。各変更が検索の再現率と回答精度へどう影響したかを追っています。
            </p>
            <p>
                以下の製品名と利用可能な機能は、2024年2月時点の講演内容です。その後、Google
                Cloudのモデル名や検索製品の構成は変わっています。現在の環境で再現する場合は、最新の公式ドキュメントを確認してください。
            </p>
        </div>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>01 / アーキテクチャ</p>
                <h2>取り込みと推論を分ける</h2>
                <span>
                    再現可能なパイプラインで索引を作り、推論系で関連文書を検索して回答を構成します。
                </span>
            </header>
            <div className="blog-body blog-opening">
                <p>
                    初期構成では、実験とパイプラインにVertex
                    AI、文書処理とチェーン制御にLangChain、生成にGeminiとPaLM、ベクトルストアにQdrantを使用しました。元資料がイタリア語であるため、多言語エンベディングモデルを選んでいます。
                </p>
                <h3>取り込みと評価</h3>
                <p>
                    文書はCloud Storageに置き、Vertex AI
                    Pipelinesで取り込み、段落とサブチャンクへの分割、エンベディング、BM25索引の作成を実行します。評価は別パイプラインに分け、上位15文書での再現率とQ&amp;A精度を測定しました。採用したプロンプト、temperatureなどのパラメータは、推論系から参照できる成果物として保存します。
                </p>
                <h3>推論</h3>
                <p>
                    フロントエンドからバックエンドを呼び出し、そこで検索とプロンプト構成を行います。Qdrantはセマンティック検索とメタデータによる絞り込みを担い、Firestoreには会話履歴を保存します。検索したチャンクをコンテキストへ加え、モデルが回答と参照元を返す構成です。
                </p>
                <p>
                    講演では、独自に組んだ検索層の一部をVertex AI Vector
                    Searchへ置き換える案も挙がりました。当時Vertex AI
                    Searchと呼ばれていた製品は、現在
                    <ExternalLink href={sources.agentSearch} locale="ja">
                        Gemini Enterprise Agent PlatformのAgent Search
                    </ExternalLink>
                    へ展開されています。現在の名称と2024年の実装は分けて捉える必要があります。
                </p>
            </div>
        </section>

        <section className="blog-study-section blog-notes">
            <header className="blog-section-heading">
                <p>02 / 検証</p>
                <h2>6つの変更を順に試す</h2>
                <span>
                    数値は講演で報告されたものです。再現率は上位15文書を対象にしています。
                </span>
            </header>
            <ol>
                <Experiment number={1} metrics="45,000チャンク · 定性評価のみ">
                    <h3>デフォルト設定を基準にする</h3>
                    <p>
                        固定長の分割、基本のエンベディングモデル、検索器のデフォルト設定で索引を作りました。この段階では正式な評価データセットを用意していません。
                    </p>
                </Experiment>
                <Experiment
                    number={2}
                    metrics="13,000チャンク · 再現率80.0% · Q&A精度73.1%"
                >
                    <h3>段落単位で分け、検索器を調整する</h3>
                    <p>
                        合成質問を作成し、多言語エンベディングへ変更しました。チャンク分割と検索パラメータも調整し、この文書集合では1,000文字が最良でした。コンテキストへ渡すチャンク数は、およそ10件を超えると再現率の伸びが落ち着いています。
                    </p>
                </Experiment>
                <Experiment
                    number={3}
                    metrics="17,000チャンク · 再現率78.0% · Q&A精度72.5%"
                >
                    <h3>用語定義を明示的に追加する</h3>
                    <p>
                        保険用語と略語を説明する4,000チャンクを手作業で追加しました。全体指標はわずかに下がりましたが、用語の意味を答えることが製品要件だったため、この変更を残しています。
                    </p>
                </Experiment>
                <Experiment
                    number={4}
                    metrics="17,000チャンク · 再現率84.0% · Q&A精度76.0%"
                >
                    <h3>密検索と字句検索を組み合わせる</h3>
                    <p>
                        多言語エンベディングと
                        <ExternalLink href={sources.bm25} locale="ja">
                            BM25
                        </ExternalLink>
                        を組み合わせたハイブリッド検索へ移行しました。検索と回答の両方が大きく改善し、検索できない根拠は生成側でも補えないという観察を裏づけています。
                    </p>
                </Experiment>
                <Experiment number={5} metrics="再現率84.0% · Q&A精度77.9%">
                    <h3>コンテキストを再ランキングする</h3>
                    <p>
                        検索したチャンクを別のモデルで並べ替えてから生成へ渡しました。この検証は、長いコンテキストの中央にある情報をモデルが利用しにくい現象を示した
                        <ExternalLink
                            href={sources.lostInTheMiddle}
                            locale="ja"
                        >
                            Lost in the Middle
                        </ExternalLink>
                        を参照しています。講演では、重要度の高いチャンクを後方へ置く並びが報告されました。
                    </p>
                </Experiment>
                <Experiment
                    number={6}
                    metrics="再現率69.0% · PaLM 1 Q&A 72.0% · PaLM 2 Q&A 78.0%"
                >
                    <h3>文書集合を広げ、モデルを更新する</h3>
                    <p>
                        文書数の増加とプロンプト変更により検索条件は難しくなり、再現率は低下しました。一方、PaLM
                        1からPaLM
                        2への更新によって、報告された評価上の回答精度は改善しています。
                    </p>
                </Experiment>
            </ol>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>03 / 評価</p>
                <h2>合成データをそのまま信じない</h2>
                <span>
                    合成質問によって検証を進められますが、人による品質確認は必要です。
                </span>
            </header>
            <div className="blog-body blog-opening">
                <p>
                    チームは段落チャンクから質問と回答の組を生成し、学習、検証、テストに使う約2,000問を構成しました。正解データ不足を補う実用的な方法ですが、生成した評価セット自体を確認しなければ、測定対象と同じモデルの誤りを評価側でも繰り返すおそれがあります。
                </p>
                <p>
                    分割は段落境界を優先し、長い段落のみLangChainの反復型スプリッターで細分化しました。意味の異なる複数段落が1チャンクに混ざることを避ける設計です。1,000文字という結果は、この文書集合と質問群で得た値であり、あらゆるRAGに共通する初期値ではありません。
                </p>
                <p>
                    文書数が少ない間は、更新のたびにエンベディング索引を再構築する運用でも対応できます。更新量が増えた段階で、差分取り込みとパラメータ化したパイプラインを導入します。Vertex
                    AI Pipelinesの成果物はCloud
                    Storageへ保存し、Qdrantではチャンクごとのメタデータを保持して検索と絞り込みに利用しました。
                </p>
            </div>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>04 / 質疑応答</p>
                <h2>運用で生じる問い</h2>
                <span>
                    質疑応答では、文書更新、表データ、メタデータ、会話の文脈をどう扱うかが議論されました。
                </span>
            </header>
            <div className="blog-body blog-opening">
                <h3>文書が更新されたらどうするか</h3>
                <p>
                    文書集合が小さい間は、エンベディング索引を作り直す方法が単純で確実です。文書数と更新頻度が上がった段階で差分パイプラインを導入し、チャンク分割とエンベディングのパラメータを明示的に管理します。
                </p>
                <h3>複雑なスプレッドシートをどう分割するか</h3>
                <p>
                    Pandasなどで各シートを前処理し、セル同士の意味が残るよう文章や区切り文字を加えて直列化する案が示されました。セルの関係をモデルが読める構造にするには、入力時のプロンプト設計も必要です。
                </p>
                <h3>成果物とメタデータをどこへ保存するか</h3>
                <p>
                    Vertex AI Pipelinesは実験成果物をCloud
                    Storageへ保存します。Qdrantではチャンクと一緒にメタデータを保持できるため、ファイル名以外の条件でもセマンティック検索と絞り込みができます。
                </p>
                <h3>補足質問の文脈をどう維持するか</h3>
                <p>
                    それまでの会話を要約する方法と、会話全体を次のプロンプトへ含める方法が挙げられました。どちらもモデルの入力長に制約され、この部分は検討中と説明されています。
                </p>
            </div>
        </section>

        <section className="blog-study-section">
            <header className="blog-section-heading">
                <p>05 / 要点</p>
                <h2>回答精度の上限は検索で決まる</h2>
            </header>
            <div className="blog-body blog-opening">
                <p>
                    この事例から持ち帰れるのは、個別の数値より検証の進め方です。検索と生成を別々に測り、変更点を一つずつ増やし、総合指標が少し下がっても製品に必要な知識は残します。検証3の用語チャンクは、その判断をよく示しています。
                </p>
                <p>
                    2024年時点の次候補はGemini 1.5 Pro、Vertex AI Auto
                    SxS、Vertex AI Vector
                    Searchでした。現在これらを試す場合は、講演当時の名称や提供状況ではなく、最新のGoogle
                    Cloudドキュメントを出発点にする必要があります。
                </p>
                <p>
                    本稿は
                    <ExternalLink href={sources.medium} locale="ja">
                        Medium版の記事
                    </ExternalLink>
                    を日英で再編集したものです。アーキテクチャと指標の一次資料は、リンク先の講演です。
                </p>
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
                    { property: "article:published_time", content: post.date },
                    { property: "og:image", content: post.cover.src },
                ]}
            />
            <PostHero post={post} locale={locale} />
            {locale === "ja" ? <JapaneseArticle /> : <EnglishArticle />}
        </BlogLayout>
    );
};

export default injectIntl(Post);
