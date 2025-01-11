import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useCommunity } from '../../contexts/CommunityContext';

const CreatePost = () => {
  const { user, setIsLoginModalOpen } = useAuth();
  const { addPost } = useCommunity();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }

    const newPost = {
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    addPost(newPost);
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          disabled={!user}
        />
        <textarea
          placeholder={user ? "What's on your mind?" : "Login to create a post"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px]"
          disabled={!user}
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          disabled={!user}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!user || !title.trim() || !content.trim()}
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 disabled:opacity-50 transition-colors"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost; 