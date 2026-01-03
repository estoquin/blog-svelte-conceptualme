import type { PageServerLoad } from './$types';
import { getLastPosts } from '$lib/content';
export const load: PageServerLoad = async () => {
	const posts = await getLastPosts(3);
	return {
		posts
	};
};
