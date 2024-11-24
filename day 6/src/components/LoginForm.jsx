import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      alert(`Logged in as: ${email}`);
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl rounded-xl p-8 w-full max-w-md transform hover:scale-105 transition duration-500">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-gray-50"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none bg-gray-50"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-bold shadow-[10px_10px_20px_rgba(131,90,220,3)] hover:opacity-90 transition transform hover:scale-105"
          >
            Login
          </button>

        </form>
        <p className="mt-6 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-purple-600 hover:text-purple-800 font-semibold"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
