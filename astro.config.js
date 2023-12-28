import cloudflare from "@astrojs/cloudflare";
import qwikdev from "@qwikdev/astro";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [compress(), qwikdev(), icon()],
	output: "hybrid",
	adapter: cloudflare({
		mode: "directory",
	}),
	image: {
		service: {
			entrypoint: "./src/image-service.ts",
		},
	},
	build: {
		format: "file",
	},
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
