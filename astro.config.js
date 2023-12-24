import { defineConfig } from "astro/config";
import compress from "astro-compress";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	integrations: [compress()],
	output: "hybrid",
	adapter: cloudflare({
		mode: "directory",
	}),
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
