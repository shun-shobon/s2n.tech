import "#/styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "#/components/App";
import { ResumeProvider } from "#/components/ResumeProvider";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Cannot find root element");
}
const root = createRoot(container);

root.render(
  <StrictMode>
    <ResumeProvider>
      <App />
    </ResumeProvider>
  </StrictMode>,
);
