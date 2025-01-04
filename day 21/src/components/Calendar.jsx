import React from "react";

const Calendar = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const todayDate = today.getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate Calendar for a Month
  const createCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null); // Empty slots
    }
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }
    return calendarDays;
  };

  const renderMonth = (month, year) => {
    const calendarDays = createCalendar(month, year);
    return (
      <div className="p-4 border rounded shadow-lg bg-white">
        <h2 className="text-lg font-bold text-center mb-4">
          {monthNames[month]} {year}
        </h2>
        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center font-semibold">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`h-12 w-12 flex items-center justify-center rounded-lg ${
                day
                  ? day === todayDate &&
                    month === currentMonth &&
                    year === currentYear
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-black"
                  : ""
              } ${day !== null ? "hover:bg-blue-300 cursor-pointer" : ""}`}
              style={day ? {} : { visibility: "hidden" }}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderYearCalendar = () => {
    return Array.from({ length: 12 }, (_, i) => renderMonth(i, currentYear));
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center bg-gray-50 p-6">
      {renderYearCalendar()}
    </div>
  );
};

export default Calendar;
