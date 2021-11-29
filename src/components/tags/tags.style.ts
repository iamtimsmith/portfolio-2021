import styled from 'styled-components';
import { Link } from 'gatsby';

export const TagList = styled.nav`
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-8);
  font-size: var(--font-size-sm);
`;

export const Tag = styled(Link)`
  background: var(--color-grey-100);
  padding: var(--spacing-1);
  margin: var(--spacing-1);
  border-radius: 3px;
`;
