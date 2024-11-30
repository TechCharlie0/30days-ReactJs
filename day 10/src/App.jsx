import React, { useState } from "react";
import Form from "./components/Form";
import Letter from "./components/Letter";

function App() {
  const [letterData, setLetterData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-pink-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">Generate Letter</h1>
      <Form setLetterData={setLetterData} />
      <Letter letterData={letterData} />
    </div>
  );
}

export default App;
