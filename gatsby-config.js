require('dotenv').config({
  path: `.env`,
});

const siteMetadata = {
  title: `Tim Smith`,
  siteUrl: `https://www.iamtimsmith.com`,
  author: {
    name: `Tim Smith`,
    twitter: `@iam_timsmith`,
    description: `I build things using React, Node, PHP, and more. Currently, I'm a Software Engineer working on <a href='https://www.dndbeyond.com' target='_blank'>D&D Beyond</a> at <a href='https://www.fandom.com' target='_blank'>Fandom</a>. You can follow me on Twitter at <a href='https://www.twitter.com/iam_timsmith' target='_blank'>@iam_timsmith</a>.`,
    image: `./src/images/timsmith.jpg`,
  },
  menu: [
    { name: 'Blog', url: '/blog' },
    { name: 'Tags', url: '/tags' },
  ],
  socials: [
    { name: `Twitter`, url: `https://www.twitter.com/iam_timsmith` },
    { name: `LinkedIn`, url: `https://www.linkedin.com/in/tim-smith-1a651aa0` },
    { name: `Github`, url: `https://github.com/iamtimsmith` },
    { name: `Dev`, url: `https://dev.to/iam_timsmith` },
  ],
  useSearch: true,
  postsPerPage: 6,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-axe`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/dashboard/**'],
        siteSpeedSampleRate: 10,
        cookieDomain: 'iamtimsmith.com',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/templates/page.tsx'),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-unwrap-images`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              showCaptions: true,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer nofollow',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  url: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${node.fields.slug}`,
                  custom_elements: [{ 'content:encoded': node.html }],
                });
              });
            },
            query: `
						{
							allMdx(
								filter: {fileAbsolutePath:{regex:"/src/posts/./i"}, frontmatter:{published:{eq:true}}}
								sort: { order: DESC, fields: [fileAbsolutePath] },
							) {
								nodes {
									excerpt
									html
									fields {
										slug
									}
									frontmatter {
										title
									}
								}
							}
						}
            `,
            output: '/rss.xml',
            title: "Tim Smith's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1f2933`,
        theme_color: `#1f2933`,
        display: `minimal-ui`,
        icon: `src/images/timsmith-teal.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'posts',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: 'speed',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `{
					posts: allMdx(
						filter: {
							fileAbsolutePath: { regex: "/src/posts/./i" },
							frontmatter: { published: { eq: true } },
						}
						sort: { fields: fileAbsolutePath, order: DESC }
					) {
						nodes {
							id
							frontmatter {
								title
								description
								tags
							}
							fields {
								slug
							}
							body
							excerpt
						}
					}
				}
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'description', 'tags', 'slug', 'body'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        // store: ['id', 'path', 'title'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.posts.nodes.map(node => ({
            ...node,
            frontmatter: {
              ...node.frontmatter,
              tags: node.frontmatter.tags.join(', '),
            },
          })),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
