import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Toggle from 'components/toggle';
import './header.scss';

interface HeaderProps {
	siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
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

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
