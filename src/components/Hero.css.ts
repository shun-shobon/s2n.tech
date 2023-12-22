import { style } from "@vanilla-extract/css";

import * as layers from "@/styles/layers.css";

export const hero = style({
	"@layer": {
		[layers.components]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			gap: "16px",
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.components]: {
			width: "128px",
			height: "128px",
			borderRadius: "50%",
			alignSelf: "start",
		},
	},
});

export const title = style({
	"@layer": {
		[layers.components]: {
			fontSize: "1.5rem",
			fontWeight: "bold",
			lineHeight: "1.2",
		},
	},
});

export const aka = style({
	"@layer": {
		[layers.components]: {
			marginBottom: "8px",
		},
	},
});

export const links = style({
	"@layer": {
		[layers.components]: {
			display: "flex",
			gap: "16px",
		},
	},
});
