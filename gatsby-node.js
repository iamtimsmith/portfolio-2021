const path = require(`path`);
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions;
  const oldPage = Object.assign({}, page);
  page.path =
    page.path.indexOf(`---`) >= 0
      ? page.path.replace(/(\d{4}-\d{2}-\d{2}---)/i, ``)
      : page.path;
  if (page.path !== oldPage.path) {
    // Replace old page with new page
    deletePage(oldPage);
    createPage(page);
  }
  if (
    page.context.frontmatter &&
    page.context.frontmatter.published === false
  ) {
    deletePage(page);
  }
  // Delete blog page
  if (page.path === `/blog/`) deletePage(page);
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: 'slug',
      node,
      value:
        value.indexOf(`---`) >= 0
          ? value.replace(/(\d{4}-\d{2}-\d{2}---)/i, ``)
          : value,
    });
  }
};

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;

  const {data} = await graphql(`
    {
      posts: allMdx(
        filter: {
          slug: {regex: "/blog/./i"}
          frontmatter: {published: {eq: true}}
        }
        sort: {fields: fileAbsolutePath, order: DESC}
      ) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);
  const posts = data.posts.nodes;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({length: numPages}).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog.jsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
