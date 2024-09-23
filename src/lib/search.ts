
export interface itunesItem {
    artistName: string,
    trackName: string,
    artworkUrl100: string,
    kind: string,
}

// Function to search the iTunes library

export async function searchItunes(searchQuery: string): Promise<Array<itunesItem>> {
    let searchResults: Array<itunesItem> = [];
    if (searchQuery.trim() === '') {
        searchResults = [];
        return searchResults;
    }

    try {
        const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&media=music&limit=10`);
        const data = await response.json();
        // console.log(data);
        // searchResults = data.results.map(item => ({
        //     artistName: item.artistName,
        //     trackName: item.trackName,
        //     artworkUrl: item.artworkUrl100
        // }));
        console.log(data.results);
        searchResults = data.results;
        return searchResults;
    } catch (error) {
        console.error('Error fetching search results:', error);
        return searchResults;
    } finally {
        return searchResults;
    }
}