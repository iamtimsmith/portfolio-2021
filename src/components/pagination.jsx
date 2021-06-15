import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

const Pagination = ({page, totalPages}) => {
  return (
    <nav className='pagination'>
      {(page === 1 && <span>&larr; Previous</span>) || (
        <Link to={`/blog/${page - 1 > 1 ? page - 1 : ``}`}>
          &larr; Previous
        </Link>
      )}
      <p>
        Page {page} / {totalPages}
      </p>
      {(page === totalPages && <span>&rarr; Next</span>) || (
        <Link to={`/blog/${page + 1}`}>Next &rarr;</Link>
      )}
    </nav>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  paginate: PropTypes.func,
};

export default Pagination;
