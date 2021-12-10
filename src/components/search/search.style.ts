import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: inline;
  position: relative;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  color: var(--color-grey-700);
  font-size: var(--font-size-lg);
  line-height: 0;
  padding: var(--spacing-1) var(--spacing-2);
  position: relative;
  top: 5px;
  cursor: pointer;
`;

export const SearchField = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: var(--max-width);
    font-size: var(--font-size-xl);
  }
`;
