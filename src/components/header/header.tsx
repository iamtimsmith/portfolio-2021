import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Toggle } from '../toggle';
import { SiteContext } from '../../utils/context';
import { Navbar, Logo, Nav } from './header.style';

export const Header = () => {
  const { site } = useContext(SiteContext);
  return (
    <Navbar>
      <Logo to='/'>{site.title}</Logo>
      <Nav aria-label='Main menu'>
        {site.menu.map((item, id) => (
          <Link to={item.url} key={id}>
            {item.name}
          </Link>
        ))}
        <Toggle />
      </Nav>
    </Navbar>
  );
};
