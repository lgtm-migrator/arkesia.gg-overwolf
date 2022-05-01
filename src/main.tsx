import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App";
import { waitForOverwolf } from "./lib/overwolf";

const container = document.getElementById("root");
const root = createRoot(container!);

waitForOverwolf().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
