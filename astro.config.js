import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import qwikdev from "@qwikdev/astro";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://s2n.tech",
	integrations: [
		compress(),
		qwikdev(),
		icon({
			include: {
				["simple-icons"]: ["x", "github"],
			},
		}),
		sitemap(),
	],
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
