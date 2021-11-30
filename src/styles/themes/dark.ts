import { css } from 'styled-components';

export const darkTheme = css`
  :root.dark {
    --color-grey-50: #1f2933;
    --color-grey-100: #323f4b;
    --color-grey-200: #3e4c59;
    --color-grey-300: #52606d;
    --color-grey-400: #616e7c;
    --color-grey-500: #7b8794;
    --color-grey-600: #9aa5b1;
    --color-grey-700: #cbd2d9;
    --color-grey-800: #e4e7eb;
    --color-grey-900: #ffffff;

    --color-accent-50: #001616;
    --color-accent-100: #033b39;
    --color-accent-200: #17625e;
    --color-accent-300: #278883;
    --color-accent-400: #37afa9;
    --color-accent-500: #50c8c2;
    --color-accent-600: #74d4d0;
    --color-accent-700: #9ae1de;
    --color-accent-800: #beefec;
    --color-accent-900: #defcfa;

    --color-error-50: #1e0005;
    --color-error-100: #490112;
    --color-error-200: #76061f;
    --color-error-300: #a50c2d;
    --color-error-400: #d21339;
    --color-error-500: #ec2d53;
    --color-error-600: #f15a79;
    --color-error-700: #f6899f;
    --color-error-800: #feb7c6;
    --color-error-900: #ffe4eb;

    /* Prism Colors */
    --color-prism-grey: #4c566a;
    --color-prism-green: #90c695;
    --color-prism-blue: #5c97bf;
    --color-prism-purple: #be90d4;
    --color-prism-teal: #add8e6;
    --color-prism-white: #d8dee9;
    --color-prism-6: #f8c555;
  }

  .draft {
    color: var(--color-error-600) !important;
  }
`;
