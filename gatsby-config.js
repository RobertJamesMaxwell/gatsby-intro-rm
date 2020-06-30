module.exports = {
  siteMetadata: {
    title: 'Robert James Maxwell',
    description: 'Gatsby tutorial for building a personal blog site.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'posts', path: 'posts' },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'images', path: 'images' },
    },
  ],
};
