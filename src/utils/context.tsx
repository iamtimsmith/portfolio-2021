import React, { createContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Snowfall from 'react-snowfall';
import { useStaticQuery, graphql } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

declare const window: any;

export type Theme = 'dark' | 'light' | 'halloween' | 'christmas';
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
    menu: { name: string; url: string }[];
    socials: { name: string; url: string }[];
    favicon: string;
  };
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export const SiteContext = createContext({} as Context);

interface SiteProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const SiteProvider = ({ children }: SiteProviderProps) => {
  const isOctober = dayjs().month() === 9;
  const isDecember = dayjs().month() === 11;
  const [theme, setTheme] = useState<Theme>('light');
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

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    window.__setPreferredTheme(theme);
  };

  useEffect(() => {
    if (
      (!isOctober && window.__theme === 'halloween') ||
      (!isDecember && window.__theme === 'christmas')
    ) {
      setTheme('dark');
    } else {
      setTheme(window.__theme);
    }
  }, []);

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
        theme,
        changeTheme,
      }}
    >
      {children}
      {theme === 'christmas' && (
        <div className='snowfall'>
          <Snowfall />
        </div>
      )}
    </SiteContext.Provider>
  );
};
