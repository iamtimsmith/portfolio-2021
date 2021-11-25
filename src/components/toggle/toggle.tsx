import React, { useEffect, useState } from 'react';
import { getIcon } from '../../utils/social';
import { ToggleButton, ToggleIcon } from './toggle.style';

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
    <ToggleButton onClick={() => handleClick()} aria-label='Toggle Theme'>
      <ToggleIcon icon='light' theme={isDark ? 'dark' : 'light'}>
        {getIcon('light')}
      </ToggleIcon>
      {/* prettier-ignore */}
      <ToggleIcon icon='dark' theme={isDark ? 'dark' : 'light'}>
				{getIcon('dark')}
			</ToggleIcon>
    </ToggleButton>
  );
};
