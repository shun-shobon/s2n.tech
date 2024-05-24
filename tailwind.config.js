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
		},
	},
	plugins: [],
};
