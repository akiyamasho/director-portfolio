import coverImage from "../../assets/blog-covers/aks-nginx-ingress-static-ip.webp";

const mediaBaseUrl =
    "https://storage.googleapis.com/5rps-film-public-media/20230927_aks-nginx-ingress-static-ip";

export const post = {
    slug: "aks-nginx-ingress-static-ip",
    date: "2023-09-27",
    tags: ["kubernetes", "azure", "ingress"],
    canonicalUrl:
        "https://akiyamasho.medium.com/azure-kubernetes-service-aks-nginx-ingress-with-static-ip-7bafb6acda8f",
    media: {
        createPublicIp: `${mediaBaseUrl}/create-public-ip-7ca3db04d465.png`,
        loadBalancerIp: `${mediaBaseUrl}/load-balancer-ip-2b631fca14fd.png`,
    },
    cover: {
        src: coverImage,
        lede: {
            en: "A concise archive of assigning a stable public address to an nginx ingress controller on AKS.",
            ja: "AKS上のnginx ingress controllerに固定のパブリックIPを割り当てるための実装記録。",
        },
        alt: {
            en: "An illustrated network operations room with a switch and a cable routing plan",
            ja: "スイッチと配線図が置かれたアニメ背景調のネットワーク運用室",
        },
    },
    translations: {
        en: {
            title: "Azure Kubernetes Service (AKS) + nginx-ingress with Static IP",
            summary:
                "Coming from a GCP background, it was straightforward to set static IPs for nginx-ingress-powered clusters on GKE using the kubernetes.io/ingress.global-static-ip-name annotation.",
        },
        ja: {
            title: "Azure Kubernetes Service (AKS) + nginx-ingressで固定IPを使う",
            titleBreaks: [
                "Azure Kubernetes Service (AKS) + ",
                "nginx-ingressで",
                "固定IPを使う",
            ],
            summary:
                "GKEでの経験をもとに、AKS上のnginx-ingressへ固定IPを設定する短い手順をまとめます。",
        },
    },
};
