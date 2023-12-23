import { defineCollection, z } from "astro:content";

const timelineCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = {
	timeline: timelineCollection,
};
