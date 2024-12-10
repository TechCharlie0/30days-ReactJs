import React, { useState, useEffect } from "react";
import { getNepaliDate } from "../utils/dateUtils"; // Importing helper function
import festivals from "../data/festivals.json"; // Importing festival data

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedFestival, setSelectedFestival] = useState(null);

  // Change month by +1 or -1
  const changeMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  // Generate calendar days with simulated Nepali date
  const generateCalendar = () => {
    const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const nepaliDate = getNepaliDate(day);  // Get Nepali date for each day
      days.push({ date: day, nepaliDate });
    }

    return days;
  };

  // Find the festival for the selected Nepali date
  const findFestival = (nepaliDate) => {
    return festivals.find(festival => festival.date === nepaliDate);
  };

  // Handle click on date to show festival
  const handleDateClick = (nepaliDate) => {
    const festival = findFestival(nepaliDate);
    if (festival) {
      setSelectedFestival(festival);
    } else {
      setSelectedFestival(null); // Reset if no festival found
    }
  };

  const calendarDays = generateCalendar();

  return (
    <div className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => changeMonth(-1)} className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-lg">
            &lt;
          </button>
          <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
            {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
          </h2>
          <button onClick={() => changeMonth(1)} className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-lg">
            &gt;
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              onClick={() => handleDateClick(day.nepaliDate)}
              className="cursor-pointer rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all p-4 relative flex justify-center items-center"
            >
              <span className="text-xl text-center text-gray-800 dark:text-white">{day.date.getDate()}</span>
              <span className="absolute bottom-1 text-sm text-gray-600 dark:text-gray-400">{day.nepaliDate}</span>
            </div>
          ))}
        </div>

        {selectedFestival && (
          <div className="mt-6 p-4 bg-blue-100 rounded-lg dark:bg-blue-600">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">{selectedFestival.name}</h3>
            <p className="text-gray-700 dark:text-gray-100">{selectedFestival.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
