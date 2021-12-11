import React from 'react';
import { TagList, Tag } from './tags.style';
import { TagsProps } from './tags.i';

export const Tags = ({ tags = [] }: TagsProps) => {
  return (
    <TagList aria-label='tags'>
      <span>Tags: </span>
      {tags.map((tag: string, key: number) => (
        <Tag to={`/tags/${tag}`} key={key}>
          #{tag}
        </Tag>
      ))}
    </TagList>
  );
};
