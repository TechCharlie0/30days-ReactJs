import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="App min-h-screen flex justify-center items-center bg-gray-100">
      <div className="text-center p-5 border rounded-lg bg-white shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Tic-Tac-Toe</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
