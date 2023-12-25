import { style } from "@vanilla-extract/css";

import * as queries from "@/styles/media-queries.css";

export const heroWrapper = style({
	width: "100%",
	height: ["100vh", "100svh"],
	display: "grid",
	placeItems: "center",
});

export const hero = style({
	"display": "grid",
	"justifyItems": "center",
	"gap": "0.5em",
	"fontSize": "1.5rem",

	"@media": {
		[queries.sm]: {
			fontSize: "2.5rem",
		},
	},
});

export const icon = style({
	"width": "128px",
	"height": "128px",
	"borderRadius": "50%",

	"@media": {
		[queries.sm]: {
			width: "256px",
			height: "256px",
		},
	},
});

export const names = style({
	textAlign: "center",
});

export const name = style({
	"fontSize": "2rem",

	"@media": {
		[queries.sm]: {
			fontSize: "4rem",
		},
	},
});

export const aka = style({
	"fontSize": "1.5rem",
	"lineHeight": "1",
	"marginTop": "-0.5em",

	"@media": {
		[queries.sm]: {
			fontSize: "2rem",
		},
	},
});

export const occupation = style({
	textAlign: "center",
});
