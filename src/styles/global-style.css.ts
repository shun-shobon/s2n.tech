import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./theme.css";

globalStyle("html, body", {
	fontFamily: "'Zen Kurenaido', sans-serif",
	color: vars.color.text,
	backgroundImage: "linear-gradient(to bottom, #000912, #001E30, #2D4556)",
	minHeight: "100dvh",
});
