module.exports = {
    siteMetadata: {
        title: `秋山翔 Akiyama Shō`,
        description: `秋山翔。アニメーション監督・映像作家。Akiyama Shō. Animation director and filmmaker.`,
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
                name: `Akiyama Shō — Director`,
                short_name: `Shō Akiyama`,
                start_url: `/`,
                background_color: `#0d1215`,
                theme_color: `#0d1215`,
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
