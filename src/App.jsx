import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ArtworkShowcase from './components/home';
import AboutArtist from './pages/AboutArtist';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ArtworkShowcase />} />
        <Route path="/about" element={<AboutArtist />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
