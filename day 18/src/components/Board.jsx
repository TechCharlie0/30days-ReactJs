import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));  // To store the current state of the board
  const [isXNext, setIsXNext] = useState(true);  // To track whose turn it is
  const [winner, setWinner] = useState(null);  // To store the winner

  // Handle square clicks
  const handleClick = (index) => {
    if (squares[index] || winner) return; // If the square is already clicked or game has ended

    const newSquares = squares.slice(); // Copy of squares
    newSquares[index] = isXNext ? 'X' : 'O'; // Mark 'X' or 'O' in the clicked square
    setSquares(newSquares);  // Update board state
    setIsXNext(!isXNext);  // Switch turns

    const winningCombination = calculateWinner(newSquares);  // Check for winner
    if (winningCombination) {
      setWinner(winningCombination);  // If winner found, update state
    }
  };

  // Reset the game
  const handleReset = () => {
    setSquares(Array(9).fill(null));  // Clear the board
    setIsXNext(true);  // Reset to player X's turn
    setWinner(null);  // Clear winner state
  };

  // Display status (Next player or winner)
  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (squares.every((square) => square !== null)) {
      return "It's a Draw!";
    } else {
      return `Next Player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div>
      <div className="mb-4 text-xl">{renderStatus()}</div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button
        onClick={handleReset}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Restart Game
      </button>
    </div>
  );
}

// Function to check the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // 'X' or 'O' will be returned as the winner
    }
  }
  return null;  // Return null if no winner
}

export default Board;
