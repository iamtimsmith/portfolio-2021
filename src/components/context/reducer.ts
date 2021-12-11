import dayjs from 'dayjs';
import { Action } from './reducer.i';
declare const window: any;

const isOctober = dayjs().month() === 9;
const isDecember = dayjs().month() === 11;

export const store = {
  theme: 'light',
};

export const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      if (
        (!isOctober && window.__theme === 'halloween') ||
        (!isDecember && window.__theme === 'christmas')
      ) {
        window.__setPreferredTheme('light');
        return {
          ...state,
          theme: 'light',
        };
      } else {
        window.__setPreferredTheme(action.theme);
        return {
          ...state,
          theme: action.theme,
        };
      }

    default:
      throw new Error();
  }
};
