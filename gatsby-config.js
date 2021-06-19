require('dotenv').config({
  path: `.env`,
});

const siteMetadata = {
  title: `Tim Smith`,
	siteUrl: `https://relaxed-brattain-f018de.netlify.app`,
  author: {
    name: `Tim Smith`,
    twitter: `@iam_timsmith`,
    description: `I build things using React, Node, PHP, and more. Currently, I'm a Software Engineer working on <a href='https://www.dndbeyond.com' target='_blank'>D&D Beyond</a> at <a href='https://www.fandom.com' target='_blank'>Fandom</a>. You can follow me on Twitter at <a href='https://www.twitter.com/iam_timsmith' target='_blank'>@iam_timsmith</a>.`,
    image: `${__dirname}/src/images/timsmith.jpg`,
  },
	socials: [
		{name: `Twitter`, url: `https://www.twitter.com/iam_timsmith`},
		{name: `LinkedIn`, url: `https://www.linkedin.com/in/tim-smith-1a651aa0`},
		{name: `Github`, url: `https://github.com/iamtimsmith`},
		{name: `Dev`, url: `https://dev.to/iam_timsmith`}
	]
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
		`gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-catch-links`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/components/layout.jsx'),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: siteMetadata.title,
              separator: '|',
              author: siteMetadata.author.twitter,
              background: `#182227`,
              fontColor: '#E7E8E9',
              titleFontSize: 96,
              subtitleFontSize: 60,
              fontStyle: `sans-serif`,
            },
          },
					{
						resolve: "gatsby-remark-external-links",
						options: {
							target: "_blank",
							rel: "noreferrer nofollow"
						}
					},

        ],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/timsmith-teal.png`, // This path is relative to the root of the site.
      },
    },
		{
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_TRACKING_ID,
        ],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
