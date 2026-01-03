import type { PageServerLoad } from './$types';

// Admin endpoints removed for static build. Return empty list for comments in UI.
export const load: PageServerLoad = async () => {
	return {
		comments: []
	};
};
