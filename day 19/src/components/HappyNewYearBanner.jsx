import React from 'react';

const HappyNewYearBanner = () => {
  return (
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h1 className="text-6xl md:text-8xl text-white font-bold text-glow">
        Happy New Year!
      </h1>
      <p className="text-xl md:text-3xl text-gray-300 mt-4">
        Wishing you a year full of joy and celebrations!
      </p>
    </div>
  );
};

export default HappyNewYearBanner;
