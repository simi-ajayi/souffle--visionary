import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-4 z-50 fixed top-0 left-0 right-0 px-6 border-b border-gray-300 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-normal gap-4 md:justify-between">

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <h1 className="text-2xl flex items-center font-bold uppercase">
          <img className='w-10 mr-1 h-10 rounded-full object-cover object-center' src="https://firebasestorage.googleapis.com/v0/b/project-39ce3.appspot.com/o/IMG_9667.JPG?alt=media&token=b1561823-deb9-4115-b511-4c95d0205d5f" alt="logo" />
          Soufflé 
          <span className="animate-pulse text-gray-900 ml-2">
            Visionary
          </span>
        </h1>  

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to='/collections' className="hover:text-blue-600">Collections</Link>
          <Link to='collaborations' className="hover:text-blue-600">Collaborations</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pt-4 pb-6 bg-white border-t border-gray-300">
          <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to='/collections' className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Collections</Link>
          <Link to='collaborations' className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Collaborations</Link>
          <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;