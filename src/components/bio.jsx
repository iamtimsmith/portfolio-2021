import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';
import {getImage, GatsbyImage} from 'gatsby-plugin-image';

const Bio = ({showAuthor = false}) => {
  const {image, site} = useStaticQuery(graphql`
    {
      image: file(name: {eq: "timsmith"}) {
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

  return (
    <section className='bio' style={{marginTop: showAuthor ? 30 : 0}}>
      <GatsbyImage
        image={getImage(image)}
        alt={site.siteMetadata.author.name}
        className='bio__image'
      />
      <div className='bio__content'>
        {(showAuthor && site.siteMetadata.author) && (
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

Bio.propTypes = {
  full: PropTypes.bool,
};

export default Bio;
