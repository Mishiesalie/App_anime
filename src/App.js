import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="watch2gether" element={<div>Watch2gether Page</div>} />
          <Route path="random" element={<div>Random Anime Page</div>} />
          <Route path="community" element={<div>Community Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App; 