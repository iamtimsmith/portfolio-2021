import React from 'react';
import { GiTechnoHeart } from 'react-icons/gi';
import { FaTwitter, FaLinkedin, FaGithub, FaDev } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';
import './footer.scss';

interface FooterProps {
	siteTitle: string;
}

const Footer = ({ siteTitle }: FooterProps) => {
	const {
		site: {
			siteMetadata: { socials },
		},
	} = useStaticQuery(graphql`
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
			<nav className='footer__socials'>
				{socials.map((social: { name: string; url: string }) => (
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

export default Footer;
