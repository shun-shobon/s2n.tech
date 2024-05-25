import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "@playform/compress";
import { defineConfig } from "astro/config";
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
				["lucide"]: ["pencil-line"],
				["material-symbols-light"]: ["close"],
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
