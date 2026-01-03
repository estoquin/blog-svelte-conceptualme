import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/content';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	const post = await getPostBySlug(slug);
	if (!post) {
		// Post not found — redirect back to posts index
		throw redirect(303, '/posts');
	}
	// No server-side comments in static site
	const comments: any[] = [];
	return { post, comments };
};

export const prerender = true;

import { getAllPosts } from '$lib/content';

export async function entries() {
	const posts = await getAllPosts();
	return posts.map((p) => ({ slug: p.slug }));
}




// Actions have been removed for static site
