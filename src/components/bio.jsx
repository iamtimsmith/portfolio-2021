import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';
import {getImage, GatsbyImage} from 'gatsby-plugin-image';

const Bio = ({author = false}) => {
  const {avatar} = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(name: {eq: "timsmith"}) {
        childImageSharp {
          gatsbyImageData(width: 80, height: 80)
        }
      }
    }
  `);

  return (
    <section className='bio' style={{marginTop: author ? 30 : 0}}>
      <GatsbyImage
        image={getImage(avatar)}
        alt='Tim Smith'
        className='bio__image'
      />
      <div className='bio__content'>
        {author && <p className='bio__author'>Written by Tim Smith</p>}
        <p>
          I build things using React, Node, PHP, and more. Currently, I'm a
          Software Engineer working on{' '}
          <a href='https://www.dndbeyond.com' target='_blank'>
            D&D Beyond
          </a>{' '}
          at{' '}
          <a href='https://www.fandom.com' target='_blank'>
            Fandom
          </a>
          . You can follow me on Twitter at{' '}
          <a href='https://www.twitter.com/iam_timsmith' target='_blank'>
            @iam_timsmith
          </a>
          .
        </p>
      </div>
    </section>
  );
};

Bio.propTypes = {
  full: PropTypes.bool,
};

export default Bio;
