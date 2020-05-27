/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const QUERY = `{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          slug
          draft
        }
      }
    }
  }
}
`;

exports.createPages = async ({ graphql, actions }) => {
  const { data, errors } = await graphql(QUERY);
  if (errors) return;

  const component = path.resolve(`./src/templates/post.tsx`);

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.draft) return;

    const { slug } = node.frontmatter;
    actions.createPage({ path: `article/${slug}`, component, context: { slug } });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== `MarkdownRemark`) return;

  actions.createNodeField({ name: `slug`, node, value: createFilePath({ node, getNode }) });
};
