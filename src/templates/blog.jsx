import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Posts from '../components/posts';
import Pagination from '../components/pagination';
import Seo from '../components/seo';

const BlogTemplate = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo
        title='Blog'
        description={`A blog to teach new developers about engineering, javascript, and much more.`}
        image='/timsmith-social.jpg'
      />
      <h1>Blog</h1>
      <Posts posts={data.posts.nodes} />
      <Pagination
        page={pageContext.currentPage}
        totalPages={pageContext.numPages}
      />
    </Layout>
  );
};

export const query = graphql`
  query BlogTemplateQuery($skip: Int!, $limit: Int!) {
    posts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/src/posts/./i" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: fileAbsolutePath, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
`;

export default BlogTemplate;
