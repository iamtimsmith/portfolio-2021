import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {getImage, GatsbyImage} from 'gatsby-plugin-image';

const Bio = () => {
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
    <section className='bio'>
      <GatsbyImage
        image={getImage(avatar)}
        alt='Tim Smith'
        className='bio__image'
      />
      <p>
        Hi, my name is Tim Smith and I'm a Software engineer working on{' '}
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
    </section>
  );
};

export default Bio;
