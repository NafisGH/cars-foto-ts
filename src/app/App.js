import { BrowserRouter } from "react-router-dom";
import AppRouter from "./providers/AppRouter";
import "app/styles/index.scss";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
