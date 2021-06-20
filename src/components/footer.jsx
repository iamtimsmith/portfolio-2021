import React from 'react';
import PropTypes from 'prop-types';
import {GiTechnoHeart} from 'react-icons/gi';
import {FaTwitter, FaLinkedin, FaGithub, FaDev} from 'react-icons/fa';
import {useStaticQuery, graphql} from 'gatsby';

const Footer = ({siteTitle}) => {
	const {site: {siteMetadata: {socials}}} = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					socials {
						name
						url
					}
				}
			}
		}
	`);

	const getIcon = (site) => {
		switch(site) {
			case 'twitter': return <FaTwitter/>;
			case 'linkedin': return <FaLinkedin/>;
			case 'github': return <FaGithub/>;
			case 'dev': return <FaDev/>;
			default: return null;
		}
	}

  return (
    <footer className='footer'>
			<nav>
				{socials.map(social => (
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
        <GiTechnoHeart /> by {siteTitle}.
      </p>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

export default Footer;
