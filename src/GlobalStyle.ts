import { createGlobalStyle } from 'styled-components'

// creating a global style using double backticks template literal
export const GlobalStyle = createGlobalStyle`
 // defining root css variables
 :root { 
    --maxWidth: 1280px;
    --yellowGold: #ffd700;
    --monoBlack: #010101;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #343535;
    --darkGrey: #1c1c1c;
    --fontExtraLarge: 2.5rem;
    --fontLarge: 1.5rem;
    --fontMed: 1.25rem;
    --fontSmall: 1rem;
 }

 * {
     box-sizing: border-box;
     font-family: 'Open Sans', sans-serif;
 }

 body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(---white)
    }

    h3 {
        font-size: 1.1rem;
        font-weight: 600;
    }

    p {
        font-size: 1rem;
        color: var(---white)
    }
 }
`;