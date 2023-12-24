import { style } from "@vanilla-extract/css";

import * as layers from "@/styles/layers.css";

export const heroWrapper = style({
	"@layer": {
		[layers.components]: {
			width: "100%",
			height: ["100vh", "100svh"],
			display: "grid",
			placeItems: "center",
		},
	},
});

export const hero = style({
	"@layer": {
		[layers.components]: {
			display: "grid",
			justifyItems: "center",
			gap: "16px",
		},
	},
});

export const icon = style({
	"@layer": {
		[layers.components]: {
			width: "256px",
			height: "256px",
			borderRadius: "50%",
		},
	},
});

export const names = style({
	"@layer": {
		[layers.components]: {
			textAlign: "center",
		},
	},
});

export const name = style({
	"@layer": {
		[layers.components]: {
			fontSize: "4rem",
			lineHeight: "1.2",
		},
	},
});

export const aka = style({
	"@layer": {
		[layers.components]: {
			fontSize: "2.5rem",
		},
	},
});

export const occupation = style({
	"@layer": {
		[layers.components]: {
			textAlign: "center",
			fontSize: "2.5rem",
		},
	},
});
