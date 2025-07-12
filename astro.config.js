import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	prefetch: {
		prefetchAll: true,
	},
	site: "https://s2n.tech",
	integrations: [
		mdx(),
		icon({
			include: {
				"simple-icons": ["github", "x"],
				"lucide": ["ellipsis", "heart", "message-circle", "send", "bookmark"],
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
	adapter: cloudflare({
		imageService: "compile",
		platformProxy: true,
	}),
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
				fallbacks: [],
			},
			{
				provider: fontProviders.google(),
				name: "Zen Maru Gothic",
				cssVariable: "--font-family-zen-maru-gothic",
				weights: [400, 700],
				styles: ["normal"],
				fallbacks: [],
			},
		],
	},
});
