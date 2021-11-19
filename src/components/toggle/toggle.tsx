import React, {useEffect, useState} from 'react';
import {IoSunnyOutline, IoMoonOutline} from 'react-icons/io5';
import './toggle.scss';

declare const window: any;

const Toggle = () => {
  const [isDark, setIsDark] = useState(
    typeof window !== `undefined` && window.__theme === `dark`
  );

  const handleClick = () => {
    const themeDark = !isDark;
    setIsDark(themeDark);
    window.__setPreferredTheme(themeDark ? `dark` : `light`);
  };

  useEffect(() => {
    setIsDark(window.__theme === `dark`);
  }, []);

  return (
    <button
      onClick={() => handleClick()}
      aria-label='Toggle Theme'
      className='toggle'
    >
      <IoSunnyOutline className='toggle__icon toggle__icon--light' />
      <IoMoonOutline className='toggle__icon toggle__icon--dark' />
    </button>
  );
};

export default Toggle;
