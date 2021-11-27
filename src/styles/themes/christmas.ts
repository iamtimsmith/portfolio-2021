import { css } from 'styled-components';

export const christmasTheme = css`
  :root.christmas {
    --color-grey-50: #001c01;
    --color-grey-100: #0c3d14;
    --color-grey-200: #3e4c59;
    --color-grey-300: #52606d;
    --color-grey-400: #616e7c;
    --color-grey-500: #7b8794;
    --color-grey-600: #9aa5b1;
    --color-grey-700: #cbd2d9;
    --color-grey-800: #e4e7eb;
    --color-grey-900: #f5f7fa;

    --color-accent-50: #1e0005;
    --color-accent-100: #490112;
    --color-accent-200: #a50c2d;
    --color-accent-300: #a50c2d;
    --color-accent-400: #d21339;
    --color-accent-500: #ec2d53;
    --color-accent-600: #f15a79;
    --color-accent-700: #f6899f;
    --color-accent-800: #feb7c6;
    --color-accent-900: #ffe4eb;

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
    --color-prism-0: #999;
    --color-prism-1: #e2777a;
    --color-prism-2: #7ec699;
    --color-prism-3: #76a9a0;
    --color-prism-4: #cc99cd;
    --color-prism-5: #6196cc;
    --color-prism-6: #f8c555;
  }

  .snowfall {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
