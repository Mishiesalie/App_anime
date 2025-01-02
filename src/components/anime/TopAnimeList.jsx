import { useState } from 'react';
import { Link } from 'react-router-dom';

const TopAnimeList = () => {
  const [activeTab, setActiveTab] = useState('today');

  const tabs = [
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'Week' },
    { id: 'month', label: 'Month' }
  ];

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-xl font-bold text-white mb-4">Top 10</h2>
      
      {/* Tab Navigation */}
      <div className="flex space-x-2 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1 rounded-md text-sm ${
              activeTab === tab.id 
                ? 'bg-pink-600 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Anime List */}
      <div className="space-y-3">
        {[...Array(10)].map((_, index) => (
          <Link 
            key={index}
            to={`/anime/${index}`}
            className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg"
          >
            <span className="text-2xl font-bold text-pink-500 w-8">
              {index + 1}
            </span>
            <img
              src={`/placeholder-${index}.jpg`}
              alt=""
              className="w-12 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-white text-sm font-medium">Anime Title</h3>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <span>❤️ 1.2k</span>
                <span>👁️ 10k</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopAnimeList; 