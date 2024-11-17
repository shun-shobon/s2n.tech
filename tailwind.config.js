/**
 * @type {import("tailwindcss").Config}
 */
export default {
	content: ["./src/**/*.{astro,ts,tsx}"],
	theme: {
		extend: {
			maxWidth: {
				prose: "80ch",
			},
			fontFamily: {
				zen: ["Zen Kurenaido", "sans-serif"],
			},
		},
	},
	plugins: [],
};
