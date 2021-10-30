module.exports = {
  siteMetadata: {
    title: `Personal Website`,
    author: `António Sousa`,
    position: "Software Engineer .Net",
    description: `This project is my personal website, made with Gatsby and deployed on Netlify`,
    siteUrl: `https://antonio-carlos.com`,
    social: {
      githubLink: `https://github.com/antonio-carlos-sousa`,
      linkedin: `https://www.linkedin.com/in/ant%C3%B3nio-sousa-55378a133/`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_ANALYTICS_G_TAG],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Playfair Display\:400,700,900`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antonio Sousa`,
        short_name: `Antonio Sousa`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `static/img/antoniosousa_p.jpeg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
