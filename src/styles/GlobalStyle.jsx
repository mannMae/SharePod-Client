import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    margin: -1px;
    clip-path: polygon(0 0, 0 0, 0 0);
  }

  html {
    font-size: 10px;

  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ol,ul,li {
    list-style: none;
  }
  input, button {
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
  }    
`;

export default GlobalStyles;
