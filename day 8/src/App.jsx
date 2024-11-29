import React, { useState } from "react";
import "./index.css"; 

function App() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    country: "Nepal",
    streetAdress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [notification, setNotification] = useState(""); 

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();

    // Validate the form fields
    const requiredFields = [
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.streetAdress,
      formData.city,
      formData.state,
      formData.postalCode,
    ];

    if (requiredFields.some((field) => field.trim() === "")) {
      setNotification("Please fill out all required fields.");
      return;
    }

    setNotification("Form saved successfully!");
    setFormData(initialFormData); // Reset the form data
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen p-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-3xl bg-gray-800 p-8 rounded-xl shadow-lg text-gray-100"
      >
        <h1 className="text-2xl font-bold text-cyan-400 text-center mb-6">
          User Information Form
        </h1>
        {notification && (
          <div
            className={`mb-4 p-3 rounded-lg ${
              notification.includes("success")
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {notification}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Isha"
              value={formData.firstName}
              onChange={changeHandler}
              className="w-full bg-gray-700 text-gray-100 p-2 rounded-md focus:ring focus:ring-cyan-400"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Kandel"
              value={formData.lastName}
              onChange={changeHandler}
              className="w-full bg-gray-700 text-gray-100 p-2 rounded-md focus:ring focus:ring-cyan-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="ishakandel@123"
              value={formData.email}
              onChange={changeHandler}
              className="w-full bg-gray-700 text-gray-100 p-2 rounded-md focus:ring focus:ring-cyan-400"
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={changeHandler}
              className="w-full bg-gray-700 text-gray-100 p-2 rounded-md focus:ring focus:ring-cyan-400"
            >
              <option value="Nepal">Nepal</option>
              <option value="United States">United States</option>
              <option value="Germany">Germany</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="streetAdress" className="block text-sm font-medium mb-1">
              Street Address
            </label>
            <input
              type="text"
              name="streetAdress"
              id="streetAdress"
              placeholder="Type"
              value={formData.streetAdress}
              onChange={changeHandler}
              className="w-full bg-gray-700 text-gray-100 p-2 rounded-md focus:ring focus:ring-cyan-400"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Type"
              value={formData.city}
              onChange={changeHandler}
              className="w-full bg-gray-700 text-gray-100 p-2 rounded-md focus:ring focus:ring-cyan-400"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium mb-1">
              State
            </label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Type"
              value={formData.state}
              onChange={changeHandler}
              className="w-full bg-gray-700 text-gray-100 p-2 rounded-md focus:ring focus:ring-cyan-400"
            />
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium mb-1">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              placeholder="Type"
              value={formData.postalCode}
              onChange={changeHandler}
              className="w-full bg-gray-700 text-gray-100 p-2 rounded-md focus:ring focus:ring-cyan-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg w-full transition-transform transform hover:scale-105"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
