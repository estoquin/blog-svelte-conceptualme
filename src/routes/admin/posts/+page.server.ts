import type { PageServerLoad } from './$types';

// Admin endpoints removed for static build. UI kept for reference; data returned as empty arrays.
export const load: PageServerLoad = async () => {
	return {
		posts: [],
		categories: []
	};
};
