import React from 'react';
import PropTypes from 'prop-types';
import {GiTechnoHeart} from 'react-icons/gi';

const Footer = ({siteTitle}) => {
  return (
    <footer className='footer'>
      <p>
        &copy; {new Date().getFullYear()}. All rights reserved. Made with{' '}
        <GiTechnoHeart /> by {siteTitle}.
      </p>
    </footer>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

export default Footer;
