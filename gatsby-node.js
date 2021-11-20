const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;
  if (
    page.context.frontmatter &&
    page.context.frontmatter.published === false
  ) {
    deletePage(page);
  }
  // Delete style guide if prod
  if (process.env.NODE_ENV === `production` && page.path === `/style-guide/`)
    deletePage(page);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    /**
     * Add slug field for each post
     * - Provides slug without dates in path
     */
    createNodeField({
      name: 'slug',
      node,
      value:
        value.indexOf(`---`) >= 0
          ? `/blog${value.replace(/(\d{4}-\d{2}-\d{2}---)/i, ``)}`
          : value,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      posts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "/src/posts/./i" }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: fileAbsolutePath, order: DESC }
      ) {
        nodes {
          frontmatter {
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  /**
   * Create pages for each post
   * from the `src/posts` directory
   */
  const posts = data.posts.nodes;
  posts.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: path.resolve('./src/templates/post.jsx'),
      context: {
        slug: post.fields.slug,
      },
    });
  });

  /**
   * Logic for Pagination
   * Create paginated blog pages
   */
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  // Create pages based on pagination
  Array.from({ length: numPages }).forEach((_, i) => {
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

  /**
   * Create pages for tags.
   */
  const postTags = [];
  // Loop through each post to get tags
  posts.forEach(node => {
    // Loop through post tags and if unique, add to array
    node.frontmatter.tags.forEach(tag => {
      if (!postTags.includes(tag)) postTags.push(tag);
    });
  });
  // Create page for each tag
  postTags.forEach(tag => {
    actions.createPage({
      path: `/blog/tags/${tag}`,
      component: path.resolve(`src/templates/tag.jsx`),
      context: {
        slug: tag,
        label: tag.trim().replace(/^\w/, c => c.toUpperCase()),
      },
    });
  });
};
