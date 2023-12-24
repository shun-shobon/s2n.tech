import { style } from "@vanilla-extract/css";

export const heading = style({
	fontSize: "4rem",
	textAlign: "center",
	marginTop: "0.75em",
	marginBottom: "0.25em",
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
	clipPath: "polygon(0.75lh 0, 100% 0, 100% 100%, 0 100%, 0 0.75lh)",
});

export const line = style({
	position: "absolute",
	top: "0.75lh",
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
	top: "calc(0.75lh - 5px)",
	left: "-5px",
	width: "10px",
	height: "10px",
	transform: "translate(calc(-0.25em - 5px), calc(0.25em + 5px))",
});
