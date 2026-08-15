import React, { useState } from "react";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHero from "../../components/blog/post-hero";
import TestVideo from "../../components/blog/test-video";
import { DirectingReferenceSeriesNavigation } from "../../components/blog/article-navigation";
import SEO from "../../components/seo";
import { getPost } from "../../blog/posts";

const PreparedImage = ({
    src,
    alt,
    fallback,
    className = "blog-part3-image",
    loading = "lazy",
}) => {
    const [failed, setFailed] = useState(false);

    if (!src || failed) {
        return (
            <div className={`${className} blog-media-fallback`} role="status">
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
            onError={() => setFailed(true)}
        />
    );
};

const Facts = ({ locale }) => {
    const facts =
        locale === "ja"
            ? [
                  ["制作記録", "最初の6日間"],
                  ["Git", "88 commits"],
                  ["構成", "13 scenes"],
                  ["ショット設計", "94 shots"],
                  ["Scene 1 ラフ", "47 boards"],
              ]
            : [
                  ["Production log", "First 6 days"],
                  ["Git history", "88 commits"],
                  ["Structure", "13 scenes"],
                  ["Shot design", "94 shots"],
                  ["Scene 1 roughs", "47 boards"],
              ];

    return (
        <dl className="blog-facts blog-part3-facts">
            {facts.map(([term, value]) => (
                <div key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                </div>
            ))}
        </dl>
    );
};

const SectionHeading = ({ number, title, note }) => (
    <header className="blog-section-heading">
        <p>{number}</p>
        <h2>{title}</h2>
        {note ? <span>{note}</span> : null}
    </header>
);

const Figure = ({ src, alt, fallback, caption, className }) => (
    <figure className="blog-part3-figure">
        <PreparedImage
            src={src}
            alt={alt}
            fallback={fallback}
            className={className}
        />
        <figcaption className="blog-media-caption">{caption}</figcaption>
    </figure>
);

const VideoFigure = ({ media, title, fallback, caption, className }) => (
    <figure className={`blog-part3-video ${className || ""}`}>
        <TestVideo
            src={media.video}
            poster={media.poster}
            title={title}
            fallback={fallback}
        />
        <figcaption className="blog-media-caption">{caption}</figcaption>
    </figure>
);

const EnglishArticle = ({ media }) => (
    <div className="blog-notebook blog-part3">
        <Facts locale="en" />

        <div className="blog-body blog-opening">
            <p className="blog-lead">
                This idea began a few years ago, before other projects moved into
                production. I am returning to it now as a short film for an
                upcoming deadline, while 5 Requests Per Second pauses for a few
                weeks. The story is inspired by being in the middle of
                engineering (especially machine learning) and animation.
            </p>
            <p>
                I am making this film with{" "}
                <a
                    href="https://www.instagram.com/jsonmathsai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="@jsonmathsai on Instagram"
                >
                    @jsonmathsai
                </a>
                . The short is a psychological drama set inside contemporary
                animation production. It is being made with hand-drawn planning,
                character and spatial design, image and video models, and a local
                production system built around the repository. This is not a
                statement that one side has won. It is a record of trying to make
                those methods answer to the same direction.
            </p>
            <p>
                The numbers above come from the first six days of the production
                repository, from August 10 to 15. They measure activity, not a
                finished film. The useful part of the record is how each stage
                changed the next one.
            </p>
        </div>

        <section className="blog-study-section" id="first-moving-shot">
            <SectionHeading
                number="00 / Video production"
                title="The drawings and the model move together"
                note="Three hand-drawn opening boards became the first fifteen-second finished moving sequence."
            />
            <VideoFigure
                media={media.openingShot}
                title="Opening shots one through three"
                fallback="The first finished moving sequence could not be loaded."
                caption="The first finished moving sequence: three shots, 15.07 seconds, with sound. Nozomi’s turn and the empty chair at the cut carry the performance planned in the boards."
                className="blog-part3-main-video"
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    The first moving result covers Nozomi waking at her desk after
                    an all-nighter. Three manual drawings establish the wide,
                    overhead close view, and reverse. They also establish what the
                    finished video must not change: the desk, curtain, paper,
                    drawing tablet, phone, wine, her sleeping posture, and the
                    emotional delay before she looks up.
                </p>
                <p>
                    The video model contributes continuous movement, light,
                    texture, and the small physical transitions between those
                    directed states. The output lasts 15.07 seconds at 24 frames
                    per second. It is not proof that the process has been solved.
                    It is proof that the manual layer can remain legible after the
                    production layer arrives.
                </p>
                <p>
                    That is the hybrid I am trying to build. Traditional practice
                    supplies the judgment needed to design, diagnose, and revise.
                    The models expand what a very small production can attempt.
                    Neither becomes meaningful by being placed above the other.
                    They become useful when they share one authored film.
                </p>
            </div>
            <Figure
                src={media.openingManualBoards}
                alt="Three hand-drawn opening boards showing Nozomi asleep from a wide view, overhead, and from behind"
                fallback="The three hand-drawn opening boards could not be loaded."
                caption="The three manual boards used beside the finished sequence. Their line economy leaves room for production finish while keeping camera, staging, prop continuity, and performance under human direction."
                className="blog-part3-image blog-part3-image--paper"
            />
        </section>

        <section className="blog-study-section" id="voice-to-premise">
            <SectionHeading
                number="01 / Development"
                title="Voice first, premise second"
                note="The film started in conversation, before a screenplay or shot list existed."
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    The first session was a long voice conversation with a
                    language model. I did not arrive with a plot. I had a summer
                    setting, a three-to-five-minute festival constraint, and a
                    desire for an emotional turn that would hurt without turning
                    the film into a thriller. The conversation stayed with one
                    question at a time until the subject became personal.
                </p>
                <p>
                    I spoke about the fear of being replaced as a filmmaker while
                    using these tools to make the film. I wanted to redirect that
                    fear, almost like judo, instead of disguising it as confidence
                    or writing a lecture. The protagonist became an overworked
                    animator. The deepest injury became loss of identity. The
                    decisive emotional choice was self-betrayal rather than a
                    machine or a friend becoming the villain.
                </p>
                <p>
                    That distinction shaped everything. The short does not condemn
                    artificial intelligence or place traditional artists on a
                    moral pedestal. It stays close to an artist who has spent
                    years learning anatomy, perspective, acting,
                    cinematography, animation, drawing, and storytelling while
                    the economic meaning of those years begins to move beneath
                    her. The technology can be exciting. The social pressure can
                    be cruel. Both can be true in the same film.
                </p>
            </div>
            <div className="blog-part3-logline" aria-label="Short-film logline">
                <span>Logline</span>
                <p>
                    An overworked animator tries to remain human in an AI world.
                    Every attempt to prove her authenticity erases another part
                    of her.
                </p>
            </div>
            <Figure
                src={media.ideation}
                alt="Early development boards for Nozomi and Mia, showing poses, turns, and expressions"
                fallback="The early Nozomi and Mia development boards could not be loaded."
                caption="Early Nozomi and Mia boards. Their contrast was present before the production designs were standardized: an animator protecting an embodied craft, and an engineer who sincerely believes the new tools can widen creative access."
            />
        </section>

        <section className="blog-study-section" id="story-and-cast">
            <SectionHeading
                number="02 / Story architecture"
                title="Build pressure without a villain"
                note="A near-five-minute screenplay, thirteen scenes, and a cast designed around one person’s interior conflict."
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    The development conversation became a film bible, beat sheet,
                    and screenplay. Nozomi is a skilled animator and animation
                    director at a small studio. She can correct the weight of a
                    shoulder, the timing of a glance, or the shape of a hand
                    because thousands of invisible hours sit behind those small
                    decisions. Her friend Mia works in machine learning and sees
                    the same transition from the other side.
                </p>
                <p>
                    The story is designed so that enthusiasm and resistance both
                    make sense. Mia is not careless because she is technical.
                    Nozomi is not pure because she draws. The studio, the artist
                    community, and the new production culture each place a
                    different demand on her. She becomes surrounded by people,
                    tools, messages, and output while feeling increasingly
                    nowhere inside them.
                </p>
                <p>
                    I am keeping the later turns out of this journal. The public
                    synopsis is simpler: a struggling animator tries to protect
                    the craft on which she built her identity as her industry
                    changes. Her own community rejects her for experimenting,
                    survival pulls her further into the tools, and she starts to
                    lose the boundary between her hand and the machine.
                </p>
            </div>
            <Figure
                src={media.cast}
                alt="Seven production character sheets arranged as a cast grid, with turnarounds, faces, clothing, and expression studies"
                fallback="The cast design grid could not be loaded."
                caption="The production cast sheets lock silhouette, proportion, hair, costume, expression range, and props. Nozomi and Mia remain the center. The supporting cast gives the pressure around Nozomi a human face without expanding the film into a miniature feature."
            />
        </section>

        <section className="blog-study-section" id="world-and-space">
            <SectionHeading
                number="03 / World building"
                title="Make one room stay one room"
                note="Character packages, prop authority, floor plans, reusable environments, and a ten-angle studio sweep."
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    Short production does not remove the need for continuity. It
                    concentrates it. The apartment had to support sleeping,
                    drawing, a visit from Mia, livestreaming, and later changes in
                    light without shifting its desk, entrance, window, or walking
                    lane. The studio needed enough geometry to stage work from
                    several directions while remaining the same cramped place.
                </p>
                <p>
                    We built character definitions, prop definitions, location
                    notes, floor plans, a reusable apartment blockout, and a
                    color-coded character block library before asking the image
                    model for finished frames. The studio sweep below became a
                    spatial authority: ten readable angles harvested from one
                    environment instead of ten unrelated rooms that merely share
                    a palette.
                </p>
                <p>
                    This is where foundational knowledge becomes practical. A
                    reference can only control perspective if somebody recognizes
                    a broken perspective. A character sheet can only protect
                    anatomy if somebody sees when a shoulder, hand, or weight
                    shift is wrong. Tools can produce options very quickly. They
                    cannot replace the directing decision that says which option
                    belongs to the same film.
                </p>
            </div>
            <VideoFigure
                media={media.studioSweep}
                title="Ten-angle sweep through the animation studio"
                fallback="The animation-studio location sweep could not be loaded."
                caption="A fifteen-second sweep through the animation studio. The angles were divided into reusable plates so shot planning could refer to stable desks, windows, shelves, equipment, and sightlines."
                className="blog-part3-wide-video"
            />
        </section>

        <section className="blog-study-section" id="manual-storyboards">
            <SectionHeading
                number="04 / Manual direction"
                title="Draw the film before generating it"
                note="Forty-seven rough boards and thirty-two shot-note files now cover Scene 1."
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    The hand-drawn boards do the work that matters most. They
                    choose where the camera stands, what the audience learns,
                    when a character crosses the room, how long a pause lasts,
                    and what must remain outside the frame. They are quick enough
                    to change and specific enough to argue with.
                </p>
                <p>
                    Each board is paired with manual notes. The notes name the
                    character, prop, and location authority, then state the
                    performance, screen direction, background geometry, camera,
                    and forbidden changes. The image model receives a directed
                    problem rather than an invitation to invent the scene.
                </p>
                <p>
                    The more these tools enter the workflow, the more I need
                    actual drawing ability. Moving quickly and accurately from an
                    idea to a visual strengthens every later hybrid stage, and the
                    gain compounds almost exponentially. When the first camera,
                    perspective, pose, or acting idea is vague, everything
                    downstream stalls. This production has pushed me to review
                    fundamentals and spend more time warming up before I draw.
                </p>
                <p>
                    Without that preparation, using a model feels like playing
                    gacha: pull again, hope the random result feels exciting, and
                    accept that the next shot may belong to another film. The
                    hybrid setup becomes useful when the drawings and boards
                    carry authorship, while the models help test finish, lighting,
                    materials, and motion against decisions that already exist.
                </p>
            </div>
            <Figure
                src={media.manualStoryboards}
                alt="Contact sheet of the complete hand-drawn bedroom-demo storyboard sequence"
                fallback="The manual storyboard contact sheet could not be loaded."
                caption="The complete hand-drawn bedroom-demo sequence. The drawings are deliberately economical. Their job is to preserve shot order, eyelines, camera side, performance, and the emotional rhythm of the exchange."
                className="blog-part3-image blog-part3-image--paper"
            />
        </section>

        <section className="blog-study-section" id="experiments-and-output">
            <SectionHeading
                number="05 / Image experiments"
                title="Keep the failures visible"
                note="Every retained bedroom-demo output remains reviewable, including rejected anatomy, staging, and continuity passes."
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    The productionized boards are not a straight line from rough
                    to approval. Early passes changed the room, added furniture,
                    wrote dialogue into the image, weakened the camera, lost
                    fingers, or followed the finish reference while ignoring the
                    staging reference. Those results are not hidden. They explain
                    what the next instruction had to become.
                </p>
                <p>
                    We tested direct reference transfer, style-only reference,
                    rough-locked composition, local anatomy corrections, and
                    failure-specific retries. A rejected output remained useful
                    when it isolated one mistake. An approved output had to pass
                    more than attractiveness: character identity, room topology,
                    prop placement, perspective, anatomy, acting, and the exact
                    job of the shot.
                </p>
                <p>
                    The image model is very good at making a plausible finished
                    picture. Production requires a stricter question: is this the
                    right picture, connected to the one before and the one after?
                    That question still comes from drawing, staging, editing, and
                    knowing what to look for.
                </p>
            </div>
            <Figure
                src={media.productionizedBoards}
                alt="Contact sheet of retained productionized anime boards for the bedroom-demo sequence"
                fallback="The retained productionized-board contact sheet could not be loaded."
                caption="All retained productionized boards for the bedroom demo, shown together so drift in space, costume, proportion, and light can be judged across the sequence rather than one image at a time."
            />
            <Figure
                src={media.experiments}
                alt="Grid of image experiments including alternate room staging, interface views, character close-ups, and rejected-to-approved comparisons"
                fallback="The experiment and approval grid could not be loaded."
                caption="A closer record of the experiments. Rejections include altered staging, unwanted text, invented architecture, and anatomy failures. The correction path is part of the output, not administrative debris."
            />
        </section>

        <section className="blog-study-section" id="production-website">
            <SectionHeading
                number="06 / Production desk"
                title="Give the decisions somewhere to live"
                note="A local website connects the repository tree, boards, manual notes, references, prompts, and generation status."
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    The repository grew quickly: eighty-eight commits in six
                    days, ninety-four shot records, and many more reference,
                    location, prop, prompt, and review files. A folder tree is
                    precise, but it becomes difficult to direct from when the
                    current board, note, and production state sit several levels
                    apart.
                </p>
                <p>
                    I built a local production website that reads the project as
                    scenes, sequences, and shots. The shot detail panel places the
                    board beside editable manual notes. Character, prop, and
                    location tags remain visible as authorities rather than being
                    buried inside a long prompt. The site writes those decisions
                    back to Markdown so the browser does not become a second,
                    disconnected source of truth.
                </p>
                <p>
                    This part is engineering in service of directing. It does not
                    decide the shot. It shortens the distance between seeing a
                    problem, changing the instruction, and checking the next
                    result. That distance matters when a short film still contains
                    nearly one hundred planned shots.
                </p>
            </div>
            <Figure
                src={media.productionWebsite}
                alt="Dark green production website showing storyboard shot cards and a shot-detail editor with manual notes"
                fallback="The production-website screenshot could not be loaded."
                caption="The production desk on August 16. Scene 1’s bedroom-demo boards sit beside Shot 14’s manual note editor, with character, prop, and location authority tags available in the same view."
            />
        </section>

        <section className="blog-study-section blog-notes" id="next-pass">
            <SectionHeading number="07 / Next" title="Continue the short" />
            <div className="blog-body blog-transfer-copy">
                <p>
                    The short is still in production. The next pass is to finish the
                    remaining Scene 1 boards and video packages, then carry the
                    same authority system into the studio scenes without losing
                    the looseness of the first drawings.
                </p>
            </div>
        </section>
    </div>
);

const JapaneseArticle = ({ media }) => (
    <div className="blog-notebook blog-part3" lang="ja">
        <Facts locale="ja" />

        <div className="blog-body blog-opening">
            <p className="blog-lead">
                この企画の最初の着想は数年前にあり、その後はほかの企画が制作へ進みました。今回の締切に向けて短編として再開し、『秒速5リクエスト』は数週間だけ休止しています。エンジニアリング（とくに機械学習）とアニメーションの間で仕事をしてきた経験から生まれた物語です。
            </p>
            <p>
                この短編は
                <a
                    href="https://www.instagram.com/jsonmathsai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagramの@jsonmathsai"
                >
                    @jsonmathsai
                </a>
                と制作しています。現代のアニメーション制作を舞台にした心理ドラマです。手描きの設計、キャラクターと空間の設定、画像モデルと映像モデル、リポジトリを軸にしたローカル制作システムを組み合わせています。どちらかの方法が勝ったという話ではありません。異なる手段を、ひとつの演出へ従わせる試みです。
            </p>
            <p>
                上の数字は、8月10日から15日までの最初の6日間の記録です。作業量であって、完成度ではありません。大切なのは、各工程が次の工程をどう変えたかです。
            </p>
        </div>

        <section className="blog-study-section" id="first-moving-shot">
            <SectionHeading
                number="00 / 映像制作"
                title="手描きとモデルを一緒に動かす"
                note="3枚の手描き冒頭ボードから、最初の15秒の完成映像をつくりました。"
            />
            <VideoFigure
                media={media.openingShot}
                title="冒頭Shot 1〜3"
                fallback="最初の完成映像を読み込めませんでした。"
                caption="最初の完成映像。3ショット、15.07秒、音あり。ノゾミが振り向く芝居と、カット後に残る空の椅子は、絵コンテで決めた演技を引き継いでいます。"
                className="blog-part3-main-video"
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    最初の映像は、徹夜明けに机で目を覚ますノゾミです。3枚の手描きは、ワイド、俯瞰の寄り、リバースを決めています。机、カーテン、紙、液晶タブレット、スマートフォン、ワイン、眠る姿勢、顔を上げる前の間も、この段階で変えてはいけない要素として決めました。
                </p>
                <p>
                    映像モデルは、その間の連続した動き、光、質感、小さな身体の移行を担います。出力は24 fps、15.07秒です。工程が解決した証明ではありません。制作の仕上げが入った後も、手動の演出が読めることを確認した最初の結果です。
                </p>
                <p>
                    私が目指すハイブリッドはこの関係です。従来の制作知識が、設計、診断、修正の判断を支える。モデルは、小さな体制で試せる画面の幅を広げる。どちらかを上に置くことで意味が生まれるのではなく、同じひとつの映画へ参加することで役割が生まれます。
                </p>
            </div>
            <Figure
                src={media.openingManualBoards}
                alt="ワイド、俯瞰、後方から眠るノゾミを描いた3枚の手描き冒頭ボード"
                fallback="3枚の手描き冒頭ボードを読み込めませんでした。"
                caption="完成映像と組み合わせた3枚の手描きボード。線を少なくすることで仕上げの余地を残しながら、カメラ、配置、プロップの連続性、芝居を人の演出下に置きます。"
                className="blog-part3-image blog-part3-image--paper"
            />
        </section>

        <section className="blog-study-section" id="voice-to-premise">
            <SectionHeading
                number="01 / 企画開発"
                title="プロットより先に話す"
                note="脚本もショットリストもない状態で、映画は対話から始まりました。"
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    最初は、言語モデルとの長い音声対話でした。決まっていたのは夏という季節、3〜5分の映画祭という制約、そしてスリラーにせず心へ刺さる転換を置きたいということだけです。ひとつずつ問いを重ねるうちに、題材が自分自身へ近づいてきました。
                </p>
                <p>
                    私は、映画監督としてAIに置き換えられる恐れと、その道具を使って映画をつくる矛盾について話しました。その恐れを隠したり説教へ変えたりせず、柔道のように力の向きを変えて使いたかった。主人公は疲弊したアニメーターになり、中心の傷はアイデンティティの喪失になりました。機械や友人を悪役にするより、自分を裏切った感覚の方が深く痛むと考えました。
                </p>
                <p>
                    この違いが作品全体を決めています。この短編はAIを否定せず、伝統的な作り手を道徳的に上へ置きません。人体、パース、芝居、撮影、作画、絵、物語を長年学んだ人のすぐそばに立ち、その時間の経済的な意味が揺れ始める瞬間を見ます。技術に興奮する気持ちと、コミュニティから受ける圧力は同時に存在できます。
                </p>
            </div>
            <div className="blog-part3-logline" aria-label="短編のログライン">
                <span>Logline</span>
                <p>
                    AIの世界で、人間のままでいようとする疲弊したアニメーター。自分が本物だと証明しようとするたびに、彼女の一部が消えていく。
                </p>
            </div>
            <Figure
                src={media.ideation}
                alt="ポーズ、全身、表情をまとめたノゾミとミアの初期開発シート"
                fallback="ノゾミとミアの初期開発シートを読み込めませんでした。"
                caption="初期のノゾミとミア。身体で覚えた技術を守ろうとするアニメーターと、新しい道具が創作の門戸を広げると本気で信じるエンジニアという対比は、制作設定を統一する前からありました。"
            />
        </section>

        <section className="blog-study-section" id="story-and-cast">
            <SectionHeading
                number="02 / 物語設計"
                title="悪役を置かずに圧力をつくる"
                note="5分弱の脚本、13シーン、ひとりの内面を中心にしたキャスト。"
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    対話からフィルムバイブル、ビートシート、脚本をつくりました。ノゾミは小さなスタジオで働く腕のあるアニメーター兼作画監督です。肩の重さ、視線の遅れ、手の形を直せるのは、小さな判断の背後に膨大な時間があるからです。幼なじみのミアは機械学習の研究者で、同じ変化を反対側から見ています。
                </p>
                <p>
                    新技術への期待と抵抗の両方が理解できる構造にしました。ミアは技術者だから無神経なのではなく、ノゾミは絵を描くから純粋なのでもありません。スタジオ、作家仲間、新しい制作文化が、それぞれ違う答えを求めます。人、道具、メッセージ、出力に囲まれながら、自分の内側ではどこにもいない。その状態が物語の圧力です。
                </p>
                <p>
                    後半の転換はここでは伏せます。公開できるあらすじは、変化する業界の中で、自分を支えてきた技術を守ろうとする若いアニメーターの話です。試しただけで仲間から拒まれ、生き延びるために道具へ近づき、自分の手と機械の境界が分からなくなっていきます。
                </p>
            </div>
            <Figure
                src={media.cast}
                alt="全身、顔、衣装、表情をまとめた7人の制作キャラクター設定"
                fallback="キャスト設定を読み込めませんでした。"
                caption="制作キャスト設定では、シルエット、比率、髪、衣装、表情、持ち物を固定します。中心はノゾミとミア。脇役は短編を長編の縮小版にせず、ノゾミを囲む圧力へ人の顔を与えます。"
            />
        </section>

        <section className="blog-study-section" id="world-and-space">
            <SectionHeading
                number="03 / 世界設計"
                title="同じ部屋を同じ部屋のまま使う"
                note="キャラクター、プロップ、平面図、再利用できる環境、スタジオ10アングル。"
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    短編でも連続性は必要です。むしろ場所が少ないほど差が目立ちます。アパートは、睡眠、作画、ミアの訪問、配信、時間帯の変化を、机、玄関、窓、動線を変えずに受け止めなければなりません。スタジオも複数方向から撮れるだけの構造を持ちながら、同じ狭い職場であり続ける必要があります。
                </p>
                <p>
                    仕上げ画像を画像モデルへ求める前に、キャラクター定義、プロップ定義、ロケーションノート、平面図、再利用できるアパートのブロックアウト、色分けしたキャラクターブロックを用意しました。下の映像は、ひとつの環境から10のアングルを切り出した空間の基準です。似た色の別の部屋を10枚つくるのではなく、同じ場所を撮ります。
                </p>
                <p>
                    基礎知識はここで実務になります。壊れたパースを見抜けなければ、資料でパースを守ることもできません。肩、手、重心の誤りに気づけなければ、キャラクター設定だけでは人体を守れません。道具は高速で候補を出せます。その候補が同じ映画に属するかを決めるのは、演出の判断です。
                </p>
            </div>
            <VideoFigure
                media={media.studioSweep}
                title="アニメーションスタジオ10アングル"
                fallback="アニメーションスタジオのアングル映像を読み込めませんでした。"
                caption="15秒のスタジオ・スイープ。机、窓、棚、機材、視線の関係を固定した10枚のプレートへ分け、ショット設計で再利用します。"
                className="blog-part3-wide-video"
            />
        </section>

        <section className="blog-study-section" id="manual-storyboards">
            <SectionHeading
                number="04 / 手動の演出"
                title="生成前に映画を描く"
                note="Scene 1には47枚のラフと32本のショット手動ノートがあります。"
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    いちばん重要な仕事は手描きの絵コンテが担います。カメラの位置、観客へ渡す情報、人物が部屋を横切る時刻、間の長さ、フレームの外へ残すものを決めます。すぐ直せるほど粗く、議論できるほど具体的な絵です。
                </p>
                <p>
                    各ボードには手動ノートを付けています。キャラクター、プロップ、ロケーションの基準を指定し、芝居、画面方向、背景の構造、カメラ、変えてはいけない要素を書きます。画像モデルへ場面の発明を頼むのではなく、演出済みの問題を渡します。
                </p>
                <p>
                    こうした道具が工程に増えるほど、実際に描く力が必要になると感じています。アイデアから画へ移す速度と精度が上がるほど、その効果はハイブリッド工程の後段でほとんど指数的に積み重なります。最初のカメラ、パース、ポーズ、芝居が曖昧なら、その先の作業がすべて止まります。今回の制作を通して、基礎を見直し、描く前のウォームアップに以前より時間を使うようになりました。
                </p>
                <p>
                    この準備がないままモデルを使うと、ガチャに近くなります。もう一度引き、偶然おもしろい絵が出ることを願い、次のショットが別の映画に見えることを受け入れる。手描きと絵コンテが作者の判断を持ち、モデルが仕上げ、光、素材、動きを検証する時、ハイブリッドな構成が制作として機能し始めます。
                </p>
            </div>
            <Figure
                src={media.manualStoryboards}
                alt="手描きによるベッドルーム・デモ全ショットの絵コンテ・コンタクトシート"
                fallback="手描き絵コンテのコンタクトシートを読み込めませんでした。"
                caption="ベッドルーム・デモの手描き絵コンテ全体。線は意図的に少なくしています。ショット順、視線、カメラ側、芝居、会話のリズムを守るための絵です。"
                className="blog-part3-image blog-part3-image--paper"
            />
        </section>

        <section className="blog-study-section" id="experiments-and-output">
            <SectionHeading
                number="05 / 画像検証"
                title="失敗を見える場所へ残す"
                note="人体、配置、連続性で不採用になったものを含め、ベッドルーム・デモの保存出力を確認できます。"
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    ラフから承認画まで一直線には進みません。部屋が変わる、家具が増える、画面内へセリフが書かれる、カメラが弱くなる、指が崩れる、仕上げ資料だけを見て配置資料を無視する。初期出力は、次の指示に何を書くべきかを教えるために残しています。
                </p>
                <p>
                    直接参照、仕上げだけの参照、ラフ固定の構図、局所的な人体修正、失敗理由ごとの再試行を行いました。不採用画も、誤りをひとつ切り分けられれば役に立ちます。承認条件は見栄えだけではありません。人物の同一性、部屋の構造、プロップ配置、パース、人体、芝居、ショットの役割を通過する必要があります。
                </p>
                <p>
                    画像モデルは、もっともらしい完成画をつくることが得意です。制作で必要なのは、その前後とつながる正しい画かという問いです。その問いは、作画、ステージング、編集、そして見るべき点を知っていることから生まれます。
                </p>
            </div>
            <Figure
                src={media.productionizedBoards}
                alt="ベッドルーム・デモで保存した仕上げアニメボードのコンタクトシート"
                fallback="保存した仕上げボードを読み込めませんでした。"
                caption="ベッドルーム・デモで保存した仕上げボード。1枚ずつではなく並べて見ることで、空間、衣装、比率、光のドリフトを判断します。"
            />
            <Figure
                src={media.experiments}
                alt="室内配置、作業画面、人物アップ、不採用から承認までを含む画像検証グリッド"
                fallback="画像検証グリッドを読み込めませんでした。"
                caption="検証の拡大記録。配置の変更、不要な文字、発明された建築、人体の誤りなどが不採用理由です。修正の履歴も制作物の一部として扱います。"
            />
        </section>

        <section className="blog-study-section" id="production-website">
            <SectionHeading
                number="06 / 制作デスク"
                title="判断の置き場所をつくる"
                note="ローカルサイトで、リポジトリ、ボード、手動ノート、リファレンス、プロンプト、生成状況を接続します。"
            />
            <div className="blog-body blog-transfer-copy">
                <p>
                    6日間で88 commits、94本のショット記録に加え、人物、場所、プロップ、プロンプト、レビューのファイルが増えました。フォルダ構造は正確でも、現在のボード、ノート、制作状態が何階層も離れると、そこから演出するのは難しくなります。
                </p>
                <p>
                    そこで、プロジェクトをシーン、シークエンス、ショットとして読むローカル制作サイトをつくりました。ショット詳細では、ボードの隣で手動ノートを編集できます。キャラクター、プロップ、ロケーションのタグも、長いプロンプトの中ではなく、基準として見えます。編集内容はMarkdownへ戻るため、ブラウザが別の正解を持つこともありません。
                </p>
                <p>
                    演出のためのエンジニアリングです。サイトがショットを決めるわけではありません。問題を見つけ、指示を直し、次の結果を確認するまでの距離を短くします。短編でも100本近いショットを扱う時、その距離は制作速度に直結します。
                </p>
            </div>
            <Figure
                src={media.productionWebsite}
                alt="絵コンテのショットカードと手動ノート編集画面を表示した深緑色の制作サイト"
                fallback="制作サイトのスクリーンショットを読み込めませんでした。"
                caption="8月16日の制作デスク。Scene 1のベッドルーム・デモとShot 14の手動ノートを同じ画面で開き、人物、プロップ、場所の基準タグを付けられます。"
            />
        </section>

        <section className="blog-study-section blog-notes" id="next-pass">
            <SectionHeading number="07 / 次" title="短編制作を続ける" />
            <div className="blog-body blog-transfer-copy">
                <p>
                    短編は制作中です。次はScene 1の残りのボードと映像パッケージを完成させ、最初の絵の緩さを失わないまま、同じ権限設計をスタジオのシーンへ移します。
                </p>
            </div>
        </section>
    </div>
);

const Post = ({ intl }) => {
    const locale = intl.locale || "en";
    const post = getPost("directing-the-reference-part-3");
    const content = post.translations[locale] || post.translations.en;
    const meta = [
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.media.cover },
    ];

    return (
        <BlogLayout article>
            <SEO
                title={content.title}
                lang={locale}
                description={content.summary}
                meta={meta}
            />
            <PostHero post={post} locale={locale} />
            <DirectingReferenceSeriesNavigation
                currentPart={3}
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
