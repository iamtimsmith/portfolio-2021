import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

interface BioSectionProps {
  author: boolean;
}

export const BioSection = styled.section<BioSectionProps>`
  margin: ${props =>
    props.author ? `var(--spacing-0)` : `var(--spacing-8) var(--spacing-0)`};
  padding: var(--spacing-5) var(--spacing-0);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid var(--color-grey-200);
  border-bottom: 1px solid var(--color-grey-200);
  transition: 0.3s;
`;

export const BioImage = styled(GatsbyImage)`
  border-radius: 50%;
  margin-right: var(--spacing-4);
`;

export const BioContent = styled.div`
  flex: 1;

  p:last-of-type {
    margin-bottom: 0;
  }
`;

export const BioAuthor = styled.p`
  font-weight: 700;
  margin-bottom: var(--spacing-0);
  color: var(--color-grey-900);
`;
