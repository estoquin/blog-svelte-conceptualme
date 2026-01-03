import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const category = url.searchParams.get('category');
	return { posts: [], category };
};
