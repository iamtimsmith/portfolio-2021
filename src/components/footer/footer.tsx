import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import { GiTechnoHeart } from 'react-icons/gi';
import { useStaticQuery, graphql } from 'gatsby';
import './footer.scss';

interface SocialMenuItem {
  name: string;
  url: string;
}

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

  const getIcon = (site: string) => {
    switch (site) {
      case 'twitter':
        return <FaTwitter />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'github':
        return <FaGithub />;
      case 'dev':
        return <FaDev />;
      default:
        return null;
    }
  };

  return (
    <footer className='footer'>
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
        <GiTechnoHeart /> by {title}.
      </p>
    </footer>
  );
};
