import React from "react";

const Calendar = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const todayDate = today.getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Example holidays (Add as needed)
  const holidays = [
    { date: 1, month: 0 }, // New Year's Day
    { date: 25, month: 11 }, // Christmas Day
  ];

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
      <div className="calendar-month">
        <h2 className="month-title">{monthNames[month]} {year}</h2>
        <div className="days-of-week">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="day-name">{day}</div>
          ))}
        </div>
        <div className="days-grid">
          {calendarDays.map((day, index) => {
            const isToday =
              day === todayDate && month === currentMonth && year === currentYear;
            const isSaturday = day !== null && new Date(year, month, day).getDay() === 6;
            const isHoliday = holidays.some(
              (holiday) => holiday.date === day && holiday.month === month
            );

            return (
              <div
                key={index}
                className={`day-box ${
                  day
                    ? isToday
                      ? "today"
                      : isHoliday || isSaturday
                      ? "holiday"
                      : "default"
                    : "empty"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderYearCalendar = () => {
    return Array.from({ length: 12 }, (_, i) => renderMonth(i, currentYear));
  };

  return (
    <div className="calendar-container">
      <h1 className="calendar-header">Yearly Calendar - {currentYear}</h1>
      {renderYearCalendar()}
    </div>
  );
};

export default Calendar;
