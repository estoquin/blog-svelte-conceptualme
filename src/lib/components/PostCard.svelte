<script context="module" lang="ts">
	export interface Post {
		image: string;
		title: string;
		date: string;
		excerpt: string;
		slug: string;
	}
</script>
<script lang="ts">
	export let post: Post;
	export let headingLevel: 'h2' | 'h3' = 'h3';
	export let listMode: boolean = false;
	export let colorFilter: 'blue' | 'red' | 'green' | 'orange' | 'purple' | 'none' = 'none';

	// Consolidated base classes to avoid repetition
	const base = {
		article: "overflow-hidden hover:shadow-xl transition group border border-gray-200",
		articleListExtra: "flex bg-white shadow-md items-center gap-8 md:gap-12",
		imageWrapperBase: "relative overflow-hidden",
		imageWrapperList: "w-32 h-32 md:w-48 md:h-48 flex-shrink-0",
		imageWrapperDefault: "w-full h-48",
		image: "w-full h-full object-cover rounded-none",
		contentList: "flex-1 py-6 pr-6 flex flex-col justify-center min-w-0",
		contentDefault: "p-6 rounded-none",
		headingH2: "text-2xl font-bold mb-2 text-gray-900 truncate",
		headingH3: "text-xl font-bold mb-2 truncate",
		overlayBase: "absolute inset-0 opacity-60 pointer-events-none rounded-none",
		link: "text-blue-600 hover:underline font-semibold"
	} as const;

	const colorMap: Record<string, string> = {
		blue: "bg-blue-600",
		red: "bg-red-600",
		green: "bg-green-600",
		orange: "bg-orange-500",
		purple: "bg-purple-600"
	};

	// Reactive (computed) class strings
	let articleClass: string;
	let imageWrapperClass: string;
	let contentClass: string;
	let headingClass: string;
	let overlayClass: string;

	$: articleClass = listMode ? `${base.articleListExtra} ${base.article}` : base.article;
	$: imageWrapperClass = `${base.imageWrapperBase} ${listMode ? base.imageWrapperList : base.imageWrapperDefault}`;
	$: contentClass = listMode ? base.contentList : base.contentDefault;
	$: headingClass = headingLevel === 'h2' ? base.headingH2 : base.headingH3;
	$: overlayClass = colorFilter === 'none' ? '' : `${base.overlayBase} ${colorMap[colorFilter]}`;
</script>

<article class={articleClass}>
	<div class={imageWrapperClass}>
		{#if post.image}
			<img src={post.image} alt={post.title} class={base.image} />
		{:else}
			<img src={`https://picsum.photos/seed/${encodeURIComponent(post.slug || post.title)}/1200/600`} alt={post.title} class={base.image} />
		{/if}
		{#if colorFilter !== 'none'}
			<div class={overlayClass}></div>
		{/if}
	</div>
	<div class={contentClass}>
		{#if headingLevel === 'h2'}
			<h2 class={headingClass}>{post.title}</h2>
		{:else}
			<h3 class={headingClass}>{post.title}</h3>
		{/if}
		<p class="text-gray-600 text-sm mb-2">
			{#if post.date}
				{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
			{:else}
				Invalid Date
			{/if}
		</p>
		<p class="text-gray-700 mb-3 truncate">{post.excerpt}</p>
		<slot>
			<a href={`/posts/${post.slug}`} class={base.link}>Read More →</a>
		</slot>
	</div>
</article>
