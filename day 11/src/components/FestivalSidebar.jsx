import React from 'react';
import festivals from '../data/festivals.json'; // Importing the JSON file

const FestivalSidebar = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-xl font-bold text-blue-600 mb-4">Upcoming Festivals</h2>
    <ul>
      {festivals.map((festival, index) => (
        <li key={index} className="mb-4 p-3 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">{festival.festival}</h3>
          <p className="text-gray-600">{festival.description}</p>
          <p className="text-sm text-gray-500">Date: {festival.date}</p>
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default FestivalSidebar;
