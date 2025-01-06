import React, { useState } from "react";

const Form = ({ setLetterData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevents the default form submission behavior, i.e., page reload.
    setLetterData(formData);  // Updates the parent component with the new form data.
  };
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 shadow-md rounded-lg space-y-4">
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md"
        placeholder="Your First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md"
        placeholder="Your Last Name"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md"
        placeholder="Write your message here"
        required
      />
      <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600">
        Generate Letter
      </button>
    </form>
  );
};

export default Form;
