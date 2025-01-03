import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    // Fireworks logic
    const container = document.querySelector('.effects-container');
    const createFireworks = () => {
      for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(firework);

        // Remove after animation
        setTimeout(() => {
          firework.remove();
        }, 3000);
      }
    };

    const fireworksInterval = setInterval(createFireworks, 2000);

    // Cleanup on unmount
    return () => clearInterval(fireworksInterval);
  }, []);

  useEffect(() => {
    // Balloons logic
    const container = document.querySelector('.effects-container');
    const createBalloons = () => {
      for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(balloon);

        // Remove after animation
        setTimeout(() => {
          balloon.remove();
        }, 10000);
      }
    };

    const balloonsInterval = setInterval(createBalloons, 3000);

    // Cleanup on unmount
    return () => clearInterval(balloonsInterval);
  }, []);

  return (
    <div className="relative h-screen bg-black flex items-center justify-center">
      <div className="effects-container relative w-full h-full flex items-center justify-center">
        {/* Happy New Year Message */}
        <div className="absolute z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fadeIn">
            🎉 Happy New Year 2024! 🎉
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 animate-slideUp">
            Wishing you joy, happiness, and success in the coming year!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
