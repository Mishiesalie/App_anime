import { useState } from 'react';
import AnimeCard from './AnimeCard';

const AnimeGrid = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Placeholder data - replace with actual API call
  const animeList = [...Array(12)].map((_, index) => ({
    id: index,
    title: `Anime Title ${index + 1}`,
    type: index % 2 === 0 ? 'TV' : 'ONA',
    duration: '24m',
    thumbnail: `/placeholder-${index}.jpg`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    likes: Math.floor(Math.random() * 1000),
    comments: Math.floor(Math.random() * 100)
  }));

  const loadMore = () => {
    setIsLoading(true);
    // Implement load more logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Latest Episodes</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-gray-700 text-white rounded-md hover:bg-gray-600">
            Filter
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animeList.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 text-center">
        <button
          onClick={loadMore}
          disabled={isLoading}
          className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 disabled:opacity-50"
        >
          {isLoading ? 'Loading...' : 'Show more'}
        </button>
      </div>
    </div>
  );
};

export default AnimeGrid; 