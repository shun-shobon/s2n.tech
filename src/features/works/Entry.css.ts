import { globalStyle, style } from "@vanilla-extract/css";

import { vars } from "@/styles/theme.css";

export const header = style({
	marginBottom: "16px",
	display: "grid",
	gap: "16px",
});

export const thumbnail = style({
	width: "100%",
	height: "auto",
});

export const title = style({
	fontSize: "2rem",
});

export const date = style({
	display: "block",
});

export const table = style({
	borderTop: "2px solid #fff",
	borderBottom: "2px solid #fff",
});

globalStyle(`${table} th, ${table} td`, {
	padding: "4px",
	borderBottom: "1px solid #fff",
});

export const list = style({
	display: "flex",
	flexWrap: "wrap",
	gap: "8px",
});

export const link = style({
	"textDecoration": "underline",
	"transition": "color 0.2s ease",

	":hover": {
		color: vars.color.primary,
	},
});
