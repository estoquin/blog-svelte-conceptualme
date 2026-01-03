<script lang="ts">
    import { goto } from '$app/navigation';
    import EntityLayout from '$lib/components/admin/EntityLayout.svelte';
	export let data;
	const categories = data.categories as any[];

	let editingId: number | null = null;
	let editId: number | null = null;
	let editName = '';
	let editSlug = '';

	function startEditing(cat: any) {
		editingId = cat.id;
		editId = cat.id;
		editName = cat.name ?? '';
		editSlug = cat.slug ?? '';
	}

    async function submitDelete(id: number) {
        // Deletion is not available in static build. This is a placeholder for a dynamic endpoint.
        alert('Delete is not available in the static build.');
    }
</script>

<EntityLayout>
    <div class="flex gap-4 items-center mb-4 border-b border-gray-300 pb-2 justify-between">
        <h1 class="text-2xl font-bold">Categories</h1>
        <button class="hover:bg-green-500 py-0 px-10 bg-green-700 text-white" type="button" on:click={() => goto('/admin/categories/create')}>Crear</button>
    </div>
    <table class="w-full border-collapse border border-gray-300">
        <thead>
            <tr>
                <th class="text-left border px-3 py-1 bg-gray-50">ID</th>
                <th class="text-left border px-3 py-1 bg-gray-50">Name</th>
                <th class="text-left border px-3 py-1 bg-gray-50">Slug</th>
                <th class="text-left border px-3 py-1 bg-gray-50">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each categories as cat}
                <tr>
                    <td class="border px-3 py-1">{cat.id}</td>
                    <td class="border px-3 py-1">{cat.name}</td>
                    <td class="border px-3 py-1">{cat.slug}</td>
                    <td class="border flex">
                        <button class="py-0 w-full hover:bg-orange-500 bg-orange-300 text-white" type="button" on:click={() => goto(`/admin/categories/edit/${cat.id}`)}>Edit</button>
                        <button class="py-0 w-full hover:bg-red-500 bg-red-300 text-white" type="button" on:click={() => submitDelete(cat.id)}>Delete</button>
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</EntityLayout>