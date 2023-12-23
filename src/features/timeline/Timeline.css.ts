import { style } from "@vanilla-extract/css";

import * as layers from "@/styles/layers.css";

export const entryWrapper = style({
	"@layer": {
		[layers.components]: {
			paddingInlineStart: "8px",
		},
	},
});

export const entry = style({
	"@layer": {
		[layers.components]: {
			paddingInlineStart: "8px",
			paddingBlock: "8px",
		},
	},
});
