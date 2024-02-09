import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NanumBarunpen";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumBarunpen.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  
  * {
  font-family: "NanumBarunpen";
  max-width: 900px;
  margin: 0 auto;
  }
`;
