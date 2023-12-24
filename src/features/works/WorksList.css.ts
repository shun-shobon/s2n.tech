import { style } from "@vanilla-extract/css";

export const list = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
	gap: "1rem",
});

export const entry = style({
	width: "100%",
	aspectRatio: "16 / 9",
	display: "grid",
});

export const entryThumbnail = style({
	width: "100%",
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
