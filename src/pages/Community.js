import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Community = () => {
  const { user, setIsLoginModalOpen } = useAuth();
  const [activeTab, setActiveTab] = useState('discussions');
  const [newPost, setNewPost] = useState('');

  // Simulated data
  const discussions = [
    {
      id: 1,
      user: { username: 'AnimeUser1', avatar: 'https://via.placeholder.com/40' },
      title: 'Latest One Piece Episode Discussion',
      content: 'What did everyone think about the latest developments?',
      likes: 156,
      comments: 48,
      timestamp: '2h ago'
    },
    {
      id: 2,
      user: { username: 'MangaLover', avatar: 'https://via.placeholder.com/40' },
      title: 'Upcoming Spring Season Recommendations',
      content: 'Looking for recommendations for the upcoming season!',
      likes: 89,
      comments: 32,
      timestamp: '4h ago'
    }
  ];

  const trendingTopics = [
    '# One Piece 1086',
    '# Spring 2024 Anime',
    '# Jujutsu Kaisen',
    '# Attack on Titan',
    '# Anime Awards 2024'
  ];

  const handlePost = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    // Implement post creation logic
    setNewPost('');
  };

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Community</h1>
        <p className="text-gray-400">Join the conversation with fellow anime fans!</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1">
          {/* Create Post */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <textarea
              placeholder={user ? "What's on your mind?" : "Login to join the discussion"}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              disabled={!user}
              className="w-full bg-gray-700 text-white rounded-lg p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 disabled:opacity-50"
              rows="3"
            />
            <div className="flex justify-end">
              <button
                onClick={handlePost}
                disabled={!user || !newPost.trim()}
                className="bg-pink-600 px-6 py-2 rounded-md hover:bg-pink-700 text-white disabled:opacity-50"
              >
                Post
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'discussions'
                  ? 'bg-pink-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Discussions
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'news'
                  ? 'bg-pink-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              News
            </button>
          </div>

          {/* Discussions List */}
          <div className="space-y-4">
            {discussions.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={post.user.avatar}
                    alt={post.user.username}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-medium">{post.user.username}</h3>
                    <span className="text-gray-400 text-sm">{post.timestamp}</span>
                  </div>
                </div>
                <h2 className="text-white text-lg font-medium mb-2">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.content}</p>
                <div className="flex items-center space-x-4 text-gray-400">
                  <button className="flex items-center space-x-2 hover:text-pink-500">
                    <span>❤️ {post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-pink-500">
                    <span>💬 {post.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80">
          <div className="bg-gray-800 rounded-lg p-4">
            <h2 className="text-xl font-bold text-white mb-4">Trending Topics</h2>
            <div className="space-y-2">
              {trendingTopics.map((topic, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community; 