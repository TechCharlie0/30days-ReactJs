import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-20 px-10 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Your Landing Page</h1>
      <p className="text-xl mb-6">Build something amazing with React and Tailwind CSS!</p>
      <button className="bg-white text-purple-600 py-2 px-6 rounded-lg shadow-md hover:bg-gray-100 transition">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
