import { minifyHtml } from "vite-plugin-html";

export default {
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [minifyHtml()],
};
