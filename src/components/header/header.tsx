import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Toggle } from '../toggle';
import { Search } from '../search';
import { SiteContext } from '../context';
import { Navbar, Logo, Nav } from './header.style';
import { MenuItem } from './header.i';

export const Header = () => {
  const { site } = useContext(SiteContext);
  return (
    <Navbar>
      <Logo to='/'>{site.title}</Logo>
      <Nav aria-label='Main menu'>
        {site.menu.map((item: MenuItem, key: number) => (
          <Link to={item.url} key={key}>
            {item.name}
          </Link>
        ))}
        <Toggle />
        {!!site.useSearch && <Search />}
      </Nav>
    </Navbar>
  );
};
