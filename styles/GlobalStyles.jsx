import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html , *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
    }
    .container{
        width: 85%;
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export default GlobalStyles;