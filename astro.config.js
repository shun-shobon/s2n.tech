import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
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
	output: "static",
	build: {
		format: "file",
	},
});
