// App.js
import React from "react";
import ThreeBubbles from "./ThreeBubbles";
import "./index.css";

function App() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-800 text-white">
      <ThreeBubbles />
      <div className="z-10 p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4">Check out my work below!</p>
      </div>
    </div>
  );
}

export default App;
