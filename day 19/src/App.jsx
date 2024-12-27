import React from 'react';
import './App.css'; // Ensure this file includes Tailwind's @tailwind directives
import Balloons from './components/Balloons'; // Replace with correct path if necessary
import Firecrackers from './components/Firecrackers'; // Same here
import HappyNewYearBanner from './components/HappyNewYearBanner';

function App() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden">
      {/* Simple test */}
      <h1 className="text-white text-center pt-32">Happy New Year!</h1>

      <HappyNewYearBanner />
      <Firecrackers />
      <Balloons />
    </div>
  );
}

export default App;
