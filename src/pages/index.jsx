import React from 'react';
import {Link, graphql} from 'gatsby';
import Layout from '../components/layout';
import Bio from '../components/bio';
import Posts from '../components/posts';
import Seo from '../components/seo';

const IndexPage = ({data}) => (
  <Layout>
    <Seo
			title='Software Engineer'
			description={`Tim Smith is a software engineer focused on making the web a more enjoyable place to be`}
			image='/timsmith-socical.jpg'
		/>
    <section style={{margin: `var(--spacing-8) var(--spacing-0)`}}>
      <h1>
        Hi, my name is <strong>Tim Smith</strong> and I'm a{' '}
        <strong>Software Engineer</strong>.
      </h1>
    </section>
    <Bio />
    <h2>Recent Posts</h2>
    <Posts posts={data.allMdx.nodes} />
    <Link to='/blog'>View more posts &rarr;</Link>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allMdx(
      filter: {slug: {regex: "/blog/./i"}, frontmatter: {published: {eq: true}}}
      sort: {fields: fileAbsolutePath, order: DESC}
      limit: 5
    ) {
      nodes {
        frontmatter {
          title
        }
        fields {
          slug
        }
        id
        excerpt
      }
    }
  }
`;
