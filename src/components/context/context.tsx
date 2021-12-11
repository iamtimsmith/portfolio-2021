import React, { createContext, useEffect, useReducer } from 'react';
import Snowfall from 'react-snowfall';
import { useContextQuery } from './useContextQuery';
import { reducer, store } from './reducer';
import { Theme, Context, SiteProviderProps } from './context.i';

export const SiteContext = createContext({} as Context);

export const SiteProvider = ({ children }: SiteProviderProps) => {
  const [{ theme }, dispatch] = useReducer(reducer, store);
  const site = useContextQuery();

  // Actions
  const changeTheme = (theme: Theme) => {
    return dispatch({ type: 'CHANGE_THEME', theme });
  };

  return (
    <SiteContext.Provider
      value={{
        site,
        theme,
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
