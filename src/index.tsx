import "#/styles/index.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import App from "#/components/App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
