<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import type { PageData } from './$types';
	import PostCard from '$lib/components/PostCard.svelte';
	let { data }: { data: PageData } = $props();
	let listMode = $state(false);
</script>

<svelte:head>
	<title>Latest Posts - ConceptualMe</title>
</svelte:head>

<PageContainer>
    <div class="space-y-8">
    	<section class="mb-2">
    		<div class="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4">
    			<div>
    				{#if data.category}
    					<h1 class="text-4xl font-bold mb-2 md:mb-0">Category: {data.category}</h1>
    					<p class="text-xl text-gray-600">Showing posts in the "{data.category}" category</p>
    				{:else}
    					<h1 class="text-4xl font-bold mb-2 md:mb-0">Latest Posts</h1>
    					<p class="text-xl text-gray-600">Explore our collection of articles and tutorials</p>
    				{/if}
    			</div>
    			<div class="flex gap-2 mt-2 md:mt-0 md:ml-4">
    				<button class="px-2 py-1 bg-green-600 text-white text-sm font-semibold hover:bg-green-800 transition" style="border-radius:0;" on:click={() => listMode = false} title="Card View">&#9632;</button>
    				<button class="px-2 py-1 bg-green-600 text-white text-sm font-semibold hover:bg-green-800 transition" style="border-radius:0;" on:click={() => listMode = true} title="List View">&#9776;</button>
    			</div>
    		</div>
    	</section>
    	<section class={listMode ? "flex flex-col gap-4" : "grid md:grid-cols-2 lg:grid-cols-3 gap-6"}>
			{#each data.posts as post}
				<PostCard post={{ ...post, image: post.image ?? '', excerpt: post.excerpt ?? '' }} headingLevel="h2" {listMode} colorFilter="green">
					<a href={`/posts/${post.slug}`} class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
						Read More
						<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
						</svg>
					</a>
				</PostCard>
			{/each}
    	</section>
    	{#if data.posts.length === 0}
    		<section class="text-center py-12">
    			<p class="text-xl text-gray-600">No posts available yet. Check back soon!</p>
    		</section>
    	{/if}
    </div>
</PageContainer>
