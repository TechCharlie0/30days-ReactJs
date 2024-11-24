import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-400 to-pink-400">
      <main className="flex-grow flex items-center justify-center">
        <LoginForm />
      </main>
    </div>
  );
};

export default App;
