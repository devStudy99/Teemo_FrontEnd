import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --light--white:#ffffff;
    --dark--black:#000000;
    --light--blue: #ECF2FF;
    --dark--blue: #E3DFFD;
    --light--purple: #E5D1FA;
    --dark--purple: #CCA6F4;
    --light--yellow:#FFF4D2;
  } 

  html {
    font-size: 62.5%;
    letter-spacing: -0.05px;
  }

  body {
    display: block;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  input {
    outline: none;
  }

  ol, ul {
    list-style: none;
    }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
