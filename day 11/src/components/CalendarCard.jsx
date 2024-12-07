import React from "react";
import Calendar from "react-nepali-calendar";

const CalendarCard = ({ onDateChange, onDateHover }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Calendar
        onChange={onDateChange}
        onHover={onDateHover}
        className="rounded-md border border-gray-200 hover:shadow-lg"
      />
    </div>
  );
};

export default CalendarCard;
