import React from 'react';

const Balloons = () => {
  const balloons = Array.from({ length: 10 }, (_, index) => ({
    left: Math.random() * 100,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {balloons.map((balloon, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${balloon.left}%`,
            bottom: '-10%',
            width: '40px',
            height: '60px',
            background: balloon.color,
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default Balloons;
