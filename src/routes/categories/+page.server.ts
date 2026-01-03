import type { PageServerLoad } from './$types';

const ICON_MAP: Record<string, string> = {};

export const load: PageServerLoad = async () => {
    return { categories: [], iconMap: ICON_MAP };
};
