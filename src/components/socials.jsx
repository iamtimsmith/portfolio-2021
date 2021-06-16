import React, {useEffect, useState} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {FaTwitter, FaGithub, FaLinkedin, FaDev} from 'react-icons/fa';

const Socials = () => {
	const [show, setShow] = useState(false);
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
		}
	}

	const handleShow = () => setShow(window.scrollY > 1000);
	const handleClick = () => window[`scrollTo`]({ top: 0, behavior: `smooth` });

	useEffect(() => {
		document.addEventListener(`scroll`, handleShow);
		return () => document.removeEventListener(`scroll`, handleShow);
	}, [])

	return (
		<aside className='socials'>
			<nav className='socials__nav'>
				<button className={show ? `show` : ``} onClick={() => handleClick()}>&uarr;</button>
				{socials.map(social => (
					<a href={social.url} target='_blank' rel='noopener nofollow'>
						{getIcon(social.name.toLowerCase())}
					</a>
				))}
			</nav>
		</aside>
	);
}

export default Socials;
