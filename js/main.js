// Add this to the top of main.js
const socialIcons = {
    discord: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/></svg>',
    telegram: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
    reddit: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547l-.8 3.747c1.824.07 3.48.632 4.674 1.488c.308-.309.73-.491 1.207-.491c.968 0 1.754.786 1.754 1.754c0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87c-3.874 0-7.004-2.176-7.004-4.87c0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754c.463 0 .898.196 1.207.49c1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197a.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248c.687 0 1.248-.561 1.248-1.249c0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25c0 .687.561 1.248 1.249 1.248c.688 0 1.249-.561 1.249-1.249c0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094a.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913c.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463a.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73c-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>',
    twitter: '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>'
};

// Update the navbar HTML
document.querySelector('nav .max-w-7xl').innerHTML = `
    <div class="flex items-center justify-between h-16">
        <!-- Left Section -->
        <div class="flex items-center space-x-4">
            <button class="text-gray-400 hover:text-white">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <a href="/" class="flex-shrink-0">
                <h1 class="text-2xl font-bold">h!anime</h1>
            </a>
        </div>

        <!-- Center Section -->
        <div class="hidden md:flex items-center space-x-6">
            <a href="/watch2gether" class="hover:text-pink-500">Watch2gether</a>
            <a href="/random" class="hover:text-pink-500">Random</a>
            <a href="/anime-name" class="hover:text-pink-500">Anime Name</a>
            <a href="/community" class="hover:text-pink-500">Community</a>
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-3">
                ${Object.entries(socialIcons).map(([name, icon]) => `
                    <a href="#" class="text-gray-400 hover:text-white transition-colors" aria-label="${name}">
                        ${icon}
                    </a>
                `).join('')}
            </div>
            <div class="border-l border-gray-700 h-6 mx-2"></div>
            <button class="text-gray-400 hover:text-white">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            </button>
            <div class="flex items-center space-x-2">
                <button class="text-sm hover:text-pink-500">EN</button>
                <span class="text-gray-600">|</span>
                <button class="text-sm hover:text-pink-500">JP</button>
            </div>
        </div>
    </div>
`;

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

    // Load initial content
    loadAnimeGrid();

    // Load more button handler
    loadMoreBtn?.addEventListener('click', () => {
        currentPage++;
        loadAnimeGrid(currentPage);
    });
}); 