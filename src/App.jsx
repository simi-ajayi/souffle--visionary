import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutArtist from './pages/AboutArtist';

import Footer from './components/Footer';
import ArtworkShowcase from './components/Home';
import Navbar from './components/Navbar';
import CollectionPage from './pages/CollectionPage';
import Collab from './pages/Collaborations';
import AllCollectionPage from './pages/AllCollections';
import CollPage from './pages/CollPage';

function App() {
  return (
    <Router>
  <Navbar />
      <Routes>
        <Route path="/" element={<ArtworkShowcase />} />
        <Route path="/about" element={<AboutArtist />} />
        <Route path="/collection/:id" element={<CollectionPage />} />
        <Route path="/collaborations" element={<Collab />} />
        <Route path="/collections" element={<CollPage />} />
      </Routes>
<Footer/>
    </Router>
  );
}

export default App;
