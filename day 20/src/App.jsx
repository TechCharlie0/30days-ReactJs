import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-300 via-rose-400 to-red-500">
      <div className={`envelope ${isOpen ? "open" : ""}`} onClick={toggleLetter}>
        <div className="envelope-top"></div>
        <div className="letter">
          <p>
            Dearest Love, <br />
            My heart beats only for you. <br />
            Every moment with you is a treasure. <br />
            Here's to us, forever and always. ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
