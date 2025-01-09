import React from 'react';

const Control = ({ play, pause, next, prev }) => {
  return (
    <div className="flex items-center justify-center space-x-6">
      <button onClick={prev} className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
        Prev
      </button>
      <button onClick={play} className="text-white bg-blue-500 p-4 rounded-full hover:bg-blue-400">
        Play
      </button>
      <button onClick={pause} className="text-white bg-red-500 p-4 rounded-full hover:bg-red-400">
        Pause
      </button>
      <button onClick={next} className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
        Next
      </button>
    </div>
  );
};

export default Control;
