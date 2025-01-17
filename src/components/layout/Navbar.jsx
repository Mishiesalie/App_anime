import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const genres = [
    { name: 'Action', color: 'text-yellow-400' },
    { name: 'Adventure', color: 'text-pink-400' },
    { name: 'Cars', color: 'text-red-400' },
    { name: 'Comedy', color: 'text-green-400' },
    { name: 'Dementia', color: 'text-purple-400' },
    { name: 'Demons', color: 'text-orange-400' },
    { name: 'Drama', color: 'text-blue-400' },
    { name: 'Ecchi', color: 'text-pink-400' },
    { name: 'Fantasy', color: 'text-indigo-400' },
    { name: 'Game', color: 'text-red-400' }
  ];

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-900/95 backdrop-blur-sm transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        {/* Close Button */}
        <div className="p-4 border-b border-gray-800">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center text-gray-400 hover:text-white"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Close menu
          </button>
        </div>

        {/* Community Button */}
        <div className="p-4">
          <Link 
            to="/community"
            className="flex items-center w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Community
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 space-y-1">
          <Link to="/" className="block py-2 text-white hover:text-pink-500">Home</Link>
          <Link to="/subbed" className="block py-2 text-white hover:text-pink-500">Subbed Anime</Link>
          <Link to="/dubbed" className="block py-2 text-white hover:text-pink-500">Dubbed Anime</Link>
          <Link to="/popular" className="block py-2 text-white hover:text-pink-500">Most Popular</Link>
          <Link to="/movies" className="block py-2 text-white hover:text-pink-500">Movies</Link>
          <Link to="/tv-series" className="block py-2 text-white hover:text-pink-500">TV Series</Link>
          <Link to="/ovas" className="block py-2 text-white hover:text-pink-500">OVAs</Link>
          <Link to="/onas" className="block py-2 text-white hover:text-pink-500">ONAs</Link>
          <Link to="/specials" className="block py-2 text-white hover:text-pink-500">Specials</Link>
          <Link to="/events" className="block py-2 text-white hover:text-pink-500">Events</Link>
          <Link to="/app" className="block py-2 text-white hover:text-pink-500">HiAnime App</Link>
        </nav>

        {/* Genre Section */}
        <div className="px-4 mt-6">
          <h3 className="text-lg font-semibold text-white mb-4">Genre</h3>
          <div className="grid grid-cols-2 gap-2">
            {genres.map((genre, index) => (
              <Link
                key={index}
                to={`/genre/${genre.name.toLowerCase()}`}
                className={`text-sm ${genre.color} hover:opacity-75`}
              >
                {genre.name}
              </Link>
            ))}
          </div>
          <button className="mt-4 text-sm text-gray-400 hover:text-white flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            More
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-400 hover:text-white"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

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
                <svg className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar; 