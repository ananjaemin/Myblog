import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body {
        font-family: Jua, sans-serif;
        outline: none;
        padding: 0;
        margin: 0;
        background-color: var(--color__main);
        color:#f5f5f5;
    } 

    :root{
        --color__main:#181818;
        --color__sub:#005dcc;
        --color__sub2:#2a2a72;
        --color__text:#f5f5f5;
    }
`;