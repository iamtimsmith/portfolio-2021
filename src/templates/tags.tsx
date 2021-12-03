import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { Seo } from '../components/seo';

interface TagsTemplateProps {
  data: {
    tags: {
      group: {
        fieldValue: string;
        totalCount: number;
      }[];
    };
  };
}

const TagsTemplate = ({ data }: TagsTemplateProps) => {
  return (
    <Layout>
      <Seo
        title='All Tags'
        description='Tags available for blog posts'
        image='/timsmith-social.jpg'
      />
      <h1>All Tags</h1>
      <p>
        Below you can find all of the tags being used in the blog so you can
        find exactly what you're looking for.
      </p>
      <ul>
        {data.tags.group.map((tag, id) => (
          <li key={id}>
            <Link to={`/tags/${tag.fieldValue}`}>#{tag.fieldValue}</Link>
            {tag.totalCount === 1
              ? ` - ${tag.totalCount} post`
              : ` - ${tag.totalCount} posts`}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query TagsTemplateQuery($filters: MdxFilterInput!) {
    tags: allMdx(filter: $filters) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsTemplate;
