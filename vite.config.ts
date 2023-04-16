import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import { ecsstatic } from "@acab/ecsstatic/vite";

export default defineConfig({
  plugins: [
    react(),
    ecsstatic(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
