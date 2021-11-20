import React from 'react';
import { Link } from 'gatsby';
import './tags.scss';

interface TagsProps {
  tags: string[];
}

export const Tags = ({ tags = [] }: TagsProps) => {
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
