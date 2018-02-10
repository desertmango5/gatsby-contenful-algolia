const autoprefixer = require('autoprefixer') 

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentful + Algolia',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tmvc2qm2l3zx`,
        accessToken: `6b844873e161896f2793bbdbf5bba34deb637c08576e2258d311cc968858a453`,
      },
    },
  ],
};
