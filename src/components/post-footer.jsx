import React from 'react';
import PropTypes from 'prop-types';
import Bio from './bio';
import Seo from './seo';
import Tags from './tags';
import Sharing from './sharing';

const PostFooter = ({data}) => {
  return (
    <footer>
      <Seo title={data.title} />
      <Tags tags={data.tags} />
      <Bio author />
      <Sharing title={data.title} />
    </footer>
  );
};

PostFooter.propTypes = {
  data: PropTypes.object,
};

export default PostFooter;
