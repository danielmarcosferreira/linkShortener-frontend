import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Aller';
        src: url('../fonts/Aller.ttf');
    }

    @font-face {
        font-family: 'SourceSans';
        src: url('../fonts/SourceSansVariable.ttf');
    }

    @font-face {
        font-family: 'Bahnschrift';
        src: url('../fonts/Bahnschrift.TTF');
    }

    :root {
        --titulo: 'Aller';
        --subtitulo: 'SourceSans';
        --paragrafo: 'Bahnschrift';
        --off-white: #fcfcfc;
        --cinza-claro: #999999;
        --cinza-escuro: #474948;
        --verde: #17ce4f;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Lexend Deca;
        font-size: 14px;
        font-weight: 400;
        line-height: 17.5px;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: var(--paragrafo);
    }
`;