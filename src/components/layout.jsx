import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import Header from './header';
import Footer from './footer';
import Bio from './bio';
import Gif from './gif';
import Seo from './seo';
import Tags from './tags';
import Socials from './socials';
import PostFooter from './post-footer';
import 'prismjs/themes/prism.css';
import '../scss/style.scss';

const Layout = ({children, pageContext}) => {
  const {site} = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author {
            name
            twitter
            description
          }
        }
      }
    }
  `);

  return (
    <MDXProvider components={{Gif, Bio, Seo, Tags}}>
      <div className='container'>
        <Header siteTitle={site.siteMetadata?.title || `Title`} />
        <main>
          {typeof pageContext !== `undefined` && (
            <h1>{pageContext.frontmatter.title}</h1>
          )}
          {children}
					<Socials/>
          {/* Blog Footer */}
          {typeof pageContext !== `undefined` && (
            <PostFooter
              data={pageContext.frontmatter}
              author={site.siteMetadata.author}
            />
          )}
        </main>
        <Footer siteTitle={site.siteMetadata.title} />
      </div>
    </MDXProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
