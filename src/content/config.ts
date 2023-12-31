import { defineCollection, reference, z } from "astro:content";

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
			technologies: z.array(reference("technologies")),
			platforms: z.array(z.string()),
			links: z
				.array(
					z.object({
						name: z.string(),
						url: z.string().url(),
					}),
				)
				.optional(),
		}),
});

const technologyCollection = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		icon: z.string().optional(),
	}),
});

export const collections = {
	timeline: timelineCollection,
	works: worksCollection,
	technologies: technologyCollection,
};
