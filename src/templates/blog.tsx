import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { BlogList } from '../components/blog-list';
import { Pagination } from '../components/pagination';
import { Seo } from '../components/seo';

interface BlogTemplateProps {
  data: {
    posts: {
      nodes: {
        id: string;
        frontmatter: {
          title: string;
          published: boolean;
        };
        fields: {
          slug: string;
        };
        excerpt: string;
      }[];
    };
  };
  pageContext: {
    currentPage: number;
    numPages: number;
  };
}

const BlogTemplate = ({ data, pageContext }: BlogTemplateProps) => {
  return (
    <Layout>
      <Seo
        title='Blog'
        description={`A blog to teach new developers about engineering, javascript, and much more.`}
        image='/timsmith-social.jpg'
      />
      <h1>Blog</h1>
      <BlogList posts={data.posts.nodes} />
      <Pagination
        page={pageContext.currentPage}
        totalPages={pageContext.numPages}
      />
    </Layout>
  );
};

export const query = graphql`
  query BlogTemplateQuery(
    $skip: Int!
    $limit: Int!
    $filters: MdxFilterInput!
  ) {
    posts: allMdx(
      filter: $filters
      sort: { fields: fileAbsolutePath, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          title
          published
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
