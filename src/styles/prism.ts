import { css } from 'styled-components';

export const prism = css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: var(--color-grey-900);
    background: none;
    text-shadow: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: var(--font-size-sm);
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.8;
    tab-size: 2;
    hyphens: none;

    &,
    * {
      transition: 0.3s;
    }
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #b3d4fc;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: var(--spacing-4);
    margin: 30px 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: var(--color-grey-100);
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 1px;
    border-radius: 0.3em;
    white-space: normal;
  }
  :not(pre) > code[class*='language-']:after {
    display: none;
  }

  .token {
    color: var(--color-grey-700);

    &.namespace {
      opacity: 0.7;
    }

    &.comment,
    &.prolog,
    &.cdata {
      color: var(--color-grey-600);
    }

    &.attr-value .punctuation:first-child,
    &.punctuation,
    &.punctuation {
      color: var(--color-grey-900);
    }

    &.entity,
    &.symbol,
    &.delimiter,
    &.keyword,
    &.selector,
    &.important,
    &.atrule,
    &.url {
      color: var(--color-prism-blue);
    }

    &.doctype,
    &.builtin,
    &.doctype,
    &.builtin,
    &.operator,
    &.tag,
    &.tag .punctuation,
    &.attr-name {
      color: var(--color-prism-teal);
      background: none;
    }

    &.boolean,
    &.number,
    &.property,
    &.constant,
    &.variable,
    &.string,
    &.char,
    &.attr-value,
    &.attr-value .punctuation {
      color: var(--color-prism-green);
    }

    &.class-name,
    &.function {
      color: var(--color-prism-purple);
    }

    &.url {
      text-decoration: underline;
    }

    &.regex {
      background: none;
    }

    /* &.comment,
    &.prolog,
    &.doctype,
    &.cdata {
      color: var(--color-prism-0);
    }

    &.property,
    &.tag,
    &.constant,
    &.symbol,
    &.deleted,
    &.class-name,
    &.boolean,
    &.operator,
    &.entity,
    &.url,
    &.variable {
      color: var(--color-prism-1);
      background: none;
      text-shadow: none;
    }

    &.number,
    &.selector,
    &.string,
    &.attr-value,
    &.char,
    &.builtin,
    &.inserted {
      color: var(--color-prism-2);
    }

    &.atrule,
    &.attr-name,
    &.function,
    &.keyword {
      color: var(--color-prism-4);
    }

    &.regex,
    &.important,
    &.interpolation {
      color: var(--color-prism-5);
    } */

    &.important,
    &.bold {
      font-weight: bold;
    }

    &.italic {
      font-style: italic;
    }
  }
`;
