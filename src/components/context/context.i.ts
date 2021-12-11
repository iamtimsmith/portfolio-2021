export type Theme = 'dark' | 'light' | 'halloween' | 'christmas';

export interface Context {
  site: any;
  theme: Theme;
  changeTheme: any;
}

export interface SiteProviderProps {
  children: JSX.Element | JSX.Element[];
}
