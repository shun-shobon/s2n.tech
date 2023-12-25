import { style } from "@vanilla-extract/css";

import * as queries from "@/styles/media-queries.css";

export const list = style({
	"display": "grid",
	"gap": "1rem",

	"@media": {
		[queries.sm]: {
			gridTemplateColumns: "repeat(2, 1fr)",
		},
	},
});

export const entry = style({
	width: "100%",
	aspectRatio: "16 / 9",
	display: "grid",
});

export const entryThumbnail = style({
	width: "100%",
	height: "auto",
	aspectRatio: "16 / 9",
	objectFit: "cover",
	gridArea: "1 / 1 / -1 / -1",
});

export const entryTitle = style({
	gridArea: "1 / 1 / -1 / -1",
	alignSelf: "end",
	width: "100%",
	fontSize: "1.5rem",
	padding: "8px",
	paddingTop: "16px",
	backgroundImage: "linear-gradient(transparent, 40%, rgb(0 30 48 / 0.8))",
	textOverflow: "ellipsis",
	overflow: "hidden",
	whiteSpace: "nowrap",
});
