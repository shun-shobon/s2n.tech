import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";

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
						url: z.url(),
					}),
				)
				.optional(),
		}),
});

const technologyCollection = defineCollection({
	loader: glob({ pattern: "*.yml", base: "./src/content/technologies" }),
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
