// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    const animeGrid = document.getElementById('animeGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const searchInput = document.querySelector('input[type="text"]');
    const mainContent = document.querySelector('main');
    let currentPage = 1;
    let isSearching = false;

    // Create search results container
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.className = 'search-results hidden fixed top-16 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg z-50 max-h-[70vh] overflow-y-auto';
    document.body.appendChild(searchResultsContainer);

    function displaySearchResults(results) {
        if (!results.Page.media.length) {
            searchResultsContainer.innerHTML = `
                <div class="p-4 text-center text-gray-400">
                    No results found
                </div>
            `;
            return;
        }

        searchResultsContainer.innerHTML = `
            <div class="p-4 space-y-4">
                ${results.Page.media.map(anime => `
                    <a href="/anime/${anime.id}" 
                       class="flex items-start space-x-4 p-2 hover:bg-gray-700 rounded-lg transition-colors">
                        <img src="${anime.coverImage.medium}" 
                             alt="${anime.title.english || anime.title.romaji}"
                             class="w-16 h-24 object-cover rounded"
                        >
                        <div class="flex-1 min-w-0">
                            <h3 class="text-white font-medium truncate">
                                ${anime.title.english || anime.title.romaji}
                            </h3>
                            <div class="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                                <span class="bg-gray-700 px-2 py-0.5 rounded">
                                    ${anime.format || 'N/A'}
                                </span>
                                ${anime.episodes ? `<span>${anime.episodes} eps</span>` : ''}
                                ${anime.duration ? `<span>${anime.duration} min</span>` : ''}
                            </div>
                            ${anime.averageScore ? `
                                <div class="mt-1 text-sm">
                                    <span class="text-pink-500">★</span>
                                    <span class="text-gray-300">${anime.averageScore / 10}</span>
                                </div>
                            ` : ''}
                        </div>
                    </a>
                `).join('')}
            </div>
        `;
    }

    // Update search functionality
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const searchTerm = e.target.value.trim();

        if (searchTerm.length < 3) {
            searchResultsContainer.classList.add('hidden');
            return;
        }

        searchTimeout = setTimeout(async () => {
            try {
                const results = await animeData.searchAnime(searchTerm);
                searchResultsContainer.classList.remove('hidden');
                displaySearchResults(results);
            } catch (error) {
                console.error('Search error:', error);
                searchResultsContainer.innerHTML = `
                    <div class="p-4 text-center text-red-500">
                        Error loading search results
                    </div>
                `;
            }
        }, 500);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResultsContainer.contains(e.target) && 
            !searchInput.contains(e.target)) {
            searchResultsContainer.classList.add('hidden');
        }
    });

    async function loadAnimeGrid(page = 1) {
        try {
            const data = await animeData.fetchLatestAnime(page);
            const animes = data.Page.media;
            
            animes.forEach(anime => {
                const card = createAnimeCard(anime);
                animeGrid.appendChild(card);
            });

            if (!data.Page.pageInfo.hasNextPage) {
                loadMoreBtn.style.display = 'none';
            }
        } catch (error) {
            console.error('Error loading anime grid:', error);
        }
    }

    function createAnimeCard(anime) {
        const div = document.createElement('div');
        div.className = 'anime-card relative rounded-lg overflow-hidden';
        
        const nextEp = anime.nextAiringEpisode 
            ? `EP ${anime.nextAiringEpisode.episode}` 
            : anime.episodes 
                ? `${anime.episodes} Episodes` 
                : anime.format;

        div.innerHTML = `
            <a href="/anime/${anime.id}">
                <img 
                    src="${anime.coverImage.large}" 
                    alt="${anime.title.english || anime.title.romaji}"
                    class="w-full h-48 object-cover"
                    loading="lazy"
                >
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-3">
                    <h3 class="text-white font-medium">${anime.title.english || anime.title.romaji}</h3>
                    <div class="flex items-center space-x-2 text-sm text-gray-300">
                        <span class="bg-gray-800 px-2 py-0.5 rounded">${nextEp}</span>
                        ${anime.duration ? `<span>${anime.duration}m</span>` : ''}
                    </div>
                </div>
            </a>
        `;

        return div;
    }

    // Load initial content
    loadAnimeGrid();

    // Load more button handler
    loadMoreBtn?.addEventListener('click', () => {
        currentPage++;
        loadAnimeGrid(currentPage);
    });
}); 