<script lang="ts">
    import { searchItunes, type itunesItem } from "$lib/search";
    let searchQuery = "";
    let results: Array<itunesItem> = [];

    async function search() {
        results = await searchItunes(searchQuery);
        console.log(results[0].artworkUrl100);
    }
</script>

<!-- nasreddine.daifallah@complycube.com -->

<div>
    <div class="flex flex-col">
        <input
            type="text"
            bind:value={searchQuery}
            placeholder="Enter your search query"
        />
        <button on:click={search}>Search Button</button>
    </div>

    {#if results.length > 0}
        {#each results as result}
            <li>
                <img src={result.artworkUrl100} alt={result.trackName} />
                <div>
                    <strong>{result.trackName}</strong>
                    <p>{result.artistName}</p>
                </div>
            </li>
        {/each}
    {/if}
</div>
