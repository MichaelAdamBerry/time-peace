require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `TimePeace Online Vintage and Luxury Watch Store`,
    description: `Purchase classic Time Pieces and help combat climate change. 10% of proceeds are donated to Greenpeace.`,
    author: `@MichaelAdamBerry`,
  },
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: `plant-and-pot-shop`,
        accessToken: `8bf91abc7293b7b852db4dab714831ed`,
        verbose: true,
        paginationSize: 250,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
