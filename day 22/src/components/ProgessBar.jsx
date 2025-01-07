import React from "react";

const ProgressBar = ({ progress, duration, onChange }) => {
  return (
    <div className="flex items-center mt-4">
      <input
        type="range"
        min="0"
        max={duration}
        value={progress}
        onChange={onChange}
        className="w-full accent-purple-600"
      />
    </div>
  );
};

export default ProgressBar;
