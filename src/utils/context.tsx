import React, { createContext, useEffect, useReducer } from 'react';
import Snowfall from 'react-snowfall';
import { useContextQuery } from './useContextQuery';
import { reducer, store } from './reducer';
import { Theme, Context, SiteProviderProps } from '../types/context.i';
declare const window: any;

export const SiteContext = createContext({} as Context);

export const SiteProvider = ({ children }: SiteProviderProps) => {
  const [{ theme }, dispatch] = useReducer(reducer, store);
  const site = useContextQuery();

  // Actions
  const changeTheme = (theme: Theme) =>
    dispatch({ type: 'CHANGE_THEME', theme });

  // Get theme on load
  useEffect(() => {
    changeTheme(window.__theme);
  }, []);

  return (
    <SiteContext.Provider
      value={{
        site,
        theme: theme,
        changeTheme,
      }}
    >
      {children}
      {theme === 'christmas' && (
        <div className='snowfall'>
          <Snowfall />
        </div>
      )}
    </SiteContext.Provider>
  );
};
