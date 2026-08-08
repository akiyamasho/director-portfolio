export const localVscodeCloudGpusSource =
    "https://akiyamasho.medium.com/local-vscode-development-with-cloud-gpus-using-vertex-ai-notebooks-vscode-ssh-plugin-cb6113f23cde";

export const post = {
    slug: "local-vscode-cloud-gpus",
    date: "2023-10-16",
    tags: ["engineering", "gpu", "vertex-ai", "vscode"],
    canonicalUrl: localVscodeCloudGpusSource,
    media: null,
    translations: {
        en: {
            title: "Local VSCode Development with Cloud GPUs using Vertex AI Notebooks + VSCode SSH plugin",
            summary:
                "There are times when you wish you had your own GPU setup on your local environment to easily develop your deep learning models or test inferences with speed.",
        },
        ja: {
            title: "Vertex AI NotebooksとVSCode SSHプラグインを使ったローカルVSCodeからのクラウドGPU開発",
            titleBreaks: [
                "Vertex AI ",
                "Notebooksと",
                "VSCode SSH",
                "プラグインを使った",
                "ローカルVSCodeからの",
                "クラウドGPU開発",
            ],
            summary:
                "ローカル環境にGPUがあるような感覚で、深層学習モデルの開発や推論テストを高速に行うための手順です。",
        },
    },
};

export const localVscodeCloudGpusArticle = {
    en: {
        sourceLabel: "Original article on Medium",
        bodyHtml: `
            <p class="blog-source-credit">Credit: <a href="https://unsplash.com/ja/@joannakosinska">Joanna Kosinska (Unsplash)</a></p>
            <p>There are times when you wish you had your own GPU setup on your local environment to easily develop your deep learning models or test inferences with speed.</p>
            <p>This tutorial shows how to use SSH on VSCode connected to a vertex AI notebook to simulate a local VSCode environment while being able to use a cloud instance’s GPU.</p>
            <p><em>Note that this concept works with any GPU VM instance from any cloud provider, but for the purpose of this tutorial and since the ML environment (CUDA, conda, etc.) is out-of-the-box in GCP Vertex AI notebooks, we will be using it for this example.</em></p>
            <h4>Prerequisites</h4>
            <ul>
                <li>GCP account with SSH permissions to compute engine instances on <a href="https://console.cloud.google.com/iam-admin/iam">GCP iAM</a> ( Editor role )</li>
                <li>Authenticated gcloudwith gcloud auth login</li>
                <li>CUDA-enabled Vertex AI notebook instance</li>
                <li><a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack">Remote Development extension pack</a> on VSCode</li>
            </ul>
            <h4>Steps</h4>
            <p>1. Get the external IP address of the notebook in <a href="https://console.cloud.google.com/compute/instances">Compute Engine</a><br><em>ℹ️ NOTE: You may want to reserve this as a Static IP Address to prevent it from changing when restarting the instance</em></p>
            <p>2. Add an entry to your~/.ssh/config with the name you’d like to use and the external IP address from step 1:</p>
            <pre><code>Host &lt;name you would like to use, ex. - research-notebook&gt;
   HostName &lt;the external IP address from step 1&gt;
   UseKeychain yes
   AddKeysToAgent yes
   IdentityFile ~/.ssh/google_compute_engine
   User jupyter</code></pre>
            <p><em>ℹ️ NOTE: The IdentityFile here is the default SSH identity file for gcloud . If you use or have set up a different one, you will need to change the value for IdentityFile to point to your gcloud identity file.</em></p>
            <p>3. On VSCode, open the Command Palette <em>(default Ctrl/⌘ + Shift + P)</em> and search for Remote SSH: Connect to Host</p>
            <p>4. Select the hostname you would like to connect to from the list.<br><em>ℹ️ NOTE: The entry you added in ~/.ssh/config is automatically shown in the list , ex. - remote-notebook</em></p>
            <p>5. In the notebook instance’s remote SSH window, open the Command Palette (<em>default Ctrl/⌘ + Shift + P) </em>and search for Remote: Install Remote Development Extensions</p>
            <p>6. Install the Python and Jupyter extensions</p>
            <p>7. You should now be able to use the notebook instance with GPU, as well as run terminal commands, as if it were a directory opened locally on VSCode!</p>
            <h4>Ending Notes</h4>
            <p>This is very useful if you want to leverage the power of GPUs without too much setup, since the workflow is similar to a local environment but being able to use GPUs present on the notebook instance.</p>
        `,
    },
    ja: {
        sourceLabel: "Mediumで原文を読む",
        bodyHtml: `
            <p class="blog-source-credit">クレジット：<a href="https://unsplash.com/ja/@joannakosinska">Joanna Kosinska（Unsplash）</a></p>
            <p>深層学習モデルの開発や推論テストを高速に行うために、ローカル環境に自分専用のGPUがあればと思うことがあります。</p>
            <p>このチュートリアルでは、Vertex AI NotebookへVSCodeからSSH接続し、クラウドインスタンスのGPUを使いながらローカルのVSCodeに近い開発環境を構築する方法を紹介します。</p>
            <p><em>この考え方は、どのクラウドプロバイダーのGPU VMインスタンスでも利用できます。ただし、このチュートリアルではCUDAやcondaなどのML環境が最初から用意されているため、GCP Vertex AI Notebooksを例に使用します。</em></p>
            <h4>前提条件</h4>
            <ul>
                <li><a href="https://console.cloud.google.com/iam-admin/iam">GCP IAM</a>でCompute EngineインスタンスへのSSH権限を持つGCPアカウント（Editorロール）</li>
                <li>gcloud auth loginで認証済みのgcloud</li>
                <li>CUDA対応のVertex AI Notebookインスタンス</li>
                <li>VSCodeの<a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack">Remote Development拡張機能パック</a></li>
            </ul>
            <h4>手順</h4>
            <p>1. <a href="https://console.cloud.google.com/compute/instances">Compute Engine</a>でNotebookの外部IPアドレスを確認します。<br><em>ℹ️ 注：インスタンスの再起動時にIPアドレスが変わらないよう、静的IPアドレスとして予約しておくことをおすすめします。</em></p>
            <p>2. 使用したい名前と手順1で確認した外部IPアドレスを使い、~/.ssh/configへ次のエントリーを追加します。</p>
            <pre><code>Host &lt;使用したい名前。例：research-notebook&gt;
   HostName &lt;手順1で確認した外部IPアドレス&gt;
   UseKeychain yes
   AddKeysToAgent yes
   IdentityFile ~/.ssh/google_compute_engine
   User jupyter</code></pre>
            <p><em>ℹ️ 注：ここで指定しているIdentityFileは、gcloudのデフォルトSSH秘密鍵です。別の鍵を使用している、または設定している場合は、IdentityFileの値をそのgcloud秘密鍵の場所へ変更してください。</em></p>
            <p>3. VSCodeでコマンドパレット（デフォルトはCtrl/⌘ + Shift + P）を開き、Remote SSH: Connect to Hostを検索します。</p>
            <p>4. 一覧から接続したいホスト名を選びます。<br><em>ℹ️ 注：~/.ssh/configに追加したエントリーは、一覧へ自動的に表示されます。例：remote-notebook</em></p>
            <p>5. NotebookインスタンスのリモートSSHウィンドウでコマンドパレット（デフォルトはCtrl/⌘ + Shift + P）を開き、Remote: Install Remote Development Extensionsを検索します。</p>
            <p>6. PythonとJupyterの拡張機能をインストールします。</p>
            <p>7. これでローカルのVSCodeでディレクトリを開いたときと同じ感覚で、GPUを搭載したNotebookインスタンスを使用し、ターミナルコマンドも実行できるようになります。</p>
            <h4>おわりに</h4>
            <p>ローカル環境とほぼ同じワークフローのままNotebookインスタンスのGPUを利用できるため、多くのセットアップをせずにGPUの力を活用したい場合にとても便利です。</p>
        `,
    },
};
