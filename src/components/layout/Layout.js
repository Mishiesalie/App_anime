import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TopAnimeList from '../anime/TopAnimeList';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content Area */}
          <main className="flex-1">
            <Outlet />
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 flex-shrink-0">
            <TopAnimeList />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Layout; 