import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHeader from "../../components/blog/post-header";
import TestVideo from "../../components/blog/test-video";
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
        <div className="blog-notebook blog-rich-commentary">
            <section
                className="blog-body blog-opening"
                aria-labelledby="film-heading"
            >
                <Figure
                    src={media.poster}
                    alt={
                        ja
                            ? "暗い部屋で画材と半透明のインターフェースに囲まれたアニメーターを描く『手描き』の縦長ポスター"
                            : "Tegaki portrait poster showing the animator in a dark room with drawing tools and translucent interface panels"
                    }
                    caption={
                        ja
                            ? "『手描き』のポートレート・ポスター。"
                            : "Portrait poster for Tegaki."
                    }
                />
                <TestVideo
                    src={media.finalFilm.video}
                    poster={media.finalFilm.poster}
                    title={
                        ja
                            ? "英語字幕付き完成・公開版『手描き』"
                            : "Tegaki, completed and released English-subtitled film"
                    }
                    fallback={
                        ja
                            ? "英語字幕付き完成・公開版の映像を読み込めませんでした。"
                            : "The completed and released English-subtitled film could not be loaded."
                    }
                    muted={false}
                />
                <p className="blog-media-caption">
                    {ja
                        ? "完成・公開版。英語字幕は映像に焼き込まれています。"
                        : "Completed and released version. English subtitles are burned into the picture."}
                </p>
                <h2 id="film-heading">
                    {ja ? "『手描き』とは何か" : "What Tegaki means"}
                </h2>
                <p>
                    {ja
                        ? "『手描き』は日本語で hand-drawn を意味します。この短編は、AIによって大きく変わった芸術の世界を生きるアニメーターの話です。彼女はAIと自動化を強く拒み、配信で絵を見せる彼女の観客も同じ考えを持っています。"
                        : "Tegaki means hand-drawn in Japanese. The short follows an animator trying to live in an artistic world already changed by AI. She strongly rejects AI and automation, and much of the audience watching her drawing streams shares that position."}
                </p>
                <p>
                    {ja
                        ? "彼女の親友は機械学習エンジニアです。散らかった部屋で夜遅くまで働く彼女を見て、エンジニアの友人は自動化できる作業があると考えます。友人は彼女の絵を使って、本人のコンピューター上で、外部に公開せずに試します。しかし、本人の同意はありません。助けのつもりの行為が二人を衝突させます。"
                        : "Her best friend is a machine-learning engineer. Seeing the animator work late in a messy room, the engineer notices parts of the workload that could be automated. She experiments with the animator's drawings privately on the animator's own computer, without distributing them. But the animator did not consent. An attempt to help becomes a fight."}
                </p>
                <p>
                    {ja
                        ? "その後、アニメーターは自分でツールを一度試します。関連するタブを閉じ忘れたまま配信を始めたことで、視聴者はAIツールに気づきます。疑いはすぐに、以前からAIを使っていたはずだという決めつけへ変わります。コメントは説明より速く流れ、彼女は配信を途中で止めます。それでも疑いと嫌がらせは続き、やがて仕事にも影響します。"
                        : "Later, the animator tries the tool herself once and accidentally leaves the relevant tab visible during a stream. Viewers notice it. The suspicion quickly becomes an assumption that she must have been using AI all along. Comments arrive faster than she can explain. She stops the stream midway, but the accusation and harassment continue and eventually reach her professional work."}
                </p>
                <p>
                    {ja
                        ? "彼女は、自分がもうAIアーティストだと思われているなら、そのAIで、AI使用を疑われたことでネット上の誹謗中傷を受けた人の映画を作ろうと決めます。彼女の映画では主人公が男性になり、その映画はAI映画祭へ提出されます。私が『手描き』を作り、映画の中で彼女が別の『手描き』を作る。性別を変えた反復が、その入れ子を見える形にします。"
                        : "Finally, she decides that if everyone already sees her as an AI artist, she will use the technology to make a film about someone cyberbullied after being accused of using AI. Her film has a male protagonist and is submitted to an AI film festival. I made Tegaki, and inside it she makes another Tegaki. The gender change makes the repetition visible."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="origin-heading"
            >
                <div className="blog-rich-section-label">
                    A / {ja ? "古い脚本" : "THE OLD SCREENPLAY"}
                </div>
                <h2 id="origin-heading">
                    {ja
                        ? "この短編は、最初からAI映画ではなかった"
                        : "The short did not begin as an AI film"}
                </h2>
                <p>
                    {ja
                        ? "『手描き』は、2023年末から2024年初めごろに書いた長編脚本の転用です。元の主人公は、エンジニアからアニメーション監督へ転身した、過労の監督でした。夢だった仕事に入っても、上司の細かな介入と管理・マーケティング上の要求で、創作の自由は失われていきます。元の物語では飲酒が悪化し、身体を壊しても夢を手放せず、最後には病院のベッドで死に近づきます。うまくいった独立映画の人生は、彼女が見た幻でした。"
                        : "Tegaki is a repurposing of a feature screenplay I wrote around late 2023 to early 2024. The original protagonist was an overworked animation director who had moved from engineering into animation. Even after reaching the work she dreamed of, micromanagement and management and marketing demands stripped away her creative freedom. In that version, her drinking worsens, she cannot leave the dream even as her health fails, and she approaches death in a hospital bed. The successful independent filmmaking life was a hallucination."}
                </p>
                <Figure
                    src={media.original.poster}
                    alt={
                        ja
                            ? "日本語タイトルと2人のキャラクターを描いた手描きアニメーションポスター"
                            : "Hand-drawn animation poster with two illustrated characters and Japanese title lettering."
                    }
                    caption={
                        ja
                            ? "手描きによるオリジナルポスター。"
                            : "Original hand-drawn poster artwork."
                    }
                />
                <p>
                    {ja
                        ? "長編の中心には、エンジニアに残った親友との関係もありました。友人は、夢が彼女を壊しているなら、なぜそこに留まるのかと問い続けます。それでも彼女を支え続けます。新しい短編では、工学とアニメーションの対立が、自動化、AI、創作労働、同意の問題へ置き換わりました。キャラクターの一部のデザインと過去も、元の企画から受け継いでいます。"
                        : "The feature was also built around her friendship with an engineer who kept asking why she stayed in a dream that was destroying her, while continuing to support her. In the short, engineering and animation become a conflict about automation, AI, creative labor, and consent. Some character designs and backstory were also carried over from the original project."}
                </p>
                <TestVideo
                    src={media.original.timingAnimatic.video}
                    poster={media.original.timingAnimatic.poster}
                    title={
                        ja
                            ? "オリジナル『手描き』のCTタイミング・アニマティック"
                            : "Original Tegaki CT timing animatic"
                    }
                    fallback={
                        ja
                            ? "オリジナルのCTタイミング・アニマティックを読み込めませんでした。"
                            : "The original CT timing animatic could not be loaded."
                    }
                    muted={false}
                />
                <p className="blog-media-caption">
                    {ja
                        ? "オリジナルのCTタイミング・アニマティック、17分2秒。"
                        : "Original CT timing animatic, 17 minutes 2 seconds."}
                </p>
                <p>
                    {ja
                        ? "その長編には、私が長く関わった企画を手放さなければならなかった経験の感情も流れています。権利や組織の事情を理解していても、自分の人生を注ぎ込んだ作品を失う痛みは消えません。必要な資金を集められず、脚本は数年眠りました。その後、AIをめぐる自分の矛盾が、このタイトルに新しい場所を与えました。"
                        : "The feature also carried the feelings from losing a project I had spent years developing. Understanding rights and organizational realities does not remove the pain of losing work into which I had poured my life. I could not secure the funding to make it, so the screenplay stayed parked for years. My own contradiction around AI later gave the title a new place to exist."}
                </p>
                <Figure
                    src={media.original.characters}
                    alt={
                        ja
                            ? "6人のキャラクター名を添えた手描きキャラクターデザインシート"
                            : "Hand-drawn character design sheet showing six labeled characters."
                    }
                    caption={
                        ja
                            ? "オリジナルの手描きプロジェクトのキャラクターデザインシート。"
                            : "Character design sheet for the original hand-drawn project."
                    }
                />
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="contradiction-heading"
            >
                <div className="blog-rich-section-label">
                    B / {ja ? "二つの立場" : "TWO POSITIONS"}
                </div>
                <h2 id="contradiction-heading">
                    {ja
                        ? "手で学んだ人間として、機械を使う"
                        : "Using machines as someone who learned by hand"}
                </h2>
                <p>
                    {ja
                        ? "私は伝統的なアーティストであり、同時に本業では機械学習エンジニアです。解剖学、描画、アニメーション、脚本、絵コンテ、映画制作を何年も学んできました。Stable Diffusionや生成動画のシステムが現れたとき、エンジニアとしての興味だけでなく、アーティストとして、これまで学んだことは何だったのかという恐れを感じました。何かを作りたくない月もありました。"
                        : "I am a traditional artist and a machine-learning engineer in my day job. I spent years learning anatomy, drawing, animation, screenwriting, storyboarding, and filmmaking. When Stable Diffusion and generative video systems appeared, I felt more than engineering interest. As an artist, I feared that the years of learning these foundations might become pointless. There were months when I barely wanted to make anything."}
                </p>
                <p>
                    {ja ? (
                        <>
                            <a
                                href="https://5rps.jp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="5RPSのウェブサイト"
                            >
                                5RPS
                            </a>
                            は、私が脚本、監督、制作、資金を自分で担う長編映画です。ベンチャーキャピタルをだますテック系創業者たちを描いています。二つの仕事の外で、アーティストやスタジオ、声優、作曲家に自分の貯金から支払いながら、約2分の予告編に一年を使いました。背景が大きなボトルネックになったとき、予算と時間を考え、背景の一部にGeminiを使うことを決めました。利用は公開しました。
                        </>
                    ) : (
                        <>
                            <a
                                href="https://5rps.jp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="5RPS website"
                            >
                                5RPS
                            </a>{" "}
                            is a feature film that I write, direct, produce, and
                            fund myself. It is about tech-bro founders scamming
                            venture capitalists. Around a day job, I spent a
                            year making a roughly two-minute trailer, paying
                            artists, studios, voice actors, and composers from
                            my savings. When backgrounds became a major
                            bottleneck, I decided to use Gemini for some of them
                            because the budget and time were running out. I was
                            open about that use.
                        </>
                    )}
                </p>
                <p>
                    {ja
                        ? "予告編への反応は、AIが一部で使われたという一点で変わりました。人が描き、手を入れ、複数の作り手と調整し、対価を支払った一年分の工程は見えなくなりました。さらに、私が知るアニメーターがAIを試したことで、知人から遮断され、コミュニティを離れざるを得なくなった経験も聞きました。私はその人の名前や具体的な仕事をここでは出しません。"
                        : "The trailer's reception changed around the single fact that AI had been used somewhere. A year of drawing, cleanup, coordination with other artists, and payment disappeared from view. I also heard about an animator I know who was blocked by people they knew after experimenting with AI and had to find new communities. I will not identify that person or their specific work here."}
                </p>
                <p>
                    {ja
                        ? "だから『手描き』はAI賛成か反対かを決める映画ではありません。学習データ、環境負荷、仕事、安くなる生成が創作労働に与える影響について、怒りや懸念があることは理解しています。同時に、私はこの技術を理解し、使い、そこから傷つきもしました。二つの立場を同時に生きていることが、この映画の核です。"
                        : "Tegaki is therefore not a film that settles whether AI is good or bad. I understand the anger and concern around training data, environmental cost, jobs, and what cheap generation does to creative labor. At the same time, I understand the technology, use it, and have been hurt by it. Living in both positions is at the center of this film."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="deadline-heading"
            >
                <div className="blog-rich-section-label">
                    C / {ja ? "一日から一か月へ" : "ONE DAY INTO A MONTH"}
                </div>
                <h2 id="deadline-heading">
                    {ja
                        ? "車の中で始まった映画"
                        : "A film that began in the car"}
                </h2>
                <p>
                    {ja ? (
                        <>
                            Json
                            CunananからHiggsfieldがAI映画祭を開くと聞き、最初は一日だけのハッカソンを考えました。8月半ば、
                            <a
                                href="https://5rps.jp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="5RPSのウェブサイト"
                            >
                                5RPS
                            </a>
                            の制作を二週間だけ止めて、絵コンテの練習をするつもりでした。Json
                            Cunananのいるつくばへ向かう約1時間半の車内で、私はChatGPT
                            Voiceを文字起こしと会話相手として使い、ジャンルから考え始めました。やがて、すでに『手描き』があることに気づき、元の脚本、自分の反発、私が知るアニメーターの経験を一つの短編に結びました。到着した時にはビートがあり、Json
                            Cunananに話すと、彼は気に入ってくれました。
                        </>
                    ) : (
                        <>
                            When Json Cunanan told me Higgsfield was running an
                            AI film festival, I imagined a one-day hackathon.
                            Around mid-August, I planned to pause my work on{" "}
                            <a
                                href="https://5rps.jp/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="5RPS website"
                            >
                                5RPS
                            </a>{" "}
                            for two weeks and use the deadline to practice
                            storyboarding. During the roughly hour-and-a- half
                            drive to Json Cunanan's place in Tsukuba, I used
                            ChatGPT Voice as a transcriber and conversational
                            notebook. I began with genre, then realized I
                            already had Tegaki. I joined the old screenplay, my
                            backlash, and the experience of an animator I know
                            into one short. I arrived with the beats, and Json
                            Cunanan liked the idea.
                        </>
                    )}
                </p>
                <p>
                    {ja
                        ? "一日で完成させる計画はすぐに壊れました。最初は自分の絵を入力できないと誤解し、約2時間かけて生成だけでキャラクターを設計しました。ビートをCodexに渡して、ビートごとにSeedanceの映像を一本作ればよいとも考えました。しかしビートはショットではありません。一つのビートに含まれる情報、感情、視点、リズムを一本へ押し込めた映像は、急ぎ足でつながりませんでした。"
                        : "The one-day plan collapsed quickly. We initially misunderstood the rules as not allowing our own drawings, so we spent about two hours developing characters through generation alone. I also thought we could give the beats to Codex, turn each beat into a Seedance prompt, generate one video per beat, and assemble the film. But a beat is not a shot. Compressing its information, emotion, perspective, and rhythm into one clip made a rushed, incoherent movie."}
                </p>
                <p>
                    {ja
                        ? "帰宅後、Codexに脚本を書かせる試みもしました。形式は整っていても、感情がありませんでした。編集しているうちに、私がほとんど書き直していると気づき、脚本は自分で完成させました。AIには整形、翻訳、整理、後の分解を手伝ってもらいましたが、ドラマとしての脚本と演出は人が引き受ける必要がありました。"
                        : "At home, I tried asking Codex to write the screenplay. It was clean and logical, but emotionally empty. As I edited it, I realized I was rewriting almost everything, so I finished the screenplay myself. AI helped with formatting, translation, organization, and later decomposition, but the dramatic screenplay and direction still had to be mine."}
                </p>
                <p>
                    {ja
                        ? "元は11、12ほどあったシーンを、二週間で終えられる6つの短いシーンへ圧縮しました。3Dのラフな環境やラフ絵コンテも試しましたが、生成結果は入力の粗さをそのまま受け取り、画面が平たくなりました。Json Cunananは試行を続け、きれいな背景プレートが環境を定める効率のよい方法だと見つけました。私が絵コンテを省いてテキストだけで進めると、技術的には速くても、映画のペースは悪くなりました。"
                        : "The screenplay had roughly eleven or twelve scenes, so I compressed it into six shorter scenes that could fit the schedule. We also tried rough 3D environments and rough storyboard frames, but generations followed their limitations too literally and became flat. Json Cunanan kept testing and found clean background plates to be an efficient way to establish environments. When I tried removing storyboards and moving by text alone, it was technically faster but the pacing became worse."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="animatic-heading"
            >
                <div className="blog-rich-section-label">
                    D / {ja ? "アニマティック" : "THE ANIMATIC"}
                </div>
                <h2 id="animatic-heading">
                    {ja
                        ? "アニマティックを唯一の基準にする"
                        : "Make the animatic the single source of truth"}
                </h2>
                <p>
                    {ja
                        ? "この失敗で、絵コンテはモデルへの入力画像ではなく、演出そのものだと分かりました。情報をいつ渡すか、人物をどこに置くか、視線と画面の側をどうするか、反応にどれだけ時間を与えるか。これらはテキストだけでは自動的に映画になりません。私は全編を最後までつないだエンドツーエンドのアニマティックを作り、各ショットのプロンプトと制作情報を対応させました。"
                        : "That failure showed me that a storyboard is not merely an input image for a model. It is where direction happens. When information arrives, where a character stands, which way the eyeline and camera face, and how long a reaction lasts do not automatically become a film through text. I built an end-to-end animatic and matched every shot to its prompt and production information."}
                </p>
                <p>
                    {ja
                        ? "アニマティックには、一つ前と一つ後のカット、尺、間、芝居の意図がありました。必要なら、すでに使える映像を取り込み、その尺に合わせて組み替えました。Json Cunananは抽象的なビートではなく、時間のある設計図を見て、生成、編集、ポスト処理を進められました。本業が忙しくなった私が演出に必要な判断へ集中できたのは、この分担があったからです。"
                        : "The animatic contained the preceding and following shots, duration, pauses, and performance intention. When footage was good enough, I incorporated it and adjusted the timing around it. Json Cunanan could work from a timed blueprint instead of abstract beats, then carry out generation, editing, and post-processing. As my day job became busier, this division let me focus on the judgments that required direction."}
                </p>
                <p>
                    {ja
                        ? "これはAI以前に一人で映画を作っていた方法にも戻っています。絵コンテを描き、自分で仮の声を録り、仮の音楽と効果音を置き、最初から最後までの粗い映画を作る。『手描き』ではElevenLabsで仮のキャラクター音声を作り、タイミングと台詞の間を確認しました。粗い素材を後で置き換えるために、映画全体を先に作るのです。"
                        : "The method also returned to how I made films alone before AI. I drew boards, recorded temporary voices, added rough music and sound, and built a rough film from beginning to end. For Tegaki, I used ElevenLabs for temporary character voices so I could hear timing and pauses. The point was to build the whole film first, then replace rough parts progressively."}
                </p>
                <p>
                    {ja
                        ? "脚本がドラマを決め、絵コンテが画面を決め、アニマティックが時間を決める。そこへプロンプト、プレート、キー、動画モデルが入ります。『映画を作って』ではなく、『この映画のこのショットを作って』と頼める状態にしたことで、生成映像は初めて映画の材料として扱えるようになりました。"
                        : "The screenplay established the drama, the storyboard established the visual storytelling, and the animatic established time. Prompts, plates, keyframes, and video models operated inside those decisions. Instead of asking for a movie, we could ask for this specific shot in this film. That was when generated footage became usable as film material."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="division-heading"
            >
                <div className="blog-rich-section-label">
                    E / {ja ? "分担と仕上げ" : "DIVISION AND FINISHING"}
                </div>
                <h2 id="division-heading">
                    {ja
                        ? "手で画面を読み、試行を増やす"
                        : "Read the frame by hand, increase the attempts"}
                </h2>
                <p>
                    {ja
                        ? "Json Cunananはワークフローを調査し、背景プレートの方法を見つけ、プロンプトを磨き、多くの生成とポスト処理を担当しました。素材の編集とペースの整理、後半のカット、最終的な音楽と編集も彼が主導しました。私は物語、脚本、書き直し、絵コンテ、全編のアニマティック、ペース、ショットの意図、レビューと最終選択を担いました。"
                        : "Json Cunanan researched workflows, found the plate approach, refined prompts, and handled much of the generation and post-processing. He edited material, cleaned up pacing, assembled later cuts, and led the final music and edit. I owned the story, screenplay, rewrites, storyboard, end-to-end animatic, pacing, shot intention, reviews, and final selection."}
                </p>
                <p>
                    {ja
                        ? "終盤の約3日間、Json Cunananが自分の仕事で手を離していたため、私は生成を見直し、Higgsfieldのクレジットを自分で追加し、足りないカットや使えないカットを作り直しました。何度も生成する代わりに、フリーズフレームで時間を直すこともありました。私が進められるところまで押し、彼へ戻して、残りのカット、編集、ペースの整理を進めてもらいました。完成まで、レビューと修正を繰り返しました。"
                        : "For roughly the final three days, Json Cunanan was busy with his own work, so I reviewed generations, topped up Higgsfield credits with my own money, and generated replacements for missing or unusable shots. Sometimes I repaired timing with freeze frames rather than endlessly regenerating. After pushing the material as far as I could, I handed it back to him for remaining shots, editing, and pacing cleanup. We reviewed and revised the film repeatedly."}
                </p>
                <p>
                    {ja
                        ? "音楽では、私は感情と配置を監督しました。もっと抑えたピアノの響きがほしい、どの映画の空気を見てほしい、この場面には音楽を置かない、と伝えました。音楽の理論と技術に長けたJson CunananはSunoで候補曲を作り、私は車の中で聴いて、シーンに割り当てる曲と空白を選びました。彼が最終的な音楽生成と編集への統合を進めました。"
                        : "For music, I directed the emotion and placement. I described a muted piano quality, shared cinematic references, and said when a scene should have no music. Json Cunanan, with stronger formal musical knowledge, generated candidate tracks in Suno. I listened in the car and chose what belonged in each scene, including the empty spaces. He led the final music generation and integration into the edit."}
                </p>
                <p>
                    {ja
                        ? "配信、チャット、通知、翻訳、嫌がらせの画面は、生成モデルに任せられませんでした。正確な文字とタイミングが、彼女が会話の主導権を失う速度を伝えるからです。私は観客コメント、チャット、通知、翻訳などのUIを手で組み、動かしました。これはAI生成の上に載せた、従来のコンポジットとモーショングラフィックスです。"
                        : "The livestream, chat, notifications, translations, and harassment screens could not be left to the generation model. Exact text and timing show how quickly she loses control of the conversation. I built and animated the audience comments, chat, notifications, translations, and other UI by hand. This was traditional compositing and motion graphics inside a machine-assisted production."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="lesson-heading"
            >
                <div className="blog-rich-section-label">
                    F / {ja ? "監督の仕事" : "THE DIRECTOR'S WORK"}
                </div>
                <h2 id="lesson-heading">
                    {ja
                        ? "AIは演出の仕事を消さなかった"
                        : "AI did not remove the work of directing"}
                </h2>
                <p>
                    {ja
                        ? "制作のたびに、工程を減らそうとしました。ビートをプロンプトにできるか。Codexに脚本を書かせられるか。脚本からショットを作れるか。絵コンテを省けるか。3Dやプレートで描く量を減らせるか。人の方向づけを減らすほど、映画は悪くなりました。感情のない脚本、一つのビートに一本の映像、平たい3D、悪いペース。驚くべき素材を作れても、モデルは私がどんな映画を望むかを自動では知りません。"
                        : "At every stage, I tried to remove a step. Could beats become prompts? Could Codex write the screenplay? Could scenes become shots? Could I skip storyboards? Could 3D or plates reduce the drawing? Each time we removed too much human direction, the film became worse. The screenplay lost emotion, one clip per beat lost storytelling, 3D became flat, and pacing failed. A model can make astonishing material, but it does not automatically know what film I want."}
                </p>
                <p>
                    {ja
                        ? "基礎を戻すと、AIは使いやすくなりました。脚本でドラマを書き、絵コンテでショットを切り、アニマティックで時間を決め、カメラ、パース、ポーズ、演技、連続性を見ます。生成結果が間違っていると分かるのは、その必要を理解しているからです。きれいな映像が3秒長いと分かるのも、反応の間を知っているからです。"
                        : "The tools became more useful when I restored the foundations. I wrote the drama in the screenplay, cut shots in the storyboard, set time in the animatic, and judged camera, perspective, pose, acting, and continuity. I can recognize a wrong generation because I understand what the shot needs. I can recognize a beautiful clip that is three seconds too long because I understand the pause of a reaction."}
                </p>
                <p>
                    {ja
                        ? "私の現在の考えは、伝統的な技術が無意味になったというものではありません。むしろ、脚本、絵コンテ、描画、アニメーション、編集、演技、音楽を知るほど、道具を正確に使えます。道具は試行の幅を増やし、基礎知識は判断を与えます。小さな独立チームには強い組み合わせですが、学習データ、環境、雇用、労働の価値をめぐる問題を消すものではありません。"
                        : "My current position is not that traditional skill has become irrelevant. The better I understand screenwriting, storyboarding, drawing, animation, editing, acting, and music, the more precisely I can use the tools. Tools provide leverage, while foundational knowledge provides judgment. That is powerful for a tiny independent team, but it does not erase the questions around training data, the environment, employment, or the value of labor."}
                </p>
                <p>
                    {ja
                        ? "『AIを使ったか』だけでは、制作の面白さを説明できません。誰が何を決め、どの部分を道具に任せ、どこで人が画面の責任を引き受けたのか。『手描き』では、その往復が制作方法であると同時に、映画の主題になりました。"
                        : "Whether AI was used does not explain the interesting part of a production. The useful questions are who made which decisions, what was delegated to a tool, and where a person took responsibility for the frame. In Tegaki, that exchange became both the production method and the subject of the film."}
                </p>
            </section>

            <section
                className="blog-rich-media-section blog-body"
                aria-labelledby="ending-heading"
            >
                <div className="blog-rich-section-label">
                    G / {ja ? "完成" : "FINISHING"}
                </div>
                <h2 id="ending-heading">
                    {ja
                        ? "一日だったはずの映画を、約一か月で"
                        : "A one-day film, finished in roughly a month"}
                </h2>
                <p>
                    {ja
                        ? "Higgsfieldが映画祭の締切をさらに二週間延長してくれたことで、最初は一日のハッカソンだったものが、最終的に約一か月の制作になりました。二つの仕事を抱えながらの制作で、延長は大きな助けでした。Json Cunananと私はレビューし、決め、最後の素材を統合し、完成版を一緒に届けました。"
                        : "Higgsfield extended the festival deadline by another two weeks, so what began as a one-day hackathon became roughly a month of production. We made it around two day jobs, and the extension helped enormously. Json Cunanan and I reviewed, decided, merged the final material, and delivered the finished film together."}
                </p>
                <p>
                    {ja
                        ? "映画の主題も制作方法も、簡単な結論には戻りません。AIを嫌うアニメーターが、AIを使って自分の経験を映画にする。映画の中で彼女が別の映画を作り、AI映画祭へ提出する。私も同じ矛盾の中でこの映画を作りました。再帰の終わりにあるのは、議論の勝敗ではなく、一本を作り終える行為です。"
                        : "Neither the subject nor the method returns to an easy conclusion. An animator who hates AI uses it to make a film about her experience. Inside that film she makes another film and submits it to an AI film festival. I made this film inside the same contradiction. At the end of the recursion is not a victory in an argument, but the act of finishing one film."}
                </p>
                <p>
                    {ja
                        ? "まだ直せる箇所はあります。生成映像の不整合も残っています。それでも、完成して、英語字幕を付けて、映画祭のために公開できたことがうれしい。最初は一日だけのつもりだった映画が、約一か月と二人の判断を経て、ここまで来ました。『手描き』を作り終え、Higgsfield映画祭へ送り出せたことを、私は本当に幸せに思います。"
                        : "There are still places I could improve, and generated inconsistencies remain. Even so, I am happy that the film is complete, subtitled in English, and released for the festival. The film that was supposed to take one day made it here through roughly a month and the judgment of two people. I am genuinely happy that Tegaki is finished and released for the Higgsfield film festival."}
                </p>
            </section>
        </div>
    );
};

const JapaneseArticle = EnglishArticle;

const Post = ({ intl }) => {
    const locale = intl.locale || "en";
    const post = getPost("tegaki-director-commentary");
    const content = post.translations[locale] || post.translations.en;

    return (
        <BlogLayout article>
            <SEO
                title={content.title}
                lang={locale}
                description={content.summary}
                meta={[{ property: "og:type", content: "article" }]}
            />
            <header className="blog-article-header blog-body">
                <PostHeader post={post} locale={locale} />
            </header>
            {locale === "ja" ? (
                <JapaneseArticle locale={locale} media={post.media} />
            ) : (
                <EnglishArticle locale={locale} media={post.media} />
            )}
        </BlogLayout>
    );
};

export default injectIntl(Post);
