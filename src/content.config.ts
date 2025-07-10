import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";
import { parseTOML } from "confbox";

const works = defineCollection({
	loader: glob({ pattern: "*.md", base: "./contents/works" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.string().date(),
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

const technologies = defineCollection({
	loader: file("./contents/technologies.toml", {
		parser: (text) =>
			// eslint-disable-next-line typescript/no-unnecessary-type-assertion
			(parseTOML(text) as { technologies: Record<string, unknown>[] })
				.technologies,
	}),
	schema: z.object({
		name: z.string(),
	}),
});

const timelineCollection = defineCollection({
	loader: file("./contents/timeline.toml", {
		parser: (text) =>
			// eslint-disable-next-line typescript/no-unnecessary-type-assertion
			(parseTOML(text) as { timeline: Record<string, unknown>[] }).timeline,
	}),
	schema: z.object({
		title: z.string(),
		startedAt: z.string().date(),
		endedAt: z.union([z.string().date(), z.literal("present")]).optional(),
		description: z.string().optional(),
	}),
});

export const collections = {
	works,
	technologies,
	timeline: timelineCollection,
};
