/**
 * This file is used to server side render the MDX components
 * when creating the rss feed. Since the components available
 * here should match the components available to the rest of
 * the site, the global config for available components should
 * be pulled from the **mdxComponents** variable.
 */
import React from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Bio } from '../components/bio';
import { BlogList } from '../components/blog-list';
import { Gif } from '../components/gif';
import { Seo } from '../components/seo';
import { EmailSignup } from '../components/email-signup';

// prettier-ignore
export const mdxComponents = { Bio, BlogList, EmailSignup, Gif, Link, Seo };

interface wrapRootElementProps {
  element: any;
}
export const wrapRootElement = ({ element }: wrapRootElementProps) => (
  <MDXProvider components={mdxComponents}>{element}</MDXProvider>
);
