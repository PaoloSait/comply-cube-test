<script lang="ts">
    import ItemCard from "$lib/components/ItemCard.svelte";
    import { searchItunes, type itunesItem } from "$lib/search";
    import "../app.css";

    // Local variables
    let searchQuery = "";
    let results: Array<itunesItem> = [];

    // State variables
    let isSearching = false;
    let showResults = false;

    async function search() {
        isSearching = true;
        showResults = false;
        results = await searchItunes(searchQuery);
        isSearching = false;
        showResults = true;
    }

    function handleKeyPress(event: any) {
        if (event.key === "Enter") {
            search();
        }
    }

    function backToSearch() {
        showResults = false;
        searchQuery = "";
    }
</script>

<main class="min-h-screen bg-gray-100 flex justify-center pt-20 pb-40">

    <!-- Show either the search bar or results -->
    {#if !showResults}
        <!-- Search bar -->
        <div class="w-full max-w-md px-4">
            <h1 class="text-3xl font-bold text-center mb-6">
                iTunes Music Search
            </h1>
            <div class="flex">
                <input
                    type="text"
                    bind:value={searchQuery}
                    on:keypress={handleKeyPress} 
                    placeholder="Search for music"
                    class="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
                />
                <button
                    on:click={search}
                    class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none "
                    disabled={isSearching}
                >
                    {isSearching ? "Searching..." : "Search"}
                </button>
            </div>
        </div>
    {:else}
        <!-- Results page with back button -->
        <div class="w-full max-w-3xl px-4">
            <button
                on:click={backToSearch}
                class="mb-6 text-blue-500 hover:text-blue-600 focus:outline-none"
            >
                &larr; Back to Search
            </button>
            <h2 class="text-2xl font-bold mb-4">Search Results</h2>
            {#if results.length > 0}
                <ul class="space-y-4">
                    {#each results as result}
                        <ItemCard item={result} />
                    {/each}
                </ul>
            {:else}
                <p class="text-center text-gray-600">No results found</p>
            {/if}
        </div>
    {/if}
</main>