import React from 'react';
import { Link } from 'gatsby';
import Toggle from 'components/toggle';
import './header.scss';

interface HeaderProps {
	siteTitle: string;
}

const Header = ({ siteTitle = '' }: HeaderProps) => (
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

export default Header;
