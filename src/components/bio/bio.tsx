import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import './bio.scss';

const Bio = ({ showAuthor = false }) => {
	const { image, site } = useStaticQuery(graphql`
		{
			image: file(name: { eq: "timsmith" }) {
				childImageSharp {
					gatsbyImageData(width: 100)
				}
			}
			site {
				siteMetadata {
					author {
						name
						twitter
						description
					}
				}
			}
		}
	`);

	const imageData = getImage(image);

	return (
		<section className={`bio${showAuthor ? ` bio--author` : ``}`}>
			{imageData && (
				<GatsbyImage
					image={imageData}
					alt={site.siteMetadata.author.name}
					className='bio__image'
				/>
			)}
			<div className='bio__content'>
				{showAuthor && site.siteMetadata.author && (
					<p className='bio__author'>
						Written by {site.siteMetadata.author.name}
					</p>
				)}
				<p
					dangerouslySetInnerHTML={{
						__html: site.siteMetadata.author.description,
					}}
				></p>
			</div>
		</section>
	);
};

export default Bio;
