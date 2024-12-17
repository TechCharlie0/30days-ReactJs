import React, { useState } from "react";

const Letter = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-2xl text-center">
      {!isOpened ? (
        <div>
          <button
            onClick={() => setIsOpened(true)}
            className="bg-pink-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-500 transition duration-300"
          >
            💌 Open the Love Letter
          </button>
          <p className="mt-4 text-gray-600">Click to see a special message!</p>
        </div>
      ) : (
        <div className="text-gray-700 text-lg leading-relaxed font-serif">
          <p>Dear Love,</p>
          <p className="mt-4">
            You make my days brighter and my heart fuller. Every moment with you
            feels like a dream, and I cherish all the memories we’ve created
            together. I love you more than words can express.
          </p>
          <p className="mt-6 italic text-pink-500">Forever yours,</p>
          <p className="text-2xl font-bold mt-2">[Your Name]</p>
        </div>
      )}
    </div>
  );
};

export default Letter;
