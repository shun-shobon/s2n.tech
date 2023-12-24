import { style } from "@vanilla-extract/css";

export const paragraph = style({
	textAlign: "center",
	lineHeight: "2",
});

export const sentence = style({
	wordBreak: "keep-all",
	lineBreak: "strict",
	hangingPunctuation: "allow-end",
	overflowWrap: "anywhere",
});
