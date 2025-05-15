import React from "react";
import Card from "./components/card";

const data = [
  { title: "Card One", description: "This is the first card." },
  { title: "Card Two", description: "This is the second card." },
  { title: "Card Three", description: "This is the third card." },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Card Grid</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
