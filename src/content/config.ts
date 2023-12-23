import { defineCollection, z } from "astro:content";

const timelineCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		attribute: z.string().optional(),
	}),
});

export const collections = {
	timeline: timelineCollection,
};
