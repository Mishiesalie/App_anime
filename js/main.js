// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    const animeGrid = document.getElementById('animeGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const searchInput = document.querySelector('input[type="text"]');
    const mainContent = document.querySelector('main');
    let currentPage = 1;
    let isSearching = false;
    let searchTimeout;

    // Create search results container with improved styling
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.className = 'search-results hidden fixed top-16 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl z-50 max-h-[70vh] overflow-y-auto border border-gray-700';
    document.body.appendChild(searchResultsContainer);

    function displaySearchResults(results) {
        if (!results.Page.media.length) {
            searchResultsContainer.innerHTML = `
                <div class="p-8 text-center">
                    <div class="text-gray-400 mb-2">No results found</div>
                    <div class="text-sm text-gray-500">Try different keywords</div>
                </div>
            `;
            return;
        }

        searchResultsContainer.innerHTML = `
            <div class="divide-y divide-gray-700">
                ${results.Page.media.map(anime => `
                    <a href="/anime/${anime.id}" 
                       class="flex items-start space-x-4 p-4 hover:bg-gray-700/50 transition-colors group">
                        <div class="relative flex-shrink-0">
                            <img src="${anime.coverImage.medium}" 
                                 alt="${anime.title.english || anime.title.romaji}"
                                 class="w-16 h-24 object-cover rounded shadow-lg group-hover:shadow-pink-500/20"
                            >
                            ${anime.averageScore ? `
                                <div class="absolute top-1 right-1 bg-gray-900/90 px-1.5 py-0.5 rounded text-xs">
                                    <span class="text-pink-500">★</span>
                                    <span class="text-gray-300">${(anime.averageScore / 10).toFixed(1)}</span>
                                </div>
                            ` : ''}
                        </div>
                        <div class="flex-1 min-w-0 py-1">
                            <h3 class="text-white font-medium truncate group-hover:text-pink-500 transition-colors">
                                ${anime.title.english || anime.title.romaji}
                            </h3>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span class="bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-300">
                                    ${anime.format || 'N/A'}
                                </span>
                                ${anime.episodes ? `
                                    <span class="bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-300">
                                        ${anime.episodes} eps
                                    </span>
                                ` : ''}
                                ${anime.duration ? `
                                    <span class="bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-300">
                                        ${anime.duration} min
                                    </span>
                                ` : ''}
                            </div>
                            ${anime.status ? `
                                <div class="mt-2 text-xs text-gray-400">
                                    Status: ${anime.status.toLowerCase().replace(/_/g, ' ')}
                                </div>
                            ` : ''}
                        </div>
                        <div class="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                `).join('')}
            </div>
            <div class="p-4 bg-gray-800/80 border-t border-gray-700 text-center">
                <button class="text-sm text-gray-400 hover:text-pink-500">
                    View all results
                </button>
            </div>
        `;
    }

    // Update search functionality with loading state
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const searchTerm = e.target.value.trim();

        if (searchTerm.length < 3) {
            searchResultsContainer.classList.add('hidden');
            return;
        }

        // Show loading state
        searchResultsContainer.classList.remove('hidden');
        searchResultsContainer.innerHTML = `
            <div class="p-8 text-center">
                <div class="animate-spin rounded-full h-8 w-8 border-2 border-pink-500 border-t-transparent mx-auto"></div>
                <div class="text-gray-400 mt-4">Searching...</div>
            </div>
        `;

        searchTimeout = setTimeout(async () => {
            try {
                const results = await animeData.searchAnime(searchTerm);
                displaySearchResults(results);
            } catch (error) {
                console.error('Search error:', error);
                searchResultsContainer.innerHTML = `
                    <div class="p-8 text-center">
                        <div class="text-red-500 mb-2">Error loading results</div>
                        <div class="text-sm text-gray-500">Please try again later</div>
                    </div>
                `;
            }
        }, 500);
    });

    // Enhanced click outside handling
    document.addEventListener('click', (e) => {
        if (!searchResultsContainer.contains(e.target) && 
            !searchInput.contains(e.target)) {
            searchResultsContainer.classList.add('hidden');
        }
    });

    // Handle escape key to close search
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
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