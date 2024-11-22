import React from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-700">
      <main className="flex-grow flex items-center justify-center">
        <LoginForm />
      </main>
    </div>
  );
};

export default App;
