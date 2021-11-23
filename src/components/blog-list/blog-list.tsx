import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './blog-list.scss';

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
    <ul className='blog-list'>
      {posts.map((node, id) => (
        <li className='blog-list__post' key={id}>
          <strong className='blog-list__post-title'>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{' '}
            {!node.frontmatter.published && (
              <span className='error'> - Draft</span>
            )}
          </strong>
          <p>{node.excerpt}</p>
        </li>
      ))}
    </ul>
  );
};

BlogList.propTypes = {
  posts: PropTypes.array,
};
