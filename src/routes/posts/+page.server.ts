import type { PageServerLoad } from './$types';
import { getAllPosts, getPostsByFilter } from '$lib/content';

export const load: PageServerLoad = async ({ url }) => {
	const category = url.searchParams.get('category');
	if (category) {
		const posts = await getPostsByFilter({ category });
		return { posts, category };
	}
	const posts = await getAllPosts();
	return { posts };
};
