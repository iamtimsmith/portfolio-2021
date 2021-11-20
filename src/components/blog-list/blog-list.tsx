import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

interface BlogListProps {
  posts: {
    id: string;
    excerpt: string;
    frontmatter: {
      title: string;
    };
    fields: {
      slug: string;
    };
  }[];
}

export const BlogList = ({ posts }: BlogListProps) => {
  return (
    <ul className='posts'>
      {posts.map(node => (
        <li className='posts__post' key={node.id}>
          <strong className='posts__post-title'>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
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
