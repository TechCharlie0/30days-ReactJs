import React from 'react';

const Balloons = () => {
  const balloons = Array.from({ length: 20 }, () => ({
    left: Math.random() * 100,
    delay: Math.random() * 5,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="absolute bottom-0 animate-float"
          style={{
            left: `${balloon.left}%`,
            backgroundColor: balloon.color,
            width: '50px',
            height: '70px',
            borderRadius: '50% 50% 0 0',
            animationDelay: `${balloon.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Balloons;
