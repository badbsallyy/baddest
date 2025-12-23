import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DealsFeed from './pages/DealsFeed';
import DealDetail from './pages/DealDetail';
import Blog from './pages/Blog';
import Transparency from './pages/Transparency';
import AppComingSoon from './pages/AppComingSoon';

// Wrapper for scrolling to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans text-white bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<DealsFeed />} />
            <Route path="/category/:category" element={<DealsFeed />} />
            <Route path="/deal/:id" element={<DealDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/app" element={<AppComingSoon />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;