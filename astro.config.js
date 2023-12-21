import { defineConfig } from "astro/config";
import compress from "astro-compress";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
	integrations: [compress()],
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
