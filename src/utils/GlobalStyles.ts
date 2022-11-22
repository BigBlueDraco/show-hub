import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

interface IGlobalStyle {}

const reset = `
html {
    box-sizing: border-box;
}

*,
*::after,
*::before {
    box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}

ul,
ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
}


a {
    text-decoration: none;
    color: inherit;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

address {
    font-style: normal;
}
`;

export const GlobalStyle = createGlobalStyle<IGlobalStyle>`
${normalize}
${reset}
`;
