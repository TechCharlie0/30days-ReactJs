import React from "react";

const Controls = ({ isPlaying, onPlayPause, onNext, onPrev }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        onClick={onPrev}
        className="p-2 bg-purple-800 rounded-full hover:bg-purple-700"
      >
        ⏮️
      </button>
      <button
        onClick={onPlayPause}
        className="p-4 bg-purple-700 rounded-full hover:bg-purple-600"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>
      <button
        onClick={onNext}
        className="p-2 bg-purple-800 rounded-full hover:bg-purple-700"
      >
        ⏭️
      </button>
    </div>
  );
};

export default Controls;
