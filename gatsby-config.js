module.exports = {
  siteMetadata: {
    title: 'Robert James Maxwell',
    description: 'Gatsby tutorial for building a personal blog site.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
