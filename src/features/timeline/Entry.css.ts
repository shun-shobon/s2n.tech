import { style } from "@vanilla-extract/css";

const LINE_LEFT = "0px";
const LINE_WIDTH = "2px";
const POINT_SIZE = "14px";
const POINT_TOP = "14px";

export const entry = style({
	paddingInlineStart: "16px",
	paddingBlock: "8px",
	position: "relative",
});

export const entryLine = style({
	position: "absolute",
	top: 0,
	bottom: 0,
	left: `calc(${LINE_LEFT} - ${LINE_WIDTH} / 2)`,
	width: LINE_WIDTH,
	backgroundColor: "#fff",

	selectors: {
		[`${entry}:first-child &`]: {
			top: POINT_TOP,
		},
		[`${entry}:last-child &`]: {
			bottom: `calc(100% - ${POINT_TOP})`,
		},
	},
});

export const entryPoint = style({
	position: "absolute",
	top: POINT_TOP,
	left: `calc(${LINE_LEFT} - ${POINT_SIZE} / 2)`,
	width: POINT_SIZE,
	height: POINT_SIZE,
	borderRadius: "50%",
	backgroundColor: "#fff",
});

export const entryHeading = style({
	fontSize: "1.5rem",
	marginBottom: "0.125em",
});
