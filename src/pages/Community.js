import { useState } from 'react';
import { CommunityProvider } from '../contexts/CommunityContext';
import { useCommunity } from '../contexts/CommunityContext';
import CreatePost from '../components/community/CreatePost';
import Post from '../components/community/Post';

const CommunityContent = () => {
  const { posts, isLoading } = useCommunity();
  const [activeTab, setActiveTab] = useState('discussions');

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Community</h1>
        <p className="text-gray-400">Join the conversation with fellow anime fans!</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <CreatePost />

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

          {/* Posts List */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-80">
          <div className="bg-gray-800 rounded-lg p-6 sticky top-6">
            <h2 className="text-xl font-bold text-white mb-4">Trending Topics</h2>
            <div className="space-y-2">
              {[
                '# One Piece 1086',
                '# Spring 2024 Anime',
                '# Jujutsu Kaisen',
                '# Attack on Titan',
                '# Anime Awards 2024'
              ].map((topic, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
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

const Community = () => {
  return (
    <CommunityProvider>
      <CommunityContent />
    </CommunityProvider>
  );
};

export default Community; 