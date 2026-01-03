import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/content';

const ICON_MAP: Record<string, string> = {
    frontend: 'Code',
    backend: 'Server',
    devops: 'Settings',
    design: 'Palette',
    databases: 'Database',
    cybersecurity: 'Shield',
    cloud: 'Cloud',
    hardware: 'Cpu',
    mobile: 'Smartphone',
    networking: 'Globe',
    'ai-ml': 'Brain',
    blockchain: 'Bitcoin',
    automation: 'Zap',
    'open-source': 'GitBranch',
    languages: 'Terminal',
    architecture: 'Layers',
    emerging: 'Atom',
    productivity: 'Box'
};

export const load: PageServerLoad = async () => {
    const posts = await getAllPosts();
    const map: Record<string, number> = {};
    for (const p of posts) {
        const c = p.metadata.category || 'uncategorized';
        map[c] = (map[c] || 0) + 1;
    }
    const categories = Object.keys(map).map((name) => ({ name, count: map[name], slug: name }));
    return { categories, iconMap: ICON_MAP };
};
