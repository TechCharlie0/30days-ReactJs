// src/components/Game.js
import React, { useState, useEffect } from 'react';
import Card from './Card';

const generateCards = () => {
  const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const shuffledCards = [...values, ...values] // Create pairs of cards
    .sort(() => Math.random() - 0.5) // Shuffle cards
    .map((value, index) => ({
      id: index,
      value: value,
      isFlipped: false,
      isMatched: false,
    }));
  return shuffledCards;
};

const Game = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;

      if (first.value === second.value) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.value === first.value ? { ...card, isMatched: true } : card
          )
        );
      }

      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) => ({
            ...card,
            isFlipped: card.isMatched || flippedCards.includes(card),
          }))
        );
        setFlippedCards([]);
        setMoves((prevMoves) => prevMoves + 1);
      }, 1000);
    }
  }, [flippedCards]);

  const handleCardClick = (card) => {
    if (card.isFlipped || flippedCards.length === 2 || card.isMatched) return;

    setCards((prevCards) =>
      prevCards.map((c) =>
        c.id === card.id ? { ...c, isFlipped: true } : c
      )
    );
    setFlippedCards((prevFlipped) => [...prevFlipped, card]);
  };

  const handleRestart = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMoves(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 py-10">
      <h1 className="text-3xl font-semibold mb-4">Card Matching Game</h1>
      <p className="text-xl mb-6">Moves: {moves}</p>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={handleCardClick}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
          />
        ))}
      </div>

      <button
        onClick={handleRestart}
        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-all"
      >
        Restart Game
      </button>
    </div>
  );
};

export default Game;
