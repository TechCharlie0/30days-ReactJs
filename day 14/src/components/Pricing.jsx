import React from 'react';

const Pricing = () => {
  return (
    <div id="pricing" className="bg-white py-20 px-10 text-center">
      <h2 className="text-4xl font-semibold mb-12">Pricing Plans</h2>
      <div className="flex justify-center space-x-10">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-1/3 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
          <p className="text-lg mb-4">$19/month</p>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-lg">Choose Plan</button>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-1/3 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
          <p className="text-lg mb-4">$49/month</p>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-lg">Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
