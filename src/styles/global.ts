import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //Colors
        --light: #ffffff;         
        --blue: #1976d3;
        --blue-dark: #0a0f19;
        --blue-darksky: #5E6D8C;
        --transparent: rgba(0, 0, 0, 0.3);

        //Fonts
        --font-family-title: 'Roboto', sans-serif;
        --font-family-text: 'Poppins', sans-serif;

        --font-size-large: 3rem;
        --font-size-medium: 2rem;
        --font-size-regular: 1rem;
        --font-size-small: .8rem;

        //Others
        --border-r: 0.25rem;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
    }

    body {
        width: 100%;
        background-color: var(--blue-dark);     
        background-size: 100%;
        background-repeat: no-repeat;
        object-fit: cover;
    }

    textarea, button, select, input, span, a, h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-family-title);
    }
    h1, h2 {
        font-family: var(--font-family-title);
        font-size: 30px;        
    }

    p {
        font-family: var(--font-family-text);
    }

    a {
        color: inherit;
    }
    .container {
        width: 100%;
        max-width: 1600px;
        margin: 0 auto;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 20px;
    }
`;
