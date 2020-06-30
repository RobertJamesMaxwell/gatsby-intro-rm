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
      const { title, author, slug } = node.frontmatter;
      const post = { title, author, slug, excerpt: node.excerpt };
      return post;
    })
  );
};

export default usePosts;
