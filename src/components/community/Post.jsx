import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useCommunity } from '../../contexts/CommunityContext';

const Post = ({ post }) => {
  const { user, setIsLoginModalOpen } = useAuth();
  const { likePost, addComment } = useCommunity();
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    likePost(post.id);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    if (comment.trim()) {
      addComment(post.id, comment);
      setComment('');
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      {/* User Info */}
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

      {/* Post Content */}
      <h2 className="text-white text-lg font-medium mb-2">{post.title}</h2>
      <p className="text-gray-300 mb-4">{post.content}</p>

      {/* Tags */}
      {post.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center space-x-4 text-gray-400 mb-4">
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 hover:text-pink-500 transition-colors"
        >
          <span>❤️ {post.likes}</span>
        </button>
        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center space-x-2 hover:text-pink-500 transition-colors"
        >
          <span>💬 {post.comments.length}</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 space-y-4">
          {/* Comment Form */}
          <form onSubmit={handleComment} className="flex gap-2">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={user ? "Add a comment..." : "Login to comment"}
              className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              disabled={!user}
            />
            <button
              type="submit"
              disabled={!user || !comment.trim()}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 disabled:opacity-50 transition-colors"
            >
              Post
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-3">
            {post.comments.map((comment) => (
              <div key={comment.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{comment.user}</span>
                  <span className="text-gray-400 text-sm">{comment.timestamp}</span>
                </div>
                <p className="text-gray-300">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post; 