import React from 'react';
import { graphql } from 'gatsby';
import { ImageDataLike, getSrc } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';
import { PostFooter } from '../components/post-footer';

interface PostTemplateProps {
  data: {
    post: {
      frontmatter: {
        title: string;
        description: string;
        tags: string[];
        published: boolean;
        image: string;
      };
      body: string;
    };
    image: ImageDataLike;
  };
}

const PostTemplate = ({ data: { post, image } }: PostTemplateProps) => {
  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={getSrc(image)}
      />
      <h1>
        {post.frontmatter.title}{' '}
        {!post.frontmatter.published && <span className='error'>- Draft</span>}
      </h1>
      <MDXRenderer children={post.body} />
      <PostFooter data={post.frontmatter} />
    </Layout>
  );
};

export const query = graphql`
  query PostTemplateQuery($slug: String!, $image: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        tags
        published
      }
      body
    }
    image: file(base: { eq: $image }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default PostTemplate;
