// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    const animeGrid = document.getElementById('animeGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    let currentPage = 1;

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

    // Initialize search
    const searchInput = document.querySelector('input[type="text"]');
    let searchTimeout;

    searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(async () => {
            const searchTerm = e.target.value.trim();
            if (searchTerm.length >= 3) {
                try {
                    const results = await animeData.searchAnime(searchTerm);
                    // Implement search results display
                    console.log(results);
                } catch (error) {
                    console.error('Search error:', error);
                }
            }
        }, 500);
    });
}); 