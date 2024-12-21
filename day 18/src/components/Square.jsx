import React from 'react';

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 text-3xl font-bold bg-gray-200 rounded-lg focus:outline-none hover:bg-gray-300"
    >
      {value}
    </button>
  );
}

export default Square;
