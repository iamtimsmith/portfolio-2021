const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const postFilters =
  process.env.NODE_ENV === 'production'
    ? {
        fileAbsolutePath: { regex: '/src/posts/./i' },
        frontmatter: { published: { eq: true } },
      }
    : {
        fileAbsolutePath: { regex: '/src/posts/./i' },
      };

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

  let content;
  if (process.env.NODE_ENV === 'production') {
    content = await graphql(`
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
        tags: allMdx(
          filter: {
            fileAbsolutePath: { regex: "/src/posts/i" }
            frontmatter: { published: { eq: true } }
          }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `);
  } else {
    content = await graphql(`
      {
        posts: allMdx(
          filter: { fileAbsolutePath: { regex: "/src/posts/./i" } }
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
        tags: allMdx(
          filter: { fileAbsolutePath: { regex: "/src/posts/./i" } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `);
  }

  /**
   * Create pages for each post
   * from the `src/posts` directory
   */
  const posts = content.data.posts.nodes;
  posts.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: path.resolve('./src/templates/post.tsx'),
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
      component: path.resolve('./src/templates/blog.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        filters: postFilters,
      },
    });
  });

  /**
   * Create pages for tags.
   */
  const tags = content.data.tags.group;
  // Create page for all tags
  actions.createPage({
    path: `/tags`,
    component: path.resolve(`src/templates/tags.tsx`),
    context: {
      filters: {
        ...postFilters,
      },
    },
  });
  // Create page for each tag
  tags.forEach(tag => {
    actions.createPage({
      path: `/tags/${tag.fieldValue}`,
      component: path.resolve(`src/templates/tag.tsx`),
      context: {
        slug: tag.fieldValue,
        label: tag.fieldValue.trim().replace(/^\w/, c => c.toUpperCase()),
        filters: {
          ...postFilters,
          frontmatter: {
            ...postFilters.frontmatter,
            tags: { in: tag.fieldValue },
          },
        },
      },
    });
  });
};
