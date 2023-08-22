import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./Components/StateProvider/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <StateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </StrictMode>
);
