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
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
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
    {
      resolve: 'gatsby-source-instagram',
      options: { username: 'surfdingos' },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};
