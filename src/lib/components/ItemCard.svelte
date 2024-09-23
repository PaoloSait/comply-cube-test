<!-- Component to display a song result -->

<script lang="ts">
    import type { itunesItem } from "$lib/search";
    export let item: itunesItem;
</script>

<li class="flex items-center p-4 bg-white rounded-lg">
    <img
        src={item.artworkUrl100}
        alt={`Artwork image for the track ${item.trackName}`}
        class="w-24 h-24 object-cover rounded-md mr-4"
    />
    <div>
        <strong class="text-lg font-semibold">{item.trackName}</strong>
        <p class="text-gray-600">
            {item.artistName} &#x2022; {item.collectionName}
        </p>
    </div>
</li>
