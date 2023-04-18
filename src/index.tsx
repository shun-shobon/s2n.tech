import "#/styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "#/components/App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Cannot find root element");
}
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
