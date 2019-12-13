require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Alex Hsi | Chop Wood, Carry Water`,
    name: `Alex Hsi`,
    siteUrl: `https://alexhsi.com`,
    description: `Alex Hsi is an entrepreneur, investor, and explorer based in Santa Monica, CA. Always trying to learn new things.`,
    hero: {
      heading: `Chop Wood, Carry Water`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/alexhsi`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/alexhsi`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/alexhsi/`
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          contentful: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
