import type { PageServerLoad } from './$types';

// Admin endpoints removed for static build. Return empty categories for UI.
export const load: PageServerLoad = async () => {
	return { categories: [] };
};
