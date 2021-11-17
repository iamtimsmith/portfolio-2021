import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FaTwitter, FaGithub, FaLinkedin, FaDev } from 'react-icons/fa';
import './socials.scss';

const Socials = () => {
	const [show, setShow] = useState(false);
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

	const handleShow = () => setShow(window.scrollY > 0);
	const handleClick = () => window[`scrollTo`]({ top: 0, behavior: `smooth` });

	useEffect(() => {
		document.addEventListener(`scroll`, handleShow);
		return () => document.removeEventListener(`scroll`, handleShow);
	}, []);

	return (
		<aside className='socials'>
			<nav className='socials__nav'>
				<button className={show ? `show` : ``} onClick={() => handleClick()}>
					&uarr;
				</button>
				{socials.map((social: { url: string; name: string }) => (
					<a
						href={social.url}
						target='_blank'
						rel='noreferrer nofollow'
						key={social.name}
					>
						{getIcon(social.name.toLowerCase())}
					</a>
				))}
			</nav>
		</aside>
	);
};

export default Socials;
