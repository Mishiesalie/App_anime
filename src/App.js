import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Watch2gether from './pages/Watch2gether';
import RandomAnime from './pages/RandomAnime';
import LoginModal from './components/auth/LoginModal';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LoginModal />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="watch2gether" element={<Watch2gether />} />
            <Route path="random" element={<RandomAnime />} />
            <Route path="community" element={<div>Community Page</div>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App; 