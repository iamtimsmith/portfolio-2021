import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  BlogListItems,
  BlogPost,
  BlogPostTitle,
  DraftMessage,
} from './blog-list.style';

interface BlogListProps {
  posts: {
    id: string;
    excerpt: string;
    frontmatter: {
      title: string;
      published?: boolean;
    };
    fields: {
      slug: string;
    };
  }[];
}

export const BlogList = ({ posts }: BlogListProps) => {
  return (
    <BlogListItems>
      {posts.map((node, id) => (
        <BlogPost key={id}>
          <BlogPostTitle>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{' '}
          </BlogPostTitle>
          {!node.frontmatter.published && <DraftMessage> - Draft</DraftMessage>}
          <p>{node.excerpt}</p>
        </BlogPost>
      ))}
    </BlogListItems>
  );
};

BlogList.propTypes = {
  posts: PropTypes.array,
};
