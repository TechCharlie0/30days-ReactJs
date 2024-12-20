import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-green-500 text-white p-4 shadow-md sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Isha Chettri</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
