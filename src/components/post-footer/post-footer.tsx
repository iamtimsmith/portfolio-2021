import React from 'react';
import { Bio } from '../bio';
import { Seo } from '../seo';
import { Tags } from '../tags';
import { Sharing } from '../sharing';

interface PostFooterProps {
  data: {
    title: string;
    description: string;
    tags: string[];
    image: string;
  };
}

export const PostFooter = ({ data }: PostFooterProps) => {
  return (
    <footer>
      <Tags tags={data.tags} />
      <Bio showAuthor />
      <Sharing title={data.title} />
    </footer>
  );
};

export default PostFooter;
