import React from 'react';

function Hero() {
  const backgroundImage =
    'https://wallpapercg.com/media/ts_orig/6865.webp';

  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg md:text-2xl mb-6">
          Crafting beautiful and functional web experiences.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-800 px-8 py-4 text-lg rounded-lg transition"
        >
          See My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
