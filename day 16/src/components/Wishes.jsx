import React, { useState } from "react";
import "../index.css";

const Wishes = () => {
  const [isOpened, setIsOpened] = useState(false);

  // Generate snowflake
  const generateSnowflakes = () => {
    const snowflakes = [];
    for (let i = 0; i < 40; i++) {
      snowflakes.push(
        <span className="snowflake" key={i}>
          ❄
        </span>
      );
    }
    return snowflakes;
  };

  return (
    <div className="wishes-container">
      <div className="snowflakes">{generateSnowflakes()}</div>
      {!isOpened ? (
        <div className="letter-closed">
          <h1 className="title">Merry Christmas 🎄</h1>
          <p className="subtitle">
            Click the button below to open your special Christmas wishes!
          </p>
          <button className="open-button" onClick={() => setIsOpened(true)}>
            Open the Love Letter 💌
          </button>
        </div>
      ) : (
        <div className="letter-opened">
          <div className="letter-content">
            <h2 className="text-4xl font-serif italic text-center text-pink-600">
              Dear Love,
            </h2>
            <p className="text-lg font-serif italic text-center text-gray-900 mt-4">
              🎅 Wishing you a magical and joyful Christmas filled with love,
              laughter, and warmth. You make every moment so special. Here's to
              more beautiful memories together this holiday season and beyond!
            </p>
            <p className="text-lg font-serif italic text-center text-gray-800 mt-4">
              With all my love and hugs, <br />
              ❤️ Your Secret Santa ❤️
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishes;
