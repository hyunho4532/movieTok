import { createGlobalStyle } from "styled-components";

export const JamSilFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'JamsilBold';
    src: url('src/shared/ui-kit/font/jamsil_bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'JamsilBold', sans-serif;
  }
`;