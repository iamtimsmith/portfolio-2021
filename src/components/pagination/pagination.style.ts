import styled from 'styled-components';

export const PaginationButtons = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4) var(--spacing-0);

  p {
    margin: var(--spacing-0) var(--spacing-8);
  }

  span {
    visibility: hidden;
  }
`;
