import React from "react";
import ReactDOM from "react-dom";
import theme, { GlobalStyle } from "./theme";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById("root")
);
