import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Toggle } from '../toggle';
import { SiteContext } from '../../utils/context';
import './header.scss';

export const Header = () => {
  const { site } = useContext(SiteContext);
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        {site.title}
      </Link>
      <nav className='header__nav'>
        <Link to='/blog'>Blog</Link>
        <Toggle />
      </nav>
    </header>
  );
};
