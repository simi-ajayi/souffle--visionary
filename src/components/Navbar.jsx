import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 border-b border-gray-300 bg-white shadow-md">
      <div className="max-w-7xl mx-auto  md:justify-between justify-normal flex items-center">

               {/* Mobile Menu Button */}
               <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      
                   {/* Logo */}
        <h1 className="text-2xl ml-4 font-bold uppercase">
          Soufflé 
          <span className="animate-pulse text-gray-900 ml-2">
            Visionary
          </span>
        </h1>  
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
        <a href="/" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Collections</a>
          <a href="#" className="hover:text-blue-600">Collaborations</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          {/* <a href="#" className="hover:text-blue-600">Contact</a> */}
        </nav>

 
  
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pt-4 pb-6 bg-white border-t border-gray-300">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Collections</a>
          <a href="#" className="hover:text-blue-600">Collaborations</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          {/* <a href="#" className="hover:text-blue-600">Contact</a> */}
        </div>
      )}

      
    </header>
  );
};

export default Navbar;