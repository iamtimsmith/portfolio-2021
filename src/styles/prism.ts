import { css } from 'styled-components';

export const prism = css`
  /**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 */

  code[class*='language-'],
  pre[class*='language-'] {
    color: var(--color-grey-900);
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 0.9rem;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: var(--color-grey-100);
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .gatsby-highlight-code-line {
    background-color: var(--color-accent-100);
    display: block;
  }

  code,
  .token {
    text-shadow: none !important;
  }

  .token {
    background: none !important;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--color-prism-grey);
  }

  .token.punctuation {
    color: var(--color-grey-900);
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: var(--color-prism-red);
  }

  .token.function-name {
    color: var(--color-prism-blue);
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: var(--color-prism-orange);
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: var(--color-prism-gold);
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: var(--color-prism-purple);
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: var(--color-prism-green);
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: var(--color-prism-teal);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`;
