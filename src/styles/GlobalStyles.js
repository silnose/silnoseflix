import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body, html {
margin: 0;
padding: 0;
font-size: 16px;
}

body {
 font-family: 'Cardo', serif;
 background-color: #111
}

h1, h2, h3, h4, h5, h6, span {
 font-family: 'Oswald', sans-serif;
 text-transform: uppercase;
 font-weight: 600
}

`;

export default GlobalStyles;
