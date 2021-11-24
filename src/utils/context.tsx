import React, { createContext, ReactChildren } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

interface Context {
  site: {
    title: string;
    siteUrl: string;
    description: string;
    author: {
      name: string;
      description: string;
      twitter: string;
      image: ImageDataLike;
    };
    socials: { name: string; url: string }[];
    favicon: string;
  };
}

export const SiteContext = createContext({} as Context);

interface SiteProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const SiteProvider = ({ children }: SiteProviderProps) => {
  const { config, portrait, favicon } = useStaticQuery(
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

  return (
    <SiteContext.Provider
      value={{
        site: {
          ...config.siteMetadata,
          author: {
            ...config.siteMetadata.author,
            image: portrait.childImageSharp.gatsbyImageData,
          },
          favicon: favicon.publicURL,
        },
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
