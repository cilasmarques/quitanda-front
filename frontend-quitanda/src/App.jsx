import React from "react";

import GlobalStyleComposed from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./routes/router";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <GlobalStyleComposed />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
