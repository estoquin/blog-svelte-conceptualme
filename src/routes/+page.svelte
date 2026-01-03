<script lang="ts">
    import HomeHero from "$lib/sections/HomeHero.svelte";
    import HomeAbout from "$lib/sections/HomeAbout.svelte";
    import HomeAction from "$lib/sections/HomeAction.svelte";
</script>
<svelte:head>
    <title>Home - ConceptualMe</title>
</svelte:head>
<div class="space-y-12">
    <HomeHero textLayout="center"/>
    <div class="px-8 flex flex-col gap-12 container mx-auto">
        <HomeAbout/>
    </div>
    <HomeAction/>
</div>