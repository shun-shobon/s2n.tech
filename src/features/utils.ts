import { Temporal } from "temporal-polyfill";

import { calendar } from "./locale";

export function slugToYearMonth(slug: string): Temporal.PlainYearMonth {
	const [year, month] = slug.split("-").slice(0, 2).map(Number);
	if (
		year === undefined ||
		month === undefined ||
		Number.isNaN(year) ||
		Number.isNaN(month)
	) {
		throw new TypeError(`Invalid slug: ${slug}`);
	}

	return Temporal.PlainYearMonth.from({ year, month, calendar });
}
