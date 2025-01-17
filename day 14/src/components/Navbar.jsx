import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="bg-transparent text-white p-4 fixed top-0 w-full z-10 shadow-lg transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold tracking-wider cursor-pointer">
          <Link to="hero" smooth={true} className="hover:text-purple-400">Isha Chettri</Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="hero" smooth={true} offset={-70} className="hover:text-purple-500 cursor-pointer transition duration-300">Home</Link>
          <Link to="features" smooth={true} offset={-70} className="hover:text-purple-500 cursor-pointer transition duration-300">Features</Link>
          <Link to="testimonials" smooth={true} offset={-70} className="hover:text-purple-500 cursor-pointer transition duration-300">Testimonials</Link>
          <Link to="pricing" smooth={true} offset={-70} className="hover:text-purple-500 cursor-pointer transition duration-300">Pricing</Link>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition duration-300">Sign Up</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobile(!isMobile)} className="text-3xl text-white">
            {isMobile ? 'X' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className="md:hidden bg-gray-800 text-white space-y-6 py-6 px-10 absolute top-0 left-0 right-0">
          <Link to="hero" smooth={true} offset={-70} className="block text-xl py-2 hover:text-purple-500">Home</Link>
          <Link to="features" smooth={true} offset={-70} className="block text-xl py-2 hover:text-purple-500">Features</Link>
          <Link to="testimonials" smooth={true} offset={-70} className="block text-xl py-2 hover:text-purple-500">Testimonials</Link>
          <Link to="pricing" smooth={true} offset={-70} className="block text-xl py-2 hover:text-purple-500">Pricing</Link>
          <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-300">Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
