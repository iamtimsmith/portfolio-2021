import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { BlogList } from '../components/blog-list';
import { Seo } from '../components/seo';
import { TagTemplateProps } from '../types/tag.i';

const TagTemplate = ({ data, pageContext }: TagTemplateProps) => {
  return (
    <Layout>
      <Seo
        title={`#${pageContext.slug}`}
        description={`Blog posts about ${pageContext.slug} written by Tim Smith.`}
        image='/timsmith-social.jpg'
      />
      <h1>
        Posts about <strong>#{pageContext.slug}</strong>
      </h1>
      <BlogList posts={data.posts.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query TagTemplateQuery($filters: MdxFilterInput!) {
    posts: allMdx(
      filter: $filters
      sort: { fields: fileAbsolutePath, order: DESC }
    ) {
      nodes {
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

export default TagTemplate;
