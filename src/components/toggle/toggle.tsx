import React, { useContext, useEffect } from 'react';
import dayjs from 'dayjs';
import { getIcon } from '../../utils/social';
import { SiteContext } from '../context';
import { ToggleButton, ToggleIcon } from './toggle.style';
declare const window: any;

export const Toggle = () => {
  const { theme, changeTheme } = useContext(SiteContext);
  const isOctober = dayjs().month() === 9;
  const isDecember = dayjs().month() === 11;

  const handleClick = () => {
    switch (theme) {
      case 'light':
        return changeTheme('dark');
      case 'dark':
        // If October, give Halloween option
        if (isOctober) return changeTheme('halloween');
        // If December, give Christmas option
        if (isDecember) return changeTheme('christmas');
        return changeTheme('light');
      default:
        return changeTheme('light');
    }
  };

  // Get theme on load
  useEffect(() => {
    changeTheme(window.__theme);
  }, []);

  return (
    <ToggleButton onClick={() => handleClick()} aria-label='Toggle Theme'>
      <ToggleIcon
        show={
          isDecember
            ? theme === 'christmas'
            : isOctober
            ? theme === 'halloween'
            : theme === 'dark'
        }
      >
        {getIcon('light')}
      </ToggleIcon>
      <ToggleIcon show={theme === 'light'}>{getIcon('dark')}</ToggleIcon>
      <ToggleIcon show={isDecember && theme === 'dark'}>
        {getIcon('christmas')}
      </ToggleIcon>
      <ToggleIcon show={isOctober && theme === 'dark'}>
        {getIcon('halloween')}
      </ToggleIcon>
    </ToggleButton>
  );
};
