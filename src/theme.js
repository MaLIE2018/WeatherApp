import styled, { createGlobalStyle } from "styled-components";

const theme = {};

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: "Open Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: #672DF3;
      background: -webkit-linear-gradient(bottom left, #672DF3, #AA51DC);
      background: -moz-linear-gradient(bottom left, #672DF3, #AA51DC);
      background: linear-gradient(to top right, #672DF3, #AA51DC);
      color: white;
    }
`;

export const H1 = styled.h1``;

export default theme;
