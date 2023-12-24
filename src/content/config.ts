import { defineCollection, z } from "astro:content";

const timelineCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
	}),
});

const worksCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			image: image(),
		}),
});

export const collections = {
	timeline: timelineCollection,
	works: worksCollection,
};
