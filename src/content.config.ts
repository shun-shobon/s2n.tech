import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const timelineCollection = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/timeline" }),
	schema: z.object({
		title: z.string(),
	}),
});

const worksCollection = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/works" }),
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
	loader: glob({ pattern: "*.json", base: "./src/content/technologies" }),
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
