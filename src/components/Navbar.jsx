import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 border-b border-gray-300 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <h1 className="text-2xl font-bold uppercase">
          Soufflé 
          <span className="animate-pulse text-gray-900 ml-2">
            Visionary
          </span>
        </h1>  

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <a href="#" className="hover:text-blue-600">Collections</a>
          <a href="#" className="hover:text-blue-600">Collaborations</a>
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pt-4 pb-6 bg-white border-t border-gray-300">
          <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Collections</a>
          <a href="#" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Collaborations</a>
          <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
