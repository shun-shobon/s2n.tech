import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

export type Post = CollectionEntry<"posts">;

export interface GetPostsOptions {
	tag?: string;
	draft?: boolean;
}

export interface GetPostsResult {
	posts: Post[];
	total: number;
}

export async function getPosts({
	tag,
	draft = false,
}: GetPostsOptions): Promise<GetPostsResult> {
	const posts = await getCollection("posts", (post) => {
		if (!draft && !post.data.publishedAt) {
			return false;
		}

		if (tag) {
			return post.data.tags.includes(tag);
		}

		return true;
	});

	posts.sort((a, b) => {
		if (!a.data.publishedAt && !b.data.publishedAt) {
			return 0;
		}
		if (!a.data.publishedAt) {
			return -1;
		}
		if (!b.data.publishedAt) {
			return 1;
		}

		const aDate = new Date(a.data.publishedAt);
		const bDate = new Date(b.data.publishedAt);
		return bDate.getTime() - aDate.getTime();
	});

	return { posts, total: posts.length };
}
