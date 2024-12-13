import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 px-10 text-center">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="#" className="hover:text-gray-400">Facebook</a>
        <a href="#" className="hover:text-gray-400">Twitter</a>
        <a href="#" className="hover:text-gray-400">Instagram</a>
      </div>
    </div>
  );
};

export default Footer;
