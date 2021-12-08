import styled from 'styled-components';

export const BlogListItems = styled.ul`
  list-style: none;
  padding: var(--spacing-0);
`;

export const BlogPost = styled.li`
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-6);
`;

export const BlogPostTitle = styled.strong`
  font-size: var(--font-size-lg);

  a {
    color: var(--color-grey-900);
  }
`;
