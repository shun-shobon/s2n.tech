import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const lineOffset = createVar();

export const heading = style({
	fontSize: "4rem",
	textAlign: "center",
	marginTop: "1em",
	marginBottom: "0.5em",
	display: "flex",
	lineHeight: "1",
	justifyContent: "center",
	position: "relative",
});

export const textWrapper = style({
	position: "relative",
	display: "flex",
});

export const text = style({
	clipPath: `polygon(${lineOffset} 0, 100% 0, 100% 100%, 0 100%, 0 ${lineOffset})`,
});

export const line = style({
	position: "absolute",
	top: lineOffset,
	left: 0,
	width: "2em",
	height: "2px",
	borderRadius: "1px",
	backgroundColor: "currentColor",
	transformOrigin: "left center",
	transform: "translate(-0.25em, 0.25em) rotate(-45deg)",
});

export const star = style({
	position: "absolute",
	top: calc.subtract(lineOffset, "5px"),
	left: "-5px",
	width: "10px",
	height: "10px",
	transform: "translate(calc(-0.25em - 5px), calc(0.25em + 5px))",
});
