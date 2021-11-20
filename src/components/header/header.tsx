import React from 'react';
import { Link } from 'gatsby';
import { Toggle } from '../toggle';
import './header.scss';

interface HeaderProps {
  siteTitle: string;
}

export const Header = ({ siteTitle }: HeaderProps) => (
  <header className='header'>
    <Link to='/' className='header__logo'>
      {siteTitle}
    </Link>
    <nav className='header__nav'>
      <Link to='/blog'>Blog</Link>
      <Toggle />
    </nav>
  </header>
);
