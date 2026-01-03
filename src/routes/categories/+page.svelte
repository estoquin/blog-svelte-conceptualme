<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import { 
		Code, Server, Settings, Palette, Database, Shield, 
		Cloud, Cpu, Smartphone, Globe, Atom, Box, Layers, 
		Zap, GitBranch, Terminal, Brain, Bitcoin 
	} from '@lucide/svelte';

	export let data: { categories: { name: string; slug: string }[]; iconMap?: Record<string, string> };

	function resolveIcon(slug: string) {
		const serverMap = data?.iconMap;
		if (serverMap && serverMap[slug]) {
			const name = serverMap[slug];
			// @ts-ignore dynamic access to imported icons by name
			return ( { Code, Server, Settings, Palette, Database, Shield, Cloud, Cpu, Smartphone, Globe, Atom, Box, Layers, Zap, GitBranch, Terminal, Brain, Bitcoin } as any )[name] || Box;
		}
		return Box;
	}

	function capitalize(name: string) {
		if (!name) return '';
		return name
			.replace(/-/g, ' ')
			.split(' ')
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(' ');
	}
</script>

<svelte:head>
	<title>Categories - ConceptualMe</title>
</svelte:head>

<PageContainer>
    <h1 class="text-4xl font-bold mb-8 text-center">Categories</h1>
	<ul class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		{#each data.categories as category}
			<li>
				<a href={`/posts?category=${encodeURIComponent(category.name)}`} class="flex items-center gap-4 px-6 py-5 bg-white shadow hover:bg-green-50 transition group" style="border-radius:0;">
					<svelte:component this={resolveIcon(category.slug)} class="w-8 h-8 text-gray-600 group-hover:text-gray-800 transition" />
					<span class="text-2xl font-semibold text-gray-900 group-hover:text-blue-800 transition">{capitalize(category.name)}</span>
				</a>
			</li>
		{/each}
	</ul>
</PageContainer>
