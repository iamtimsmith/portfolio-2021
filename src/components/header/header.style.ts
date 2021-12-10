import styled from 'styled-components';
import { Link } from 'gatsby';

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) var(--spacing-0);
`;

export const Logo = styled(Link)`
  color: var(--color-grey-900);
  font-weight: 700;
  font-size: var(--font-size-xl);
  text-decoration: none;
  background: none;
`;

export const Nav = styled.nav`
  > a {
    color: var(--color-grey-700);
    text-decoration: none;
    margin: var(--spacing-2);
    background: none;
  }
`;
