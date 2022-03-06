import React from "react";

import GlobalStyleComposed from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
import { Routes } from "./routes/router";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyleComposed />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
