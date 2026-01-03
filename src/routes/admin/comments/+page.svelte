<script lang="ts">
	import EntityLayout from '$lib/components/admin/EntityLayout.svelte';
	export let data;
	const comments = data.comments as any[] ?? [];

	async function handleDelete(id: number) {
		// Deletion is not available in static build. In a dynamic setup this would POST to the server.
		alert('Delete is not available in the static build.');
	}
</script>

<EntityLayout>
	<div class="flex items-center justify-between mb-4 border-b border-gray-300 pb-2">
		<h1 class="text-2xl font-bold">Comments</h1>
	</div>
	<table class="w-full border-collapse border border-gray-300">
		<thead>
			<tr>
				<th class="text-left border px-3 py-1 bg-gray-50">ID</th>
				<th class="text-left border px-3 py-1 bg-gray-50">Post</th>
				<th class="text-left border px-3 py-1 bg-gray-50">Email</th>
				<th class="text-left border px-3 py-1 bg-gray-50">Comment</th>
				<th class="text-left border px-3 py-1 bg-gray-50">Date</th>
				<th class="text-left border px-3 py-1 bg-gray-50">Actions</th>
			</tr>
		</thead>
		<tbody>
			{#if comments.length === 0}
				<tr>
					<td class="border px-3 py-2" colspan="7">No comments.</td>
				</tr>
			{:else}
				{#each comments as c}
					<tr>
						<td class="border px-3 py-1">{c.id}</td>
						<td class="border px-3 py-1">
							{#if c.postSlug}
								<a class="text-blue-600 underline" href={`/posts/${c.postSlug}`} target="_blank" rel="noreferrer">{c.postTitle}</a>
							{:else}
								{c.postTitle}
							{/if}
						</td>
						<td class="border px-3 py-1">{c.content}</td>
						<td class="border px-3 py-1">{new Date(c.createdAt).toLocaleString()}</td>
						<td class="border px-3 py-1">
							<button class="mr-2 px-2 py-1 border rounded text-red-600" type="button" on:click={() => handleDelete(c.id)}>Delete</button>
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</EntityLayout>
