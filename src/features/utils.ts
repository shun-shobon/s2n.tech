import { Temporal } from "temporal-polyfill";

export function slugToYearMonth(slug: string): Temporal.PlainYearMonth {
	const [year, month] = slug.split("-").slice(0, 2).map(Number);

	return Temporal.PlainYearMonth.from({ year, month });
}
