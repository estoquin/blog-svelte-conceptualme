<script lang="ts">
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();
    const { post, comments } = data;
    import Comment from '$lib/components/Comment.svelte';
</script>

<svelte:head>
    <title>{post.title} - ConceptualMe</title>
    <meta name="description" content={post.excerpt} />
</svelte:head>

<article class="max-w-4xl mx-auto py-10">
    <header class="mb-8">
        <a href="/posts" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Posts
        </a>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div class="flex items-center text-gray-600 mb-6">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <time datetime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
        </div>
        <img src={post.image} alt={post.title} class="w-full h-96 object-cover shadow-lg" />
    </header>
    <section class="prose prose-lg max-w-none">
        <div class="post-content">
            {@html post.content}
        </div>
    </section>

    <section class="mt-12 pt-8 border-t border-gray-200 w-full">
        <h2 class="text-2xl font-semibold mb-4">Comments</h2>
        <p class="text-gray-600">Comments are disabled on this static site. To enable comments consider using a third-party provider or serverless function.</p>
    </section>
    <footer class="mt-12 pt-8 border-t border-gray-200">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <a href="/posts" class="bg-green-600 text-white px-6 py-3 font-semibold hover:bg-green-800 transition" style="border-radius:0;">← View All Posts</a>
            <a href="/contact" class="bg-green-600 text-white px-6 py-3 font-semibold hover:bg-green-800 transition" style="border-radius:0;">Get in Touch →</a>
        </div>
    </footer>
</article>

<style>
    :global(.post-content h1) {
        font-size: 1.875rem;
        font-weight: 700;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #111827;
    }

    :global(.post-content h2) {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #111827;
    }

    :global(.post-content h3) {
        font-size: 1.25rem;
        font-weight: 600;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        color: #111827;
    }

    :global(.post-content p) {
        margin-bottom: 1rem;
        line-height: 1.75;
        color: #374151;
    }

    :global(.post-content a) {
        color: #2563eb;
        text-decoration: underline;
    }

    :global(.post-content strong) {
        font-weight: 600;
        color: #111827;
    }

    :global(.post-content em) {
        font-style: italic;
    }

    :global(.post-content ul) {
        list-style-type: disc;
        list-style-position: inside;
        margin-bottom: 1rem;
    }

    :global(.post-content ul li) {
        margin-bottom: 0.5rem;
    }

    :global(.post-content ol) {
        list-style-type: decimal;
        list-style-position: inside;
        margin-bottom: 1rem;
    }

    :global(.post-content ol li) {
        margin-bottom: 0.5rem;
    }

    :global(.post-content code) {
        background-color: #f3f4f6;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
        font-family: monospace;
    }

    :global(.post-content pre) {
        background-color: #111827;
        color: #f3f4f6;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin-bottom: 1rem;
    }

    :global(.post-content blockquote) {
        border-left: 4px solid #2563eb;
        padding-left: 1rem;
        font-style: italic;
        margin: 1rem 0;
        color: #6b7280;
    }
</style>