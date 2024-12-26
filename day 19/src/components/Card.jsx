// src/components/Card.js
import React from 'react';

const Card = ({ card, onClick, isFlipped, isMatched }) => {
  return (
    <div
      onClick={() => onClick(card)}
      className={`w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center shadow-lg cursor-pointer 
        ${isFlipped ? 'bg-white' : ''} ${isMatched ? 'bg-green-400' : ''} transition-all transform duration-300`}
    >
      {isFlipped || isMatched ? (
        <span className="text-3xl">{card.value}</span>
      ) : (
        <span className="text-2xl text-gray-600">?</span>
      )}
    </div>
  );
};

export default Card;
