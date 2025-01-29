import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon, MenuIcon, BellIcon } from '@heroicons/react/outline';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(0);
  const { user, logout, setIsLoginModalOpen } = useAuth();
  const navigate = useNavigate();

  // Simulate fetching unread notifications count
  useEffect(() => {
    if (user) {
      // Mock API call to get unread notifications count
      setUnreadNotifications(2);
    } else {
      setUnreadNotifications(0);
    }
  }, [user]);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold">h!anime</h1>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search anime..."
                className="w-full bg-gray-800 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <SearchIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/watch2gether" className="hover:text-pink-500">Watch2gether</Link>
            <Link to="/random" className="hover:text-pink-500">Random</Link>
            <Link to="/community" className="hover:text-pink-500">Community</Link>
            
            {/* Notification Button */}
            <button 
              onClick={() => navigate('/notifications')}
              className="relative text-gray-400 hover:text-white transition-colors"
              aria-label="Notifications"
            >
              <BellIcon className="h-6 w-6" />
              {unreadNotifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {unreadNotifications}
                </span>
              )}
            </button>

            {user ? (
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-full"
                />
                <button 
                  onClick={logout}
                  className="text-gray-400 hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-pink-600 px-4 py-2 rounded-md hover:bg-pink-700"
              >
                Join now
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <Link to="/watch2gether" className="block py-2 hover:text-pink-500">Watch2gether</Link>
            <Link to="/random" className="block py-2 hover:text-pink-500">Random</Link>
            <Link to="/community" className="block py-2 hover:text-pink-500">Community</Link>
            <Link to="/notifications" className="block py-2 hover:text-pink-500">
              Notifications
              {unreadNotifications > 0 && (
                <span className="ml-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                  {unreadNotifications}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-4 py-2">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-8 h-8 rounded-full"
                />
                <button 
                  onClick={logout}
                  className="text-gray-400 hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="w-full bg-pink-600 px-4 py-2 rounded-md hover:bg-pink-700 mt-2"
              >
                Join now
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 