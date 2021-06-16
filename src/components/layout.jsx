import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import Header from './header';
import Bio from './bio';
import Gif from './gif';
import Seo from './seo';
import Tags from './tags';
import PostFooter from './post-footer';
import 'prismjs/themes/prism.css';
import '../scss/style.scss';

const Layout = ({children, pageContext}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <MDXProvider components={{Gif, Bio, Seo, Tags}}>
      <div className='container'>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>
          {typeof pageContext !== `undefined` && (
            <h1>{pageContext.frontmatter.title}</h1>
          )}
          {children}
          {/* Blog Footer */}
          {typeof pageContext !== `undefined` && (
            <PostFooter data={pageContext.frontmatter} />
          )}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
        </footer>
      </div>
    </MDXProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
