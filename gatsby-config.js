module.exports = {
    siteMetadata: {
        title: `秋山翔 Akiyama Shō`,
        description: `秋山翔。監督・アニメーター・ソフトウェアエンジニア。Akiyama Shō. Director・Animator・Software Engineer`,
        author: `@akiyamasho`,
        siteUrl: `https://www.akiyamasho.com`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#222222`,
                display: `minimal-ui`,
                icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/intl`,
                languages: [`en`, `ja`],
                defaultLanguage: `en`,
                redirect: false,
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["material icons"],
            },
        },
    ],
};
