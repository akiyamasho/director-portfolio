import React, { useState } from "react";
import Helmet from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import BlogLayout from "../../components/blog/blog-layout";
import PostHero from "../../components/blog/post-hero";
import SEO from "../../components/seo";
import { post } from "../../blog/migrated/aks-nginx-ingress-static-ip";

const GKE_STATIC_IP_REFERENCE =
    "https://cloud.google.com/kubernetes-engine/docs/tutorials/http-balancer#optional_configuring_a_static_ip_address";
const AZURE_PUBLIC_IP_ADDRESSES =
    "https://portal.azure.com/#view/HubsExtension/BrowseResource/resourceType/Microsoft.Network%2FPublicIpAddresses";
const AZURE_CREATE_PUBLIC_IP =
    "https://portal.azure.com/#create/Microsoft.PublicIPAddress-ARM";
const ORIGINAL_REFERENCE =
    "https://github.com/helm/charts/issues/14668#issuecomment-516086523";

const externalLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};

const CodeBlock = ({ children }) => (
    <pre
        style={{
            maxWidth: "100%",
            overflowX: "auto",
            padding: "1.25rem",
            border: "1px solid #263139",
            background: "#10161b",
            color: "#eef2f4",
            fontSize: "0.82rem",
            lineHeight: 1.7,
        }}
    >
        <code>{children}</code>
    </pre>
);

const RemoteFigure = ({ src, alt, fallback }) => {
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
        </figure>
    );
};

const EnglishArticle = () => (
    <div className="blog-body">
        <p className="blog-media-caption">
            Credit:{" "}
            <a href="https://unsplash.com/@growtika" {...externalLinkProps}>
                Growtika (Unsplash)
            </a>
        </p>
        <p>
            Coming from a GCP background, it was straightforward to{" "}
            <a href={GKE_STATIC_IP_REFERENCE} {...externalLinkProps}>
                set static IPs for nginx-ingress-powered clusters on GKE
            </a>{" "}
            using the <code>kubernetes.io/ingress.global-static-ip-name</code>{" "}
            annotation.
        </p>
        <p>
            However, there is not much documentation on how to do this on Azure
            Kubernetes Service (AKS), hence this short document.
        </p>

        <h2>Steps</h2>
        <p>
            1. Create the{" "}
            <a href={AZURE_PUBLIC_IP_ADDRESSES} {...externalLinkProps}>
                Public IP Address
            </a>{" "}
            on{" "}
            <a href={AZURE_CREATE_PUBLIC_IP} {...externalLinkProps}>
                Azure Portal
            </a>{" "}
            <strong>with your cluster’s resource&nbsp;group</strong>
        </p>
        <RemoteFigure
            src={post.media.createPublicIp}
            alt="Azure portal form for creating a Public IP Address with the cluster resource group selected"
            fallback="The Azure public IP setup screenshot could not be loaded."
        />
        <p>
            2. Install <code>nginx-ingress</code> and set the{" "}
            <code>loadBalancerIP</code> to the IP you&apos;ve created in{" "}
            step&nbsp;1
        </p>
        <CodeBlock>{`STATIC_IP=<your static IP here>

helm upgrade --install ingress-nginx ingress-nginx \\
 --repo https://kubernetes.github.io/ingress-nginx \\
 --namespace ingress-nginx \\
 --create-namespace \\
 --set rbac.create=true \\
 --set controller.stats.enabled=true \\
 --set controller.metrics.enabled=true \\
 --set controller.service.externalTrafficPolicy="Local" \\
 --set controller.service.loadBalancerIP=$STATIC_IP`}</CodeBlock>
        <p>
            3. Monitor the new LoadBalancer resource. The static IP from step 1
            should show up after a few&nbsp;seconds
        </p>
        <RemoteFigure
            src={post.media.loadBalancerIp}
            alt="Terminal output showing the new LoadBalancer resource with the static external IP"
            fallback="The LoadBalancer verification screenshot could not be loaded."
        />

        <h2>Other Notes</h2>
        <ul>
            <li>
                If you use <code>kubectl</code>to install{" "}
                <code>nginx-ingress</code>&nbsp;, you can simply update the load
                balancer IP in the <code>ingress-nginx-controller</code>
                {"service’s "}
                <code>spec.loadBalancerIP</code>
            </li>
            <li>
                There is a way to specify a custom resource group, but this is
                the most straightforward way to do it since we’re adjusting the
                public IP to follow the k8s cluster instead of the other
                way&nbsp;around
            </li>
        </ul>

        <h2>References</h2>
        <ul>
            <li>
                <a
                    className="blog-break-url"
                    href={ORIGINAL_REFERENCE}
                    {...externalLinkProps}
                >
                    https://github.com/helm/charts/issues/14668#issuecomment-516086523
                </a>
            </li>
        </ul>
    </div>
);

const JapaneseArticle = () => (
    <div className="blog-body" lang="ja">
        <p>
            GCPの経験があったため、GKEでnginx-ingressを使用するクラスターに固定IPを設定する作業は、kubernetes.io/ingress.global-static-ip-nameアノテーションを使えば簡単でした。
        </p>
        <p>
            一方、Azure Kubernetes Service
            (AKS)で同じ設定を行う方法は資料が少なかったため、短い手順としてまとめます。
        </p>

        <h3>手順</h3>
        <p>
            1. Azureポータルで、クラスターのリソースグループを指定してPublic IP
            Addressを作成します。
        </p>
        <RemoteFigure
            src={post.media.createPublicIp}
            alt="クラスターのリソースグループを指定したAzureパブリックIP作成画面"
            fallback="AzureパブリックIP設定の画像を読み込めませんでした。"
        />
        <p>
            2.
            nginx-ingressをインストールし、手順1で作成したIPをloadBalancerIPに設定します。
        </p>
        <CodeBlock>{`STATIC_IP=<your static IP here>

helm upgrade --install ingress-nginx ingress-nginx \\
 --repo https://kubernetes.github.io/ingress-nginx \\
 --namespace ingress-nginx \\
 --create-namespace \\
 --set rbac.create=true \\
 --set controller.stats.enabled=true \\
 --set controller.metrics.enabled=true \\
 --set controller.service.externalTrafficPolicy="Local" \\
 --set controller.service.loadBalancerIP=$STATIC_IP`}</CodeBlock>
        <p>
            3.
            新しいLoadBalancerリソースを監視します。数秒後、手順1の固定IPが表示されます。
        </p>
        <RemoteFigure
            src={post.media.loadBalancerIp}
            alt="新しいLoadBalancerリソースに固定の外部IPが表示されたターミナル画面"
            fallback="LoadBalancer確認画面を読み込めませんでした。"
        />

        <h3>その他の注意点</h3>
        <ul>
            <li>
                kubectlでnginx-ingressをインストールする場合は、ingress-nginx-controller
                Serviceのspec.loadBalancerIPを更新するだけです。
            </li>
            <li>
                カスタムリソースグループを指定する方法もありますが、ここではパブリックIP側をk8sクラスターに合わせるため、この方法が最も簡単です。
            </li>
        </ul>

        <h3>参考資料</h3>
        <ul>
            <li>
                <a
                    className="blog-break-url"
                    href={ORIGINAL_REFERENCE}
                    {...externalLinkProps}
                >
                    https://github.com/helm/charts/issues/14668#issuecomment-516086523
                </a>
            </li>
        </ul>
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
                    {
                        property: "og:image",
                        content: post.cover.src,
                    },
                ]}
            />
            <PostHero post={post} locale={locale} />
            {locale === "ja" ? <JapaneseArticle /> : <EnglishArticle />}
        </BlogLayout>
    );
};

export default injectIntl(Post);
