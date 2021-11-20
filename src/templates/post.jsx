import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { PostFooter } from '../components/post-footer';

const PostTemplate = ({ data: { post }, pageContext }) => {
  console.log(post.frontmatter);
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image='/timsmith-social.jpg'
      />
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer children={post.body} />
      <PostFooter data={post.frontmatter} />
    </Layout>
  );
};

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        tags
      }
      body
    }
  }
`;

export default PostTemplate;
