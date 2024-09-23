// Simple interface for the properties we need
export interface itunesItem {
    artistName: string,
    trackName: string,
    artworkUrl100: string,
    collectionName: string,
}

/// Function to search the iTunes library
export async function searchItunes(searchQuery: string): Promise<Array<itunesItem>> {
    let searchResults: Array<itunesItem> = [];

    if (searchQuery.trim() === '') {
        searchResults = [];
        return searchResults;
    }

    try {
        const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&media=music&limit=30`);
        searchResults = (await response.json()).results;
        return searchResults;
    } catch (error) {
        console.error('Error fetching search results:', error);
    } finally {
        return searchResults;
    }
}