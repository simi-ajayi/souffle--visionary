import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import AboutArtist from './pages/AboutArtist';

import Footer from './components/Footer';
import ArtworkShowcase from './components/Home';
import Navbar from './components/Navbar';
import CollectionPage from './pages/CollectionPage';
import Collab from './pages/Collaborations';
import AllCollectionPage from './pages/AllCollections';
import CollPage from './pages/CollPage';

// ScrollToTop function component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="pt-18"> {/* Added padding-top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<ArtworkShowcase />} />
          <Route path="/about" element={<AboutArtist />} />
          <Route path="/collection/:id" element={<CollectionPage />} />
          <Route path="/collaborations" element={<Collab />} />
          <Route path="/collections" element={<CollPage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;