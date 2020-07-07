import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  return (
    data &&
    data.allMdx &&
    data.allMdx.nodes.map(node => {
      const { title, author, slug, image } = node.frontmatter;
      const post = { title, author, slug, image, excerpt: node.excerpt };
      return post;
    })
  );
};

export default usePosts;
