import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	prefetch: {
		prefetchAll: true,
		defaultStrategy: "viewport",
	},
	site: "https://s2n.tech",
	integrations: [
		icon(),
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
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Caveat",
				cssVariable: "--font-family-caveat",
				weights: [400, 700],
				subsets: ["latin"],
				styles: ["normal"],
			}
		]
	}
});
