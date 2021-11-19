import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Posts = ({ posts }) => {
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

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
