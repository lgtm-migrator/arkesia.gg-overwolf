import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";
import { waitForOverwolf } from "./lib/overwolf";

waitForOverwolf().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
