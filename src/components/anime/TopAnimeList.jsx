import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopAnimeList = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch top anime based on the selected tab
  const fetchTopAnime = async (sort = 'SCORE_DESC') => {
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
          }
        }
      }
    `;

    try {
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

      const json = await response.json();
      return json.data.Page.media;
    } catch (error) {
      console.error('Error fetching top anime:', error);
      return [];
    }
  };

  // Effect to fetch data when tab changes
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let sort;
      switch (activeTab) {
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

      const data = await fetchTopAnime(sort);
      setAnimeList(data);
      setIsLoading(false);
    };

    fetchData();
  }, [activeTab]);

  return (
    <div className="bg-gray-800/95 backdrop-blur-md rounded-lg p-6 sticky top-6">
      <h2 className="text-xl font-bold text-white mb-4">Top 10</h2>
      
      {/* Tab Navigation */}
      <div className="flex space-x-2 mb-4">
        {[
          { id: 'today', label: 'Today' },
          { id: 'week', label: 'Week' },
          { id: 'month', label: 'Month' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              activeTab === tab.id 
                ? 'bg-pink-600 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="animate-pulse flex items-center space-x-3 p-2">
              <div className="text-2xl font-bold text-pink-500/50 w-8">
                {index + 1}
              </div>
              <div className="w-12 h-16 bg-gray-700 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="mt-2 h-3 bg-gray-700 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Anime List */
        <div className="space-y-3">
          {animeList.map((anime, index) => (
            <Link 
              key={anime.id}
              to={`/anime/${anime.id}`}
              className="flex items-center space-x-3 p-2 hover:bg-gray-700/50 rounded-lg group transition-colors"
            >
              <span className="text-2xl font-bold text-pink-500 w-8">
                {index + 1}
              </span>
              <div className="relative flex-shrink-0">
                <img
                  src={anime.coverImage.medium}
                  alt={anime.title.english || anime.title.romaji}
                  className="w-12 h-16 object-cover rounded shadow-lg group-hover:shadow-pink-500/20 transition-shadow"
                  loading="lazy"
                />
                {anime.nextAiringEpisode && (
                  <div className="absolute top-0 right-0 bg-pink-600 text-white text-xs px-1 rounded-bl">
                    EP {anime.nextAiringEpisode.episode}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-sm font-medium truncate group-hover:text-pink-500 transition-colors">
                  {anime.title.english || anime.title.romaji}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                  {anime.averageScore && (
                    <span className="flex items-center">
                      <span className="text-pink-500">★</span>
                      {(anime.averageScore / 10).toFixed(1)}
                    </span>
                  )}
                  {anime.trending && (
                    <span className="flex items-center">
                      <span className="text-green-500">↑</span>
                      {anime.trending}
                    </span>
                  )}
                  {anime.episodes && (
                    <span>{anime.episodes} eps</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopAnimeList; 