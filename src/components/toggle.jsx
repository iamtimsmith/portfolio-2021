import React, {useEffect, useState} from 'react';
import {IoSunnyOutline, IoMoonOutline} from 'react-icons/io5';

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
      label='Toggle Theme'
      className='toggle'
    >
      {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
};

export default Toggle;
