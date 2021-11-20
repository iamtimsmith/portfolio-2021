import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { BlogList } from '../components/blog-list';
import { Seo } from '../components/seo';

const BlogTemplate = ({ data, pageContext }) => {
  return (
    <Layout>
      <Seo
        title={`#${pageContext.slug}`}
        description={`Blog posts about ${pageContext.slug} written by Tim Smith.`}
        image='/timsmith-social.jpg'
      />
      <h1>#{pageContext.slug}</h1>
      <BlogList posts={data.posts.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query TagTemplateQuery($slug: [String]) {
    posts: allMdx(
      filter: {
        fileAbsolutePath: { regex: "src/posts/./i" }
        frontmatter: { published: { eq: true }, tags: { in: $slug } }
      }
      sort: { fields: fileAbsolutePath, order: DESC }
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
