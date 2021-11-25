import React from 'react';
import { Link } from 'gatsby';
import { TagList, Tag } from './tags.style';

interface TagsProps {
  tags: string[];
}

export const Tags = ({ tags = [] }: TagsProps) => {
  return (
    <TagList>
      <span>Tags: </span>
      {tags.map(tag => (
        <Tag to={`/tags/${tag}`} key={tag}>
          #{tag}
        </Tag>
      ))}
    </TagList>
  );
};
