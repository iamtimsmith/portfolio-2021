import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({page, totalPages, paginate}) => {
  return (
    <nav className='pagination'>
      <button onClick={() => paginate(true)} disabled={page === 1}>
        &larr; Previous
      </button>
      <p>
        Page {page} / {totalPages}
      </p>
      <button onClick={() => paginate()} disabled={page === totalPages}>
        Next &rarr;
      </button>
    </nav>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  paginate: PropTypes.func,
};

export default Pagination;
