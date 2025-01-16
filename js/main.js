// Add this to the top of main.js
const socialIcons = {
    discord: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>',
    telegram: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
    reddit: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547l-.8 3.747c1.824.07 3.48.632 4.674 1.488c.308-.309.73-.491 1.207-.491c.968 0 1.754.786 1.754 1.754c0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87c-3.874 0-7.004-2.176-7.004-4.87c0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754c.463 0 .898.196 1.207.49c1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197a.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248c.687 0 1.248-.561 1.248-1.249c0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25c0 .687.561 1.248 1.249 1.248c.688 0 1.249-.561 1.249-1.249c0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094a.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913c.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463a.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73c-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>',
    twitter: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>'
};

// Add these filter options at the top of main.js
const filterOptions = {
    format: ['TV', 'MOVIE', 'OVA', 'ONA', 'SPECIAL'],
    status: ['RELEASING', 'FINISHED', 'NOT_YET_RELEASED', 'CANCELLED'],
    season: ['WINTER', 'SPRING', 'SUMMER', 'FALL'],
    genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mecha', 'Mystery', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports', 'Supernatural', 'Thriller']
};

// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    const animeGrid = document.getElementById('animeGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const searchInput = document.querySelector('input[placeholder="Search anime..."]');
    const mainContent = document.querySelector('main');
    let currentPage = 1;
    let isSearching = false;
    let searchTimeout;

    // Create search results container with improved styling
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.className = 'fixed left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl z-50 mt-2 overflow-hidden';
    searchResultsContainer.style.display = 'none';
    document.body.appendChild(searchResultsContainer);

    // Enhanced search input handler
    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();

        if (query.length < 3) {
            searchResultsContainer.style.display = 'none';
            return;
        }

        // Show loading state
        searchResultsContainer.style.display = 'block';
        searchResultsContainer.innerHTML = `
            <div class="p-8 text-center">
                <div class="animate-spin rounded-full h-8 w-8 border-2 border-pink-500 border-t-transparent mx-auto"></div>
                <div class="text-gray-400 mt-4">Searching...</div>
            </div>
        `;

        searchTimeout = setTimeout(async () => {
            try {
                const query = `
                    query ($search: String) {
                        Page(page: 1, perPage: 8) {
                            media(search: $search, type: ANIME, sort: POPULARITY_DESC) {
                                id
                                title {
                                    romaji
                                    english
                                }
                                coverImage {
                                    medium
                                }
                                format
                                episodes
                                duration
                                status
                                averageScore
                                season
                                seasonYear
                            }
                        }
                    }
                `;

                const response = await fetch('https://graphql.anilist.co', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        query,
                        variables: { search: e.target.value }
                    })
                });

                const data = await response.json();
                const results = data.data.Page.media;

                if (results.length === 0) {
                    searchResultsContainer.innerHTML = `
                        <div class="p-8 text-center">
                            <div class="text-gray-400">No results found</div>
                        </div>
                    `;
                    return;
                }

                searchResultsContainer.innerHTML = `
                    <div class="divide-y divide-gray-700">
                        ${results.map(anime => `
                            <a href="/anime/${anime.id}" 
                               class="flex items-start space-x-4 p-4 hover:bg-gray-700/50 transition-colors group">
                                <div class="relative flex-shrink-0">
                                    <img src="${anime.coverImage.medium}" 
                                         alt="${anime.title.english || anime.title.romaji}"
                                         class="w-16 h-24 object-cover rounded shadow-lg group-hover:shadow-pink-500/20"
                                         loading="lazy"
                                    >
                                    ${anime.averageScore ? `
                                        <div class="absolute top-1 right-1 bg-gray-900/90 px-1.5 py-0.5 rounded text-xs">
                                            <span class="text-pink-500">★</span>
                                            <span class="text-gray-300">${(anime.averageScore / 10).toFixed(1)}</span>
                                        </div>
                                    ` : ''}
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-white font-medium truncate group-hover:text-pink-500">
                                        ${anime.title.english || anime.title.romaji}
                                    </h3>
                                    <div class="flex flex-wrap gap-2 mt-2">
                                        ${anime.format ? `
                                            <span class="bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-300">
                                                ${anime.format}
                                            </span>
                                        ` : ''}
                                        ${anime.episodes ? `
                                            <span class="bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-300">
                                                ${anime.episodes} eps
                                            </span>
                                        ` : ''}
                                        ${anime.season && anime.seasonYear ? `
                                            <span class="bg-gray-700 px-2 py-0.5 rounded text-xs text-gray-300">
                                                ${anime.season} ${anime.seasonYear}
                                            </span>
                                        ` : ''}
                                    </div>
                                    <div class="mt-2 text-xs text-gray-400">
                                        Status: ${anime.status?.toLowerCase().replace(/_/g, ' ')}
                                    </div>
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

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResultsContainer.contains(e.target) && 
            !searchInput.contains(e.target)) {
            searchResultsContainer.style.display = 'none';
        }
    });

    // Close search results with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchResultsContainer.style.display = 'none';
            searchInput.blur();
        }
    });

    // Focus search input with Ctrl + K
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    async function loadAnimeGrid(page = 1, filters = {}) {
        try {
            // Construct filter variables for the query
            const variables = {
                page,
                perPage: 12,
                format_in: filters.format,
                status_in: filters.status,
                season_in: filters.season,
                genre_in: filters.genre
            };

            // Update the query to include filters
            const query = `
                query ($page: Int, $perPage: Int, $format_in: [MediaFormat], $status_in: [MediaStatus], $season_in: [MediaSeason], $genre_in: [String]) {
                    Page(page: $page, perPage: $perPage) {
                        pageInfo {
                            total
                            currentPage
                            lastPage
                            hasNextPage
                        }
                        media(
                            type: ANIME,
                            format_in: $format_in,
                            status_in: $status_in,
                            season_in: $season_in,
                            genre_in: $genre_in,
                            sort: [TRENDING_DESC, POPULARITY_DESC]
                        ) {
                            id
                            title {
                                romaji
                                english
                                native
                            }
                            coverImage {
                                large
                                medium
                            }
                            format
                            episodes
                            duration
                            status
                            genres
                            averageScore
                            popularity
                            nextAiringEpisode {
                                episode
                                timeUntilAiring
                            }
                        }
                    }
                }
            `;

            const response = await fetch('https://graphql.anilist.co', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ query, variables })
            });

            const data = await response.json();
            const animes = data.data.Page.media;

            // Clear grid if it's a new search
            if (page === 1) {
                animeGrid.innerHTML = '';
            }

            animes.forEach(anime => {
                const card = createAnimeCard(anime);
                animeGrid.appendChild(card);
            });

            // Update load more button visibility
            if (!data.data.Page.pageInfo.hasNextPage) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }

        } catch (error) {
            console.error('Error loading anime grid:', error);
            animeGrid.innerHTML = `
                <div class="col-span-full text-center py-8">
                    <div class="text-red-500 mb-2">Failed to load anime</div>
                    <button onclick="loadAnimeGrid(1)" class="text-sm text-gray-400 hover:text-pink-500">
                        Try again
                    </button>
                </div>
            `;
        }
    }

    function createAnimeCard(anime) {
        const div = document.createElement('div');
        div.className = 'anime-card';
        
        const nextEp = anime.nextAiringEpisode 
            ? `EP ${anime.nextAiringEpisode.episode}` 
            : anime.episodes 
                ? `${anime.episodes} Episodes` 
                : anime.format;

        div.innerHTML = `
            <a href="/anime/${anime.id}" class="block">
                <div class="relative">
                    <img 
                        src="${anime.coverImage.large}" 
                        alt="${anime.title.english || anime.title.romaji}"
                        class="w-full aspect-video object-cover rounded-lg"
                        loading="lazy"
                    >
                    <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80">
                        <div class="flex items-center space-x-2 text-xs text-gray-300">
                            <span class="bg-gray-800/90 px-2 py-0.5 rounded">${anime.format || 'TV'}</span>
                            <span>•</span>
                            <span>${anime.duration || '24'}m</span>
                        </div>
                        <h3 class="text-sm text-white mt-1 line-clamp-2">
                            ${anime.title.english || anime.title.romaji}
                        </h3>
                    </div>
                </div>
            </a>
        `;

        return div;
    }

    // Create and append filter modal
    const filterModal = document.createElement('div');
    filterModal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm hidden z-50';
    filterModal.innerHTML = `
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-white">Filters</h3>
                <button class="text-gray-400 hover:text-white" id="closeFilterBtn">✕</button>
            </div>
            <div class="space-y-4">
                <!-- Format -->
                <div>
                    <label class="block text-white mb-2">Format</label>
                    <div class="flex flex-wrap gap-2">
                        ${filterOptions.format.map(format => `
                            <button data-filter="format" data-value="${format}"
                                class="px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-pink-500 hover:text-pink-500">
                                ${format}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Status -->
                <div>
                    <label class="block text-white mb-2">Status</label>
                    <div class="flex flex-wrap gap-2">
                        ${filterOptions.status.map(status => `
                            <button data-filter="status" data-value="${status}"
                                class="px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-pink-500 hover:text-pink-500">
                                ${status.replace(/_/g, ' ')}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Season -->
                <div>
                    <label class="block text-white mb-2">Season</label>
                    <div class="flex flex-wrap gap-2">
                        ${filterOptions.season.map(season => `
                            <button data-filter="season" data-value="${season}"
                                class="px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-pink-500 hover:text-pink-500">
                                ${season}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Genres -->
                <div>
                    <label class="block text-white mb-2">Genres</label>
                    <div class="flex flex-wrap gap-2 max-h-40 overflow-y-auto custom-scrollbar">
                        ${filterOptions.genres.map(genre => `
                            <button data-filter="genre" data-value="${genre}"
                                class="px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-pink-500 hover:text-pink-500">
                                ${genre}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="flex justify-between mt-6">
                <button id="clearFiltersBtn"
                    class="px-4 py-2 text-sm text-gray-400 hover:text-white">
                    Clear all
                </button>
                <button id="applyFiltersBtn"
                    class="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700">
                    Apply Filters
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(filterModal);

    // Active filters state
    let activeFilters = {
        format: [],
        status: [],
        season: [],
        genre: []
    };

    // Filter button click handlers
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterType = button.dataset.filter;
            const value = button.dataset.value;
            
            if (button.classList.contains('text-pink-500')) {
                // Remove filter
                button.classList.remove('text-pink-500', 'border-pink-500');
                activeFilters[filterType] = activeFilters[filterType].filter(v => v !== value);
            } else {
                // Add filter
                button.classList.add('text-pink-500', 'border-pink-500');
                if (!activeFilters[filterType].includes(value)) {
                    activeFilters[filterType].push(value);
                }
            }
        });
    });

    // Filter modal controls
    const filterBtn = document.querySelector('[data-action="filter"]');
    const closeFilterBtn = document.getElementById('closeFilterBtn');
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    const applyFiltersBtn = document.getElementById('applyFiltersBtn');

    filterBtn?.addEventListener('click', () => {
        filterModal.classList.remove('hidden');
    });

    closeFilterBtn?.addEventListener('click', () => {
        filterModal.classList.add('hidden');
    });

    clearFiltersBtn?.addEventListener('click', () => {
        activeFilters = {
            format: [],
            status: [],
            season: [],
            genre: []
        };
        filterButtons.forEach(button => {
            button.classList.remove('text-pink-500', 'border-pink-500');
        });
    });

    applyFiltersBtn?.addEventListener('click', async () => {
        filterModal.classList.add('hidden');
        await loadAnimeGrid(1, activeFilters);
    });

    // Update loadAnimeGrid function to handle filters
    async function loadAnimeGrid(page = 1, filters = {}) {
        try {
            // Construct filter variables for the query
            const variables = {
                page,
                perPage: 12,
                format_in: filters.format,
                status_in: filters.status,
                season_in: filters.season,
                genre_in: filters.genre
            };

            // Update the query to include filters
            const query = `
                query ($page: Int, $perPage: Int, $format_in: [MediaFormat], $status_in: [MediaStatus], $season_in: [MediaSeason], $genre_in: [String]) {
                    Page(page: $page, perPage: $perPage) {
                        pageInfo {
                            total
                            currentPage
                            lastPage
                            hasNextPage
                        }
                        media(
                            type: ANIME,
                            format_in: $format_in,
                            status_in: $status_in,
                            season_in: $season_in,
                            genre_in: $genre_in,
                            sort: [TRENDING_DESC, POPULARITY_DESC]
                        ) {
                            id
                            title {
                                romaji
                                english
                                native
                            }
                            coverImage {
                                large
                                medium
                            }
                            format
                            episodes
                            duration
                            status
                            genres
                            averageScore
                            popularity
                            nextAiringEpisode {
                                episode
                                timeUntilAiring
                            }
                        }
                    }
                }
            `;

            const response = await fetch('https://graphql.anilist.co', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ query, variables })
            });

            const data = await response.json();
            const animes = data.data.Page.media;

            // Clear grid if it's a new search
            if (page === 1) {
                animeGrid.innerHTML = '';
            }

            animes.forEach(anime => {
                const card = createAnimeCard(anime);
                animeGrid.appendChild(card);
            });

            // Update load more button visibility
            if (!data.data.Page.pageInfo.hasNextPage) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }

        } catch (error) {
            console.error('Error loading anime grid:', error);
            animeGrid.innerHTML = `
                <div class="col-span-full text-center py-8">
                    <div class="text-red-500 mb-2">Failed to load anime</div>
                    <button onclick="loadAnimeGrid(1)" class="text-sm text-gray-400 hover:text-pink-500">
                        Try again
                    </button>
                </div>
            `;
        }
    }

    // Update the load more button to include filters
    loadMoreBtn?.addEventListener('click', () => {
        currentPage++;
        loadAnimeGrid(currentPage, activeFilters);
    });

    // Initial load
    loadAnimeGrid(1);

    // Add Top 10 tab functionality
    const topAnimeTabs = document.querySelectorAll('[data-tab]');
    let currentTab = 'today';

    topAnimeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabValue = tab.dataset.tab;
            
            // Update active tab styling
            topAnimeTabs.forEach(t => {
                if (t.dataset.tab === tabValue) {
                    t.classList.remove('text-gray-400', 'hover:text-white');
                    t.classList.add('bg-pink-600', 'text-white');
                } else {
                    t.classList.remove('bg-pink-600', 'text-white');
                    t.classList.add('text-gray-400', 'hover:text-white');
                }
            });

            // Load new data
            currentTab = tabValue;
            loadTopAnime(tabValue);
        });
    });

    // Initial load of top anime
    loadTopAnime(currentTab);
});

async function loadTopAnime(tab = 'today') {
    const topAnimeList = document.getElementById('topAnimeList');
    if (!topAnimeList) return;

    // Show loading state first
    topAnimeList.innerHTML = Array(10).fill(0).map((_, index) => `
        <div class="animate-pulse flex items-center space-x-3 p-2">
            <div class="text-2xl font-bold text-pink-500/50 w-8">${index + 1}</div>
            <div class="w-12 h-16 bg-gray-700 rounded"></div>
            <div class="flex-1">
                <div class="h-4 bg-gray-700 rounded w-3/4"></div>
                <div class="mt-2 h-3 bg-gray-700 rounded w-1/2"></div>
            </div>
        </div>
    `).join('');

    try {
        // Determine sort method based on tab
        let sort;
        switch (tab) {
            case 'today':
                sort = 'TRENDING_DESC';
                break;
            case 'week':
                sort = 'POPULARITY_DESC';
                break;
            case 'month':
                sort = 'SCORE_DESC';
                break;
            default:
                sort = 'TRENDING_DESC';
        }

        // Fetch data using the animeData API
        const query = `
            query ($page: Int, $perPage: Int, $sort: [MediaSort]) {
                Page(page: 1, perPage: 10) {
                    media(type: ANIME, sort: $sort, status_not: NOT_YET_RELEASED) {
                        id
                        title {
                            romaji
                            english
                        }
                        coverImage {
                            medium
                        }
                        averageScore
                        popularity
                        trending
                        episodes
                        nextAiringEpisode {
                            episode
                            timeUntilAiring
                        }
                        format
                        status
                    }
                }
            }
        `;

        const response = await fetch('https://graphql.anilist.co', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: {
                    page: 1,
                    perPage: 10,
                    sort: [sort]
                }
            })
        });

        const data = await response.json();
        const animes = data.data.Page.media;

        // Render the anime list
        topAnimeList.innerHTML = animes.map((anime, index) => `
            <a href="/anime/${anime.id}" 
               class="flex items-center space-x-3 p-2 hover:bg-gray-700/50 rounded-lg group transition-colors">
                <span class="text-2xl font-bold text-pink-500 w-8">
                    ${index + 1}
                </span>
                <div class="relative flex-shrink-0">
                    <img
                        src="${anime.coverImage.medium}"
                        alt="${anime.title.english || anime.title.romaji}"
                        class="w-12 h-16 object-cover rounded shadow-lg group-hover:shadow-pink-500/20 transition-shadow"
                        loading="lazy"
                    >
                    ${anime.nextAiringEpisode ? `
                        <div class="absolute top-0 right-0 bg-pink-600 text-white text-xs px-1 rounded-bl">
                            EP ${anime.nextAiringEpisode.episode}
                        </div>
                    ` : ''}
                </div>
                <div class="flex-1 min-w-0">
                    <h3 class="text-white text-sm font-medium truncate group-hover:text-pink-500 transition-colors">
                        ${anime.title.english || anime.title.romaji}
                    </h3>
                    <div class="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                        ${anime.averageScore ? `
                            <span class="flex items-center">
                                <span class="text-pink-500">★</span>
                                ${(anime.averageScore / 10).toFixed(1)}
                            </span>
                        ` : ''}
                        ${anime.trending ? `
                            <span class="flex items-center">
                                <span class="text-green-500">↑</span>
                                ${anime.trending}
                            </span>
                        ` : ''}
                        ${anime.format ? `
                            <span>${anime.format}</span>
                        ` : ''}
                    </div>
                </div>
            </a>
        `).join('');

    } catch (error) {
        console.error('Error loading top anime:', error);
        topAnimeList.innerHTML = `
            <div class="text-center py-4">
                <div class="text-red-500 mb-2">Failed to load top anime</div>
                <button onclick="loadTopAnime('${tab}')" 
                        class="text-sm text-gray-400 hover:text-pink-500">
                    Try again
                </button>
            </div>
        `;
    }
} 