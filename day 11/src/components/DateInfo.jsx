import React from "react";
import Calendar, { CalendarFunctions as calFns } from "react-nepali-calendar";

const DateInfo = ({ label, date }) => {
  const formatDate = (date) => {
    if (!date) return "N/A";
    const bsDate = calFns.convertADtoBS(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );
    return `${calFns.toDevanagariDigits(bsDate.bsYear)}/${
      calFns.toDevanagariDigits(bsDate.bsMonth)
    }/${calFns.toDevanagariDigits(bsDate.bsDate)}`;
  };

  return (
    <div className="mt-2">
      <p className="text-gray-600">
        <span className="font-medium text-gray-800">{label}: </span>
        {formatDate(date)}
      </p>
    </div>
  );
};

export default DateInfo;
