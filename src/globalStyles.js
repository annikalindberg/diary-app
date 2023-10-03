import { createGlobalStyle } from 'styled-components';
import 'normalize.css'; 

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #4CAF50;  // Green
    --secondary-color: #FFC107;  // Amber
    --tertiary-color: #03A9F4;  // Light Blue
    --text-color: #212121;  // Dark Gray
    --light-text-color: #FAFAFA;  // Light Gray
    --background-color: #F5F5F5;  // Gray background
  }

  // Importing fonts
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    margin: 0 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  // other global styles...
`;

export default GlobalStyles;
