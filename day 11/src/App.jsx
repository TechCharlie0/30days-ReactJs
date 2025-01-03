import React from 'react';
import FestivalSidebar from './components/FestivalSidebar';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-center text-2xl font-bold">Nepali Festival Calendar</h1>
      </header>
      <main className="p-4">
        <FestivalSidebar />
      </main>
    </div>
  );
}

export default App;
