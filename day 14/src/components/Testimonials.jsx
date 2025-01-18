import React from 'react';

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-gray-800 text-white py-20 px-10 text-center">
      <h2 className="text-4xl font-semibold mb-12">What Our Users Say</h2>
      <div className="flex justify-center space-x-10">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-1/3 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-xl">"This service changed my life! Highly recommend it."</p>
          <h3 className="text-lg font-semibold mt-4">Robert Pattinson</h3>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-1/3 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <p className="text-xl">"Amazing experience. Great value for the price!"</p>
          <h3 className="text-lg font-semibold mt-4">Tom Cruise
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
