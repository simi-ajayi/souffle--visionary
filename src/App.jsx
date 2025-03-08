import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutArtist from './pages/AboutArtist';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ArtworkShowcase from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ArtworkShowcase />} />
        <Route path="/about" element={<AboutArtist />} />
      </Routes>
<Footer/>
    </Router>
  );
}

export default App;
