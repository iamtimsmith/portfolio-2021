import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Header } from '../header';
import { Footer } from '../footer';
import { Socials } from '../socials';
import { SiteProvider } from '../context';
import { mdxComponents } from '../../utils/wrap-root-element';
import { GlobalStyles } from '../../styles/global';
import { Container } from './layout.style';
import { LayoutProps } from './layout.i';
import 'prismjs/themes/prism.css';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <SiteProvider>
        <MDXProvider components={mdxComponents}>
          <Container>
            <Header />
            <main>
              {children}
              <Socials />
            </main>
            <Footer />
          </Container>
        </MDXProvider>
      </SiteProvider>
    </>
  );
};
