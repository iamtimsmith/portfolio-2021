import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getIcon } from '../../utils/social';
import { FooterSection } from './footer.style';
import { SocialMenuItem } from './footer.i';

export const Footer = () => {
  const {
    site: {
      siteMetadata: { title, socials },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          socials {
            name
            url
          }
        }
      }
    }
  `);

  return (
    <FooterSection>
      <nav>
        {socials.map((social: SocialMenuItem) => (
          <a
            href={social.url}
            target='_blank'
            rel='noreferrer nofollow'
            aria-label={social.name}
            key={social.name}
          >
            {getIcon(social.name.toLowerCase())}
          </a>
        ))}
      </nav>
      <p>
        &copy; {new Date().getFullYear()}. All rights reserved. Made with{' '}
        {getIcon('heart')} by {title}.
      </p>
    </FooterSection>
  );
};
