import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body {
        font-family: Jua, sans-serif;
        outline: none;
        padding: 0;
        margin: 0;
        background-color: #f5f5f5;
        color:#f5f5f5;
    } 

    body::-webkit-scrollbar {
        display: none;
    }

    body::-webkit-scrollbar-track{
        width: 5px;
        height: 8px;
        background-color: #fff;
    }

    :root{
        --color__main:#181818;
        --color__sub:#005dcc;
        --color__sub2:#2a2a72;
        --color__text:#f5f5f5;
        --color__text2:#000000;
        --color__text3:#757575;
    }
`;