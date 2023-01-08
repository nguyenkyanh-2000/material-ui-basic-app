import ThemeProvider from "./theme";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App></App>
  </ThemeProvider>
);
