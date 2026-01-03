import type { PageServerLoad } from './$types';

// Admin endpoints removed for static build. Return empty tags list for UI.
export const load: PageServerLoad = async () => {
	return {
		tags: []
	};
};