import emotionReset from 'emotion-reset';
import { css } from '@emotion/react';

import './font.css';
import { theme } from './themes/theme';

const globalStyles = css`
  ${emotionReset}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%; // 10px
  }

  body {
    font-family: 'NotoSans';
    color: ${theme.color.black};
    overflow-y: overlay;
    color: ${theme.color.black};
  }

  #root {
    display: grid;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background-color: transparent;
    font-family: 'NotoSans', sans-serif;

    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  input,
  textarea {
    font-family: 'NotoSans', sans-serif;
    ${theme.font.regular_14};
    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${theme.color.gray_50};
    }
  }

  textarea {
    overflow: hidden;
    resize: none;
  }

  input {
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-box-shadow: 0 0 0px 1000px inherit inset;
    }
  }

  li {
    list-style: none;
  }

  .a11y {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  dialog {
    border: 0;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }
`;

export default globalStyles;
