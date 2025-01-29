import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Watch2gether from './pages/Watch2gether';
import RandomAnime from './pages/RandomAnime';
import Community from './pages/Community';
import LoginModal from './components/auth/LoginModal';
import AnimeDetail from './pages/AnimeDetail';
import NotificationsPanel from './components/notifications/NotificationsPanel';
import { CommunityProvider } from './contexts/CommunityContext';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CommunityProvider>
          <LoginModal />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="watch2gether" element={<Watch2gether />} />
              <Route path="random" element={<RandomAnime />} />
              <Route path="community" element={<Community />} />
              <Route path="anime/:id" element={<AnimeDetail />} />
              <Route path="notifications" element={<NotificationsPanel />} />
            </Route>
          </Routes>
        </CommunityProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App; 