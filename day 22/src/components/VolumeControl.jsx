import React from 'react';

const VolumeControl = ({ volume, setVolume }) => {
  return (
    <div className="flex items-center space-x-2 mt-4">
      <label htmlFor="volume" className="text-gray-400">Volume</label>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        className="w-32"
      />
      <span>{volume}%</span>
    </div>
  );
};

export default VolumeControl;
