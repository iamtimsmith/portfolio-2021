import styled from 'styled-components';

export const StyleGuidePage = styled.div`
  hr {
    margin: 0 !important;
  }
  .style-guide {
    &__colors {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }

    &__swatch {
      font-size: var(--font-size-sm);
      font-style: italic;
      color: var(--color-grey-500);
      text-align: center;

      &:before {
        content: '';
        display: block;
        padding-bottom: 100%;
        border: 1px solid var(--color-grey-100);
      }

      &.grey-50:before {
        background: var(--color-grey-50);
      }
      &.grey-100:before {
        background: var(--color-grey-100);
      }
      &.grey-200:before {
        background: var(--color-grey-200);
      }
      &.grey-300:before {
        background: var(--color-grey-300);
      }
      &.grey-400:before {
        background: var(--color-grey-400);
      }
      &.grey-500:before {
        background: var(--color-grey-500);
      }
      &.grey-600:before {
        background: var(--color-grey-600);
      }
      &.grey-700:before {
        background: var(--color-grey-700);
      }
      &.grey-800:before {
        background: var(--color-grey-800);
      }
      &.grey-900:before {
        background: var(--color-grey-900);
      }
      &.accent-50:before {
        background: var(--color-accent-50);
      }
      &.accent-100:before {
        background: var(--color-accent-100);
      }
      &.accent-200:before {
        background: var(--color-accent-200);
      }
      &.accent-300:before {
        background: var(--color-accent-300);
      }
      &.accent-400:before {
        background: var(--color-accent-400);
      }
      &.accent-500:before {
        background: var(--color-accent-500);
      }
      &.accent-600:before {
        background: var(--color-accent-600);
      }
      &.accent-700:before {
        background: var(--color-accent-700);
      }
      &.accent-800:before {
        background: var(--color-accent-800);
      }
      &.accent-900:before {
        background: var(--color-accent-900);
      }
    }
  }
`;
