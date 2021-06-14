const {createFilePath} = require('gatsby-source-filesystem');

exports.onCreatePage = ({page, actions}) => {
  const {createPage, deletePage} = actions;
  const oldPage = Object.assign({}, page);
  // Remove trailing slash unless page is /
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
