import { useState } from 'react';
import AnimeCard from '../components/anime/AnimeCard';

const RandomAnime = () => {
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRandomAnime = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnime({
        id: Math.random(),
        title: 'Random Anime Title',
        type: 'TV',
        duration: '24m',
        thumbnail: 'https://via.placeholder.com/300x400',
        description: 'This is a random anime description that would typically come from an API.',
        likes: Math.floor(Math.random() * 1000),
        comments: Math.floor(Math.random() * 100)
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Random Anime</h1>
        <p className="text-gray-400">Discover your next favorite anime!</p>
      </div>

      <div className="flex justify-center mb-8">
        <button
          onClick={getRandomAnime}
          disabled={isLoading}
          className="bg-pink-600 px-8 py-3 rounded-md hover:bg-pink-700 text-white text-lg disabled:opacity-50"
        >
          {isLoading ? 'Finding anime...' : 'Get Random Anime'}
        </button>
      </div>

      {anime && (
        <div className="max-w-md mx-auto">
          <AnimeCard anime={anime} />
        </div>
      )}
    </div>
  );
};

export default RandomAnime; 