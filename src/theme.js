import styled, { createGlobalStyle } from "styled-components";

const theme = {};

export const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      font-family: "Open Sans", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;

export const H1 = styled.h1``;

export default theme;
