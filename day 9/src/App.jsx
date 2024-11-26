// src/App.jsx
import React from 'react';
import UniqueNavbar from './components/UniqueNavbar';

function App() {
  return (
    <div>
      <UniqueNavbar />
      <main className="p-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mt-10">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-600 text-center mt-4">
          Explore our features and enjoy seamless interactions.
        </p>
      </main>
    </div>
  );
}

export default App;
