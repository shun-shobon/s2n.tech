export const breakPoints = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const colors = {
  bg: "--color-bg",
  text: "--color-text",
};

export function getColor(color: keyof typeof colors): string {
  return `hsl(var(${colors[color]}))`;
}
