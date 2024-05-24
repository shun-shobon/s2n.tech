import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	site: "https://s2n.tech",
	integrations: [
		tailwind(),
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
		imageService: "compile",
	}),
	build: {
		format: "file",
	},
});
