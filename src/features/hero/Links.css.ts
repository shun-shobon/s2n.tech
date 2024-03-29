import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const links = style({
	display: "flex",
	gap: "24px",
});

export const link = style({
	"transition": "color 0.2s ease-in-out",

	":hover": {
		color: vars.color.primary,
	},
});
