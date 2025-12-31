import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://s2n.tech",
	adapter: cloudflare({
		imageService: "compile",
	}),
	integrations: [
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
	vite: {
		plugins: [tailwindcss()],
	},
	output: "static",
	build: {
		format: "file",
	},
});
