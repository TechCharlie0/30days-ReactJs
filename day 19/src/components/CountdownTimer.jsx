import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilNewYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntilNewYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getTimeUntilNewYear = () => {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    return Math.max(0, Math.floor((newYear - now) / 1000));
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <div className="text-3xl text-white bg-black bg-opacity-50 p-4 rounded">
      {formatTime(timeLeft)}
    </div>
  );
};

export default CountdownTimer;
