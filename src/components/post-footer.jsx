import React from 'react';
import PropTypes from 'prop-types';
import Bio from './bio';
import Seo from './seo';
import Tags from './tags';

const PostFooter = ({data}) => {
  return (
    <footer>
      <Seo title={data.title} />
      <Tags tags={data.tags} />
      <Bio author />
    </footer>
  );
};

PostFooter.propTypes = {
  data: PropTypes.object,
};

export default PostFooter;
