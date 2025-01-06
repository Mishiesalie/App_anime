import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimePlayer from '../components/video/AnimePlayer';

const AnimeDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('episodes');
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // Simulated anime data
  const animeData = {
    title: 'Sample Anime Title',
    description: 'A detailed description of the anime series...',
    genres: ['Action', 'Adventure', 'Fantasy'],
    rating: 4.5,
    totalEpisodes: 24,
    status: 'Ongoing',
    episodes: [...Array(24)].map((_, index) => ({
      number: index + 1,
      title: `Episode ${index + 1}`,
      thumbnail: `https://via.placeholder.com/300x169`,
      description: `Description for episode ${index + 1}`,
      duration: '24:00',
      videoUrl: 'https://example.com/video.mp4' // Replace with actual video URL
    }))
  };

  useEffect(() => {
    // Set first episode as default
    if (animeData.episodes.length > 0 && !selectedEpisode) {
      setSelectedEpisode(animeData.episodes[0]);
    }
  }, []);

  return (
    <div className="py-8">
      {/* Anime Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{animeData.title}</h1>
        <div className="flex items-center space-x-4 text-gray-400">
          <span>Rating: {animeData.rating}⭐</span>
          <span>Episodes: {animeData.totalEpisodes}</span>
          <span>Status: {animeData.status}</span>
        </div>
      </div>

      {/* Video Player */}
      {selectedEpisode && (
        <div className="mb-8">
          <AnimePlayer
            videoUrl={selectedEpisode.videoUrl}
            episodeData={selectedEpisode}
          />
        </div>
      )}

      {/* Tabs */}
      <div className="border-b border-gray-700 mb-6">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('episodes')}
            className={`pb-4 ${
              activeTab === 'episodes'
                ? 'text-pink-500 border-b-2 border-pink-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Episodes
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-4 ${
              activeTab === 'details'
                ? 'text-pink-500 border-b-2 border-pink-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab('comments')}
            className={`pb-4 ${
              activeTab === 'comments'
                ? 'text-pink-500 border-b-2 border-pink-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Comments
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'episodes' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {animeData.episodes.map((episode) => (
            <button
              key={episode.number}
              onClick={() => setSelectedEpisode(episode)}
              className={`flex items-start space-x-4 p-4 rounded-lg ${
                selectedEpisode?.number === episode.number
                  ? 'bg-pink-600'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <img
                src={episode.thumbnail}
                alt={episode.title}
                className="w-32 rounded"
              />
              <div className="flex-1 text-left">
                <h3 className="text-white font-medium">
                  Episode {episode.number}
                </h3>
                <p className="text-gray-400 text-sm">{episode.duration}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {activeTab === 'details' && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">About</h2>
          <p className="text-gray-300 mb-6">{animeData.description}</p>
          
          <h3 className="text-lg font-bold text-white mb-2">Genres</h3>
          <div className="flex flex-wrap gap-2">
            {animeData.genres.map((genre) => (
              <span
                key={genre}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'comments' && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Comments</h2>
          {/* Add comments component here */}
        </div>
      )}
    </div>
  );
};

export default AnimeDetail; 