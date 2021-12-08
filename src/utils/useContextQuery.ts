import { useStaticQuery, graphql } from 'gatsby';

export const useContextQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        config: site {
          siteMetadata {
            title
            siteUrl
            description
            author {
              name
              twitter
              description
            }
            menu {
              name
              url
            }
            socials {
              name
              url
            }
          }
        }
        portrait: file(name: { eq: "timsmith" }) {
          childImageSharp {
            gatsbyImageData(width: 100)
          }
        }
        favicon: file(name: { eq: "favicon" }) {
          publicURL
        }
      }
    `
  );

  const site = {
    ...data.config.siteMetadata,
    author: {
      ...data.config.siteMetadata.author,
      image: data.portrait.childImageSharp.gatsbyImageData,
    },
    favicon: data.favicon.publicURL,
  };

  return site;
};
