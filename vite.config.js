import { minifyHtml, injectHtml } from "vite-plugin-html";

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [
    minifyHtml(),
    injectHtml({
      injectData: {
        baseUrl: process.env["BASE_URL"] ?? "https://shun.technology",
      },
    }),
  ],
};
