import React from 'react';
import { Bio } from '../bio';
import { Tags } from '../tags';
import { Sharing } from '../sharing';
import { PostFooterProps } from './post-footer.i';

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
