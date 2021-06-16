import React from 'react';
import {Link} from 'gatsby';

const Tags = ({tags = []}) => {
  return (
    <nav className='tags'>
      <span>Tags: </span>
      {tags.map(tag => (
        <Link to={`/blog/tags/${tag}`} className='tags__tag' key={tag}>
          #{tag}
        </Link>
      ))}
    </nav>
  );
};

export default Tags;
