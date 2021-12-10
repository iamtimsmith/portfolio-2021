import React, { useState, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { SearchContainer, SearchButton, SearchField } from './search.style';

export const Search = () => {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <SearchContainer>
      <SearchButton
        aria-label='Toggle Search Form'
        onClick={() => setShow(!show)}
      >
        <IoIosSearch />
      </SearchButton>
      {show && (
        <SearchField action='/search' onClick={() => setShow(false)}>
          <input
            type='text'
            name='q'
            placeholder='Search for something...'
            aria-label='Search'
            value={query}
            onChange={e => setQuery(e.target.value)}
            onClick={e => e.stopPropagation()}
            autoFocus
          />
        </SearchField>
      )}
    </SearchContainer>
  );
};
