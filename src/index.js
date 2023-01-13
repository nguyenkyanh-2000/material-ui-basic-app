import ThemeProvider from "./theme";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from "./authentication/AuthProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <ThemeProvider>
      <App></App>
    </ThemeProvider>
  </AuthProvider>
);
