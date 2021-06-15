import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Posts from '../components/posts';
import Pagination from '../components/pagination';

const BlogTemplate = ({data, pageContext}) => {
  console.log(pageContext);

  return (
    <Layout>
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
      filter: {slug: {regex: "/blog/./i"}, frontmatter: {published: {eq: true}}}
      sort: {fields: fileAbsolutePath, order: DESC}
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
