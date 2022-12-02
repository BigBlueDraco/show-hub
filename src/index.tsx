import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./utils/GlobalStyles";
import { TMDBApi } from "./services/TMDBApi";
const api = new TMDBApi();
api.featheTopRateMovies();
console.log(api.featheTopRateMovies());
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>
);
