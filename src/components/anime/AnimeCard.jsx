import { useState } from 'react';

const AnimeCard = ({ anime }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={anime.thumbnail} 
        alt={anime.title}
        className="w-full h-48 object-cover"
      />
      
      {/* Overlay with info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 p-3">
        <h3 className="text-white font-medium">{anime.title}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <span className="bg-gray-800 px-2 py-0.5 rounded">{anime.type}</span>
          <span>{anime.duration}</span>
        </div>
      </div>

      {/* Hover details */}
      {isHovered && (
        <div className="absolute inset-0 bg-gray-900/90 p-4 transition-opacity">
          <p className="text-white text-sm">{anime.description}</p>
          <div className="absolute bottom-4 left-4 flex space-x-4">
            <span className="text-gray-300 text-sm flex items-center">
              <span>❤️ {anime.likes}</span>
            </span>
            <span className="text-gray-300 text-sm flex items-center">
              <span>💬 {anime.comments}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeCard; 