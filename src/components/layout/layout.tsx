import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import Header from 'components/header';
import Footer from 'components/footer';
import Bio from 'components/bio';
import Gif from 'components/gif';
import Seo from 'components/seo/seo';
import EmailSignup from 'components/email-signup';
import Socials from 'components/socials';
import PostFooter from 'components/post-footer';
import 'prismjs/themes/prism.css';
import 'scss/style.scss';

interface LayoutProps {
	children: JSX.Element | JSX.Element[];
	pageContext?: any;
}

const Layout = ({ children, pageContext }: LayoutProps) => {
	const { site } = useStaticQuery(graphql`
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
		<MDXProvider components={{ Gif, Bio, Seo, EmailSignup }}>
			<div className='container'>
				<Header siteTitle={site.siteMetadata?.title || `Title`} />
				<main>
					{typeof pageContext !== `undefined` &&
						pageContext.frontmatter.title && (
							<h1>{pageContext.frontmatter.title}</h1>
						)}
					{children}
					<Socials />
					{/* Blog Footer */}
					{typeof pageContext !== `undefined` &&
						pageContext.frontmatter.title && (
							<PostFooter data={pageContext.frontmatter} />
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
