import React from 'react';
import { Link } from 'gatsby';
import { PaginationButtons } from './pagination.style';
import { PaginationProps } from './pagination.i';

export const Pagination = ({ page, totalPages }: PaginationProps) => {
  return (
    <PaginationButtons aria-label='pagination'>
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
    </PaginationButtons>
  );
};
