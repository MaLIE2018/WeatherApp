import ReactDOM from "react-dom";
import theme, { GlobalStyle } from "./theme";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { storePersist } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = storePersist();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById("root")
);
