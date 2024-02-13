import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-8 font-serif">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/home" className="mr-4 text-xl">
            Home
          </Link>
          <Link to="/about" className="mr-4 text-xl">
            About Me
          </Link>
          <Link to="/projects" className="mr-4 text-xl">
            Projects
          </Link>
        </div>
        <div>
          <a
           href="/Elena_Barker_-_Software_Developer.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-xl"
>
  My Resume
</a>

        </div>
      </nav>
    </header>
  );
};

export default Header;




