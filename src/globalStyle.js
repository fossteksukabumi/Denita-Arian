import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background: #241b11;
    color: #ffffff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Serif KR', serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: 'Noto Sans KR', sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #000000;
  }

  ::-webkit-scrollbar-thumb {
    background: #333333;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }
`;

export default GlobalStyle;