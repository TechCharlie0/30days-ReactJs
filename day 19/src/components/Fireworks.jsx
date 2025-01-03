import React, { useEffect } from 'react';
import './Fireworks.css';

const Fireworks = () => {
  useEffect(() => {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    const particles = [];

    const createParticle = (x, y, color) => {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x,
          y,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 4 - 2,
          speedY: Math.random() * 4 - 2,
          color,
          life: 0,
          maxLife: Math.random() * 50 + 50,
        });
      }
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;
        if (p.life >= p.maxLife) particles.splice(i, 1);
        else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      }
    };

    const drawFireworks = () => {
      createParticle(Math.random() * canvas.width, Math.random() * canvas.height, `hsl(${Math.random() * 360}, 100%, 70%)`);
      updateParticles();
    };

    const loop = () => {
      drawFireworks();
      requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(loop);
  }, []);

  return (
    <canvas
      id="fireworksCanvas"
      className="absolute inset-0"
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default Fireworks;
