import { style } from "@vanilla-extract/css";

import * as layers from "@/styles/layers.css";

export const entryWrapper = style({
	"@layer": {
		[layers.components]: {
			paddingInlineStart: "16px",
		},
	},
});

export const entry = style({
	"@layer": {
		[layers.components]: {
			paddingInlineStart: "32px",
			paddingBlock: "8px",
			position: "relative",
		},
	},
});

export const entryLine = style({
	"@layer": {
		[layers.components]: {
			position: "absolute",
			top: 0,
			bottom: 0,
			left: "calc(16px - 1px)",
			width: "2px",
			backgroundColor: "#000",

			selectors: {
				[`${entryWrapper}:first-child &`]: {
					top: "16px",
				},
				[`${entryWrapper}:last-child &`]: {
					bottom: "calc(100% - 16px)",
				},
			},
		},
	},
});

export const entryPoint = style({
	"@layer": {
		[layers.components]: {
			position: "absolute",
			top: "16px",
			left: "calc(16px - 4px)",
			width: "8px",
			height: "8px",
			borderRadius: "50%",
			backgroundColor: "#000",
		},
	},
});

export const entryHeading = style({
	"@layer": {
		[layers.components]: {
			fontSize: "1.2rem",
		},
	},
});
