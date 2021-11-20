import React, { useEffect, useState } from 'react';
import { getIcon } from '../../utils/social';
import './toggle.scss';

declare const window: any;

export const Toggle = () => {
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
      <span className='toggle__icon toggle__icon--light'>
        {getIcon('light')}
      </span>
      {/* prettier-ignore */}
      <span className='toggle__icon toggle__icon--dark'>
				{getIcon('dark')}
			</span>
    </button>
  );
};
