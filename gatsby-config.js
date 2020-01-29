module.exports = {
  siteMetadata: {
    title: `Secular Organizations for Sobriety`,
    description: `Save OurSelves-New York is a non-profit network of alternative recovery groups in New York State, which follow the guidelines and principles of SOS (Save OurSelves) International.`,
    author: `Alex Nicaise`,
  },
  plugins: [
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
        name: `sos-nys-homepage`,
        short_name: `sos-nys`,
        start_url: `/`,
        background_color: `#EAEAEA`,
        theme_color: `#EAEAEA`,
        display: `minimal-ui`,
        icon: `src/images/sos-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `https://centerforinquiry.org/sosnys/graphql`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
