import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Bmicalculator from "./Bmicalculator.jsx";
import Newfile from "./Newfile.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Newfile />
    <Bmicalculator />
  </React.StrictMode>
);
