import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
  }

  a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(0.9);
  }
`