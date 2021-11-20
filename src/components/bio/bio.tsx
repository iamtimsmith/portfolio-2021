import React, { useContext } from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { SiteContext } from '../../utils/context';
import './bio.scss';

export const Bio = ({ showAuthor = false }) => {
  const { site } = useContext(SiteContext);

  const portrait = getImage(site.author.image);

  return (
    <section className={`bio${showAuthor ? ` bio--author` : ``}`}>
      {portrait && (
        <GatsbyImage
          image={portrait}
          alt={site.author.name}
          className='bio__image'
        />
      )}
      <div className='bio__content'>
        {showAuthor && site.author && (
          <p className='bio__author'>Written by {site.author.name}</p>
        )}
        <p
          dangerouslySetInnerHTML={{
            __html: site.author.description,
          }}
        ></p>
      </div>
    </section>
  );
};
