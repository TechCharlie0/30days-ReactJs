import React, { useState, useEffect } from 'react';

const Firecrackers = () => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks((prev) => [...prev, createFirework()]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const createFirework = () => {
    const size = Math.random() * 50 + 50;
    const left = Math.random() * 100;
    const color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    return { size, left, color };
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {fireworks.map((fw, index) => (
        <div
          key={index}
          className="absolute animate-burst"
          style={{
            left: `${fw.left}%`,
            bottom: '0%',
            width: `${fw.size}px`,
            height: `${fw.size}px`,
            background: fw.color,
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default Firecrackers;
