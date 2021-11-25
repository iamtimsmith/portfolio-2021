import styled from 'styled-components';

export const FooterSection = styled.footer`
  display: block;
  text-align: center;
  margin: var(--spacing-4) var(--spacing-0) var(--spacing-0);

  nav {
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-4);

    a {
      background: none;
      font-size: var(--font-size-xl);
      color: var(--color-grey-600);
      margin: var(--spacing-2);
      transition: color 0.3s;

      &:hover {
        color: var(--color-accent-400);
      }
    }
  }

  p {
    margin: var(--spacing-0);
    font-size: var(--font-size-sm);
    color: var(--color-grey-600);

    svg {
      position: relative;
      top: 3px;
      color: var(--color-accent-400);
    }
  }
`;
