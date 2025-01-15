import React from 'react';

const Features = () => {
  return (
    <div id="features" className="bg-gray-100 py-20 px-10 text-center">
      <h2 className="text-4xl font-semibold mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">HTML</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">CSS</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">JAVASCRIPT</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
