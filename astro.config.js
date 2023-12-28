import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://s2n.tech",
	integrations: [
		compress(),
		icon({
			include: {
				["simple-icons"]: ["x", "github"],
			},
		}),
		sitemap(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
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
