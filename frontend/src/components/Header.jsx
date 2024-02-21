import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 md:py-8 font-serif">
      <nav className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
          <Link to="/home" className="text-lg md:text-xl mr-4">
            Home
          </Link>
          <button
            className="text-xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex items-center space-x-4 mb-4 md:mb-0`}
        >
          <Link to="/about" className="text-lg md:text-xl">
            About Me
          </Link>
          <Link to="/projects" className="text-lg md:text-xl">
            Projects
          </Link>
        </div>
        <div className="md:flex-grow"></div>
        <div className="mt-4 md:mt-0">
          <a
            href="/Elena_Barker_-_Software_Developer@.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-lg md:text-xl"
          >
            My Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;









