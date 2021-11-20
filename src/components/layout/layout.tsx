import React from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Header } from '../header';
import { Footer } from '../footer';
import { Bio } from '../bio';
import { BlogList } from '../blog-list';
import { Gif } from '../gif';
import { Seo } from '../seo';
import { EmailSignup } from '../email-signup';
import { Socials } from '../socials';
import { SiteProvider } from '../../utils/context';
import 'prismjs/themes/prism.css';
import '../../styles/style.scss';
import './layout.scss';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <SiteProvider>
      <MDXProvider components={{ Bio, BlogList, EmailSignup, Gif, Link, Seo }}>
        <div className='container'>
          <Header />
          <main>
            {children}
            <Socials />
          </main>
          <Footer />
        </div>
      </MDXProvider>
    </SiteProvider>
  );
};
