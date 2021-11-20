import React from 'react';
import PropTypes from 'prop-types';
import { Bio } from './bio';
import Seo from './seo';
import Tags from './tags';
import Sharing from './sharing';

const PostFooter = ({ data }) => {
  return (
    <footer>
      <Seo
        title={data.title}
        description={data.description}
        // image={data.image}
      />
      {data.tags && (
        <>
          <Tags tags={data.tags} />
          <Bio showAuthor />
          <Sharing title={data.title} />
        </>
      )}
    </footer>
  );
};

PostFooter.propTypes = {
  data: PropTypes.object,
};

export default PostFooter;
