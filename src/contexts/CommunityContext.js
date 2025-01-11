import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CommunityContext = createContext(null);

export const CommunityProvider = ({ children }) => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated data fetching
  useEffect(() => {
    const fetchPosts = () => {
      // Simulate API call
      const mockPosts = [
        {
          id: 1,
          user: { username: 'AnimeUser1', avatar: 'https://via.placeholder.com/40' },
          title: 'Latest One Piece Episode Discussion',
          content: 'What did everyone think about the latest developments?',
          likes: 156,
          comments: [
            { id: 1, user: 'MangaFan', content: 'The animation was incredible!', timestamp: '1h ago' },
            { id: 2, user: 'OnePieceLover', content: 'Best episode this season!', timestamp: '30m ago' }
          ],
          tags: ['One Piece', 'Episode Discussion'],
          timestamp: '2h ago'
        },
        // Add more mock posts...
      ];

      setPosts(mockPosts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts(prev => [{
      id: Date.now(),
      user: {
        username: user.username,
        avatar: user.avatar
      },
      likes: 0,
      comments: [],
      timestamp: 'Just now',
      ...newPost
    }, ...prev]);
  };

  const likePost = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const addComment = (postId, comment) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? {
            ...post,
            comments: [...post.comments, {
              id: Date.now(),
              user: user.username,
              content: comment,
              timestamp: 'Just now'
            }]
          }
        : post
    ));
  };

  return (
    <CommunityContext.Provider value={{
      posts,
      trendingTopics,
      isLoading,
      addPost,
      likePost,
      addComment
    }}>
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunity = () => {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error('useCommunity must be used within a CommunityProvider');
  }
  return context;
}; 