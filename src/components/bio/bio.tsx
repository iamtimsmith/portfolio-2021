import React, { useContext } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { SiteContext } from '../../utils/context';
import { BioSection, BioImage, BioContent, BioAuthor } from './bio.style';

export const Bio = ({ showAuthor = false }) => {
  const { site } = useContext(SiteContext);

  const portrait = getImage(site.author.image);

  return (
    <BioSection author={showAuthor}>
      {portrait && <BioImage image={portrait} alt={site.author.name} />}
      <BioContent>
        {showAuthor && site.author && (
          <BioAuthor>Written by {site.author.name}</BioAuthor>
        )}
        <p
          dangerouslySetInnerHTML={{
            __html: site.author.description,
          }}
        />
      </BioContent>
    </BioSection>
  );
};
