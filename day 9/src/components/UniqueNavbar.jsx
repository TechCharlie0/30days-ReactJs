import React, { useState } from 'react';

const UniqueNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-extrabold tracking-tight">Isha kandel</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </a>
            <a
              href="#features"
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </a>
            <a
              href="#pricing"
              className="hover:text-yellow-300 transition duration-300"
            >
              Work
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href="#get-started"
              className="bg-yellow-500 px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition duration-300"
            >
              Get Started
            </a>
          </div>

           {/* Hamburger Icon  */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className={`w-6 h-6 transform ${
                  isOpen ? 'rotate-90' : ''
                } transition duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-600">
          <a
            href="#home"
            className="block px-4 py-2 text-sm hover:bg-purple-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#features"
            className="block px-4 py-2 text-sm hover:bg-purple-500 transition duration-300"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block px-4 py-2 text-sm hover:bg-purple-500 transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-sm hover:bg-purple-500 transition duration-300"
          >
            Contact
          </a>
          <a
            href="#get-started"
            className="block px-4 py-2 mt-2 bg-yellow-500 text-center rounded-md text-sm font-bold hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default UniqueNavbar;
