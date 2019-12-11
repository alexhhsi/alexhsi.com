module.exports = {
  siteMetadata: {
    title: `Alex Hsi`,
    name: `Alex Hsi`,
    siteUrl: `http://alexhsi.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Alex Hsi.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/alexhsi`
      },
      {
        name: `github`,
        url: `https://github.com/alexhhsi`
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
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
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
